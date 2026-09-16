import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    role: "Authentication & Access Control Module — Intern",
    org: "Cycops Business Solutions Private Limited",
    duration: "2 Months",
    description: "Built authentication and role-based access control features for a multi-role project management portal, working across sysadmin, admin, and client-facing flows.",
    tag: "INTERNSHIP"
  },
  {
    role: "Video Editing Co-Lead",
    org: "Bioscope Film Making Club",
    duration: "1 Year",
    description: "Co-led the video editing team, overseeing post-production workflows and mentoring club members on editing techniques for club productions.",
    tag: "LEADERSHIP"
  },
  {
    role: "Crew Member",
    org: "Beat The Heat Dance Club",
    duration: "3 Years",
    description: "Contributed as a core crew member across multiple seasons, supporting event execution and team coordination for club performances.",
    tag: "TEAM"
  }
];

const Experience = () => {
  const sectionRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      rowRefs.current,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !rowRefs.current.includes(el)) {
      rowRefs.current.push(el);
    }
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full bg-[#050505] text-white py-24 px-6 md:px-12 select-none overflow-hidden"
    >
      {/* Cinematic Red Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12">

        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">EPISODE 03</span>
            <span className="text-white/40">|</span>
            <span>POSITIONS OF RESPONSIBILITY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              EXPERIENCE.
            </span>
          </h2>
        </div>

        {/* Timeline Rows */}
        <div className="flex flex-col gap-5">
          {experienceData.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[1.75rem] shadow-2xl hover:border-red-600/60 transition-all duration-500"
            >
              {/* Duration Badge */}
              <div className="shrink-0 md:w-40">
                <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-red-500 bg-red-600/10 border border-red-600/25 px-3 py-1 rounded">
                  {item.duration}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-12 bg-white/10"></div>

              {/* Content */}
              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg md:text-xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                    {item.role}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 border border-white/15 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-white/60 font-mono uppercase tracking-wide">{item.org}</p>
                <p className="text-sm text-white/60 font-light leading-relaxed max-w-2xl pt-1">
                  {item.description}
                </p>
              </div>

              {/* Red Corner Dot */}
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-red-600 group-hover:shadow-[0_0_10px_#E50914] transition-all"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
