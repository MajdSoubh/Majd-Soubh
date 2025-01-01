import React, { useState } from "react";

const Link = ({ label, borderHoverColor }) => {
  return (
    <div
      className="p-2 rounded-[18px] hover:text-white cursor-pointer delay-[40ms] transition-all"
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 3px 2px 1px ${borderHoverColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 0px ${borderHoverColor}`;
      }}
    >
      {label}
    </div>
  );
};

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative h-[56px]">
      <div className="h-full max-md:hidden py-2 px-4 flex justify-end items-center gap-8 text-slate-300">
        <Link label={"Home"} borderHoverColor={"#FF00FF"} />
        <Link label={"About"} borderHoverColor={"#00c896"} />
        <Link label={"Experience"} borderHoverColor={"#FF00FF"} />
        <Link label={"Skills"} borderHoverColor={"#00c896"} />
        <Link label={"Projects"} borderHoverColor={"#00c896"} />
        <Link label={"Contact"} borderHoverColor={"#FF00FF"} />
      </div>
      <div className="h-full md:hidden py-2 px-2 flex justify-end items-center gap-8 text-slate-300">
        <button className="relative" onClick={() => setOpen(!isOpen)}>
          <div className="relative flex items-center justify-center rounded-full w-[30px] h-[30px] transform transition-all duration-200 shadow-md">
            <div
              className="flex flex-col justify-between w-full h-full transform transition-all duration-300 origin-center"
              style={{ rotate: isOpen ? "-45deg" : "0deg" }}
            >
              <div
                className="bg-white h-[3px] w-1/2 rounded transform transition-all duration-300  origin-right delay-75"
                style={{
                  rotate: isOpen ? "-90deg" : "0deg",
                  height: isOpen ? "2px" : "3px",
                }}
              ></div>
              <div
                className="bg-white h-[3px] rounded"
                style={{
                  height: isOpen ? "2px" : "3px",
                }}
              ></div>
              <div
                className="bg-white h-[3px] w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75 "
                style={{
                  rotate: isOpen ? "-90deg" : "0deg",
                  height: isOpen ? "2px" : "3px",
                }}
              ></div>
            </div>
          </div>
        </button>
      </div>

      <ul
        className={
          "absolute pb-2 overflow-hidden opacity-0 rounded-xl w-[200px] top-full right-8 transition-all delay-75 bg-black px-6 text-slate-300 flex flex-col justify-start items-start "
        }
        style={{
          height: isOpen ? "272px" : "0px",
          opacity: isOpen ? "1" : "0",
        }}
      >
        <li className="pt-3 pb-2 cursor-pointer border-b border-transparent hover:border-purple-600">
          Home
        </li>
        <li className="pt-3 pb-2 cursor-pointer border-b border-transparent hover:border-purple-600">
          About
        </li>
        <li className="pt-3 pb-2 cursor-pointer border-b border-transparent hover:border-purple-600">
          Experience
        </li>
        <li className="pt-3 pb-2 cursor-pointer border-b border-transparent hover:border-purple-600">
          Skills
        </li>
        <li className="pt-3 pb-2 cursor-pointer border-b border-transparent hover:border-purple-600">
          Projects
        </li>
        <li className="pt-3 pb-1 cursor-pointer border-b border-transparent hover:border-purple-600">
          Contact
        </li>
      </ul>
    </div>
  );
};
