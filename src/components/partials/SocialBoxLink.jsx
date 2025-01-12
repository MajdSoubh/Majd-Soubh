import React, { useRef } from "react";

export const SocialBoxLink = ({
  children,
  hoverColor = "rgba(255, 255, 255, 0.125)",
  link = "#",
}) => {
  const wrapperRef = useRef();
  const handleHover = (e) => {
    wrapperRef.current.style.backgroundColor = hoverColor;
  };

  const handleLeave = (e) => {
    wrapperRef.current.style.backgroundColor = "hsla(0, 3%, 30%, 0.477)";
  };
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className="flex items-center justify-center w-16 h-16 cursor-pointer group"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onTouchStart={handleHover}
        onTouchEnd={handleLeave}
      >
        {/* Wrapper */}
        <div
          ref={wrapperRef}
          className="relative bg-[hsla(0,3%,30%,0.477)] w-11 h-11 perspective-800 transform-style-3d transform  rotate-x-45 -rotate-z-45 transition-all duration-300 ease-in-out group-hover:translate-y-[-0.6rem]"
        >
          {/* Front Face */}
          <div className="absolute top-0 left-0 border border-white/20 bg-inherit p-2 w-11 h-11 flex items-center justify-center">
            {children}
          </div>
          {/* Side Faces */}
          <div className="absolute bg-inherit border border-white/20 top-0 left-0 w-4 h-11 origin-left transform rotate-x-0 rotate-y-90 "></div>
          <div className="absolute bg-inherit border border-white/20 left-0 bottom-0 h-4 w-11 origin-bottom transform rotate-y-0 rotate-x-90"></div>
        </div>
      </div>
    </a>
  );
};
