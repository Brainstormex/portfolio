"use client";
import React from "react";
import ParticlesContainer from "./ParticlesContainer";
import { motion } from "framer-motion";

import Image from "next/image";

export default function Intro() {
  return (
    <section className="h-[calc(100vh-100px)] flex justify-center">
      <ParticlesContainer />
      <div className="flex flex-col-reverse justify-between md:flex-row relative items-center w-full sm:justify-around md:justify-between px-6 sm:px-14 md:px-20 z-10">
        <div className="w-full pb-20 md:pb-0 mt-10 md:w-1/2 lg:w-1/2">
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I'am <span className="text-yellow-400">Uzer Sayed</span>
          </h1>
          <div className="text-[2rem] md:text-[3rem]">
            Frontend Developer
          </div>
          <p className="mt-[2rem] text-[18px]">
            I bring Ideas to Life in Pixels and Code
          </p>
        </div>

        <div className="max-w-[450px] sm:w-1/2 md:w-2/3 lg:w-full">
          <Image
            src="/introIcon.svg"
            alt="intro icon"
            height={450}
            width={450}
            priority={true}
            className="w-full float-end lg:max-w-[450px] md:max-w-[350px]"
          />
        </div>
      </div>
    </section>
  );
}
