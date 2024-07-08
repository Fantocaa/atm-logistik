import Hero from "@/components/home-page/Hero";
import Services from "@/components/home-page/Services";
import Faq from "@/components/home-page/Faq";
import ImageSection from "@/components/home-page/Image";
import ServicesArea from "@/components/home-page/Servicearea";
import Cta from "@/components/home-page/Cta";
import Bio from "@/components/home-page/Bio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Growth Your Bussiness With Us | PT. ANUGERAH TRANS MARITIM",
  description:
    "Memiliki jaringan yang kuat dan luas di seluruh wilayah Indonesia membuat kami bisa menjawab semua kebutuhan logistik anda.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Bio />
      <ServicesArea />
      <ImageSection />
      {/* <Faq /> */}
      <Cta />
    </>
  );
}
