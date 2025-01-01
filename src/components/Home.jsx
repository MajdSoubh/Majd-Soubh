import React from "react";
import { useTypeWriter } from "../hooks/useTypeWriter";
import Typewriter from "./TypeWriter";

export const Home = () => {
  return (
    <div className=" h-[calc(100dvh-56px)] ">
      <div className="w-[700px] max-sm:w-full max-md:w-[500px] text-center transition-all px-4 mx-auto flex flex-col h-full justify-center items-start gap-4 text-slate-300">
        <h3 className=" md:text-5xl text-4xl  max-md:ml-[40px] ml-[20px]">
          Hi, I'm Majd
        </h3>
        <div className="w-full flex gap-2 justify-center items-center text-5xl md:text-7xl transition-all">
          <div>&lt;</div>
          <div>
            <Typewriter
              texts={["Front-End", "Back-End", "Full-Stack"]}
              infinity={true}
              render={(f) => <div>{f}|</div>}
              loop={true}
            />
          </div>
          <div>&nbsp;/&gt;</div>
        </div>
        <h3 className="self-end md:text-5xl text-4xl  max-md:mr-[40px] mr-[20px] transition-all">
          Developer
        </h3>
        <h3 className="text-lg mt-4 text-slate-400">
          Setting forth on the journey of innovation and excellence, building
          exceptional software solutions for every challenge
        </h3>
      </div>
    </div>
  );
};
