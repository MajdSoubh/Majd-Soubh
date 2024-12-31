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
    <div className="relative">
      <div className="max-md:hidden py-2 px-4 flex justify-end items-center gap-8 text-slate-300">
        <Link label={"Home"} borderHoverColor={"#FF00FF"} />
        <Link label={"About"} borderHoverColor={"#00c896"} />
        <Link label={"Experience"} borderHoverColor={"#FF00FF"} />
        <Link label={"Skills"} borderHoverColor={"#00c896"} />
        <Link label={"Projects"} borderHoverColor={"#00c896"} />
        <Link label={"Contact"} borderHoverColor={"#FF00FF"} />
      </div>
      <div className="md:hidden py-2 px-2  flex justify-end items-center gap-8 text-slate-300">
        <div>
          <svg
            className="ham hamRotate ham4"
            viewBox="0 0 100 100"
            width="60"
            onClick={(e) => {
              e.currentTarget.classList.toggle("active");
              setOpen(!isOpen);
            }}
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </div>
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
