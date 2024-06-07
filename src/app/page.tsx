import {
  FeaturedCourses,
  Footer,
  HeroSection,
  Instructors,
  MusicSchoolTestimonials,
  UpcomingWebinars,
  WhyChooseUs,
} from "@/components";

const Home = () => {
  return (
    <main className="bg-grid-white/[0.02] min-h-screen bg-black/[0.96] antialiased">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
};

export default Home;
