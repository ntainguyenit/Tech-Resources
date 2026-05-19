import React from 'react';
import { Search, Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';


interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onBrandClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  onBrandClick 
}) => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const handleBrandClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onBrandClick?.();
  };

  const handleLangToggle = () => {
    const nextLang = language === 'vi' ? 'en' : 'vi';
    setLanguage(nextLang);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        {/* Left: Brand Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={handleBrandClick}>
          <span className="nav-logo">
            Tech Resources
          </span>
        </div>

        {/* Center: Capsule Search Bar */}
        <div className="nav-center">
          <div className="search-wrapper">
            <Search className="search-icon" size={14} />
            <input 
              type="text" 
              className="search-input" 
              placeholder={language === 'vi' ? "Tìm kiếm tài nguyên..." : "Search resources..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Right: Controls (Language Toggle & Theme Toggle) */}
        <div className="nav-controls">
          <button onClick={handleLangToggle} className="lang-toggle-btn">
            <Globe size={15} />
            <span>{language.toUpperCase()}</span>
          </button>
          
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
