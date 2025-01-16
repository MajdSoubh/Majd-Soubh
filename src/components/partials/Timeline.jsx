import { useScroll, motion, useSpring } from "motion/react";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

export default function Timeline({ className = "", children }) {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  return (
    <div ref={timelineRef} className={"relative pl-8 md:pl-0 " + className}>
      {/* Small Screens */}
      <div className="md:hidden ">
        <div className="absolute left-0 h-full">
          <motion.div
            style={{ scaleY }}
            initial={{ scaleY: 0 }} // Start with scaleY at 0 (hidden)
            animate={{ scaleY: 1 }} // Animate to scaleY 1 (visible)
            transition={{ delay: 0.5 }} // Wait 0.5 seconds before starting the animation
            className="mx-auto w-[2px] origin-top h-full bg-turquoise/60"
          ></motion.div>
        </div>
        {/* Content */}
        <div className=" space-y-8">
          {React.Children.map(children, (child, index) => {
            return (
              <motion.div
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <LiIcon className={"-translate-x-[40px] "} />

                {child}
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Big Screens */}
      <div className="hidden w-[768px] mx-auto md:block">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full">
          <motion.div
            style={{ scaleY }}
            className="mx-auto w-[2px] origin-top h-full bg-turquoise/60"
          ></motion.div>
        </div>
        {/* Content */}
        <div className="flex flex-row-reverse gap-y-8 justify-center [&>*]:w-[343px] flex-wrap">
          {React.Children.map(children, (child, index) => {
            return (
              <motion.div
                initial={{ x: index % 2 === 0 ? 60 : -60 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={index % 2 === 0 ? "ml-[393px]" : "mr-[393px]"}
              >
                <LiIcon
                  className={
                    index % 2 === 0
                      ? "-translate-x-[33px]"
                      : "translate-x-[358px]"
                  }
                />

                {child}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
