"use client";

import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "aos/dist/aos.css";
import CountUp from "react-countup";

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
        <div className="md:flex flex-row-reverse gap-8 justify-end">
          <div>
            <p
              className="bg-slate-50 p-2 px-4 inline-block rounded-full text-blueatm-900 font-medium w-fit"
              data-aos="zoom-in-right"
              data-aos-delay="200"
              data-aos-offset="-300"
            >
              🛟 Our Services
            </p>
            <h2
              className="text-3xl font-semibold sm:text-[56px] max-w-[31rem] leading-none pt-6 text-dark"
              data-aos="zoom-out-up"
              data-aos-offset="-300"
            >
              Menyajikan{" "}
              <span className="text-blueatm-900">Layanan Logistik Terbaik</span>{" "}
              untuk Anda
            </h2>

            <p
              className="mt-4 text-gray-600 text-xl max-w-[32rem]"
              data-aos="zoom-out-up"
              data-aos-delay="300"
              data-aos-offset="-300"
            >
              Mengingat setiap customer memiliki kebutuhan yang berbeda-beda,
              kami menyediakan berbagai service pelayanan yang fleksibel dan
              variatif.
            </p>

            <Button
              variant="default"
              className=" py-3 mt-8 bg-blueatm-900 hover:bg-blueatm-600 rounded-full flex gap-2 transition-all w-fit"
              data-aos="zoom-in-right"
              data-aos-delay="400"
              data-aos-offset="-300"
            >
              View All Services
              <ArrowRight />
            </Button>
          </div>
          <div className="md:w-1/2 flex flex-col gap-5 pt-16 md:pt-0">
            <div className="flex items-center gap-16">
              <Image
                src="/icon/1.svg"
                alt="icon"
                width={64}
                height={64}
                data-aos="zoom-in-right"
                data-aos-offset="-300"
                // data-aos-delay="200"
              />
              <h1
                className="text-3xl"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-offset="-300"
              >
                Door to Door
              </h1>
            </div>
            <Separator data-aos-delay="150" data-aos-offset="-300" />

            <div className="flex items-center gap-16">
              <Image
                src="/icon/2.svg"
                alt="icon"
                width={64}
                height={64}
                data-aos="zoom-in-right"
                data-aos-delay="100"
                data-aos-offset="-300"
              />
              <h1
                className="text-3xl"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-offset="-300"
              >
                Port to Door
              </h1>
            </div>
            <Separator data-aos-delay="250" data-aos-offset="-300" />

            <div className="flex items-center gap-16">
              <Image
                src="/icon/3.svg"
                alt="icon"
                width={64}
                height={64}
                data-aos="zoom-in-right"
                data-aos-delay="200"
                data-aos-offset="-300"
              />
              <h1
                className="text-3xl"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-offset="-300"
              >
                Door to Port
              </h1>
            </div>
            <Separator data-aos-delay="350" data-aos-offset="-300" />

            <div className="flex items-center gap-16">
              <Image
                src="/icon/4.svg"
                alt="icon"
                width={64}
                height={64}
                data-aos="zoom-in-right"
                data-aos-delay="300"
                data-aos-offset="-300"
              />
              <h1
                className="text-3xl"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-offset="-300"
              >
                Port to Port
              </h1>
            </div>
            <Separator data-aos-delay="450" data-aos-offset="-300" />
          </div>
        </div>

        <div className="pt-16">
          <div className="grid grid-cols-2 md:flex h-32 justify-center gap-8 md:gap-16 items-center mt-8 md:mt-0">
            <Separator orientation="vertical" className="hidden md:block" />
            <div className="flex flex-col items-center">
              <Image
                src="/icon/1-1.svg"
                alt="icon"
                width={64}
                height={64}
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-offset="-300"
              />
              <p
                className="text-4xl pt-4 font-semibold text-blueatm-900"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="-300"
              >
                <CountUp
                  end={40}
                  duration={2.75}
                  enableScrollSpy
                  scrollSpyOnce
                ></CountUp>
                +
              </p>
              <h1
                data-aos="zoom-in-right"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-offset="-300"
              >
                Years of Experience
              </h1>
            </div>
            <Separator orientation="vertical" className="hidden md:block" />
            <div className="flex flex-col items-center">
              <Image
                src="/icon/1-2.svg"
                alt="icon"
                width={64}
                height={64}
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="100"
                data-aos-offset="-300"
              />
              <p
                className="text-4xl pt-4 font-semibold text-blueatm-900"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="-300"
              >
                <CountUp
                  end={100}
                  duration={2.75}
                  enableScrollSpy
                  scrollSpyOnce
                ></CountUp>
                +
              </p>
              <h1
                data-aos="zoom-in-right"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-offset="-300"
              >
                Owned Vehicles
              </h1>
            </div>
            <Separator orientation="vertical" className="hidden md:block" />
            <div className="flex flex-col items-center">
              <Image
                src="/icon/1-3.svg"
                alt="icon"
                width={64}
                height={64}
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-offset="-300"
              />
              <p
                className="text-4xl pt-4 font-semibold text-blueatm-900"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="-300"
              >
                <CountUp
                  end={500}
                  duration={2.75}
                  enableScrollSpy
                  scrollSpyOnce
                ></CountUp>
                +
              </p>
              <h1
                data-aos="zoom-in-right"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-offset="-300"
              >
                Employee&apos;s Staff
              </h1>
            </div>
            <Separator orientation="vertical" className="hidden md:block" />
            <div className="flex flex-col items-center">
              <Image
                src="/icon/container.svg"
                alt="icon"
                width={64}
                height={64}
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-offset="-300"
              />
              <p
                className="text-4xl pt-4 font-semibold text-blueatm-900"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="-300"
              >
                <CountUp
                  end={2000}
                  duration={2.75}
                  enableScrollSpy
                  scrollSpyOnce
                ></CountUp>
                +
              </p>
              <h1
                data-aos="zoom-in-right"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-offset="-300"
                className="text-center"
              >
                Order Shipped Safety
              </h1>
            </div>
            <Separator orientation="vertical" className="hidden md:block" />
          </div>
        </div>
      </section>
    </>
  );
}
