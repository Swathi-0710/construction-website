"use client";

import { useRef, useState } from "react";

export default function AboutImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [tiltStyle, setTiltStyle] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const dx = mouseX - centerX;
    const dy = mouseY - centerY;

    // Angle degrees-ah increase panirken (e.g., 8-ku bathila 15) so romba nalla move aagum
    const tiltX = (dy / centerY) * 15; 
    const tiltY = -(dx / centerX) * 15; 

    setTiltStyle({
      x: tiltX,
      y: tiltY,
    });
  };

  const handleMouseLeave = () => {
    // Reset back smoothly
    setTiltStyle({ x: 0, y: 0 });
  };

  return (
    <div className="relative flex items-center py-[60px] max-[760px]:py-[30px]">

      {/* Yellow background */}
      <div
        className="absolute left-[-100px] top-[-60px]
        h-[calc(100%+120px)] w-[90%] bg-[#f4c03b]
        max-[760px]:left-[-20px]
        max-[760px]:top-[-30px]
        max-[760px]:h-[calc(100%+60px)]"
      />

      {/* Full Rectangular Container Wrapper with High Tilt */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 w-full translate-x-[20px]
        overflow-hidden max-[760px]:translate-x-0 cursor-pointer shadow-2xl" 
        style={{
          aspectRatio: "800 / 765",
          perspective: "1000px",
          transform: `
            rotateX(${tiltStyle.x}deg)
            rotateY(${tiltStyle.y}deg)
          `,
          transition: "transform 0.1s ease-out", // Fast & smooth response speed
        }}
      >
        <img
          src="/images/about-company.jpg"
          alt="Construction company"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}