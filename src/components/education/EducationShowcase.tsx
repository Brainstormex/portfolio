"use client";

import { EducationDataProps } from "@/lib/education";
import React, { useRef } from "react";
import EducationListItems from "./EducationListItems";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "../SectionHeading";
import { motion, useScroll } from "framer-motion";

interface EducationShowcaseProps {
  educationData: EducationDataProps[];
}

export default function EducationShowcase({educationData}: EducationShowcaseProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="px-6 py-28 sm:px-14 md:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading>education</SectionHeading>
        <div ref={ref} className="relative w-full mt-16 md:mx-auto md:w-[90%]">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[1.15rem] top-5 h-full w-[5px] origin-top rounded-lg bg-[#3cacd7]"
          ></motion.div>
          <ul className="ml-4 w-full items-center">
            {educationData.map((data, index) => (
              <EducationListItems key={index} data={data} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
