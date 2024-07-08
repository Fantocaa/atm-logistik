import ServicesArea from "@/components/home-page/Servicearea";
import Header from "@/components/services-page/header";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Services | Growth Your Bussiness With Us | PT. ANUGERAH TRANS MARITIM",
  description:
    "Memiliki jaringan yang kuat dan luas di seluruh wilayah Indonesia membuat kami bisa menjawab semua kebutuhan logistik anda.",
};

export default function Services() {
  return (
    <>
      <Header />
      <ServicesArea />
    </>
  );
}
