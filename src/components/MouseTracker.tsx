import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0"
      animate={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.15), transparent 80%)`
      }}
    />
  );
};

export default MouseTracker;