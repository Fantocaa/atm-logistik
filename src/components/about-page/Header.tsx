"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Header() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <>
      <section className="mt-8 2xl:pt-16 font-medium">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4">
            <div className="">
              <p
                className="bg-slate-50 p-2 px-4 inline-block rounded-full text-blueatm-900 font-medium w-fit"
                data-aos="zoom-in-right"
                data-aos-delay="200"
                data-aos-offset="-300"
              >
                ⚓ About Us
              </p>
              <h2
                className="text-3xl font-bold sm:text-5xl leading-none pt-6 text-dark"
                data-aos="zoom-out-up"
                data-aos-offset="-300"
              >
                PT. ANUGERAH TRANS MARITIM (ATM TRANS)
              </h2>

              <p
                className="mt-8 text-gray-600 text-xl max-w-[34rem]"
                data-aos="zoom-out-up"
                data-aos-offset="-300"
              >
                PT. Anugerah Trans Maritim (ATM Trans) adalah perusahaan
                logistik yang bernaung dibawah holding PT. Tako Anugerah
                Koporasi. Berdiri sejak 1 Februari 2016, diprakarsai dan
                didukung oleh team professional yang telah berpengalaman di
                bidang logistik selama puluhan tahun.
                <br />
                <br />
                Memiliki jaringan yang kuat dan luas di seluruh wilayah
                Indonesia membuat kami bisa menjawab semua kebutuhan logistik
                anda. PT. Anugerah Trans Maritim (ATM Trans) akan memastikan
                layanan kami adalah yang terlengkap dan terbaik di Indonesia.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-[13.8rem]">
                <div
                  className="bg-slate-50 rounded-xl p-6 flex gap-4 items-center w-full justify-center"
                  data-aos="zoom-in-down"
                  data-aos-delay="450"
                  data-aos-offset="-400"
                >
                  <Image
                    src="/icon/1-1.svg"
                    width={64}
                    height={64}
                    alt="container"
                    data-aos="zoom-in-left"
                    data-aos-delay="600"
                    data-aos-offset="-500"
                  />
                  <div
                    className="flex flex-col justify-end items-center h-full"
                    data-aos="zoom-in-left"
                    data-aos-delay="600"
                    data-aos-offset="-400"
                  >
                    <h1 className="text-center text-3xl text-blueatm-900 font-semibold">
                      40+
                    </h1>
                    <h1 className="text-sm">Years of Experience</h1>
                  </div>
                </div>
                <div
                  className="bg-slate-50 rounded-xl p-6 flex gap-4 items-center w-full justify-center"
                  data-aos="zoom-in-down"
                  data-aos-delay="450"
                  data-aos-offset="-400"
                >
                  <Image
                    src="/icon/1-2.svg"
                    width={64}
                    height={64}
                    alt="container"
                    data-aos="zoom-in-left"
                    data-aos-delay="600"
                    data-aos-offset="-500"
                  />
                  <div
                    className="flex flex-col justify-end items-center h-full"
                    data-aos="zoom-in-left"
                    data-aos-delay="600"
                    data-aos-offset="-400"
                  >
                    <h1 className="text-center text-3xl text-blueatm-900 font-semibold">
                      100+
                    </h1>
                    <h1 className="text-sm">Owned Vehicles</h1>
                  </div>
                </div>
                <div
                  className="bg-slate-50 rounded-xl p-6 flex gap-4 items-center w-full justify-center"
                  data-aos="zoom-in-down"
                  data-aos-delay="450"
                  data-aos-offset="-400"
                >
                  <Image
                    src="/icon/1-3.svg"
                    width={64}
                    height={64}
                    alt="container"
                    data-aos="zoom-in-left"
                    data-aos-delay="600"
                    data-aos-offset="-500"
                  />
                  <div
                    className="flex flex-col justify-end items-center h-full"
                    data-aos="zoom-in-left"
                    data-aos-delay="600"
                    data-aos-offset="-400"
                  >
                    <h1 className="text-center text-3xl text-blueatm-900 font-semibold">
                      500+
                    </h1>
                    <h1 className="text-sm">Employees on Staff</h1>
                  </div>
                </div>
                <div
                  className="bg-slate-50 rounded-xl p-6 flex gap-4 items-center w-full justify-center"
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
                  />
                  <div
                    className="flex flex-col justify-end items-center h-full"
                    data-aos="zoom-in-left"
                    data-aos-delay="600"
                    data-aos-offset="-400"
                  >
                    <h1 className="text-center text-3xl text-blueatm-900 font-semibold">
                      2000+
                    </h1>
                    <h1 className="text-sm">Order Shipped Safety</h1>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="bg-slate-50 rounded-xl"
                data-aos="zoom-in-down"
                data-aos-delay="400"
                data-aos-offset="-300"
              >
                <Image
                  src="/images/frame10.png"
                  width={1440}
                  height={1440}
                  alt="ship-hero"
                  className="h-fit w-fit object-cover p-8"
                  data-aos="zoom-in-up"
                  data-aos-delay="600"
                  data-aos-offset="-300"
                />
              </div>
              <div className="grid grid-row-2 gap-4">
                <div
                  className="bg-slate-50 rounded-xl flex items-center mt-4 p-6"
                  data-aos="zoom-in-down"
                  data-aos-delay="500"
                  data-aos-offset="-300"
                >
                  <div className="text-center">
                    <h1
                      data-aos="zoom-in-right"
                      data-aos-delay="600"
                      data-aos-offset="-300"
                      className="text-3xl font-semibold text-blueatm-900 text-center "
                    >
                      Visi :
                    </h1>
                    <h1
                      className="text-2xl text-dark text-center pt-4"
                      data-aos="zoom-in-right"
                      data-aos-delay="600"
                      data-aos-offset="-300"
                    >
                      Menjadi perusahaan logistik yang terlengkap dan terbaik di
                      Indonesia
                    </h1>
                  </div>
                </div>
                <div
                  className="bg-slate-50 rounded-xl p-6 flex gap-4 items-center w-full justify-center"
                  data-aos="zoom-in-down"
                  data-aos-delay="450"
                  data-aos-offset="-400"
                >
                  <div
                    className=" h-full"
                    data-aos="zoom-in-left"
                    data-aos-delay="600"
                    data-aos-offset="-400"
                  >
                    <h1
                      data-aos="zoom-in-right"
                      data-aos-delay="600"
                      data-aos-offset="-300"
                      className="text-3xl font-semibold text-blueatm-900 text-center"
                    >
                      Misi :
                    </h1>
                    <ul className="pt-4 list-disc ml-8">
                      <li>
                        Menawarkan jasa logistik yang terlengkap untuk semua
                        kebutuhan customer
                      </li>
                      <li>
                        Membantu pengembangan bisnis customer dengan menjadi
                        mitra logistik yang memperlancar & meningkatkan jalur
                        distribusi
                      </li>
                      <li>Membangun jaringan yang kuat di seluruh indonesia</li>
                      <li>
                        Bersama dengan tim memberikan informasi logistik yang
                        cepat dan akurat kepada customer
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
