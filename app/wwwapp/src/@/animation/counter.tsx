import React, { useEffect, useState, useRef } from 'react';
import { useInView } from './lib/utils';

interface CounterProps {
  className?: string;
  number: number;
  duration: number;
}

const easeOutQuad = (t: number) => {
  return t * (2 - t);
};

const Counter: React.FC<CounterProps> = ({ number, duration, className }) => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const end = number;
    const totalMsDuration = duration * 1000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalMsDuration, 1);
      const easedProgress = easeOutQuad(progress);

      setCounter(Math.round(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);

    return () => {
    };
  }, [isInView, number, duration]); 
  return (
    <h3 className={className} ref={counterRef}>
      {counter}
    </h3>
  );
};

export default Counter;
