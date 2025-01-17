import React from "react";

export default function About() {
  return (
    <div className="relative w-[min(100%,500px)] p-2 mx-auto ">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl text-slate-100 sm:text-[2.7rem] transition-all w-fit ">
          About Me
        </h2>
        <p className="text-base text-slate-primary text-center mt-4">
          Self-taught Full-stack Developer with over two years of hands-on
          experience, driven by a passion for continuous learning and utilizing
          diverse cutting-edge technologies in the job market to create
          innovative projects.
        </p>
      </div>
      <div className="mt-6 mx-auto w-[min(500px,60%)] bg-slate-600/45 h-[1px]" />
    </div>
  );
}
