import React from "react";
import Card3D from "./Card3D";

const EducationDetails = ({ type, info }) => (
  <Card3D>
    <div className="flex flex-col items-start justify-between ">
      <h3 className=" capitalize font-bold text-2xl sm:text-xl text-turquoise">
        {type}
      </h3>
      <div className="mt-2 mx-auto w-full bg-slate-600/30 h-[1px]" />
      <div className="relative mt-2">
        <svg
          className="absolute left-0 size-6
            fill-none stroke-[1.5px]
            text-turquoise"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6  20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18  3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
          ></path>
        </svg>
        <p className="ml-8 font-medium w-full md:text-sm mb-1 text-slate-300">
          {info}
        </p>
      </div>
    </div>
  </Card3D>
);

export default EducationDetails;
