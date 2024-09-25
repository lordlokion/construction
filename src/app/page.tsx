import Header from '../app/components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import MarqueLogo from './components/MarqueLogo';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MarqueLogo />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}