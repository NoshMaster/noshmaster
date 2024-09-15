import React, { useState } from "react";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  rotateRatio: number;
}

const Tilt: React.FC<TiltProps> = ({ children, className, rotateRatio = 20 }) => {
  const [transformStyle, setTransformStyle] = useState<string>("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX, clientY } = e;
    const { left, top } = card.getBoundingClientRect();

    const x = clientX - left - width / 2;
    const y = clientY - top - height / 2;
    const rotateX = (y / height) * rotateRatio;
    const rotateY = -(x / width) * rotateRatio;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{ transform: transformStyle }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default Tilt;
