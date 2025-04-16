import React from "react";
import HeroCode from "./components/hero-code/HeroCode";
import HeroText from "./components/hero-text/HeroText";

const HeroBlock = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-evenly">
        <div className="w-1/2">
          <HeroText />
        </div>
        <div>
          <HeroCode />
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
