"use client";
import React, { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";
import { motion } from "framer-motion";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setIsVisible(true);
      } else if (scrollTop < lastScrollY) {
        setIsVisible(false);
      }
      setLastScrollY(scrollTop);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <motion.footer
      className="sticky mx-3 mb-3"
      initial={{ y: "100%" }}
      animate={{ y: isVisible ? "0%" : "100%" }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="bg-[#e4f2fa] relative border p-3 rounded-lg border-[#51b9df] flex w-full flex-col items-center justify-between gap-4 text-center md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-zinc-800">
          &copy;{new Date().getFullYear()} Uzer Sayed
        </span>
        <div className="flex gap-8 md:pr-5">
          <a
            href={"https://github.com/Brainstormex"}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Github"
          >
            <GithubIcon className="text-[#1b81ae]" />
          </a>
          <a
            href={"/error"}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Twitter"
          >
            <XIcon className="text-[#1b81ae]" />
          </a>
          <a
            href={"https://www.linkedin.com/in/uzersayed/"}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="text-[#1b81ae]" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
