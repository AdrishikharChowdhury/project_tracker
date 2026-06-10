"use client";
import Image from "next/image";
import Particles from "./Particles";

const Banner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden" id="home">
      <div className="absolute inset-0 bg-linear-to-br from-amber-800 to-amber-950 m-6 rounded-4xl overflow-hidden">
        <Particles
          particleColors={["#FFBF00"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 text-center px-4">
        <div className="p-6 bg-amber-950/70 rounded-2xl">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Loony <span className="text-amber-600">Wolfie</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-white">
            An interactive project tracker that monitors your git history,
            visualizes progress, and generates insights to keep your development
            workflow on track from start to completion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
