import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesArea() {
  return (
    <>
      <div className="relative h-full w-full bg-darkpint">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32 relative z-10">
          <h1 className="text-white text-center pb-4 text-xl">
            Our Services Area
          </h1>
          <div className=" md:max-w-screen-md 2xl:max-w-screen-lg mx-auto pb-32 flex flex-col items-center"></div>
          <div className="relative">
            <Image
              src="/images/Provinces.svg"
              alt="map"
              width={2560}
              height={2560}
              className="mx-auto w-full h-full"
            />

            <div className="md:block">
              {/* Sumatera */}
              <span className="flex h-4 w-4 absolute top-[15px] left-[32px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
}
