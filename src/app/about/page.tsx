import Header from "@/components/about-page/Header";
import Sakti from "@/components/about-page/Sakti";
import Cta from "@/components/home-page/Cta";
import Faq from "@/components/home-page/Faq";
import ImageSection from "@/components/home-page/Image";
import React from "react";

export default function About() {
  return (
    <>
      <Header />
      <Sakti />
      <ImageSection />
      <Faq />
      <Cta />
    </>
  );
}
