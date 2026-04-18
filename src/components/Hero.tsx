import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const title = t({ vi: "Tài nguyên công nghệ", en: "Tech Resources" });
  const characters = Array.from(title);
  const totalDuration = 3;
  const staggerDelay = totalDuration / characters.length;

  return (
    <div className="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="hero-title">
          {characters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: index * staggerDelay,
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span 
            className="cursor"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
          <span className="dot">.</span>
        </h1>
        <p className="hero-subtitle">
          {t({
            vi: "Bộ sưu tập tài nguyên kỹ thuật số được tuyển chọn chuyên nghiệp",
            en: "A professionally curated collection of digital resources"
          })}
        </p>
      </motion.div>

      <style>{`
        .hero {
          padding: 6rem 1.5rem 4rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .hero-title {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -0.05em;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: var(--brand-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          min-height: 1.1em;
        }
        .cursor {
          -webkit-text-fill-color: var(--brand-secondary);
          margin-left: 2px;
          font-weight: 200;
        }
        .dot {
          color: var(--brand-secondary);
          -webkit-text-fill-color: var(--brand-secondary);
        }
        .hero-subtitle {
          font-family: 'IBM Plex Mono', monospace;
          color: var(--text-secondary);
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default Hero;
