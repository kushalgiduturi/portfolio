import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const icons = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5a2.5 2.5 0 0 0-2.5 2.5v1A2.5 2.5 0 0 0 4 10.5a2.5 2.5 0 0 0 1.3 4.4A2.75 2.75 0 0 0 8 18a2.5 2.5 0 0 0 1-.21V6.5A2 2 0 0 0 9 4.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 4.5a2.5 2.5 0 0 1 2.5 2.5v1A2.5 2.5 0 0 1 20 10.5a2.5 2.5 0 0 1-1.3 4.4A2.75 2.75 0 0 1 16 18a2.5 2.5 0 0 1-1-.21V6.5a2 2 0 0 1 1-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h2m2 0h2M9 12h2m2 0h2M9 16h2m2 0h2" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 18a4.5 4.5 0 0 1-.5-8.98A5.5 5.5 0 0 1 17.2 8.02 4 4 0 0 1 17 18H7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 15l2-2 2 2M11.5 13v4" />
    </svg>
  )
};

const expertiseData = [
  {
    number: "01",
    icon: "shield",
    title: "Cybersecurity & Ethical Hacking",
    text: "Performing web application security assessments with OWASP ZAP, Burp Suite, Nmap, and Metasploit, backed by CEH v13 and Digital Forensics Essentials certifications.",
    tag: "OFFENSIVE SECURITY",
    gradient: "from-[#1f0a0c] via-[#121212] to-[#0a0a0a]"
  },
  {
    number: "02",
    icon: "code",
    title: "Full-Stack Development",
    text: "Architecting secure, multi-role web platforms — PHP/MySQL project management portals with authentication pipelines, role-based access control, and modular architecture.",
    tag: "API & ARCHITECTURE",
    gradient: "from-[#1a0809] via-[#111111] to-[#090909]"
  },
  {
    number: "03",
    icon: "brain",
    title: "AI & Deep Learning",
    text: "Building deep reinforcement learning systems for zero-day cyberattack detection using PyTorch and CUDA, achieving 99% precision across five benchmark datasets.",
    tag: "INTELLIGENCE & ML",
    gradient: "from-[#220a0d] via-[#131313] to-[#0a0a0a]"
  },
  {
    number: "04",
    icon: "cloud",
    title: "Cloud & Deployment",
    text: "Deploying containerized services with Docker and FastAPI, backed by AWS Academy Graduate certifications in Cloud Architecting and Cloud Foundations.",
    tag: "DEVOPS & CLOUD",
    gradient: "from-[#1d090b] via-[#101010] to-[#080808]"
  }
];

const Expertise = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return; // Keep the top-most card fully focused

      gsap.to(card, {
        scale: 0.92 - index * 0.025,
        y: -15 - index * 8,
        filter: "blur(6px)",
        opacity: 0.4,
        scrollTrigger: {
          trigger: card,
          start: `top ${90 + index * 20}px`,
          end: "bottom top",
          scrub: true,
        }
      });
    });

    // Magnetic mouse highlight per card
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    cards.forEach((card) => {
      if (!card) return;
      const listener = (e) => handleMouseMove(e, card);
      card.addEventListener('mousemove', listener);
      return () => card.removeEventListener('mousemove', listener);
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="relative w-full bg-[#050505] text-white py-20 px-6 md:px-12 select-none overflow-hidden"
    >
      {/* Cinematic Red Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12">
        
        {/* Compact Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/80 backdrop-blur-xl border border-red-600/40 text-[11px] font-mono uppercase tracking-widest text-white shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
              <span className="text-red-500 font-bold">EPISODE 02</span>
              <span className="text-white/40">|</span>
              <span>CORE COMPETENCIES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_25px_rgba(229,9,20,0.35)]">
                TECHNICAL CAPABILITIES.
              </span>
            </h2>
          </div>
          <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-xs">
            Merging full-stack engineering, scalable microservices, and AI integrations into production-ready platforms.
          </p>
        </div>

        {/* Compact 1-on-1 Gradient Stacking Container */}
        <div className="relative flex flex-col gap-8 pb-20">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className={`sticky w-full p-6 md:p-8 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-2xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex flex-col justify-between min-h-[230px] md:min-h-[250px] transform-gpu transition-all overflow-hidden group hover:border-red-600/50`}
              style={{
                zIndex: index + 1,
                top: `${95 + index * 16}px`
              }}
            >
              {/* Dynamic Mouse Spotlight Highlight */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: 'radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.18), transparent 70%)'
                }}
              ></div>

              {/* Crimson Accent Stripe */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent z-10"></div>

              {/* Card Header Top */}
              <div className="flex items-center justify-between w-full mb-4 relative z-10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 px-2.5 py-0.5 rounded bg-red-600/10 border border-red-600/25">
                  {item.tag}
                </span>
                <span className="text-2xl md:text-3xl font-mono font-black text-white/20">
                  {item.number}
                </span>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center my-auto relative z-10">
                <div className="lg:col-span-5 flex items-center gap-4">
                  <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-red-600/10 border border-red-600/40 flex items-center justify-center text-red-500 shadow-[0_0_25px_rgba(229,9,20,0.15)] group-hover:bg-red-600/20 group-hover:border-red-600/70 group-hover:shadow-[0_0_25px_rgba(229,9,20,0.4)] transition-all duration-300">
                    <span className="w-7 h-7 md:w-8 md:h-8">{icons[item.icon]}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-snug group-hover:text-red-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Subtle Red Corner Dot */}
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-red-600 group-hover:shadow-[0_0_10px_#E50914] z-10 transition-all"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Expertise;