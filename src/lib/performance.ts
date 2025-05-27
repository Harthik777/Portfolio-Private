// This script contains optimizations and performance enhancements
// to improve loading times and runtime performance.

// Configuration to reduce bundle size
export const performanceConfig = {
  // Reduced particle count for better performance across all devices
  particleCount: {
    mobile: 150,    // Reduced from 300
    tablet: 400,    // Reduced from 800
    desktop: 800    // Reduced from 1500
  },
  
  // Frame rate control
  frameRateLimit: {
    mobile: 30,
    tablet: 45,
    desktop: 60
  },
  
  // Loading optimizations
  loading: {
    mobileTimeReduce: 0.6, // 60% faster loading on mobile
    mobileStepsReduce: 0.5 // 50% fewer loading steps on mobile
  },
  
  // Animation performance settings
  animations: {
    reducedMotion: true,      // Enable reduced motion by default
    fastTransitions: true,    // Use faster transition durations
    skipComplexAnimations: true // Skip complex animations on lower-end devices
  }
};

// Default export for compatibility
export default performanceConfig;
