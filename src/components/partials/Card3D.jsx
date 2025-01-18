import React, { useRef } from "react";

export default function Card3D({
  children,
  className,
  maxRotationDegree = 20,
}) {
  const containerRef = useRef();
  const handleMouseMove = (event) => {
    const container = containerRef.current;
    const pointer = event.currentTarget;

    // Get the bounding rectangle of the container
    const rect = pointer.getBoundingClientRect();

    // Calculate the center of the container
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Get the mouse position relative to the center of the container
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    // Calculate rotation angles (in degrees)
    const rotateY = -(mouseX / (rect.width / 2)) * maxRotationDegree; // Rotate around Y-axis (max maxRotationDegree degrees)
    const rotateX = (mouseY / (rect.width / 2)) * maxRotationDegree; // Rotate around X-axis (max maxRotationDegree degrees)

    // Apply the rotation using CSS transform
    container.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };

  const handleMouseLeave = () => {
    // Reset rotation when the mouse leaves the container
    containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };
  return (
    <div
      className="transform-style-3d perspective-800 cursor-pointer rounded-md w-full "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseLeave}
    >
      <div
        ref={containerRef}
        className={
          "py-4 px-4 origin-center will-change-transform duration-1000 custom-timing transition-transform hover:bg-gray-200/5 " +
          className
        }
      >
        {children}
      </div>
    </div>
  );
}
