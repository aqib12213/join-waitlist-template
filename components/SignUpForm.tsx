import React from "react";

const SignUpForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <div className="flex flex-col items-center justify-center w-full gap-3 px-2 sm:gap-4 md:flex-row">
        <input
          placeholder="Your email address"
          type="email"
          className="flex w-full max-w-sm px-3 py-1 text-sm transition-colors border rounded-lg shadow-sm h-9 sm:h-12 border-zinc-700 bg-zinc-900/80 file:border-0 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
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

      <div className="flex items-center justify-between gap-2 text-xs sm:gap-3 sm:text-sm">
        {/* avatar stack */}
        <div className="flex -space-x-3">
          <img
            src="https://i.pravatar.cc/32"
            alt="avatar"
            className="border rounded-full bg-zinc-600 size-6 sm:size-8 "
          />
          <img
            src="https://i.pravatar.cc/32"
            alt="avatar"
            className="border rounded-full bg-zinc-600 size-6 sm:size-8"
          />
          <img
            src="https://i.pravatar.cc/32"
            alt="avatar"
            className="border rounded-full bg-zinc-600 size-6 sm:size-8"
          />
        </div>
        <p className="text-zinc-300">Join 2,000+ others who signed up </p>

        {/* social media icons */}

        <div className="flex gap-2 px-2 border-l sm:px-4 sm:gap-3 text-zinc-400">
          {/* twitter */}
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
            className="cursor-pointer hover:text-zinc-300 size-4 sm:size-6"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>

          {/* youtube */}
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
            className="cursor-pointer hover:text-zinc-300 size-4 sm:size-6"
          >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
          </svg>

          {/* linkedin */}
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
            className="cursor-pointer hover:text-zinc-300 size-4 sm:size-6"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
