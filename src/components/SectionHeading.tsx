import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-3xl font-medium capitalize text-[#1b81ae]">{children}</h2>;
}
