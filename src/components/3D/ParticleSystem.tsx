'use client';

import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

interface ParticleSystemProps {
  className?: string;
}

export function ParticleSystem({ className = '' }: ParticleSystemProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationIdRef = useRef<number>();
  const { theme, resolvedTheme } = useTheme();  const particleSystem = useMemo(() => {
    // Aggressive particle count reduction for better performance
    const getParticleCount = () => {
      if (typeof window === 'undefined') return 500;
      
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      
      // Much more aggressive reduction for performance
      if (isLowEndDevice && isMobile) return 150;
      if (isMobile) return 250; // Further reduced for mobile
      if (isTablet) return 400;  // Further reduced for tablet
      return 800; // Significantly reduced for desktop
    };

    const particleCount = getParticleCount();
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Position
      positions[i3] = (Math.random() - 0.5) * 2000;
      positions[i3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i3 + 2] = (Math.random() - 0.5) * 2000;

      // Velocity - reduced for smoother performance
      velocities[i3] = (Math.random() - 0.5) * 0.3;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.3;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.3;

      // Colors - AI/Tech inspired palette
      const colorVariant = Math.random();
      if (colorVariant < 0.3) {
        // Cyan/Blue - AI/Tech
        colors[i3] = 0.2 + Math.random() * 0.3;     // R
        colors[i3 + 1] = 0.6 + Math.random() * 0.4; // G
        colors[i3 + 2] = 0.8 + Math.random() * 0.2; // B
      } else if (colorVariant < 0.6) {
        // Purple/Magenta - AI/ML
        colors[i3] = 0.6 + Math.random() * 0.4;     // R
        colors[i3 + 1] = 0.3 + Math.random() * 0.3; // G
        colors[i3 + 2] = 0.9 + Math.random() * 0.1; // B
      } else {
        // Orange/Gold - Innovation
        colors[i3] = 0.9 + Math.random() * 0.1;     // R
        colors[i3 + 1] = 0.6 + Math.random() * 0.3; // G
        colors[i3 + 2] = 0.2 + Math.random() * 0.3; // B
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

    return { geometry, positions, colors, velocities };
  }, []);

  useEffect(() => {
    if (!mountRef.current || typeof window === 'undefined') return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    camera.position.z = 1000;    // Responsive renderer settings
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: window.innerWidth > 768, // Disable antialiasing on mobile for performance
      powerPreference: window.innerWidth > 768 ? "high-performance" : "low-power",
      precision: window.innerWidth < 768 ? "lowp" : "mediump" // Lower precision on mobile for better performance
    });
    
    // Responsive pixel ratio and size
    const pixelRatio = window.innerWidth < 768 ? 1 : Math.min(window.devicePixelRatio, 2);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(pixelRatio);
    // Disable shadow maps for better performance
    renderer.shadowMap.enabled = false;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Shader Material for advanced particle effects
    const vertexShader = `
      attribute vec3 velocity;
      varying vec3 vColor;
      uniform float time;
      uniform float mouseX;
      uniform float mouseY;

      void main() {
        vColor = color;
        
        vec3 pos = position;
        
        // Wave motion
        pos.y += sin(time * 0.001 + pos.x * 0.01) * 50.0;
        pos.x += cos(time * 0.001 + pos.z * 0.01) * 30.0;
        
        // Mouse interaction
        float mouseInfluence = 200.0;
        vec2 mouse = vec2(mouseX, mouseY);
        float dist = distance(pos.xy, mouse);
        if (dist < mouseInfluence) {
          vec2 direction = normalize(pos.xy - mouse);
          float force = (mouseInfluence - dist) / mouseInfluence;
          pos.xy += direction * force * 100.0;
        }
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // Dynamic size based on distance and time
        float size = 3.0 + sin(time * 0.002 + pos.x * 0.01) * 2.0;
        gl_PointSize = size * (300.0 / -mvPosition.z);
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      uniform float time;

      void main() {
        // Circular particles with glow
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        
        if (dist > 0.5) discard;
        
        float alpha = 1.0 - (dist * 2.0);
        alpha *= 0.8 + sin(time * 0.003) * 0.2;
        
        // Glow effect
        float glow = 1.0 - (dist * 1.5);
        vec3 glowColor = vColor * glow;
        
        gl_FragColor = vec4(glowColor, alpha);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        mouseX: { value: 0 },
        mouseY: { value: 0 }
      },
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false
    });

    // Create particle system
    const particles = new THREE.Points(particleSystem.geometry, material);
    scene.add(particles);    // Responsive interaction handling (mouse + touch)
    let mouseX = 0, mouseY = 0;
    
    const updateInteraction = (clientX: number, clientY: number) => {
      mouseX = (clientX / window.innerWidth) * 2000 - 1000;
      mouseY = -(clientY / window.innerHeight) * 2000 + 1000;
      material.uniforms.mouseX.value = mouseX;
      material.uniforms.mouseY.value = mouseY;
    };

    const handleMouseMove = (event: MouseEvent) => {
      updateInteraction(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        event.preventDefault();
        updateInteraction(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Responsive resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      
      // Responsive pixel ratio update
      const pixelRatio = window.innerWidth < 768 ? 1 : Math.min(window.devicePixelRatio, 2);
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);    // Animation loop
    const animate = (time: number) => {
      material.uniforms.time.value = time;

      // Skip frames on mobile for better performance
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const frameSkipRate = isMobile ? 2 : 1; // Skip every other frame on mobile
      
      if (time % frameSkipRate === 0) {
        // Rotate the entire particle system (slower on mobile)
        particles.rotation.x += isMobile ? 0.0002 : 0.0005;
        particles.rotation.y += isMobile ? 0.0001 : 0.0003;

        // Camera movement for depth (reduced on mobile)
        camera.position.x = Math.sin(time * 0.0001) * (isMobile ? 50 : 100);
        camera.position.y = Math.cos(time * 0.0001) * (isMobile ? 25 : 50);
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      }
      
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      material.dispose();
      particleSystem.geometry.dispose();
    };
  }, [particleSystem]);

  // Update colors based on theme
  useEffect(() => {
    if (!particleSystem.geometry) return;

    const colors = particleSystem.colors;
    const isDark = resolvedTheme === 'dark';

    for (let i = 0; i < colors.length; i += 3) {
      if (isDark) {
        // Brighter, more vibrant colors for dark theme
        colors[i] *= 1.2;     // R
        colors[i + 1] *= 1.2; // G
        colors[i + 2] *= 1.2; // B
      } else {
        // Softer colors for light theme
        colors[i] *= 0.8;     // R
        colors[i + 1] *= 0.8; // G
        colors[i + 2] *= 0.8; // B
      }
    }

    particleSystem.geometry.attributes.color.needsUpdate = true;
  }, [resolvedTheme, particleSystem]);

  return (
    <div 
      ref={mountRef} 
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: resolvedTheme === 'dark' 
          ? 'radial-gradient(ellipse at center, rgba(10, 10, 30, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)'
          : 'radial-gradient(ellipse at center, rgba(240, 245, 255, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)'
      }}
    />
  );
}
