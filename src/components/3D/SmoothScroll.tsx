'use client';

import { useEffect } from 'react';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Apply native smooth scrolling with CSS
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Cleanup
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return <>{children}</>;
}
