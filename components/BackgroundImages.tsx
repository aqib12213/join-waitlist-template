import React from 'react'

const BackgroundImages = () => {
  return (
        <div className="absolute inset-0 z-[-1] w-screen h-screen overflow-hidden">
            {/* Top */}
            <img src='/3ds/holo-sphere.png' alt="background" className="absolute hidden object-cover sm:block md:left-12 md:top-12 size-56 left-6 top-6" />
            <img src='/3ds/coins-ball.png' alt="background" className="absolute object-cover size-36 md:top-12 md:right-12 sm:size-48 sm:top-6 sm:right-6 -top-3 -right-3 " />

            {/* center */}
            <img src='/3ds/holo-cylinder.png' alt="background" className="hidden lg:block absolute object-cover left-[20%] top-1/2 size-32 " />
            <img src='/3ds/holo-diamond.png' alt="background" className="hidden lg:block absolute object-cover right-[20%] top-1/2 size-32 " />

            {/* Bottom */}
            <img src='/3ds/holo-abstract-shape.png' alt="background" className="absolute object-cover size-36 sm:size-48 sm:bottom-6 md:bottom-12 md:left-12 sm:left-6 -bottom-3 -left-3 " />
            <img src='/3ds/cube-helix.png' alt="background" className="absolute hidden object-cover sm:block md:bottom-12 md:right-12 size-56 bottom-6 right-6" />
        </div>
  )
}

export default BackgroundImages