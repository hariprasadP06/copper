import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col justify-start">
      <h1 className="text-6xl font-black">
        <span className="text-orange-500"> Hono</span> <br /> Web application
        framework
      </h1>

      <p className="text-2xl text-slate-400 mt-4">
        Fast, lightweight, built on Web Standards. Support for any JavaScript
        runtime.
      </p>
      <div className="flex flex-row justify-start">
        <button className="btn bg-amber-500 rounded-full">Get Started</button>
        <button className="btn bg-gray-400 rounded-full">View on Github</button>
      </div>
    </div>
  );
};

export default HeroText;
