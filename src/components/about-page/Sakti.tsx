import Image from "next/image";
import React from "react";
import BotComponent from "./sakti/bot-component";
import { Badge } from "@/components/ui/badge";

export default function Sakti() {
  const isiBadge = [
    { id: 1, text: "Solusi" },
    { id: 2, text: "Amanah" },
    { id: 3, text: "Komunikasi" },
    { id: 4, text: "Tanggung Jawab" },
    { id: 5, text: "Inovasi" },
  ];

  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
        <div className="grid md:grid-cols-6 gap-4 pb-4">
          <div
            className="w-full col-span-3 flex justify-center flex-col"
            data-aos="zoom-in-down"
            data-aos-delay="450"
            data-aos-offset="-400"
          >
            <div className="md:flex gap-12 items-center max-w-sm md:max-w-xl">
              <h1 className=" md:text-center text-[64px] text-blueatm-900 font-bold">
                SAKTI
              </h1>
              <h1 className="w-full text-lg">
                Menyajikan solusi logistik terbaik dengan layanan{" "}
                <span className="text-blueatm-900 font-semibold">SAKTI</span>{" "}
                kami, dapat memberikan Anda kemudahan dan kehandalan dalam
                setiap pengiriman.
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 pt-8">
              {isiBadge.map((value) => (
                <Badge
                  variant="default"
                  className="px-4 py-2 text-base text-white hover:text-white bg-blueatm-900 hover:bg-blue-700"
                  key={value.id}
                >
                  {value.text}
                </Badge>
              ))}
            </div>
          </div>

          <div
            className="bg-slate-50 rounded-xl w-full col-span-3 hidden md:block"
            data-aos="zoom-in-down"
            data-aos-delay="450"
            data-aos-offset="-400"
          >
            <Image
              src="/images/ship2.png"
              width={1440}
              height={1440}
              alt="ship"
              data-aos="zoom-in-left"
              data-aos-delay="600"
              data-aos-offset="-500"
              className="w-full h-64 object-contain"
            />
          </div>
        </div>
        <BotComponent />
      </section>
    </>
  );
}
