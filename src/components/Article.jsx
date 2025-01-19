import React from "react";
import Card3D from "./partials/Card3D";

export default function Article({
  title,
  link,
  date,
  icon = null,
  image = null,
}) {
  return (
    <Card3D maxRotationDegree={7} className={" !p-0 group   "}>
      {/* Card Layout */}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="w-[22.3rem] h-[18rem] block transform-style-3d rounded-lg overflow-hidden  will-change-transform perspective-400 bg-glassy shadow-[0_0_3px_#887388] group-hover:shadow-[0_0_1px_#00C896] relative transition-shadow duration-300 "
      >
        {/* Icon */}
        {/* {icon && (
          <div className="absolute top-[-12px] left-[-25px] transform group-hover:translate-z-4 transition-transform duration-1000 ease-[cubic-bezier(0.03,0.98,0.52,0.99)]">
            <div className="bg-glassy size-[35px]  shadow-[0_0_3px_#887388] group-hover:shadow-[0_0_10px_#00C896]  p-[6px] flex items-center justify-center rounded-md duration-300  transition-shadow">
              {icon}
            </div>
          </div>
        )} */}
        {/* Image */}
        <div className="w-full h-[11rem]">
          <img className="w-full h-full  " src={image} />
        </div>
        {/* Title */}
        <div className="p-3 h-[7rem] flex flex-col justify-between">
          <h3
            className={
              " capitalize font-bold text-md sm:text-md"
              //  +
              // (textColorClass ? textColorClass : "text-turquoise")
            }
          >
            {title}
          </h3>
          <div className="text-xs text-slate-300/60 ml-auto w-fit">{date}</div>
        </div>
      </a>
    </Card3D>
  );
}
