import TopStrip from "../components/TopStrip";

import Hero from "../components/Hero";
import FeaturedPrograms from "../components/FeaturedPrograms";
import WhyChooseACA from "../components/WhyChooseACA";
import ModularCourses from "../components/ModularCourses";
import Announcements from "../components/Announcements";
import AdmissionsBanner from "../components/AdmissionsBanner";

function Home() {
  return (
    <>
          <TopStrip />
          <Hero />

      <FeaturedPrograms />

      <WhyChooseACA />

      <ModularCourses />

      

      <Announcements />

      <AdmissionsBanner />
    </>
  );
}

export default Home;