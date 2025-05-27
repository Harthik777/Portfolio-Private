'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from 'next-themes';

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Adjust spring config based on device performance capabilities
  const springConfig = { 
    damping: isLowPerformance ? 40 : 25, 
    stiffness: isLowPerformance ? 400 : 700, 
    restDelta: isLowPerformance ? 0.01 : 0.001 
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const { resolvedTheme } = useTheme();
  const trailIdRef = useRef(0);
  const throttleRef = useRef<number>(0);
  const fps = isLowPerformance ? 30 : 60; // Lower FPS for low-performance devices
  const throttleMs = 1000 / fps;  // Detect mobile devices and performance capabilities
  useEffect(() => {
    const checkDeviceCapabilities = () => {
      // Only run on client side
      if (typeof window === 'undefined') return;
      
      // Check if mobile
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || window.innerWidth < 768 
        || ('ontouchstart' in window);
      setIsMobile(isMobileDevice);
        // Check for low performance device - be more aggressive
      const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 6;
      const isOlderBrowser = !window.requestAnimationFrame || !window.IntersectionObserver;
      const isLowRAM = 'deviceMemory' in navigator && (navigator as any).deviceMemory < 8;
      const isSmallScreen = window.innerWidth < 1200;
      
      setIsLowPerformance(isLowEnd || isOlderBrowser || isLowRAM || isSmallScreen);
    };

    checkDeviceCapabilities();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkDeviceCapabilities);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkDeviceCapabilities);
      }
    };
  }, []);

  // Early return for mobile or low performance devices - don't render cursor at all
  if (isMobile || isLowPerformance) {
    return null;
  }

  useEffect(() => {
    // Don't render custom cursor on mobile devices
    if (isMobile) return;
    
    const updateCursor = (e: MouseEvent) => {
      // Throttle cursor updates for performance
      const now = Date.now();
      if (throttleRef.current && now - throttleRef.current < throttleMs) return;
      throttleRef.current = now;
      
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Add to trail with reduced frequency on low performance devices
      trailIdRef.current += 1;
      // Keep fewer trail points on low performance devices
      const trailLength = isLowPerformance ? 5 : 10;
      setTrail(prev => [
        ...prev.slice(-trailLength), // Keep only last few points
        { x: e.clientX, y: e.clientY, id: trailIdRef.current }
      ]);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select') !== null;
      setIsPointer(isInteractive);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  // Clean up old trail points
  useEffect(() => {
    const cleanup = setInterval(() => {
      setTrail(prev => prev.slice(-8));
    }, 50);

    return () => clearInterval(cleanup);
  }, []);

  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: resolvedTheme === 'dark' 
        ? 'rgba(139, 92, 246, 0.8)' 
        : 'rgba(79, 70, 229, 0.8)',
      border: '2px solid rgba(255, 255, 255, 0.8)',
    },
    pointer: {
      scale: 1.5,
      backgroundColor: resolvedTheme === 'dark' 
        ? 'rgba(236, 72, 153, 0.9)' 
        : 'rgba(219, 39, 119, 0.9)',
      border: '2px solid rgba(255, 255, 255, 1)',
    },
    clicked: {
      scale: 0.8,
      backgroundColor: resolvedTheme === 'dark' 
        ? 'rgba(34, 197, 94, 0.9)' 
        : 'rgba(22, 163, 74, 0.9)',
    }
  };
  if (typeof window === 'undefined' || isMobile) return null;

  return (
    <>
      <style jsx global>{`
        @media (min-width: 768px) {
          body {
            cursor: none !important;
          }
          a, button, [role="button"], input, textarea, select {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={cursorVariants}
        animate={
          isHidden ? 'hidden' :
          clicked ? 'clicked' :
          isPointer ? 'pointer' : 'default'
        }
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Cursor Trail - Optimized to render conditionally based on performance */}
      {!isLowPerformance && trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed w-2 h-2 rounded-full pointer-events-none z-[9998]"
          style={{
            left: point.x,
            top: point.y,
            translateX: '-50%',
            translateY: '-50%',
            backgroundColor: resolvedTheme === 'dark' 
              ? `rgba(139, 92, 246, ${0.6 - index * 0.05})` 
              : `rgba(79, 70, 229, ${0.4 - index * 0.03})`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: 1 - index * 0.1, 
            opacity: 1 - index * 0.1 
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      ))}

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border pointer-events-none z-[9997]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: resolvedTheme === 'dark' 
            ? 'rgba(139, 92, 246, 0.3)' 
            : 'rgba(79, 70, 229, 0.3)',
          borderWidth: '1px',
        }}
        animate={{
          scale: isPointer ? 1.5 : clicked ? 0.8 : 1,
          opacity: isHidden ? 0 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-[9996] blur-xl"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: resolvedTheme === 'dark' 
            ? 'rgba(139, 92, 246, 0.1)' 
            : 'rgba(79, 70, 229, 0.1)',
        }}
        animate={{
          scale: isPointer ? 2 : clicked ? 0.5 : 1,
          opacity: isHidden ? 0 : 0.4,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 40 }}
      />
    </>
  );
}
