"use client";
import React from "react";
import ParticlesContainer from "./ParticlesContainer";
import { motion } from "framer-motion";

import Image from "next/image";

export default function Intro() {
  return (
    <section className="h-[calc(100vh-100px)] flex justify-center">
      <div className="flex flex-col-reverse justify-between lg:flex-row relative items-center w-full sm:justify-around lg:justify-between px-6 sm:px-14 md:px-20 z-10 mx-auto lg:max-w-7xl">
        <div className="w-full pb-20 md:pb-0 mt-10 lg:w-1/2">
          <h1 className="text-[35px] md:text-[50px] font-bold">
            <span className="text-[#1b81ae]">Hi</span>
            , I&apos;m <span className="text-[#1b81ae]">Uzer Sayed</span>
          </h1>
          <div className="text-[2rem] md:text-[3rem]">
            Frontend Developer
          </div>
          <p className="mt-[2rem] text-[18px]">
            I bring Ideas to Life in Pixels and Code
          </p>
        </div>

        <div className="w-full md:w-2/3 lg:w-1/2 flex justify-center">
          <Image
            src="/homePageImage.png"
            alt="intro icon"
            height={450}
            width={450}
            priority={true}
            className="w-full h-auto max-w-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
