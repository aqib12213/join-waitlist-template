import React from "react";

const BackgroundImages = () => {
  return (
    <div className="absolute inset-0 z-[-1] w-screen h-screen overflow-hidden">
      {/* top light beams */}
      <div className="w-[450px] sm:w-[550px] md:w-[800px] rotate-[23deg] border-t border-zinc-800 absolute top-6 -right-8 h-36 bg-gradient-to-b from-[#181818]/70 to-black/50 " />
      <div className="w-[600px] sm:w-[700px] md:w-[1600px] rotate-[25deg] absolute top-12 sm:-top-16 sm:-right-24 lg:-top-8 border-t border-zinc-800 -right-16 lg:-right-28 h-56 bg-gradient-to-b from-[#181818]/70 to-black/50 " />

      {/* bottom light beams */}
      <div className="w-[800px] sm:w-[1400px] rotate-[25deg] absolute -bottom-44 border-t border-zinc-800 -left-44 h-56 bg-gradient-to-b from-[#181818]/70 to-black/50 " />
      <div className="w-[400px] sm:w-[800px] rotate-[23deg] border-t border-zinc-800 absolute -bottom-44 -left-36 h-56 bg-gradient-to-b from-[#181818]/70 to-black/50 " />

      {/* Top */}
      <img
        src="/3ds/holo-sphere.png"
        alt="background"
        className="absolute hidden object-cover sm:block md:left-12 md:top-12 size-56 left-6 top-6"
      />
      <img
        src="/3ds/coins-ball.png"
        alt="background"
        className="absolute object-cover size-36 md:top-12 md:right-12 sm:size-48 sm:top-6 sm:right-6 -top-3 -right-3 "
      />

      {/* center */}
      <img
        src="/3ds/holo-cylinder.png"
        alt="background"
        className="hidden lg:block absolute object-cover left-[20%] top-1/2 size-32 "
      />
      <img
        src="/3ds/holo-diamond.png"
        alt="background"
        className="hidden lg:block absolute object-cover right-[20%] top-1/2 size-32 "
      />

      {/* Bottom */}
      <img
        src="/3ds/holo-abstract-shape.png"
        alt="background"
        className="absolute object-cover size-36 sm:size-48 sm:bottom-6 md:bottom-12 md:left-12 sm:left-6 -bottom-3 -left-3 "
      />
      <img
        src="/3ds/cube-helix.png"
        alt="background"
        className="absolute hidden object-cover sm:block md:bottom-12 md:right-12 size-56 bottom-6 right-6"
      />
    </div>
  );
};

export default BackgroundImages;
