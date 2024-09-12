import React, { useRef } from 'react';
import { useInView } from './lib/utils';

type Direction = 'top' | 'bottom' | 'left' | 'right';

interface FadeInProps {
  children: React.ReactNode;
  from?: Direction;
  opacity?: boolean;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, from, opacity = true, duration = 1 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const initialPosition = () => {
    switch (from) {
      case 'top':
        return 'translateY(-100px)';
      case 'bottom':
        return 'translateY(100px)';
      case 'left':
        return 'translateX(-100px)';
      case 'right':
        return 'translateX(100px)';
      default:
        return 'none';
    }
  };

  const styles = {
    transition: `all ${duration}s ease-out`,
    transform: isInView ? 'none' : initialPosition(),
    opacity: isInView ? 1 : opacity ? 0 : 1,
  };

  return (
    <div ref={ref} style={styles}>
      {children}
    </div>
  );
};

export default FadeIn;
