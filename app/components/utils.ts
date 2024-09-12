import { useState, useEffect } from 'react';

const useInView = (ref: React.RefObject<HTMLElement>, options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { ...options }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isInView;
};

const useScroll = (ref: React.RefObject<HTMLElement>) => {
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementOffsetTop = window.scrollY + rect.top;
        const scrollHeight = document.documentElement.scrollHeight;

        const ratio = Math.max(0, window.scrollY - elementOffsetTop + windowHeight) / scrollHeight;
        setScrollRatio(ratio);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return scrollRatio;
};

  


export { useInView, useScroll }