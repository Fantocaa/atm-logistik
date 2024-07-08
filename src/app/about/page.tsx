import Header from "@/components/about-page/Header";
import Member from "@/components/about-page/Member";
import Sakti from "@/components/about-page/Sakti";
import Cta from "@/components/home-page/Cta";
import Faq from "@/components/home-page/Faq";
import ImageSection from "@/components/home-page/Image";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Growth Your Bussiness With Us | PT. ANUGERAH TRANS MARITIM",
  description:
    "Memiliki jaringan yang kuat dan luas di seluruh wilayah Indonesia membuat kami bisa menjawab semua kebutuhan logistik anda.",
};

export default function About() {
  return (
    <>
      <Header />
      <Sakti />
      <Member />
      <ImageSection />
      {/* <Faq /> */}
      <Cta />
    </>
  );
}
