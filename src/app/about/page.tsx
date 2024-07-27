'use client'
import SectionHeading from "@/components/SectionHeading";
import React from "react";
import Image from "next/image";
import EducationShowcase from "@/components/education/EducationShowcase";
import { educationData } from "@/lib/education";
import { motion } from "framer-motion";

export default function page() {
  return (
    <section className="">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 px-6 pb-28 sm:px-14 md:px-20 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]}}
          className="max-w-[450px] w-full md:w-2/3 lg:h-full lg:w-1/2"
        >
          <Image
            src="/aboutPageImage.png"
            alt="intro icon"
            height={450}
            width={450}
            priority={true}
            className="w-full float-end lg:max-w-[450px] md:max-w-[350px]"
          />
        </motion.div>
        <div className="flex flex-col w-full mt-10 lg:w-1/2">
          <h1 className="text-[35px] md:text-[50px] font-bold">
            It&apos;s me <span className="text-[#1b81ae]">Uzer Sayed</span>,
          </h1>
          <p className="text-base font-medium sm:text-lg">
            a passionate and dedicated developer specializing in front-end
            technologies. With a strong foundation in React for creating dynamic
            and responsive user interfaces. I thrive on solving complex problems
            and am constantly seeking to learn and adapt to new technologies. My
            GitHub showcases various projects that reflect my technical skills
            and commitment to high-quality code.
          </p>
        </div>
      </div>
      <EducationShowcase educationData={educationData} />
    </section>
  );
}
