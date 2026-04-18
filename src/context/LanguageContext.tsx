import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: any) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Force English if first time visiting with the new update
    const savedVersion = localStorage.getItem('settings_version');
    if (savedVersion !== 'v2') {
      localStorage.setItem('settings_version', 'v2');
      localStorage.setItem('lang', 'en');
      return 'en';
    }
    return (localStorage.getItem('lang') as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (obj: any) => {
    if (!obj) return '';
    return obj[language] || obj['en'] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
