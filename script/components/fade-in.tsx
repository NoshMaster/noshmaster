import React, { useEffect, useState, useRef } from 'react';
import { useInView } from './lib/utils';

interface CountProps {
  className?: string;
  number: number;
  duration: number;
}

const easeOutQuad = (t: number) => {
  return t * (2 - t);
};

const Count: React.FC<CountProps> = ({ number, duration, className }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const end = number;
    const totalMsDuration = duration * 1000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalMsDuration, 1);
      const easedProgress = easeOutQuad(progress);

      setCount(Math.round(easedProgress * end));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);

    return () => {
    };
  }, [isInView, number, duration]); 
  return (
    <h3 className={className} ref={countRef}>
      {count}
    </h3>
  );
};

export default Count;
