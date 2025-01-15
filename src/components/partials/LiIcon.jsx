import { motion, useScroll } from "motion/react";
import { useRef } from "react";

const LiIcon = ({ className }) => {
  const svgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: svgRef,
    offset: ["start end", "end center"],
  });

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={className}
      ref={svgRef}
      width="18"
      height="18"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="50"
        className="stroke-white stroke-1 fill-none"
      ></circle>
      <motion.circle
        style={{ pathLength: scrollYProgress }}
        cx="50"
        cy="50"
        r="45"
        className="stroke-[10px] stroke-turquoise "
      ></motion.circle>
      <circle
        cx="50"
        cy="50"
        r="26"
        className=" animate-pulse stroke-1 fill-turquoise"
      ></circle>
    </motion.svg>
  );
};

export default LiIcon;
