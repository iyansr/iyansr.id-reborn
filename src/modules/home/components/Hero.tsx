import React from 'react';

const Hero = () => {
  return (
    <div className="mt-14 lg:mt-24">
      <h1 className="bg-gradient-to-r from-neutral-50 to-neutral-400  bg-clip-text text-3xl font-black leading-snug text-transparent lg:text-5xl">
        Hey, {"I'm"} Iyan - A Fullstack Engineer
      </h1>
      <h2 className="home-desc mt-4 text-lg lg:w-2/3 lg:text-xl">
        I work with <span>React</span> and <span>Typescript</span> ecosystem, unleash {"it's"} power
        to create <span>beautiful</span> and
        <span> performance </span> App
      </h2>

      <div className="mt-6 flex items-center space-x-2">
        <div className="h-2 w-2 rounded-full bg-fuchsia-400" />
        <span className="text-sm font-medium leading-relaxed text-neutral-500">
          Available for freelance opportunity
        </span>
      </div>

      <div className="mt-6 flex items-center">
        <button className="rounded-full bg-fuchsia-600 px-4 py-2 text-base transition duration-150 hover:scale-105 lg:px-8 lg:text-lg">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
