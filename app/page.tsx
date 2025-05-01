import Footer from "@/components/pageComponents/footer";
import FreeTest from "@/components/pageComponents/freeTest";
import HomePage from "@/components/pageComponents/Hero";
import FeatureSection from "@/components/pageComponents/HowTo";
import ListSection from "@/components/pageComponents/list-section";
import VideoSection from "@/components/pageComponents/video-section";
import Header from "@/components/shared/Header";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <HomePage />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection/>
        <FreeTest/>
      </main>
      <Footer />
    </div>
  );
}
