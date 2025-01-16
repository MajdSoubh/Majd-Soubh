import React from "react";

const WorkDetials = ({
  position,
  company,
  companyLink = null,
  time,
  address,
  work,
  accomplishments = [],
}) => (
  <div className={`flex  flex-col items-start justify-between `}>
    <div className="">
      <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">
        {position} &nbsp;
        <a
          target="_blank"
          className="text-white dark:text-primaryDark capitalize"
          href={companyLink || "#"}
        >
          @{company}
        </a>
      </h3>
      <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
        {time} | {address}
      </span>
      <p className="font-medium w-full md:text-sm mb-1">{work}</p>
      {accomplishments.length && (
        <ul className=" list-disc ml-4">
          {accomplishments.map((a, i) => (
            <li key={i} className="font-medium w-full text-sm">
              <p>{a}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default WorkDetials;
