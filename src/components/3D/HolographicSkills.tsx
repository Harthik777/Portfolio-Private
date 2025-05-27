'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'Machine Learning', level: 95, category: 'AI/ML', color: '#6366f1', icon: '🤖' },
  { name: 'Deep Learning', level: 90, category: 'AI/ML', color: '#8b5cf6', icon: '🧠' },
  { name: 'Python', level: 95, category: 'Programming', color: '#3b82f6', icon: '🐍' },
  { name: 'TensorFlow', level: 88, category: 'Framework', color: '#10b981', icon: '⚡' },
  { name: 'PyTorch', level: 85, category: 'Framework', color: '#f59e0b', icon: '🔥' },
  { name: 'Data Science', level: 92, category: 'Analytics', color: '#7c3aed', icon: '📊' },
  { name: 'React/Next.js', level: 90, category: 'Web Dev', color: '#06b6d4', icon: '⚛️' },
  { name: 'TypeScript', level: 88, category: 'Programming', color: '#8b5cf6', icon: '📝' },
];

export function HolographicSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [springConfig, setSpringConfig] = useState({ stiffness: 300, damping: 30 });
  const [rotateRanges, setRotateRanges] = useState({
    rotateXRange: [5, -5] as [number, number],
    rotateYRange: [-5, 5] as [number, number]
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Initialize device-specific settings
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const updateDeviceSettings = () => {
      const isMobileDevice = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      
      // Set mobile state
      setIsMobile(isMobileDevice);
      
      // Update spring config based on device
      if (isMobileDevice) {
        setSpringConfig({ stiffness: 80, damping: 20 });
        setRotateRanges({
          rotateXRange: [3, -3],
          rotateYRange: [-3, 3]
        });
      } else if (isTablet) {
        setSpringConfig({ stiffness: 200, damping: 25 });
        setRotateRanges({
          rotateXRange: [5, -5],
          rotateYRange: [-5, 5]
        });
      } else {
        setSpringConfig({ stiffness: 300, damping: 30 });
        setRotateRanges({
          rotateXRange: [5, -5],
          rotateYRange: [-5, 5]
        });
      }
    };

    // Initial call
    updateDeviceSettings();
    
    // Listen for resize events
    window.addEventListener('resize', updateDeviceSettings);
    
    return () => window.removeEventListener('resize', updateDeviceSettings);
  }, []);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], rotateRanges.rotateXRange), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], rotateRanges.rotateYRange), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    if (!isMobile && typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY, isMobile]);

  return (
    <section className="py-16 md:py-32 relative overflow-hidden" data-reveal>
      {/* Background Effects - Responsive */}
      <div className="absolute inset-0 opacity-10 md:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            data-text-reveal
            style={{
              background: resolvedTheme === 'dark' 
                ? 'linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)'
                : 'linear-gradient(45deg, #4f46e5, #db2777, #2563eb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Neural Skill Matrix
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Advanced proficiency mapping across AI/ML technologies and development frameworks
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          style={!isMobile ? {
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          } : {}}
          className="relative max-w-6xl mx-auto"
        >
          {/* Responsive Holographic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, z: -100, rotateX: 90 }}
                whileInView={{ opacity: 1, z: 0, rotateX: 0 }}
                transition={{ 
                  duration: 1,
                  delay: index * 0.1,
                  ease: "back.out(1.7)"
                }}
                whileHover={{ 
                  z: 50,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative group cursor-pointer"
                data-magnetic
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Holographic Card */}
                <div 
                  className="relative h-64 rounded-2xl border backdrop-blur-xl overflow-hidden"
                  style={{
                    background: resolvedTheme === 'dark'
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                      : 'linear-gradient(135deg, rgba(0,0,0,0.05), rgba(0,0,0,0.02))',
                    borderColor: hoveredSkill === skill.name ? skill.color : 'rgba(255,255,255,0.2)',
                    boxShadow: hoveredSkill === skill.name 
                      ? `0 20px 40px ${skill.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`
                      : '0 10px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  {/* Scanning Lines */}
                  <motion.div
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.2,
                    }}
                    className="absolute inset-0 w-full h-full opacity-20"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    {/* Icon & Category */}
                    <div>
                      <motion.div
                        animate={{
                          rotateY: hoveredSkill === skill.name ? 360 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl mb-2"
                      >
                        {skill.icon}
                      </motion.div>
                      <div 
                        className="text-xs uppercase tracking-wider mb-1 font-semibold"
                        style={{ color: skill.color }}
                      >
                        {skill.category}
                      </div>
                    </div>

                    {/* Skill Name */}
                    <h3 
                      className="text-lg font-bold mb-4"
                      data-magnetic-text
                      style={{
                        color: resolvedTheme === 'dark' ? '#ffffff' : '#1f2937'
                      }}
                    >
                      {skill.name}
                    </h3>

                    {/* Progress Visualization */}
                    <div className="space-y-2">
                      {/* Percentage Display */}
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-400">
                          Proficiency
                        </span>
                        <motion.span
                          animate={{
                            scale: hoveredSkill === skill.name ? 1.2 : 1,
                          }}
                          className="text-lg font-bold"
                          style={{ color: skill.color }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      {/* Holographic Progress Bar */}
                      <div className="relative h-2 rounded-full overflow-hidden bg-gray-800/50">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5,
                            delay: index * 0.1 + 0.5,
                            ease: "easeOut"
                          }}
                          className="h-full rounded-full relative"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                          }}
                        >
                          {/* Glow Effect */}
                          <motion.div
                            animate={{
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute inset-0 rounded-full blur-sm"
                            style={{
                              background: skill.color,
                              filter: 'blur(4px)',
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Skill Level Bars */}
                      <div className="flex gap-1 mt-3">
                        {Array.from({ length: 10 }, (_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ 
                              opacity: i < skill.level / 10 ? 1 : 0.3,
                              scale: 1 
                            }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + i * 0.05,
                            }}
                            className="flex-1 h-1 rounded-full"
                            style={{
                              backgroundColor: i < skill.level / 10 ? skill.color : 'rgba(255,255,255,0.1)',
                              boxShadow: i < skill.level / 10 ? `0 0 10px ${skill.color}60` : 'none',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Holographic Overlay */}
                  <div 
                    className="absolute inset-0 opacity-10 mix-blend-overlay"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${skill.color}, transparent 70%)`,
                    }}
                  />
                </div>

                {/* 3D Shadow */}
                <div
                  className="absolute inset-0 rounded-2xl -z-10"
                  style={{
                    transform: 'translateZ(-20px) translateY(10px)',
                    background: 'rgba(0,0,0,0.2)',
                    filter: 'blur(20px)',
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Central Hologram */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ transform: 'translateZ(100px)' }}
          >
            <motion.div
              animate={{
                rotateY: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-32 h-32 rounded-full border-2 border-purple-500/30"
              style={{
                background: 'conic-gradient(from 0deg, transparent, #8b5cf660, transparent)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
