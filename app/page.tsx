import { Suspense } from 'react';
import ScrollToSection from './components/ScrollToSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import HowWeWork from './components/HowWeWork';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Suspense fallback={null}>
        <ScrollToSection />
      </Suspense>
      <Navbar />
      <Hero />
      <Problems />
      <HowWeWork />
      <Booking />
      <FAQ />
      <Footer />
    </main>
  );
}