import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Industries = lazy(() => import('./components/Industries'));
const Solutions = lazy(() => import('./components/Solutions'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Process = lazy(() => import('./components/Process'));
const CTA = lazy(() => import('./components/CTA'));
const Contact = lazy(() => import('./components/Contact'));

const SectionLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#F4C95D]/25 border-t-[#F4C95D] rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Solutions />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Industries />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CTA />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
