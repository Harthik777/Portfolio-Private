'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

// Import performance settings
import { performanceConfig } from '@/lib/performance';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

export function FuturisticLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const { resolvedTheme } = useTheme();

  // Detect device capabilities and preferences
  useEffect(() => {
    const checkDeviceCapabilities = () => {
      // Only run on client side
      if (typeof window === 'undefined') return;
      
      // Check for mobile/tablet
      const mobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const tablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        // Detect low-end devices
      const lowEndDevice = !!(
        // Check if device has limited memory
        ('deviceMemory' in navigator && (navigator as any).deviceMemory < 4) ||
        // Check for older devices or browsers without some modern features
        !('requestAnimationFrame' in window) ||
        !('performance' in window) ||
        // Check CPU cores if available
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
      );
      
      // Check for reduced motion preference
      const prefersReducedMotion = 
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      setIsMobile(mobile);
      setIsTablet(tablet);
      setIsLowEndDevice(lowEndDevice);
      setHasReducedMotion(prefersReducedMotion);
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
  useEffect(() => {
    // Much faster loading for better performance
    const baseTime = isMobile ? 1000 : 1500; // Significantly reduced
    // Even faster for low-end devices
    const duration = isLowEndDevice ? baseTime * 0.4 : baseTime * 0.6;
    // Fewer steps for smoother performance
    const steps = isMobile 
      ? isLowEndDevice ? 15 : 20 
      : 25;
    const increment = 100 / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setProgress(Math.min(currentStep * increment, 100));
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 200);
      }
    }, duration / steps);
    
    return () => clearInterval(interval);
  }, [isMobile, isLowEndDevice]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    // Responsive canvas sizing with optimizations for different devices
    // Use lower device pixel ratio for low-end devices to improve performance
    const dpr = isLowEndDevice ? 1 : (isMobile ? Math.min(window.devicePixelRatio, 1.5) : Math.min(window.devicePixelRatio, 2));
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(dpr, dpr);

    // Responsive neural network complexity - reduced for performance
    const nodes: Node[] = [];
    // Use performance config values with fallbacks
    const nodeCount = isLowEndDevice 
      ? Math.floor(performanceConfig.particleCount.mobile * 0.6) || 15 
      : isMobile 
        ? performanceConfig.particleCount.mobile || 25 
        : isTablet 
          ? performanceConfig.particleCount.tablet || 40 
          : performanceConfig.particleCount.desktop || 50;
    
    // Lower animation frame rate for mobile and low-end devices
    const targetFPS = isLowEndDevice 
      ? 20 
      : isMobile 
        ? performanceConfig.frameRateLimit.mobile || 30 
        : isTablet 
          ? performanceConfig.frameRateLimit.tablet || 45 
          : performanceConfig.frameRateLimit.desktop || 60;
    
    const frameInterval = 1000 / targetFPS;
    let lastFrameTime = 0;
    
    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5), // Slower movement on mobile
        vy: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.5),
        connections: []
      });
    }

    // Create connections - fewer connections for better performance
    const maxConnections = isLowEndDevice ? 2 : isMobile ? 3 : 5;
    nodes.forEach((node, i) => {
      let connectionCount = 0;
      for (let j = i + 1; j < nodes.length; j++) {
        if (connectionCount >= maxConnections) break;
        
        const dx = nodes[j].x - node.x;
        const dy = nodes[j].y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Shorter connection distance on mobile for better performance
        const maxDistance = isMobile ? 120 : 150;
        
        if (distance < maxDistance && Math.random() > 0.7) {
          node.connections.push(j);
          connectionCount++;
        }
      }
    });
    
    let animationTime = 0;
    let frameCount = 0;
    
    const animate = (timestamp: number) => {
      // Skip frames if we're under our target frame interval
      if (timestamp - lastFrameTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTime = timestamp;
      
      // Additional frame skipping for very low-end devices
      frameCount++;
      // Skip more frames on mobile (every 3rd frame) for better performance
      const shouldSkipFrame = (isLowEndDevice && frameCount % 4 !== 0) || (isMobile && !isLowEndDevice && frameCount % 3 !== 0);
      
      if (!shouldSkipFrame) {
        // Time increment - adjusted for device performance
        animationTime += isLowEndDevice ? 0.03 : isMobile ? 0.024 : 0.016;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Reduce animation complexity for low-end devices
        const simpleMode = isLowEndDevice || (isMobile && frameCount % 5 === 0);
        
        // Update and draw nodes
        nodes.forEach((node, i) => {
          // Update position
          node.x += node.vx;
          node.y += node.vy;

          // Bounce off edges
          if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
          if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

          // Keep in bounds
          node.x = Math.max(0, Math.min(canvas.width, node.x));
          node.y = Math.max(0, Math.min(canvas.height, node.y));

          // Draw connections
          if (!simpleMode || i % 2 === 0) { // Draw fewer connections in simple mode
            node.connections.forEach(connectedIndex => {
              const connected = nodes[connectedIndex];
              const dx = connected.x - node.x;
              const dy = connected.y - node.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              // Shorter connection distance for better performance
              const maxDistance = isLowEndDevice ? 150 : isMobile ? 180 : 200;
              
              if (distance < maxDistance) {
                const opacity = 1 - (distance / maxDistance);
                // Simpler animation for low-end devices
                const pulseOpacity = isLowEndDevice 
                  ? opacity * 0.5 
                  : opacity * (0.3 + 0.7 * Math.sin(animationTime * 2 + i * 0.1));
                
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(connected.x, connected.y);
                
                // Simplified colors for low-end devices
                if (isLowEndDevice) {
                  ctx.strokeStyle = resolvedTheme === 'dark' 
                    ? `rgba(139, 92, 246, ${pulseOpacity})` 
                    : `rgba(79, 70, 229, ${pulseOpacity})`;
                  ctx.lineWidth = 1.5;
                } else {
                  // Gradient line for better devices
                  const gradient = ctx.createLinearGradient(node.x, node.y, connected.x, connected.y);
                  if (resolvedTheme === 'dark') {
                    gradient.addColorStop(0, `rgba(139, 92, 246, ${pulseOpacity})`);
                    gradient.addColorStop(1, `rgba(59, 130, 246, ${pulseOpacity})`);
                    // Only add middle color stop on higher-end devices
                    if (!isMobile) {
                      gradient.addColorStop(0.5, `rgba(236, 72, 153, ${pulseOpacity * 0.8})`);
                    }
                  } else {
                    gradient.addColorStop(0, `rgba(79, 70, 229, ${pulseOpacity})`);
                    gradient.addColorStop(1, `rgba(37, 99, 235, ${pulseOpacity})`);
                    // Only add middle color stop on higher-end devices
                    if (!isMobile) {
                      gradient.addColorStop(0.5, `rgba(219, 39, 119, ${pulseOpacity * 0.8})`);
                    }
                  }
                  
                  ctx.strokeStyle = gradient;
                  ctx.lineWidth = 2;
                }
                
                ctx.stroke();
              }
            });
          }

          // Draw node - simpler for low-end devices
          const nodeSize = isLowEndDevice 
            ? 3 
            : 4 + (isMobile ? 2 : 3) * Math.sin(animationTime * 3 + i * 0.5);
            
          const nodeOpacity = isLowEndDevice 
            ? 0.7 
            : 0.8 + 0.2 * Math.sin(animationTime * 2 + i * 0.3);
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
          
          // Simplified fill for low-end devices
          if (isLowEndDevice) {
            ctx.fillStyle = resolvedTheme === 'dark' 
              ? `rgba(139, 92, 246, ${nodeOpacity})` 
              : `rgba(79, 70, 229, ${nodeOpacity})`;
          } else {
            // Gradient fill for better devices
            const nodeGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, nodeSize);
            if (resolvedTheme === 'dark') {
              nodeGradient.addColorStop(0, `rgba(255, 255, 255, ${nodeOpacity})`);
              nodeGradient.addColorStop(1, `rgba(139, 92, 246, ${nodeOpacity * 0.5})`);
            } else {
              nodeGradient.addColorStop(0, `rgba(79, 70, 229, ${nodeOpacity})`);
              nodeGradient.addColorStop(1, `rgba(79, 70, 229, ${nodeOpacity * 0.3})`);
            }
            ctx.fillStyle = nodeGradient;
          }
          
          ctx.fill();
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // For throttling resize events
    let resizeTimeout: NodeJS.Timeout | null = null;

    const handleResize = () => {
      // Only run on client side
      if (typeof window === 'undefined') return;
      
      // Throttle resize for better performance
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      
      resizeTimeout = setTimeout(() => {
        const dpr = isLowEndDevice ? 1 : (isMobile ? Math.min(window.devicePixelRatio, 1.5) : Math.min(window.devicePixelRatio, 2));
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        ctx.scale(dpr, dpr);
      }, 200);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [resolvedTheme, isMobile, isTablet, isLowEndDevice]);

  // Skip loader completely for very low-end devices if preferred
  if (hasReducedMotion && isLowEndDevice) {
    return null;
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: isLowEndDevice ? 1.05 : 1.1 }}
          transition={{ duration: isLowEndDevice ? 0.6 : 0.8, ease: "power2.inOut" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{
            background: resolvedTheme === 'dark' 
              ? 'linear-gradient(135deg, #0a0a1e 0%, #1a1a2e 50%, #16213e 100%)'
              : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)'
          }}
        >
          {/* Neural Network Background - Hide for very low-end devices */}
          {(!isLowEndDevice || !isMobile) && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            />
          )}

          {/* Loading Content - Simplified for low-end devices */}
          <div className="relative z-10 text-center">
            {/* Logo/Brand - Simpler animation for low-end devices */}
            <motion.div
              initial={{ scale: 0, rotateY: isLowEndDevice ? 0 : 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ 
                duration: isLowEndDevice ? 0.7 : 1, 
                ease: isLowEndDevice ? "easeOut" : "back.out(1.7)", 
                delay: 0.2 
              }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto relative">
                {/* Simplified animation for low-end devices */}
                {isLowEndDevice ? (
                  <div 
                    className="absolute inset-0 rounded-full border-4 border-transparent"
                    style={{
                      borderTopColor: resolvedTheme === 'dark' ? '#8b5cf6' : '#4f46e5',
                      borderRightColor: resolvedTheme === 'dark' ? '#ec4899' : '#db2777',
                      animation: 'spin 3s linear infinite'
                    }}
                  />
                ) : (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-4 border-transparent"
                    style={{
                      borderTopColor: resolvedTheme === 'dark' ? '#8b5cf6' : '#4f46e5',
                      borderRightColor: resolvedTheme === 'dark' ? '#ec4899' : '#db2777',
                    }}
                  />
                )}
                
                {!isLowEndDevice && (
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 rounded-full border-2 border-transparent"
                    style={{
                      borderLeftColor: resolvedTheme === 'dark' ? '#3b82f6' : '#2563eb',
                      borderBottomColor: resolvedTheme === 'dark' ? '#10b981' : '#059669',
                    }}
                  />
                )}
                
                <div 
                  className="absolute inset-4 rounded-full"
                  style={{
                    background: resolvedTheme === 'dark' 
                      ? 'linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)'
                      : 'linear-gradient(45deg, #4f46e5, #db2777, #2563eb)'
                  }}
                />
              </div>
            </motion.div>

            {/* Loading Text - Simplified for low-end devices */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isLowEndDevice ? 0.6 : 0.8, delay: 0.5 }}
              className="text-3xl font-bold mb-4"
              style={{
                background: resolvedTheme === 'dark' 
                  ? 'linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)'
                  : 'linear-gradient(45deg, #4f46e5, #db2777, #2563eb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {isLowEndDevice ? "Loading" : "Initializing Neural Interface"}
            </motion.h1>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: isLowEndDevice ? 0.4 : 0.6, delay: 0.8 }}
              className="w-80 mx-auto mb-6"
            >
              <div className="mb-2 flex justify-between text-sm font-medium">
                <span style={{ color: resolvedTheme === 'dark' ? '#a1a1aa' : '#64748b' }}>
                  Loading...
                </span>
                <span style={{ color: resolvedTheme === 'dark' ? '#a1a1aa' : '#64748b' }}>
                  {Math.round(progress)}%
                </span>
              </div>
              
              <div 
                className="w-full h-2 rounded-full overflow-hidden"
                style={{
                  backgroundColor: resolvedTheme === 'dark' ? '#374151' : '#e5e7eb'
                }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: resolvedTheme === 'dark' 
                      ? 'linear-gradient(90deg, #8b5cf6, #ec4899, #3b82f6)'
                      : 'linear-gradient(90deg, #4f46e5, #db2777, #2563eb)',
                    width: `${progress}%`,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Loading Steps - Simplified for low-end devices */}
            {!isLowEndDevice && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="space-y-2 text-sm"
                style={{ color: resolvedTheme === 'dark' ? '#9ca3af' : '#6b7280' }}
              >
                {['Connecting to AI servers...', 'Loading machine learning models...', 'Optimizing user experience...', 'Ready!'].map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: progress > (index + 1) * 25 ? 1 : 0.3,
                      x: 0 
                    }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div 
                      className={`w-2 h-2 rounded-full ${
                        progress > (index + 1) * 25 ? 'animate-pulse' : ''
                      }`}
                      style={{
                        backgroundColor: progress > (index + 1) * 25 
                          ? (resolvedTheme === 'dark' ? '#10b981' : '#059669')
                          : (resolvedTheme === 'dark' ? '#374151' : '#d1d5db')
                      }}
                    />
                    <span>{step}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
