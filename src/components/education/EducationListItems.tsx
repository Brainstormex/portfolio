import { EducationDataProps } from "@/lib/education";
import Link from "next/link";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface EducationListItemsProps {
  data: EducationDataProps;
}
export default function EducationListItems({ data }: EducationListItemsProps) {
  return (
    <li className="flex flex-col gap-1 mb-14 mx-auto w-[60%] lg:w-[80%] ">
      <div className="absolute left-0 w-10 h-10 rounded-full bg-black">
        <div className="absolute rounded-full inset-0 bg-[#3cacd7] m-auto w-2/3 h-2/3"></div>
      </div>
      <div>
        <h3 className="text-base font-bold sm:text-xl md:text-2xl">
          {data.title}
        </h3>
        <h4 className="text-[#1b81ae] text-sm font-medium">
          <a
            href={data.organisation.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {data.organisation.name}
          </a>
        </h4>
        <span className="text-sm font-medium">
          {data.date} | {data.location}
        </span>
      </div>
    </li>
  );
}
