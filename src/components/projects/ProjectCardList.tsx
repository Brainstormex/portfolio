"use client";

import React from "react";
import { CardDataProps } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { useRouter } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";

interface CardListProps {
  cardData: CardDataProps[];
}

export default function CardList({ cardData }: CardListProps) {
  const router = useRouter();

  const handleViewAllProjects = () => {
    router.push("/projects");
  };

  return (
    <section className="px-6 py-28 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading>My projects</SectionHeading>
        <div className="py-6 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
          {cardData.slice(0, 3).map((data, index) => (
            <ProjectCard key={index} data={data} />
          ))}
        </div>
        <button
            className="mt-4 p-2 bg-[#3cacd7] hover:bg-[#1b81ae] text-white rounded-lg"
            onClick={handleViewAllProjects}
          >
            View All Projects
          </button>
      </div>
    </section>
  );
}
