import { AnimatePresence, motion, useScroll } from "motion/react";
import React, { useState } from "react";
import Logo from "../assets/images/stylish-signture.png";

const containerVariants = (staggerDirection) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between child animations
      staggerDirection, // Dynamically set stagger direction
    },
  },
});

const childVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Link = ({ content, borderHoverColor, ...props }) => {
  return (
    <motion.div
      className="px-2 py-1 rounded-[18px] hover:text-white cursor-pointer"
      whileHover={{
        borderBottomWidth: 2,
        borderBottomColor: borderHoverColor,
        borderBottomStyle: "solid",
      }}
      style={{
        willChange: "transform, opacity",
        borderBottomColor: "rgba(0, 0, 0, 0)", // Explicit initial color
        borderBottomWidth: 2, // To avoid layout shifts
        borderBottomStyle: "solid", // Match hover style
      }}
      {...props}
    >
      {content}
    </motion.div>
  );
};

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // Track scrollY position to check if social links should displayed
  const { scrollY } = useScroll();
  const [socialLinksDisplayed, setSocialLinksDisplayed] = useState(false);

  scrollY.on("change", (currentScrollY) => {
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    if (currentScrollY > window.innerHeight) setSocialLinksDisplayed(true);
    else if (socialLinksDisplayed === true) setSocialLinksDisplayed(false);

    setLastScrollY(currentScrollY);
  });

  const links = [
    { content: "Home", borderHoverColor: "#FF00FF" },
    { content: "About", borderHoverColor: "#00c896" },
    { content: "Experience", borderHoverColor: "#FF00FF" },
    { content: "Skills", borderHoverColor: "#00c896" },
    { content: "Projects", borderHoverColor: "#FF00FF" },
    { content: "Contact", borderHoverColor: "#00c896" },
  ];
  const socialLinks = [
    {
      content: (
        <svg
          className="size-[22px] duration-300  fill-gray-300 hover:fill-white transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
        </svg>
      ),
    },

    {
      content: (
        <svg
          viewBox="0 0 24 24"
          className="size-[22px] duration-300 fill-gray-300 hover:fill-white transition-colors"
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
      ),
    },
    {
      content: (
        <svg
          viewBox="0 0 48 48"
          className="size-6 duration-300 fill-gray-300 hover:fill-white transition-colors"
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
      ),
    },
    {
      content: (
        <svg
          className="size-[24px] duration-300 fill-gray-300 hover:fill-white transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8 h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
        </svg>
      ),
    },
  ];

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.div
          initial={{ top: -56 }}
          animate={{ top: 0 }}
          exit={{ top: -56 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed h-[56px] will-change-[height] w-full left-0  backdrop-blur-sm z-50 border-b-[hsla(0,0%,100%,.05)] border-b"
        >
          {/* Desktop Navigation */}
          <div className="h-full max-md:hidden mx-0 py-2 px-4 lg:mx-8 flex justify-between flex-row-reverse items-center gap-3 text-slate-300">
            {/* Section links */}
            <motion.div
              variants={containerVariants(-1)}
              initial="hidden"
              animate="visible"
              className="flex gap-2"
            >
              {links.map((link, index) => (
                <Link
                  key={index}
                  variants={childVariants}
                  content={link.content}
                  borderHoverColor={link.borderHoverColor}
                />
              ))}
            </motion.div>
            <div className="flex flex-row-reverse items-center gap-4">
              {/* Social links */}
              {socialLinksDisplayed && (
                <motion.div
                  variants={containerVariants(1)}
                  initial="hidden"
                  animate="visible"
                  className="flex gap-[2px] relative after:content-[''] after:absolute after:-left-1 after:top-1/2 after:w-[1px] after:h-[50%] after:-translate-y-1/2 after:bg-slate-600/60"
                >
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      variants={childVariants}
                      content={link.content}
                      borderHoverColor={link.borderHoverColor}
                    />
                  ))}
                </motion.div>
              )}
              {/* Logo */}
              <div className="w-[40px] h-[40px]">
                <img className="w-full h-full" src={Logo} />
              </div>
            </div>
          </div>
          {/* Mobile Navigation Toggle */}
          <div className="h-full md:hidden py-2 px-2 flex flex-row-reverse justify-between items-center gap-8 text-slate-300">
            <button
              className="relative"
              onClick={() => setOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="relative flex items-center justify-center rounded-full w-[30px] h-[30px] transition-all duration-200 shadow-md">
                <div
                  className="flex flex-col gap-[8px] w-full h-full transition-all duration-300 origin-center"
                  style={{
                    transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)",
                  }}
                >
                  <div
                    className="bg-white h-[3px] w-[15px] rounded transition-all duration-300 origin-right delay-75"
                    style={{
                      transform: isOpen ? "rotate(-90deg)" : "rotate(0deg)",
                    }}
                  ></div>
                  <div className="bg-white h-[3px] w-full rounded"></div>
                  <div
                    className="bg-white h-[3px] w-[15px] rounded self-end transition-all duration-300 origin-left delay-75"
                    style={{
                      transform: isOpen ? "rotate(-90deg)" : "rotate(0deg)",
                    }}
                  ></div>
                </div>
              </div>
            </button>

            <div className="flex flex-row-reverse items-center gap-4">
              {/* Social links */}
              {socialLinksDisplayed && (
                <motion.div
                  variants={containerVariants(1)}
                  initial="hidden"
                  animate="visible"
                  className="flex justify-center w-full gap-[2px] relative after:content-[''] after:absolute after:-left-1 after:top-1/2 after:w-[1px] after:h-[50%] after:-translate-y-1/2 after:bg-slate-600/60"
                >
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      variants={childVariants}
                      content={link.content}
                      borderHoverColor={link.borderHoverColor}
                    />
                  ))}
                </motion.div>
              )}
              {/* Logo */}
              <div className="min-w-[40px] w-[40px] h-[40px]">
                <img className="w-full h-full" src={Logo} />
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <ul
            className={`absolute z-50 pb-2 overflow-hidden rounded-xl w-[200px] top-full right-8 transition-all delay-75 bg-black px-6 text-slate-300 flex flex-col justify-start items-start ${
              isOpen ? "opacity-100 h-[272px]" : "opacity-0 h-0"
            }`}
            role="menu"
            aria-hidden={!isOpen}
          >
            <li
              className="pt-3 pb-2 cursor-pointer border-b border-transparent hover:border-purple-600"
              role="menuitem"
            >
              Home
            </li>
            <li
              className="pt-3 pb-2 cursor-pointer border-b border-transparent hover:border-purple-600"
              role="menuitem"
            >
              About
            </li>
            <li
              className="pt-3 pb-2 cursor-pointer border-b border-transparent hover:border-purple-600"
              role="menuitem"
            >
              Experience
            </li>
            <li
              className="pt-3 pb-2 cursor-pointer border-b border-transparent hover:border-purple-600"
              role="menuitem"
            >
              Skills
            </li>
            <li
              className="pt-3 pb-2 cursor-pointer border-b border-transparent hover:border-purple-600"
              role="menuitem"
            >
              Projects
            </li>
            <li
              className="pt-3 pb-1 cursor-pointer border-b border-transparent hover:border-purple-600"
              role="menuitem"
            >
              Contact
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
