import { useRef } from "react";

const LiIcon = ({ className, dateRange, side = "right" }) => {
  const svgRef = useRef(null);

  return (
    <div className={"relative " + className}>
      <svg ref={svgRef} width="18" height="18" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="43"
          className="stroke-[10px] stroke-turquoise "
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="26"
          className=" animate-pulse stroke-1 fill-turquoise"
        ></circle>
      </svg>
      {dateRange && (
        <div
          className="absolute h-7 -top-5 left-6 text-slate-200 bg-turquoise/55 cursor-pointer p-2 rounded-lg text-xs"
          style={{
            left: side === "left" ? -15 : 32,
            transform: side === "left" ? "translateX(-100%)" : "",
          }}
        >
          {dateRange}
        </div>
      )}
    </div>
  );
};

export default LiIcon;
