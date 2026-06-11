import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Problems />
      <Services />
      <Process />
      <WhyUs />
      <Technologies />
      <Contact />
      <Footer />
    </main>
  );
}