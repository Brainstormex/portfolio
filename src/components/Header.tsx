"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


export type HeaderRoute = {
  name : string;
  href : string;
}

export type HeaderRoutes = HeaderRoute[];

export interface HeaderProps {
  routes : HeaderRoutes;
}

export default function Header(props : HeaderProps) {
  return (
    <header className="sticky top-0 z-50 py-5 sm:mt-3 md:px-20">
      <div className="flex justify-end">
        <motion.div
          className="h-[3.25rem] w-full flex relative justify-center items-center border rounded-none md:rounded-full md:w-[25rem] border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <nav className="flex relative justify-center items-center sm:h-[initial] sm:py-0">
            <ul className="flex relative flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
              {props.routes.map((link, index) => (
                <li
                  className="px-2 justify-center items-center"
                  key={index}
                >
                  <Link href={link.href}>
                    <div className="flex items-center justify-center hover:text-gray-950 transition">
                      {link.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}
