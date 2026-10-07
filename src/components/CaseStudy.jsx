import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCaseStudy } from '../data/caseStudies';
import Footer from './Footer';

const Reveal = ({ children, className = '', style }) => (
  <motion.div
    className={className}
    style={style}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const Label = ({ children }) => (
  <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold">{children}</h3>
);

const SectionTitle = ({ index, children }) => (
  <div className="flex items-center gap-3">
    <span className="text-xs font-mono font-bold text-red-500 px-2 py-0.5 rounded bg-red-600/10 border border-red-600/25">{index}</span>
    <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white">{children}</h2>
  </div>
);

const Bullets = ({ items }) => (
  <ul className="space-y-3 text-sm md:text-base text-white/80 font-light leading-relaxed">
    {items.map((t, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-red-600"></span>
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

const Card = ({ children, className = '' }) => (
  <div className={`p-6 md:p-8 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-xl ${className}`}>{children}</div>
);

const ItemGrid = ({ items, cols = 'md:grid-cols-2' }) => (
  <div className={`grid grid-cols-1 ${cols} gap-4`}>
    {items.map((it) => (
      <div key={it.name} className="p-5 bg-[#141414]/90 border border-white/10 rounded-2xl hover:border-red-600/50 transition-colors space-y-2">
        <div className="text-sm md:text-base font-bold text-white">{it.name}</div>
        <p className="text-sm text-white/70 font-light leading-relaxed">{it.text}</p>
      </div>
    ))}
  </div>
);

const LiveButton = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black font-bold text-xs uppercase tracking-widest rounded hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_10px_35px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95"
  >
    Open live site
    <span aria-hidden="true">↗</span>
  </a>
);

const CaseStudy = ({ slug }) => {
  const study = getCaseStudy(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (study) document.title = `${study.title} Case Study | Kushal Giduturi`;
    return () => { document.title = 'Kushal Giduturi'; };
  }, [slug, study]);

  if (!study) return null;
  let n = 0;
  const num = () => String(++n).padStart(2, '0');
  const totalControls = study.security.groups.reduce((a, g) => a + g.items.length, 0);

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-x-clip select-text">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[180px] pointer-events-none"></div>

      <header className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 pt-6 pb-2 flex items-center justify-between pr-20">
        <a href="#projects" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-red-500 transition-colors">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7l-7 7 7 7" /></svg>
          All projects
        </a>
        <span className="hidden sm:block text-sm font-black tracking-tighter text-red-600">KUSHAL GIDUTURI</span>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pb-24 space-y-20 md:space-y-28">
        <section className="pt-10 md:pt-16 space-y-8">
          <Reveal className="space-y-5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 border border-red-600/40 text-[11px] font-mono uppercase tracking-widest text-red-500 font-bold">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              {study.eyebrow}
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700">{study.title}</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">{study.summary}</p>
          </Reveal>

          <Reveal className="grid grid-cols-2 md:[grid-template-columns:repeat(var(--n),minmax(0,1fr))] gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden" style={{ '--n': study.meta.length }}>
            {study.meta.map((m) => (
              <div key={m.label} className="bg-[#0b0b0b] p-5 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">{m.label}</div>
                <div className="text-sm md:text-base font-bold text-white">{m.value}</div>
              </div>
            ))}
          </Reveal>

          <Reveal><LiveButton url={study.liveUrl} /></Reveal>

          <Reveal>
            <img src={study.banner} alt={`${study.title} cover`} className="w-full rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)]" />
          </Reveal>
        </section>

        <Reveal className="space-y-6">
          <SectionTitle index={num()}>Overview &amp; problem</SectionTitle>
          <div className="space-y-4 max-w-3xl text-sm md:text-base text-white/80 font-light leading-relaxed">
            {study.overview.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="space-y-4"><Label>Who it is for</Label><Bullets items={study.targetUsers} /></Card>
          <Card className="space-y-4"><Label>{study.goalsTitle}</Label><Bullets items={study.designGoals} /></Card>
        </Reveal>

        <Reveal className="space-y-8">
          <SectionTitle index={num()}>{study.flowTitle}</SectionTitle>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {study.flow.map((step, i) => (
              <li key={i} className="flex items-start gap-4 p-5 bg-[#141414]/90 border border-white/10 rounded-2xl hover:border-red-600/50 transition-colors">
                <span className="shrink-0 w-10 h-10 rounded-full bg-red-600/10 border border-red-600/40 text-red-500 font-mono font-black text-sm flex items-center justify-center">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm md:text-base text-white/80 font-light leading-relaxed pt-1.5">{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="space-y-6">
          <SectionTitle index={num()}>{study.tracks.title}</SectionTitle>
          <p className="max-w-3xl text-sm md:text-base text-white/80 font-light leading-relaxed">{study.tracks.intro}</p>
          <ItemGrid items={study.tracks.items} />
        </Reveal>

        <Reveal className="space-y-6">
          <SectionTitle index={num()}>{study.features.title}</SectionTitle>
          <ItemGrid items={study.features.items} />
        </Reveal>

        <Reveal className="space-y-6">
          <SectionTitle index={num()}>{study.labs.title}</SectionTitle>
          <p className="max-w-3xl text-sm md:text-base text-white/80 font-light leading-relaxed">{study.labs.intro}</p>
          <ItemGrid items={study.labs.items} cols="md:grid-cols-3" />
        </Reveal>

        <Reveal className="space-y-6">
          <SectionTitle index={num()}>{study.architecture.title}</SectionTitle>
          <div className="space-y-4 max-w-3xl text-sm md:text-base text-white/80 font-light leading-relaxed">
            {study.architecture.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="flex flex-wrap gap-2">
            {study.architecture.stack.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-white/80 bg-white/5 border border-white/10">{s}</span>
            ))}
          </div>
        </Reveal>

        {/* Security */}
        <section className="space-y-8" id="security">
          <Reveal className="space-y-4">
            <SectionTitle index={num()}>{study.security.title}</SectionTitle>
            <p className="max-w-3xl text-sm md:text-base text-white/80 font-light leading-relaxed">{study.security.intro}</p>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 border border-red-600/40 text-[11px] font-mono uppercase tracking-widest text-red-500 font-bold">
              {totalControls} controls across {study.security.groups.length} layers
            </div>
          </Reveal>
          {study.security.groups.map((g, gi) => (
            <Reveal key={g.name} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-red-500">{String(gi + 1).padStart(2, '0')}</span>
                <Label>{g.name}</Label>
              </div>
              <ItemGrid items={g.items} cols="md:grid-cols-2 lg:grid-cols-3" />
            </Reveal>
          ))}
        </section>

        <Reveal className="space-y-6">
          <SectionTitle index={num()}>{study.gallery.title}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.gallery.items.map((img) => (
              <figure key={img.caption} className="space-y-3">
                <img src={img.src} alt={img.caption} loading="lazy" className={`w-full rounded-2xl border border-white/10 bg-[#0b0b0b] ${img.contain ? 'h-64 object-contain p-8' : ''}`} />
                <figcaption className="space-y-1">
                  <div className="text-xs font-mono text-red-500 uppercase tracking-wider font-bold">{img.caption}</div>
                  <p className="text-sm text-white/70 font-light leading-relaxed">{img.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal className="space-y-6">
          <SectionTitle index={num()}>Key learnings</SectionTitle>
          <Card><Bullets items={study.learnings} /></Card>
        </Reveal>

        <Reveal className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-red-600/15 via-[#141414] to-[#0a0a0a]">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-widest text-white/50">See it running</div>
            <div className="text-2xl md:text-4xl font-black tracking-tight text-white">hastra.onrender.com</div>
          </div>
          <LiveButton url={study.liveUrl} />
        </Reveal>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;
