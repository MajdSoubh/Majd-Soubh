import React from "react";

const EducationDetails = ({ type, time, place, info }) => (
  <div>
    <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">
      {type}
    </h3>
    <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
      {time} | {place}
    </span>
    <p className="font-medium w-full md:text-sm">{info}</p>
  </div>
);

export default EducationDetails;
