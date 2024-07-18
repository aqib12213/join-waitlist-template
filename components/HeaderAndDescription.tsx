import React from "react";

const HeaderAndDescription = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-1 text-center lg:max-w-screen-sm">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-[110%] bg-gradient-to-b from-zinc-100 to-[#ADADAD] bg-clip-text text-transparent">
        Be the First to Experience the Future – Join Our Waitlist Now!
      </h1>
      <p className="text-lg text-zinc-400">
        Be among the first to experience our groundbreaking innovations. By
        joining our waitlist, you&apos;`ll gain priority access to new features,
        updates, and special offers before anyone else.
      </p>
    </div>
  );
};

export default HeaderAndDescription;
