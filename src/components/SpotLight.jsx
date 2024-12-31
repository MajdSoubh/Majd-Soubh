import React from "react";

export const SpotLight = ({
  bgColor,
  left = null,
  top = null,
  right = null,
  bottom = null,
}) => {
  return (
    <div
      className={
        "overflow-hidden blur-[10rem] absolute w-[18rem] h-[18rem] z-0 bg-clip-border" +
        (left ? "-translate-x-1/2 " : "translate-x-1/2 ") +
        (top ? "-translate-y-1/2" : "translate-y-1/2")
      }
      style={{ backgroundColor: bgColor, left, top, right, bottom }}
    ></div>
  );
};
