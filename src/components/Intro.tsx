"use client";
import React from "react";
import ParticlesContainer from "./ParticlesContainer";
import { motion } from "framer-motion";

import Image from "next/image";

export default function Intro() {
  return (
    <section className="h-full">
      <ParticlesContainer />
      <div className="flex place-content-around relative flex-wrap h-full">
        <div className="flex flex-col justify-center">
          <h1 className="flex flex-col text-[35px] md:text-[50px] text-white font-bold">
            Hi, I'am <span className=" text-yellow-400">Uzer Sayed</span>
          </h1>
          <div className="flex text-[2rem] md:text-[3rem]">
            Frontend Developer
          </div>
          <p className="flex mt-[2rem] text-[18px]">
            I bring Ideas to Life in Pixels and Code
          </p>
        </div>

        <div className="flex relative justify-center items-center">
          <Image
            src="/introIcon.svg"
            alt="intro icon"
            height={450}
            width={450}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
