import { CardDataProps } from "@/lib/projects";
import Image from "next/image";
import React from "react";
import ImageCarousel from "@/components/utility/ImageCarousel";

interface CardProps {
  data: CardDataProps;
}

export default function ProjectCard({ data }: CardProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg border shadow-md transition-shadow duration-150 hover:shadow-md">
      <ImageCarousel images={data.imageUrl} alt={data.name} />
      <div className=" p-3 sm:p-4">
        <div className="flex items-center gap-3">
          <span className=" relative h-5 w-5">
            <Image src={data.favicon} alt={`${data.name} favicon`} fill />
          </span>
          <span className="text-sm font-semibold">{data.name}</span>
        </div>
        <div className="mt-3">
          <p className="text-xs md:text-sm text-gray-600">{data.description}</p>
        </div>
        <div className="flex mt-4 space-x-2">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-300/15 text-gray-700 px-2 py-1 rounded-md text-sm ring-1 ring-green-600 ring-inset"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-end gap-6">
          <a
            href={data.sourceCodeHref}
            className="flex items-center gap-1 text-xs md:text-sm"
            target="_blank"
          >
            Source Code
          </a>
          {data.liveWebsiteHref && (
            <a
              href={data.liveWebsiteHref}
              className="flex items-center gap-1 text-xs md:text-sm"
              target="_blank"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
