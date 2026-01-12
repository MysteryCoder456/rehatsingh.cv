"use client";

import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const photoSize = 300;
  const [showScrollLabel, setShowScrollLabel] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", (_ev) => {
      setShowScrollLabel(window.pageYOffset < 50);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse gap-4 md:gap-8 xl:gap-16 md:flex-row justify-center md:justify-between items-center h-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-center md:text-start">Rehatbir Singh</h1>
          <ul className="text-muted-foreground font-medium text-lg list-outside ps-4 mx-4 sm:mx-12 md:mx-0">
            <li>
              Computer Science + Data Science @{" "}
              <a href="https://wisc.edu">UW-Madison</a>
            </li>
            <li>
              Fullstack engineer and entrepreneur, interested in backend systems
              and infrastructure
            </li>
            <li>Avid beliver in simplicity</li>
            <li>
              Currently growing my startup,{" "}
              <a href="https://apps.apple.com/us/app/flux-student-startup-network/id6742727564">
                Flux
              </a>
            </li>
          </ul>
        </div>

        <Image
          src="/images/pingy.png"
          alt="Picture of Rehatbir"
          width={photoSize}
          height={photoSize}
          className="border-4 border-secondary rounded-full"
        />
      </div>

      <span
        className={`absolute bottom-4 left-[50%] translate-x-[-50%] text-base text-muted-foreground flex flex-col items-center transition-opacity ${cn(!showScrollLabel && "opacity-0")}`}
      >
        Scroll
        <ChevronDownIcon className="w-[1em] animate-bounce" />
      </span>
    </>
  );
}
