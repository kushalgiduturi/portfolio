import { useState } from 'react';
import NetflixPreloader from './components/NetflixPreloader';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-[#050505] min-h-screen text-white relative cursor-none selection:bg-red-600 selection:text-white">
      {/* Cinematic Preloader */}
      {loading && <NetflixPreloader onComplete={() => setLoading(false)} />}

      {/* Global Mouse Hover Effects & Spotlight across ALL sections */}
      <CustomCursor />

      {/* Light/Dark theme toggle */}
      <ThemeToggle />

      {/* Portfolio Sections */}
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Achievements />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;