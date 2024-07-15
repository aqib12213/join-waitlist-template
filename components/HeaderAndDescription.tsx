import React from "react";

const HeaderAndDescription = () => {
  return (
    <div className="flex flex-col justify-center gap-5 p-1 text-center lg:max-w-screen-sm">
      <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold lg:text-5xl tracking-wide leading-[110%] lg:leading-[115%]">
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
