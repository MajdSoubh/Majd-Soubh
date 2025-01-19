import React from "react";
import Card3D from "./partials/Card3D";
import Profile from "../assets/images/profile.jpeg";
export default function Contact() {
  return (
    <Card3D maxRotationDegree={14} className={" group !p-0"}>
      {/* Card Layout */}
      <div className="transform-style-3d  will-change-transform perspective-400 transform translate-z-0 p-4 bg-glassy shadow-[0_0_3px_#887388] group-hover:shadow-[0_0_10px_#00C896] relative transition-shadow duration-300 ">
        {/* Icon */}
        <div className="absolute top-[-12px] left-[-25px] transform group-hover:translate-z-4 transition-transform duration-1000 ease-[cubic-bezier(0.03,0.98,0.52,0.99)]">
          <div className="bg-glassy size-[50px]  shadow-[0_0_3px_#887388] group-hover:shadow-[0_0_10px_#00C896]  p-2 flex items-center justify-center rounded-md duration-300  transition-shadow">
            <svg
              className="w-10 h-10 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.1933 2.24075L10.7594 22.1931L8.80703 21.7593L13.2409 1.80688L15.1933 2.24075Z"></path>
              <path d="M7.41436 8L3.41436 12L7.41436 16L6.00015 17.4142L0.585938 12L6.00015 6.58579L7.41436 8Z"></path>
              <path d="M18.0002 6.58579L23.4144 12L18.0002 17.4142L16.5859 16L20.5859 12L16.5859 8L18.0002 6.58579Z"></path>
            </svg>
          </div>
        </div>
        {/* image & info */}
        <div className="transform group-hover:translate-z-4 transition-transform duration-1000 ease-[cubic-bezier(0.03,0.98,0.52,0.99)]">
          <div className="p-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-7">
            {/* Image */}
            <div className="size-[150px]  border overflow-hidden rounded-full group-hover:shadow-[0_0_10px_0px_#00C896] transition-shadow duration-300">
              <img src={Profile} alt="profile-image" />
            </div>

            {/* Info */}
            <div className="">
              <div className="sm:mb-4 mb-6 opacity-100 translate-y-0 translate-z-[40px]">
                <h2 className="text-2xl sm:text-start text-center">
                  Majd Soubh
                </h2>
                <h3 className="text-slate-200 sm:text-start text-center">
                  Full-Stack Developer
                </h3>
                <div className="w-full h-[1px] bg-slate-400/60 rounded-full my-2 duration-300 group-hover:bg-turquoise group-hover:shadow-[0_0_14px_1px_#00C896]"></div>
              </div>
              <ul className="flex flex-col gap-1 opacity-100 translate-y-0 translate-z-[30px]">
                <li className="flex gap-[10px] text-sm">
                  <svg
                    className="size-4 mt-[1px] fill-white"
                    viewBox="0 0 384 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                  </svg>
                  Syria - Tartous
                </li>
                <li className="flex gap-[10px] text-sm">
                  <svg
                    className="size-4 mt-[1px] fill-white"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path>
                  </svg>
                  eng.majd.soubh@gmail.com
                </li>
                <li className="flex gap-2 text-sm">
                  <svg
                    className="size-4 mt-[1px] fill-white"
                    viewBox="0 0 384 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"></path>
                  </svg>
                  +963 987 518 954
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className=" w-full  flex-col flex sm:flex-row gap-3 mt-4 justify-end">
        <a
          href="mailto:eng.majd.soubh@gmail.com"
          className="sm:w-32 text-center  bg-turquoise py-2 rounded-xl sm:rounded-md duration-300 hover:shadow-[0_0_2px_1px_#00C896] hover:scale-105"
        >
          Send Email
        </a>
        <a
          href="/Majd-Soubh-Full-Stack-Developer-Resume.pdf"
          download=""
          className="sm:w-32 bg-glassy text-center  py-2 rounded-xl sm:rounded-md  border border-turquoise duration-300 hover:shadow-[0_0_2px_1px_#00C896]  hover:scale-105"
        >
          Download CV
        </a>
      </div>
    </Card3D>
  );
}
