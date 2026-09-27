import type { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'fade-down' | 'scale-in' | 'slide-right';
}

export default function Reveal({ children, className = '', delay = 0, animation = 'fade-up' }: RevealProps) {
  const { ref, visible } = useScrollReveal();

  const animationClass = visible ? `animate-${animation}` : 'opacity-0';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
