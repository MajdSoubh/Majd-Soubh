import React from "react";

export const SocialBoxLink = ({
  children,
  hoverColor = "black",
  link = "#",
}) => {
  return (
    <a href={link} target="_blank">
      <div className="flex items-center justify-center transition-transform duration-300 ease-in-out hover:-translate-y-4  w-16 h-16 group cursor-pointer">
        {/* Wrapper */}
        <div
          className={`relative bg-black-200 w-12 h-12 shadow-md perspective-500 transform-style-3d origin-center rotate-x-45 -rotate-z-45 group-hover:-rotate-z-0 transition-transform duration-300 ease-in-out group-hover:bg-${hoverColor}-700`}
        >
          {/* Front Face */}
          <div className="absolute top-0 left-0 border border-black-300 bg-inherit p-2 w-12 h-12 flex items-center justify-center">
            {children}
          </div>
          {/* Side Faces */}
          <div className="absolute bg-inherit border border-black-300 top-0 left-0 w-4 h-12 origin-left rotate-y-90 "></div>
          <div className="absolute bg-inherit border border-black-300 left-0 bottom-0 h-4 w-12 origin-bottom rotate-x-90"></div>
        </div>
      </div>
    </a>
  );
};
