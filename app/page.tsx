import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Learning from '@/components/Learning';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-white selection:text-black relative">
      {/* ML/AI Background Image */}
      <div className="ml-background" />
      <div className="ml-background-overlay" />

      {/* Content Layer - above background */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Learning />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
