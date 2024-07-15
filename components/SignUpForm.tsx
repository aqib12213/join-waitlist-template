import React from "react";

const SignUpForm = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-1 px-2 md:flex-row ">
      <input
        placeholder="Your email address"
        type="email"
        className="flex w-full max-w-sm px-3 py-1 text-sm transition-colors border-2 rounded-lg shadow-sm h-9 sm:h-12 border-zinc-700 bg-zinc-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
      />
      <button className="flex items-center justify-center w-full gap-2 px-4 py-2 duration-150 rounded-lg h-9 sm:h-12 md:w-fit text-nowrap text-zinc-600 bg-zinc-50 hover:bg-zinc-100 active:bg-zinc-200">
        Join waitlist
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
          className="p-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default SignUpForm;
