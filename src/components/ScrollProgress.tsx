'use client';

import { useState, useEffect } from 'react';

interface ScrollProgressProps {
  color?: string;
  height?: number;
}

export default function ScrollProgress({ color = '#0ea5e9', height = 3 }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: `${height}px`,
        background: `linear-gradient(to right, ${color} ${progress}%, transparent 0)`,
        zIndex: 1000,
        transition: 'background 0.1s ease',
      }}
    />
  );
}
