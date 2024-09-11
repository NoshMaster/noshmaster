import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Direction = 'top' | 'bottom' | 'left' | 'right';

interface FadeInProps {
  children: React.ReactNode;
  from?: Direction;
  opacity?: boolean;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, from, opacity = true, duration = 1 }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const initialPosition = () => {
    switch (from) {
      case 'top':
        return { y: -100 };
      case 'bottom':
        return { y: 100 };
      case 'left':
        return { x: -100 };
      case 'right':
        return { x: 100 };
      default:
        return { y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ ...initialPosition(), opacity: opacity ? 0 : 1 }}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{
        x: { duration },
        y: { duration },
        opacity: opacity ? { duration, delay: duration / 2 } : { duration: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;