import { useScroll, motion } from "motion/react";
import React, { useEffect, useRef } from "react";
import LiIcon from "./LiIcon";

export default function Timeline({ className, children }) {
  const containerRef = useRef(null);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  return (
    <div ref={containerRef} className={" relative pl-12 sm:pl-32 " + className}>
      <div className="absolute left-8 sm:left-8 top-0 h-full">
        <LiIcon />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="mx-auto w-[2px] origin-top h-full bg-turquoise/60"
        ></motion.div>
      </div>
      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
