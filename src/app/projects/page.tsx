import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { cardData } from "@/lib/projects";
import React from "react";

const page = () => {
  return (
    <section className="mx-auto mb-40 w-full px-6 sm:mt-12 sm:px-14 md:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading>projects</SectionHeading>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
          {cardData.map((data, index) => (
            <ProjectCard key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
