import { motion } from "motion/react";
import React from "react";
import LiIcon from "./LiIcon";

export default function Timeline({
  className = "",
  children,
  dateRanges = [],
}) {
  return (
    <div className={"relative pl-2 md:pl-0 " + className}>
      {/* Small Screens */}
      <div className="md:hidden ">
        <div className="absolute left-0 h-full">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mx-auto w-[2px] origin-top h-[calc(100%+10px)] bg-turquoise/60 relative after:content-[''] after:absolute after:-bottom-[2px] after:w-4 after:h-[2px] after:bg-turquoise/60"
          ></motion.div>
        </div>
        {/* Content */}
        <div className=" space-y-6">
          {React.Children.map(children, (child, index) => {
            return (
              <motion.div
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <LiIcon
                  dateRange={dateRanges[index]}
                  className={"-translate-x-[16px] animate-delay"}
                />

                {child}
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Big Screens */}
      <div className="hidden w-[736px] mx-auto md:block">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mx-auto w-[2px] origin-top h-[calc(100%+10px)] bg-turquoise/60 relative after:content-[''] after:absolute after:-bottom-[2px] after:w-4 after:h-[2px] after:bg-turquoise/60"
          ></motion.div>
        </div>
        {/* Content */}
        <div className="flex flex-row-reverse gap-y-8 justify-center [&>*]:w-[358px] flex-wrap">
          {React.Children.map(children, (child, index) => {
            return (
              <motion.div
                initial={{ x: index % 2 === 0 ? 60 : -60 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={index % 2 === 0 ? "ml-[378px]" : "mr-[378px]"}
              >
                <LiIcon
                  className={
                    "animate-delay " +
                    (index % 2 === 0
                      ? "-translate-x-[19px]"
                      : "translate-x-[358px]")
                  }
                  dateRange={dateRanges[index]}
                  side={index % 2 === 0 ? "right" : "left"}
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
