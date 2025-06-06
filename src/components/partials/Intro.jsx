import React, { useRef } from "react";
import Typewriter from "../TypeWriter";
import Card3D from "./Card3D";

export default function Intro() {
  const introRef = useRef();
  const handleMouseMove = (event) => {
    const div = introRef.current;
    const pointer = event.currentTarget;

    // Get the bounding rectangle of the div
    const rect = pointer.getBoundingClientRect();

    // Calculate the center of the div
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Get the mouse position relative to the center of the div
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    // Calculate rotation angles (in degrees)
    const rotateY = -(mouseX / (rect.width / 2)) * 20; // Rotate around Y-axis (max 20 degrees)
    const rotateX = (mouseY / (rect.width / 2)) * 20; // Rotate around X-axis (max 20 degrees)

    // Apply the rotation using CSS transform
    div.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  };

  const handleMouseLeave = () => {
    // Reset rotation when the mouse leaves the div
    introRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <Card3D className={"!p-3"}>
      <div className="flex flex-col justify-center items-start gap-4 text-center">
        <h3 className=" sm:text-5xl text-[42px]  max-md:ml-[40px] ml-[20px]">
          Hi, I'm Majd
        </h3>
        <div className="w-full flex gap-2 justify-center items-center text-[45px] sm:text-7xl transition-all">
          <div>&lt;</div>
          <div>
            <Typewriter
              texts={["Front-End", "Back-End", "Full-Stack"]}
              infinity={true}
              speed={180}
              render={(text) => (
                <div className="animate-intro-text flex items-center relative  after:animate-blink after:content-[''] after:absolute after:bg-white after:w-[5px] after:h-[80%] after:-right-[14px] ">
                  {text}
                </div>
              )}
              loop={true}
            />
          </div>
          <div>&nbsp;/&gt;</div>
        </div>
        <h3 className="self-end sm:text-5xl text-[42px]  max-md:mr-[40px] mr-[20px] transition-all">
          Developer
        </h3>
        <h3 className="text-lg mt-4 text-slate-400">
          Setting forth on the journey of innovation and excellence, building
          exceptional software solutions for every challenge
        </h3>
      </div>
    </Card3D>
  );
}
