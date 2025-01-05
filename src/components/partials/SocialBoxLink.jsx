import React from "react";

export const SocialBoxLink = ({ children, hoverColor = "gray-200" }) => {
  const isTailwindColor = !hoverColor.startsWith("#");

  const hoverStyle = isTailwindColor ? {} : { "--hover-color": hoverColor };

  return (
    <div className="transition-transform duration-300 ease-in-out hover:-translate-y-4  w-24 h-32 group cursor-pointer">
      {/* Wrapper */}
      <div
        className={`relative bg-black-200 w-14 h-14 shadow-md perspective-500 transform-style-3d origin-center rotate-x-45 -rotate-z-45 group-hover:-rotate-z-0 transition-transform duration-300 ease-in-out  ${
          isTailwindColor ? `group-hover:bg-${hoverColor}` : ""
        }`}
        style={hoverStyle}
      >
        {/* Front Face */}
        <div className="absolute top-0 left-0 border border-black-300 bg-inherit p-2 w-14 h-14 flex items-center justify-center">
          {children}
        </div>
        {/* Side Faces */}
        <div className="absolute bg-inherit border border-black-300 top-0 left-0 w-4 h-14 origin-left rotate-y-90 "></div>
        <div className="absolute bg-inherit border border-black-300 left-0 bottom-0 h-4 w-14 origin-bottom rotate-x-90"></div>
      </div>
    </div>
  );
};
