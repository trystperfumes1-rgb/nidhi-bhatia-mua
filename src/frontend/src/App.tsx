import { Suspense, lazy } from "react";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";

const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const WhyChooseUs = lazy(() => import("./pages/WhyChooseUs"));
const CelebrityWork = lazy(() => import("./pages/CelebrityWork"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const FAQSection = lazy(() => import("./pages/FAQSection"));
const ContactMap = lazy(() => import("./pages/ContactMap"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-deep-dark text-foreground overflow-x-hidden">
      <Navbar />
      <FloatingButtons />

      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CelebrityWork />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ContactMap />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
