import React from "react";
import Image from "next/image";

export default function ServicesArea() {
  return (
    <>
      <div className="relative h-full w-full bg-darkpint">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32 relative z-10">
          <div className="w-full flex flex-col items-center pb-8">
            <p
              className="bg-slate-50 p-2 px-4 inline-block rounded-full text-blueatm-900 font-medium w-fit "
              data-aos="zoom-in-right"
              data-aos-delay="200"
              data-aos-offset="-300"
            >
              📌 Service Area
            </p>
            <h1 className="text-4xl font-semibold pt-8">Lokasi Service Kami</h1>
            <p className="max-w-xl text-center pt-4 text-gray-600">
              Jangkauan layanan kami mencakup wilayah yang luas, memberikan
              solusi logistik yang efisien dan terpercaya di seluruh lokasi.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/map.gif"
              alt="map"
              width={1280}
              height={1280}
              className="mx-auto w-full h-[480px] object-cover"
            />
            <div className="md:block">
              {/* Sumatera */}
              <span className="flex h-4 w-4 absolute top-[15px] left-[32px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
              </span>
            </div>
          </div>
          <div className="pt-16 w-full grid grid-cols-1 md:grid-cols-3">
            <div>
              <h1 className="text-2xl">Sumatera & Kepulauan Riau</h1>
              <ul className="grid grid-rows-6 grid-cols-2 list-disc list-inside gap-2 pt-4 text-gray-600">
                <li>Medan</li>
                <li>Aceh</li>
                <li>Palembang</li>
                <li>Batam</li>
                <li>Bangka Belitung</li>
                <li>Bengkulu</li>
                <li>Padang</li>
                <li>Pekanbaru</li>
                <li>Jambi</li>
                <li>Dumai</li>
                <li>Gunung Sitoli</li>
                <li>Sibolga</li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <h1 className="text-2xl">Maluku</h1>
              <ul className="grid grid-rows-6 grid-cols-2 list-disc list-inside gap-2 pt-4 text-gray-600">
                <li>Ambon</li>
                <li>Ternate</li>
                <li>Halmahera</li>
                <li>Tobelo</li>
                <li>Namlea</li>
                <li>Saumlaki</li>
                <li>Taliabu</li>
                <li>Bacan</li>
                <li>Sula</li>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl">Kalimantan</h1>
              <ul className="grid grid-rows-6 grid-cols-2 list-disc list-inside gap-2 pt-4 text-gray-600">
                <li>Banjarmasin</li>
                <li>Kumai</li>
                <li>Sampit</li>
                <li>Samarinda</li>
                <li>Pontianak</li>
                <li>Tarakan</li>
                <li>Balikpapan</li>
                <li>Berau</li>
                <li>Palangkaraya</li>
                <li>Bontang</li>
                <li>Batulicin</li>
                <li>Nunukan</li>
              </ul>
            </div>

            <div className="pt-16">
              <h1 className="text-2xl">Sulawesi</h1>
              <ul className="grid grid-rows-6 grid-cols-2 list-disc list-inside gap-2 pt-4 text-gray-600">
                <li>Manado</li>
                <li>Toli-Toli</li>
                <li>Palu</li>
                <li>Luwuk</li>
                <li>Makassar</li>
                <li>Gorontalo</li>
                <li>Kendari</li>
                <li>BauBau</li>
                <li>Morowali</li>
                <li>Sangihe</li>
                <li>Raha</li>
                <li>Banggai Laut</li>
              </ul>
            </div>
            <div className="pt-16">
              <h1 className="text-2xl">Lombok & Sumbawa (NTB)</h1>
              <ul className="grid grid-rows-4 md:grid-rows-6 grid-cols-2 list-disc list-inside gap-2 pt-4 text-gray-600">
                <li>Mataram</li>
                <li>Kumai</li>
                <li>Bima</li>
                <li>Dompu</li>
                <li>Lombok Timur</li>
                <li>Lombok Utara</li>
                <li>Lombok Barat</li>
              </ul>
            </div>
            <div className="pt-16">
              <h1 className="text-2xl">Timor, Flores, Sumba & Alor (NTT)</h1>
              <ul className="grid grid-rows-6 grid-cols-3 list-disc list-inside gap-2 pt-4 text-gray-600">
                <li>Labuhan Bajo</li>
                <li>Ruteng</li>
                <li>Bima</li>
                <li>Reo</li>
                <li>Rote</li>
                <li>Bajawa</li>
                <li>Waikelo</li>
                <li>Ende</li>
                <li>Maumere</li>
                <li>Larantuka</li>
                <li>Alor</li>
                <li>Kupang</li>
                <li>Soe</li>
                <li>Kefamaru</li>
                <li>Atambua</li>
                <li>Waingapu</li>
                <li>Waikabuba</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
