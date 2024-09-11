import { useEffect, useState, useRef } from "react";

const PerspectiveEffect = ({ children }: { children: React.ReactNode }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
        console.log(40 - window.scrollY/document.documentElement.scrollHeight * 70)
        if (40 - window.scrollY/document.documentElement.scrollHeight * 70 == 0)
        {
            console.log(Math.min(0.8 + window.scrollY/document.documentElement.scrollHeight * 0.5, 2))
        }
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          setIsVisible(true);
          setScrollY(Math.max(0, window.scrollY - rect.top + windowHeight / 2));
        } else {
          setIsVisible(false);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  
  const scrollRatio = scrollY/document.documentElement.scrollHeight;
  const rotationAngle = isVisible ? Math.max(40 - scrollRatio * 70, 0) : 0;
  const scale = isVisible ? Math.min(0.8 + scrollRatio * 0.5, 1.08569) : 1;

  return (
    <div
      ref={ref}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center top",
        transform: `perspective(1200px) scaleX(${scale}) scaleY(${scale}) rotateX(${rotationAngle}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export default PerspectiveEffect;
