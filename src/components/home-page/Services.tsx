import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
        <div className="flex gap-8">
          <div className="w-1/2 flex flex-col gap-5">
            <div className="flex items-center gap-16">
              <Image src="/icon/1.svg" alt="icon" width={64} height={64} />
              <h1 className="text-3xl">Door to Door</h1>
            </div>
            <Separator />

            <div className="flex items-center gap-16">
              <Image src="/icon/2.svg" alt="icon" width={64} height={64} />
              <h1 className="text-3xl">Port to Door</h1>
            </div>
            <Separator />

            <div className="flex items-center gap-16">
              <Image src="/icon/3.svg" alt="icon" width={64} height={64} />
              <h1 className="text-3xl">Door to Port</h1>
            </div>
            <Separator />

            <div className="flex items-center gap-16">
              <Image src="/icon/4.svg" alt="icon" width={64} height={64} />
              <h1 className="text-3xl">Port to Port</h1>
            </div>
            <Separator />
          </div>
          <div>
            <p
              className="bg-slate-50 p-2 px-4 inline-block rounded-full text-blueatm-900 font-medium w-fit"
              data-aos="zoom-in-right"
              data-aos-delay="200"
            >
              🛟 Our Services
            </p>
            <h2
              className="text-3xl font-semibold sm:text-[56px] max-w-[31rem] leading-none pt-6 text-dark"
              data-aos="zoom-out-up"
            >
              Menyajikan{" "}
              <span className="text-blueatm-900">Layanan Logistik Terbaik</span>{" "}
              untuk Anda
            </h2>

            <p
              className="mt-4 text-gray-600 text-xl max-w-[32rem]"
              data-aos="zoom-out-up"
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
            >
              View All Services
              <ArrowRight />
            </Button>
          </div>
        </div>

        <div className="pt-16">
          <div className="flex h-32 justify-center gap-16 items-center space-x-4">
            <Separator orientation="vertical" />
            <div className="flex flex-col items-center">
              <Image src="/icon/1-1.svg" alt="icon" width={64} height={64} />
              <p className="text-4xl pt-4 font-semibold text-blueatm-900">
                40+
              </p>
              <h1>Years of Experience</h1>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col items-center">
              <Image src="/icon/1-2.svg" alt="icon" width={64} height={64} />
              <p className="text-4xl pt-4 font-semibold text-blueatm-900">
                100+
              </p>
              <h1>Owned Vehicles</h1>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col items-center">
              <Image src="/icon/1-3.svg" alt="icon" width={64} height={64} />
              <p className="text-4xl pt-4 font-semibold text-blueatm-900">
                500+
              </p>
              <h1>Employee&apos;s Staff</h1>
            </div>
            <Separator orientation="vertical" />
            <div className="flex flex-col items-center">
              <Image
                src="/icon/container.svg"
                alt="icon"
                width={64}
                height={64}
              />
              <p className="text-4xl pt-4 font-semibold text-blueatm-900">
                2000+
              </p>
              <h1>Order Shipped Safety</h1>
            </div>
            <Separator orientation="vertical" />
          </div>
        </div>
      </section>
    </>
  );
}
