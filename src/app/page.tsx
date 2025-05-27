'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowDownIcon, SparklesIcon, CodeBracketIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

// Enhanced animations for better visual appeal
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Enhanced loading component with glassmorphism
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-4 border-white/20 border-t-indigo-400 animate-spin"></div>
        <div className="absolute inset-0 h-12 w-12 rounded-full border-2 border-purple-400/30 animate-ping"></div>
      </div>
    </div>
  );
}

// Floating particle component for enhanced visual appeal
function FloatingParticle({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60"
      animate={{
        y: [-20, -40, -20],
        x: [-10, 10, -10],
        opacity: [0.3, 0.8, 0.3],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
}

// Stats component for achievements
function StatsSection() {
  const stats = [
    { label: "Research Focus", value: "AI/ML", icon: CodeBracketIcon },
    { label: "Academic Year", value: "2025", icon: AcademicCapIcon },
    { label: "Technologies", value: "20+", icon: SparklesIcon },
  ];

  return (
    <motion.div 
      variants={fadeInUp}
      className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={scaleIn}
          whileHover={{ scale: 1.05 }}
          className="glass-ultra rounded-2xl p-6 text-center group hover:shadow-glow-lg transition-all duration-300"
        >
          <stat.icon className="w-8 h-8 mx-auto mb-3 text-indigo-600 dark:text-indigo-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Enhanced Hero Section Component with glassmorphism
function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -25]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Floating particles for extra visual appeal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="relative z-30 mx-auto max-w-7xl w-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center px-4 sm:px-6 lg:px-8"
          >
            {/* Enhanced greeting with glassmorphism */}            <motion.div
              variants={fadeInDown}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 glass-ultra rounded-full px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-4 glass-text-enhanced">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for opportunities
              </div>
            </motion.div><motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">
                Harthik M V
              </span>
            </motion.h1><motion.div
              variants={fadeInUp}
              className="mt-6 sm:mt-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                AI/ML Engineer & Researcher
              </h2>
              
              <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                Passionate about creating intelligent solutions that make a difference. 
                Currently pursuing B.Tech in Computer Science (AI) at{' '}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Manipal Institute of Technology (MIT) Bengaluru.
                </span>
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-gray-500 dark:text-gray-400">
                Exploring Machine Learning • Deep Learning • Data Science • Research • Open to Internships & Collaborations
              </p>
            </motion.div>
              <motion.div
              variants={fadeInUp}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="w-full sm:w-auto group inline-flex items-center justify-center px-8 py-4 text-base btn-primary rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <SparklesIcon className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  View My Work
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base btn-secondary rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Learn About Me
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats section */}
            <StatsSection />

            <motion.div variants={fadeInUp} className="mt-16 sm:mt-20">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDownIcon className="mx-auto h-6 w-6 text-gray-400 dark:text-gray-500" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Enhanced CTA Section with glassmorphism
function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative isolate overflow-hidden glass-ultra rounded-3xl px-8 py-12 sm:px-12 sm:py-16 lg:py-20 text-center shadow-glow-xl border border-white/20 dark:border-gray-700/30"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-indigo-600/30 dark:via-purple-600/30 dark:to-pink-600/30"></div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white relative z-10 leading-tight mb-6"
          >
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl text-gray-700 dark:text-gray-200 relative z-10 leading-relaxed"
          >
            I'm always excited to work on new projects and collaborate with
            fellow developers and innovators. Open to internships, research opportunities, and learning experiences.
          </motion.p>
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-10"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="w-full sm:w-auto group inline-flex items-center justify-center rounded-full px-8 py-4 text-lg btn-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="mr-2">💬</span>
                Get in Touch
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-4 text-lg btn-secondary focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                View Projects →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced What I Do Section with improved glassmorphism
function WhatIDoSection() {  const specialties = [
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Exploring Machine Learning, Deep Learning, LLMs, and Agentic AI to create intelligent solutions',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      gradient: 'from-indigo-600 to-purple-600',
      hoverColor: 'indigo'
    },
    {
      icon: '📊',
      title: 'Data Science',
      description: 'Data analysis, visualization, and statistical modeling to extract meaningful insights',
      technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
      gradient: 'from-indigo-500 to-purple-500',
      hoverColor: 'purple'
    },
    {
      icon: '🔬',
      title: 'Research & Innovation',
      description: 'Contributing to cutting-edge research in AI/ML and publishing in academic conferences',
      technologies: ['Research', 'Publications', 'Analysis', 'Innovation'],
      gradient: 'from-indigo-700 to-purple-700',
      hoverColor: 'indigo'
    },
    {
      icon: '💡',
      title: 'Problem Solving',
      description: 'Tackling complex challenges with creative and efficient algorithmic solutions',
      technologies: ['Algorithms', 'Data Structures', 'Optimization', 'Logic'],
      gradient: 'from-orange-500 to-red-500',
      hoverColor: 'orange'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            What I{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Specialize In
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Leveraging artificial intelligence and data science to create innovative solutions that make a real impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`glass-ultra rounded-3xl p-8 border border-white/20 dark:border-gray-700/30 hover:border-${specialty.hoverColor}-300 dark:hover:border-${specialty.hoverColor}-500/30 transition-all duration-300 shadow-lg hover:shadow-glow-lg group`}
            >
              <div className="flex items-center mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 bg-gradient-to-br ${specialty.gradient} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}
                >
                  <span className="text-2xl">{specialty.icon}</span>
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {specialty.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                {specialty.description}
              </p>
                <div className="flex flex-wrap gap-3">
                {specialty.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center rounded-full border border-indigo-300/30 bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 text-sm font-semibold text-indigo-700 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl hover:from-indigo-100 hover:to-purple-100 dark:border-indigo-400/20 dark:from-indigo-900/40 dark:to-purple-900/40 dark:text-indigo-300 dark:hover:from-indigo-900/60 dark:hover:to-purple-900/60"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Enhanced Main Home Component with optimized glassmorphism
export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Enhanced glassmorphism animated background - isolated to home page only */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        {/* Base glassmorphism layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-gray-50/90 dark:from-gray-950/95 dark:via-gray-900/90 dark:to-gray-800/85 backdrop-blur-3xl transition-all duration-700" />
        
        {/* Animated gradient blobs with enhanced glassmorphism */}
        <div className="absolute left-[-20vw] top-[-15vh] w-[70vw] h-[70vw] bg-gradient-to-tr from-indigo-400/30 via-purple-400/25 to-pink-400/20 rounded-full filter blur-[120px] animate-blob1 mix-blend-normal dark:mix-blend-screen" />
        <div className="absolute right-[-25vw] top-[10vh] w-[65vw] h-[65vw] bg-gradient-to-br from-cyan-400/25 via-blue-400/30 to-indigo-400/20 rounded-full filter blur-[100px] animate-blob2 mix-blend-normal dark:mix-blend-screen" />
        <div className="absolute left-[15vw] bottom-[-20vh] w-[60vw] h-[60vw] bg-gradient-to-tr from-pink-400/20 via-purple-400/25 to-indigo-400/30 rounded-full filter blur-[110px] animate-blob3 mix-blend-normal dark:mix-blend-screen" />
        <div className="absolute right-[10vw] bottom-[10vh] w-[50vw] h-[50vw] bg-gradient-to-tl from-teal-400/15 via-emerald-400/20 to-cyan-400/25 rounded-full filter blur-[90px] animate-blob1 mix-blend-normal dark:mix-blend-screen" />
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-[2px]" />
      </div>

      {/* Content with proper z-index layering */}
      <div className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <HeroSection />
          <WhatIDoSection />
          <CTASection />
        </Suspense>
      </div>
    </div>
  );
}
