import React from "react";
import Card3D from "./partials/Card3D";

export default function Project({
  name,
  description,
  features = [],
  github = null,
  link = null,
}) {
  return (
    <Card3D
      maxRotationDegree={7}
      className={
        "mx-auto !p-0 !w-full md:!w-[620px] hover:bg-transparent mix-blend-overlay !z-1"
      }
    >
      <div className="flex flex-col items-start justify-between bg-[#110E11] py-4 px-4">
        <h3 className=" capitalize font-bold text-3xl sm:text-xl xs:text-lg text-turquoise">
          {name}
        </h3>
        <div className="mt-2 mx-auto w-full bg-slate-600/30 h-[1px]" />
        <p className="text-white capitalize block mt-2">{description}</p>
        {/* <p className="mt-2 font-medium w-full md:text-sm mb-1 text-slate-400">
          {work}
        </p> */}
        {features.length > 0 && (
          <div className="mt-4 space-y-2">
            {features.map((a, i) => (
              <div key={i} className="font-medium relative w-full text-sm">
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
                <p className="ml-8 text-slate-200">{a}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {link && github && (
        <div className="flex justify-between w-full mt-1">
          {github && (
            <a
              link={github}
              className={
                "bg-[#110E11] py-2 px-4 flex gap-2 justify-center items-center rounded-sm transition-colors duration-300 hover:bg-turquoise/60 " +
                link
                  ? "w-[calc(50%-2px)]"
                  : "w-full"
              }
            >
              <svg
                class="size-[20px] mb-[1.5px] duration-300 fill-white "
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.1933 2.24075L10.7594 22.1931L8.80703  21.7593L13.2409 1.80688L15.1933 2.24075Z"></path>
                <path d="M7.41436 8L3.41436 12L7.41436 16L6.00015  17.4142L0.585938 12L6.00015 6.58579L7.41436 8Z"></path>
                <path d="M18.0002 6.58579L23.4144 12L18.0002  17.4142L16.5859 16L20.5859 12L16.5859 8L18.0002 6.58579Z"></path>
              </svg>
              Code
            </a>
          )}
          {link && (
            <a
              href={link}
              className={
                "bg-[#110E11] py-2 px-4 flex gap-2 justify-center items-center rounded-sm transition-colors duration-300 hover:bg-turquoise/60 " +
                github
                  ? "w-[calc(50%-2px)]"
                  : "w-full"
              }
            >
              <svg
                class="size-[15px] mb-[1px] duration-300 fill-white"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"></path>
              </svg>
              Visit
            </a>
          )}
        </div>
      )}
    </Card3D>
  );
}
