import AboutUsSection from "./components/AboutUsSection";
import AdmissionSection from "./components/AdmissionSection";
import ContactUsSection from "./components/ContactUsSection";
import CoursesSection from "./components/CoursesSection";
import HeroBanner from "./components/HeroBanner";
import NewsEventsSection from "./components/NewsEventsSection";
import TestimonialsSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <>
      {/* <Carousel /> */}
      <HeroBanner />
      <AboutUsSection />
      <CoursesSection />
      <AdmissionSection />
      <TestimonialsSection />
      <NewsEventsSection />
      <ContactUsSection />
    </>
  );
}
