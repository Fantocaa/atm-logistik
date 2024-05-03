import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
        <div className="bg-blueatm-900 w-full h-full text-white p-8 md:p-24 grid md:grid-cols-2 relative rounded-xl overflow-hidden">
          <div className="max-w-sm">
            <h1 className="text-4xl font-bold">
              Pertanyaan anda tidak tercantum di FAQ&apos;s?{" "}
            </h1>
            <p className="py-4">
              Jika Anda belum puas dengan FAQ&apos;s kami, Anda bisa hubungi
              kami dan sampaikan pertanyaan Anda kepada kami.
            </p>
            <Button
              variant="default"
              className=" py-3 mt-8 bg-white hover:bg-white hover:bg-opacity-75 rounded-full flex gap-2 transition-all w-fit text-blueatm-900"
              data-aos="zoom-in-right"
              data-aos-delay="400"
              data-aos-offset="-300"
            >
              Contact Us
              <ArrowRight />
            </Button>
          </div>
          <div className="absolute top-0 right-24">
            <Image
              src="/images/container.png"
              alt="container"
              width={1080}
              height={1080}
              className="h-full w-[28rem] object-cover hidden md:block"
            />
          </div>
          <div className="absolute -top-4 -right-32">
            <Image
              src="/images/ATM LOGO Putih 2.png"
              alt="container"
              width={1080}
              height={1080}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
