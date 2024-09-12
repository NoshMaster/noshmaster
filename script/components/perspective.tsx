import React, { useRef } from "react";
import { useScroll, useInView } from "./lib/utils";

const PerspectiveEffect = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const scrollRatio = useScroll(ref);
    const isInView = useInView(ref, { threshold: 0.1 });

    const rotationAngle = isInView ? Math.max(40 - scrollRatio * 70, 0) : 0;
    const scale = isInView ? Math.min(0.8 + scrollRatio * 0.5, 1.08569) : 1;

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