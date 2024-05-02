import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32 mt-24">
        <div className="flex flex-col gap-4 items-center">
          <p
            className="bg-slate-50 p-2 px-4 inline-block rounded-full text-blueatm-900 font-medium w-fit"
            data-aos="zoom-in-right"
            data-aos-delay="200"
            data-aos-offset="-300"
          >
            🚧 Services
          </p>
          <h1 className="text-3xl md:text-5xl max-w-2xl text-center font-semibold text-dark">
            Menyajikan{" "}
            <span className="text-blueatm-900">Layanan Logistik Terbaik</span>{" "}
            untuk Anda
          </h1>
          <p className="max-w-xl text-center">
            Mengingat setiap customer memiliki kebutuhan yang berbeda-beda, kami
            menyediakan berbagai service pelayanan yang fleksibel dan variatif.
          </p>
        </div>

        <Accordion type="single" collapsible className="pt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex gap-8 items-center text-xl">
                  {" "}
                  <Image
                    src="/icon/1.svg"
                    alt="icon"
                    width={64}
                    height={64}
                  />{" "}
                  Door to Door
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xl">
                Pengambilan barang dilakukan dari gudang pengirim dan dikirimkan
                sampai dengan gudang penerima. Semua aktivitas yang terjadi di
                dalamnya termasuk dengan jasa penyedia butuh dapat disediakan
                oleh pihak kami.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex gap-8 items-center text-xl">
                  {" "}
                  <Image
                    src="/icon/2.svg"
                    alt="icon"
                    width={64}
                    height={64}
                  />{" "}
                  Port to Door
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xl">
                Pengambilan barang yang dilakukan dari pelabuhan asal akan
                dikirimkan sampai dengan gudang penerima.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex gap-8 items-center text-xl">
                  {" "}
                  <Image
                    src="/icon/3.svg"
                    alt="icon"
                    width={64}
                    height={64}
                  />{" "}
                  Door to Port
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xl">
                Pengambilan barang yang dilakukan dari gudang pengirim dan
                diantarkan sampai dengan Pelabuhan tujuan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex gap-8 items-center text-xl">
                  {" "}
                  <Image
                    src="/icon/4.svg"
                    alt="icon"
                    width={64}
                    height={64}
                  />{" "}
                  Port to Port
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-xl">
                Pengambilan barang dilakukan dari pelabuhan asal dan diantarkan
                sampai ke Pelabuhan tujuan.
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
      </section>
    </>
  );
}
