import React from "react";
import { useTypeWriter } from "../hooks/useTypeWriter";
import Typewriter from "./TypeWriter";
import { SocialBoxLink } from "./partials/SocialBoxLink";

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
              render={(text) => (
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#00c896] to-[#ff00ff] animate-gradient-text">
                  {text}
                </div>
              )}
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
        {/* Social Media */}
        <div className="mt-8 flex gap-4">
          {/* Github */}
          <SocialBoxLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="#000"
              class="group-hover:fill-white transition-colors ease-in-out duration-300"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </SocialBoxLink>
          {/* Linked in */}
          <SocialBoxLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill="#0077B5"
              className="group-hover:fill-white transition-colors ease-in-out duration-300"
            >
              <path d="M8 19H5V9h3v10zM6.5 7.25A1.75 1.75 0 118.3 5.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-5.5c0-1.5-.5-2-1.5-2s-1.5.5-1.5 2V19h-3V9h3v1.5a3.5 3.5 0 013-1.5c2.2 0 3.5 1.5 3.5 4z" />
            </svg>
          </SocialBoxLink>
          {/* Whats app */}
          <SocialBoxLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          </SocialBoxLink>
        </div>
      </div>
    </div>
  );
};
