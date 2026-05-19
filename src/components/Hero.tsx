import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const phrases = {
  vi: 'Truy cập nhanh – Học tập hiệu quả.',
  en: 'Quick access – Learn effectively.'
};

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let twChar = 0;
    let twDel = false;
    let twTimer: any = null;
    const str = phrases[language];

    const twStep = () => {
      if (!twDel) {
        twChar++;
        setDisplayedText(str.slice(0, twChar));
        if (twChar === str.length) {
          twTimer = setTimeout(() => {
            twDel = true;
            twStep();
          }, 3000);
          return;
        }
        twTimer = setTimeout(twStep, 50);
      } else {
        twChar--;
        setDisplayedText(str.slice(0, twChar));
        if (twChar === 0) {
          twDel = false;
          twTimer = setTimeout(twStep, 500);
          return;
        }
        twTimer = setTimeout(twStep, 25);
      }
    };

    // Start typewriter
    setDisplayedText('');
    twStep();

    return () => {
      if (twTimer) {
        clearTimeout(twTimer);
      }
    };
  }, [language]);

  return (
    <header className="hero">
      <h1 className="hero-title">Tech Resources Hub</h1>
      <div className="hero-typewriter">
        <span>{displayedText}</span>
        <span className="cursor"></span>
      </div>
    </header>
  );
};

export default Hero;
