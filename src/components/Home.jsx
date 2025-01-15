import React from "react";
import { SocialBoxLink } from "./partials/SocialBoxLink";
import Intro from "./partials/Intro";
import { SpotLight } from "./SpotLight";

export const Home = () => {
  return (
    <div className="relative h-dvh">
      {/* Backgroun Blur */}
      <div className="h-full w-full bg-custom-gradient absolute left-0 top-0 blur-xl" />
      {/* Intro */}
      <div className="h-full b w-[600px] max-sm:w-[min(100%,400px)] flex flex-col items-center justify-center transition-all cursor-pointer  mx-auto ">
        {/* Type Writer Intro */}
        <Intro />
        {/* Social Links */}
        <div className="mt-12 flex justify-center w-full flex-wrap gap-4">
          {/* Github */}
          <SocialBoxLink hoverColor="black" link="https://github.com/MajdSoubh">
            <svg
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="#000"
              className="group-hover:fill-white transition-colors ease-in-out duration-300"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </SocialBoxLink>

          {/* Linked in */}
          <SocialBoxLink
            hoverColor="#0077B5"
            link="https://linkedin.com/in/majd-soubh/"
          >
            <svg
              width="40"
              height="40"
              fill="#0077B5"
              className="group-hover:fill-white transition-colors ease-in-out duration-300"
              viewBox="0 0 448 512"
            >
              <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8 h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
            </svg>
          </SocialBoxLink>

          {/* Whats app */}
          <SocialBoxLink hoverColor="green" link="https://wa.me/+963987518954">
            <svg
              fill="#25D366"
              height="32"
              width="32"
              viewBox="0 0 24 24"
              className="group-hover:fill-white transition-colors ease-in-out duration-300"
            >
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <g>
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.5,3.5C18.25,1.25,15.2,0,12,0C5.41,0,0,5.41,0,12c0,2.11,0.65,4.11,1.7,5.92 L0,24l6.33-1.55C8.08,23.41,10,24,12,24c6.59,0,12-5.41,12-12C24,8.81,22.76,5.76,20.5,3.5z M12,22c-1.78,0-3.48-0.59-5.01-1.49 l-0.36-0.22l-3.76,0.99l1-3.67l-0.24-0.38C2.64,15.65,2,13.88,2,12C2,6.52,6.52,2,12,2c2.65,0,5.2,1.05,7.08,2.93S22,9.35,22,12 C22,17.48,17.47,22,12,22z M17.5,14.45c-0.3-0.15-1.77-0.87-2.04-0.97c-0.27-0.1-0.47-0.15-0.67,0.15 c-0.2,0.3-0.77,0.97-0.95,1.17c-0.17,0.2-0.35,0.22-0.65,0.07c-0.3-0.15-1.26-0.46-2.4-1.48c-0.89-0.79-1.49-1.77-1.66-2.07 c-0.17-0.3-0.02-0.46,0.13-0.61c0.13-0.13,0.3-0.35,0.45-0.52s0.2-0.3,0.3-0.5c0.1-0.2,0.05-0.37-0.02-0.52 C9.91,9.02,9.31,7.55,9.06,6.95c-0.24-0.58-0.49-0.5-0.67-0.51C8.22,6.43,8.02,6.43,7.82,6.43S7.3,6.51,7.02,6.8 C6.75,7.1,5.98,7.83,5.98,9.3c0,1.47,1.07,2.89,1.22,3.09c0.15,0.2,2.11,3.22,5.1,4.51c0.71,0.31,1.27,0.49,1.7,0.63 c0.72,0.23,1.37,0.2,1.88,0.12c0.57-0.09,1.77-0.72,2.02-1.42c0.25-0.7,0.25-1.3,0.17-1.42C18,14.68,17.8,14.6,17.5,14.45z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </SocialBoxLink>

          {/* Telegram icon */}
          {/* <SocialBoxLink hoverColor="#0077B5" link="https://t.me/+963987518954">
            <svg
            fill="#3276C3"
              viewBox="0 0 24 24"
              className="group-hover:fill-white transition-colors ease-in-out duration-300"
              >
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
              <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
              </g>
              </svg>
              </SocialBoxLink> */}

          {/* Medium icon */}
          <SocialBoxLink
            hoverColor="white"
            link="https://medium.com/@majdsoubh"
          >
            <svg
              viewBox="0 0 48 48"
              fill="#fff"
              className="group-hover:fill-black transition-colors ease-in-out duration-300"
            >
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <g>
                  <g>
                    <rect width="48" height="48" fill="none"></rect>
                  </g>
                  <g>
                    <path d="M2,40.2l5.3-6.1v-21L2.6,7.8V7H15.1l10,21.2L33.9,7H46v.8l-4,3.7V36.6l4,3.6V41H28.6v-.8l4.1-4.8V16.6L22.7,41H21.4L9.8,17.1V33.9l5.3,6.3V41H2Z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </SocialBoxLink>

          {/* Facebook icon */}
          {/* <SocialBoxLink
            hoverColor="#0077B5"
            link="https://www.facebook.com/majd.soubh.9/"
          >
            <svg
            fill="#3276C3"
            viewBox="0 0 1920 1920"
            className="group-hover:fill-white transition-colors ease-in-out duration-300"
            >
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
                <path
                  d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058"
                  fillRule="evenodd"
                ></path>
              </g>
            </svg>
            </SocialBoxLink> */}
        </div>
      </div>
    </div>
  );
};
