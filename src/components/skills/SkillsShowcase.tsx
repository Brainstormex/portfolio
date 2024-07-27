"use client";

import React from "react";
import SkillPill, { type SkillPillProps } from "@/components/skills/SkillPill";
import SectionHeading from "../SectionHeading";
import { AnimatePresence, motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 * index,
    },
  }),
};

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  return (
    <section className="px-6 py-28 sm:px-14 md:px-20">
      <SectionHeading>My skills</SectionHeading>
      <div className="relative py-6">
        <div>
          {skills.map((section) => (
            <AnimatePresence key={section.sectionName}>
              <div className="mb-4">
                <span>{section.sectionName}</span>
                <ul className="mt-2 flex flex-wrap gap-4 text-xl">
                  {section.skills.map((pill, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: false,
                      }}
                    >
                      <SkillPill {...pill} />
                    </motion.div>
                  ))}
                </ul>
              </div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </section>
  );
}
