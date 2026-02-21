import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
interface IllustrativeCardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}
export function IllustrativeCard({ children, className, animate = true }: IllustrativeCardProps) {
  const Component = animate ? motion.div : 'div';
  return (
    <Component
      whileHover={animate ? { y: -5, rotate: 0.5 } : undefined}
      className={cn(
        "bg-card p-6 border-2 border-primary/20 sketch-card shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      {children}
    </Component>
  );
}