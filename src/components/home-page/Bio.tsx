import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CircleUserRound } from "lucide-react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Bio() {
  const Member = [
    {
      id: 1,
      name: "Rio Nizar Firdauzi",
      path: "/images/rio.png",
      company: "Direktur PT. Anugerah Trans Maritim",
      quote: "When you have a dream, you've got to grab it and never let go.",
      exp: [
        {
          expdetails: "Management Trainee PT. Meratus Line 2006 - 2008",
        },
        {
          expdetails: "Koordinator Sales Meratus Door Service 2008 - 2010",
        },
        {
          expdetails: "Kepala Cabang PT. Meratus Line Cab. Kupang 2010 - 2013",
        },
        {
          expdetails:
            "Direktur PT. Anugerah Mandiri International Trans 2013 - 2016",
        },
        {
          expdetails: "Direktur PT. Anugerah Trans Maritim 2016 - Sekarang",
        },
      ],
    },
  ];

  return (
    <section className="bg-blueatm-900 text-white mt-16 md:mt-8">
      <div className="relative">
        <div className="absolute top-64 -left-32 2xl:left-0">
          <Image
            src="/images/ATM LOGO Putih 2.png"
            alt="container"
            width={2560}
            height={2560}
            className="w-full h-full 2xl:scale-150"
          />
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
          <div className="flex flex-col items-center gap-8">
            <p
              className="bg-slate-50 p-2 px-4 inline-block rounded-full text-blueatm-900 font-medium w-fit"
              data-aos="zoom-in-up"
              data-aos-delay="100"
              data-aos-offset="-300"
            >
              💁‍♂️ Who We Are
            </p>
            <h1
              className="text-4xl max-w-2xl text-center font-semibold"
              data-aos="zoom-in-up"
              data-aos-delay="200"
              data-aos-offset="-300"
            >
              Kami Berdedikasi untuk bisa menjawab semua kebutuhan Logistik
              Anda.
            </h1>
            <p
              className="text-center max-w-3xl z-10"
              data-aos="zoom-in-bottom"
              data-aos-delay="250"
              data-aos-offset="-300"
            >
              Kami berkomitmen penuh untuk menjawab setiap kebutuhan logistik
              Anda dengan solusi yang tepat dan efisien. Percayakan pengiriman
              Anda kepada kami, karena kepuasan Anda adalah prioritas utama
              kami.
            </p>

            <div>
              {/* <Carousel
                className="max-w-sm md:max-w-screen-lg"
                opts={{
                  align: "start",
                  // loop: true,
                }}
              >
                <CarouselContent> */}
              {Member.map((value, index) => (
                // <CarouselItem
                //   className="basis-11/12 md:basis-1/3"
                //   key={value.id}
                // >
                <div
                  className="w-full md:grid grid-cols-10 mt-8"
                  key={value.id}
                >
                  <div className="bg-white bg-opacity-10 rounded-xl relative col-span-4">
                    <Image
                      src={value.path}
                      width={1080}
                      height={1080}
                      alt="profile"
                    />
                    {/* <div className="absolute p-3 bottom-4 w-full">
                      <div className="bg-white rounded-xl p-4 group h-20 transition-all duration-300 overflow-hidden">
                        <div className="flex items-stretch gap-2">
                          <CircleUserRound className="text-blueatm-900 w-10 h-10" />
                          <div>
                            <h3 className="text-lg/tight font-semibold text-dark">
                              {value.name}
                            </h3>
                            <p className="mt-0.5 text-blueatm-900 text-sm">
                              {value.company}
                            </p>
                          </div>
                        </div> */}
                    {/* <div className="text-dark pt-2 opacity-0  group-hover:opacity-100 group-hover:duration-500 transition-opacity">
                              {value.quote}
                            </div> */}
                    {/* </div>
                    </div> */}
                  </div>
                  <div className="col-span-6 md:pl-6 flex-col pt-4 md:pt-0 gap-6 flex">
                    <div className="justify-between w-full items-end hidden md:flex">
                      <h1 className="font-medium text-4xl">
                        Ketahui Mengenai Kami 👉
                      </h1>
                      <Link href="/about">
                        <Button
                          variant="default"
                          className=" py-3 text-blueatm-900 bg-white hover:bg-blue-50 rounded-full flex gap-2 transition-all w-fit"
                          data-aos="zoom-in-up"
                          data-aos-delay="400"
                          data-aos-offset="-300"
                        >
                          More About Us
                          <ArrowRight size={20} />
                        </Button>
                      </Link>
                    </div>
                    <div className="bottom-4 w-full">
                      <div className="bg-white rounded-xl p-4 md:p-8 group h-full transition-all duration-300 overflow-hidden">
                        <div className="flex items-center gap-4">
                          <CircleUserRound className="text-blueatm-900 w-16 h-16" />
                          <div>
                            <h3 className="text-2xl md:text-4xl/tight font-semibold text-dark">
                              {value.name}
                            </h3>
                            <p className="text-blueatm-900 text-lg">
                              {value.company}
                            </p>
                          </div>
                        </div>
                        {/* <div className="text-dark pt-2 opacity-0  group-hover:opacity-100 group-hover:duration-500 transition-opacity">
                              {value.quote}
                            </div> */}
                        <ul className="list-disc max-w-xs md:max-w-xl text-dark ml-6 text-base md:text-xl w-full">
                          {value.exp.map((experience, index) => (
                            <li key={index} className="pt-4">
                              {experience.expdetails}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* </CarouselItem> */}
              {/* </CarouselContent>
                <CarouselPrevious className="text-blueatm-900 md:inline-flex" />
                <CarouselNext className="text-blueatm-900 hidden md:inline-flex" />
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
