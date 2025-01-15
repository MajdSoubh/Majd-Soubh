import React from "react";

export default function About() {
  return (
    <div className="w-[min(100%,500px)] p-2">
      <h2 className="text-4xl text-slate-100 sm:text-[2.7rem] transition-all w-fit after:content-[''] after:bg-slate-600/45 after:h-[2px] sm:after:w-64 after:relative after:-bottom-1 after:left-0 after:block mb-4">
        About Me
      </h2>
      <p className="text-base text-slate-primary">
        Self-taught Full-stack Developer with over two years of hands-on
        experience, driven by a passion for continuous learning and utilizing
        diverse cutting-edge technologies in the job market to create innovative
        projects.
      </p>
    </div>
  );
}
