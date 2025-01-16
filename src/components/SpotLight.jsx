import React from "react";

const SpotLight = ({
  bgColor,
  left = null,
  top = null,
  right = null,
  bottom = null,
  blur = "10rem",
  className = "",
}) => {
  return (
    <div
      className={
        "overflow-hidden blur absolute w-[16rem] h-[16rem] sm:w-[18rem] sm:h-[18rem] z-0 bg-clip-content " +
        className +
        " " +
        (left ? "-translate-x-1/2 " : "translate-x-1/2 ") +
        (top ? "-translate-y-1/2" : "translate-y-1/2")
      }
      style={{
        filter: `blur(${blur})`,
        backgroundColor: bgColor,
        left,
        top,
        right,
        bottom,
      }}
    ></div>
  );
};

export default SpotLight;
