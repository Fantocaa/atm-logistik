import Hero from "@/components/home-page/Hero";
import Services from "@/components/home-page/Services";
import Faq from "@/components/home-page/Faq";
import ImageSection from "@/components/home-page/Image";
import ServicesArea from "@/components/home-page/Servicearea";
import Cta from "@/components/home-page/Cta";
import Bio from "@/components/home-page/Bio";

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
