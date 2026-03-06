'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const }
  }
};

export function Hero() {
  return (
    <section id="hero" className="hero-shell">
      <div className="hero-video">
        <video autoPlay muted loop playsInline preload="auto" aria-label="Hero Showreel Background">
          <source src="/NewShowReel.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="hero-headline">
          <motion.span variants={fadeUp} initial="hidden" animate="visible">
            Product Designer designing AI interactions
          </motion.span>
          <br />
          <motion.span variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
            and thinking beyond the happy path
          </motion.span>
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.25 }} className="hero-name">
          Sri Harsha NMRS
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.35 }} className="hero-role">
          Worked as a UX Designer for 1 year at Credain, designing fintech workflows and complex product systems.
          <br />
          Currently being mentored by UX Anudeep while exploring AI product design and edge-case driven interaction thinking.
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="relative z-[60] mt-10 flex items-center justify-center gap-6 pointer-events-auto"
        >
          <button
            type="button"
            className="pill-contact-button"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div>
              <div>
                <div>Contact Me</div>
              </div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
