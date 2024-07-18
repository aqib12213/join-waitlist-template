import * as React from "react";

const LogoAndChip = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-1">
      {/* Logo */}
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="p-1.5 border rounded-lg bg-zinc-700 text-black border-zinc-500 size-11"
      >
        <mask
          id="mask0_408_139"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={180}
          height={180}
        >
          <circle cx={90} cy={90} r={90} fill="black" />
        </mask>
        <g mask="url(#mask0_408_139)">
          <circle
            cx={90}
            cy={90}
            r={87}
            fill="black"
            stroke="white"
            strokeWidth={6}
          />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="url(#paint0_linear_408_139)"
          />
          <rect
            x={115}
            y={54}
            width={12}
            height={72}
            fill="url(#paint1_linear_408_139)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_408_139"
            x1={109}
            y1={116.5}
            x2={144.5}
            y2={160.5}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="paint1_linear_408_139"
            x1={121}
            y1={54}
            x2={120.799}
            y2={106.875}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>

      {/* Chip */}
      <div className="font-medium text-sm leading-5 relative flex items-center text-zinc-400 gap-1.5 rounded-xl border bg-gradient-to-tr from-zinc-950/80 to-zinc-800/80 border-zinc-700 h-7 pr-2.5 pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=" p-0.5 size-5"
        >
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
        <span>Amazing resources coming your way</span>
      </div>
    </div>
  );
};

export default LogoAndChip;
