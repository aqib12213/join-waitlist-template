import React from "react";

const LogoAndChip = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-1">
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
        className="p-1 border-2 rounded-lg bg-zinc-700 border-zinc-500 size-11"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>

      <div className="flex items-center gap-2 p-1 px-3 border-2 md:p-1.5 md:px-4 bg-gradient-to-r from-zinc-900 to-zinc-950 w-fit rounded-xl border-zinc-700">
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
        <span className="text-xs text-zinc-300 lg:text-base">Amazing resources coming your way</span>
      </div>
    </div>
  );
};

export default LogoAndChip;
