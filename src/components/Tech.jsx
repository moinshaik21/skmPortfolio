/** @format */

import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className=' flex flex-wrap justify-center items-center gap-10 w-full min-h-[100px]'>
      {technologies.map((technology) => (
        <div
          className='w-28 h-28 flex items-center justify-center flex-shrink-0'
          key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
