"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <>
      <section className="pt-5 2xl:pt-16 font-medium">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-16 md:mt-0">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="lg:py-16">
              <p
                className="bg-slate-50 p-2 px-4 hidden md:inline-block rounded-full text-blueatm-900 font-medium w-fit mt-6"
                data-aos="zoom-in-right"
                data-aos-delay="200"
                data-aos-offset="-300"
              >
                PT. Anugerah Trans Maritim
              </p>
              <h2
                className="text-4xl font-bold sm:text-[56px] leading-none pt-6 text-dark"
                data-aos="zoom-out-up"
                data-aos-offset="-300"
              >
                <span className="text-blueatm-900">Make</span> Your
                🛳️🌊Bussiness <span className="text-blueatm-900">Growth</span>
              </h2>

              <p
                className="mt-4 text-gray-600 md:text-xl max-w-[30rem]"
                data-aos="zoom-out-up"
                data-aos-offset="-300"
              >
                Memiliki jaringan yang kuat dan luas di seluruh wilayah
                Indonesia membuat kami bisa menjawab semua kebutuhan logistik
                anda.
              </p>

              <Button
                variant="default"
                className=" py-3 mt-6 bg-blueatm-900 hover:bg-blueatm-600 rounded-full flex gap-2 transition-all w-fit"
                data-aos="zoom-in-right"
                data-aos-delay="400"
                data-aos-offset="-300"
              >
                Get Started
                <ArrowRight />
              </Button>
            </div>
            <div className="grid md:grid-rows-2 gap-4">
              <div
                className="bg-slate-50 rounded-xl h-fit md:h-full py-6 md:py-0"
                data-aos="zoom-in-down"
                data-aos-delay="400"
                data-aos-offset="-300"
              >
                <Image
                  src="/images/Frame 8.png"
                  width={1440}
                  height={1440}
                  alt="ship-hero"
                  className="w-full h-56 md:h-full md:w-full object-cover"
                  data-aos="zoom-in-up"
                  data-aos-delay="600"
                  data-aos-offset="-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-rows-2 gap-4">
                  <div
                    className="bg-slate-50 rounded-xl px-4 md:p-6 flex items-center"
                    data-aos="zoom-in-down"
                    data-aos-delay="500"
                    data-aos-offset="-300"
                  >
                    <h1
                      className="text-xl md:text-[28px] md:leading-9 font-semibold text-dark"
                      data-aos="zoom-in-right"
                      data-aos-delay="600"
                      data-aos-offset="-300"
                    >
                      Ensure the{" "}
                      <span className="text-blueatm-900">Safety</span> of Your{" "}
                      <span className="text-blueatm-900">Shipment</span>
                    </h1>
                  </div>
                  <div
                    className="bg-slate-50 rounded-xl p-4 md:p-6 md:flex gap-4 items-center w-full justify-center"
                    data-aos="zoom-in-down"
                    data-aos-delay="450"
                    data-aos-offset="-400"
                  >
                    <Image
                      src="/icon/container.svg"
                      width={64}
                      height={64}
                      alt="container"
                      data-aos="zoom-in-left"
                      data-aos-delay="600"
                      data-aos-offset="-500"
                      className="w-12 h-12 md:w-16 md:h-16 mx-auto"
                    />
                    <div
                      className="md:flex flex-col justify-end items-center h-full"
                      data-aos="zoom-in-left"
                      data-aos-delay="600"
                      data-aos-offset="-400"
                    >
                      <h1 className="text-center text-3xl text-blueatm-900 font-semibold mt-2">
                        2000+
                      </h1>
                      <h1 className="text-sm">Order Shipped Safety</h1>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-slate-50 rounded-xl"
                  data-aos="zoom-in-down"
                  data-aos-delay="450"
                  data-aos-offset="-300"
                >
                  <Image
                    src="/images/Frame 10.png"
                    alt="container-hero"
                    width={1080}
                    height={1080}
                    className="w-full md:h-64 pt-16"
                    data-aos="zoom-in-up"
                    data-aos-delay="700"
                    data-aos-offset="-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
