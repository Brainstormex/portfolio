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
    <header className="sticky top-0 z-50 py-5 sm:mt-3 px-3 md:px-20">
      <div className="mx-auto flex justify-end lg:max-w-7xl">
        <motion.div
          className="w-full md:w-auto flex relative justify-center items-center border rounded-xl md:rounded-full border-[#51b9df] border-opacity-40 bg-[#e4f2fa] bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-md"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <nav className="flex relative justify-center items-center gap-2 px-6 py-5 md:py-4">
            <ul className="flex relative items-center justify-center gap-2 font-medium text-sm text-gray-500 flex-nowrap sm:gap-5">
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
