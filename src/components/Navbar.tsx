import React from 'react';
import { Search, Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useToast } from '../context/ToastContext';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchQuery, setSearchQuery }) => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { showToast } = useToast();

  const handleLangToggle = () => {
    const newLang = language === 'vi' ? 'en' : 'vi';
    setLanguage(newLang);
    showToast(newLang === 'vi' ? 'Đã chuyển sang Tiếng Việt' : 'Switched to English');
  };

  const handleThemeToggle = () => {
    toggleTheme();
    showToast(theme === 'light' ? (language === 'vi' ? 'Chế độ tối' : 'Dark Mode') : (language === 'vi' ? 'Chế độ sáng' : 'Light Mode'));
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo-gradient">TR</div>
          <span className="nav-title">Tech Resources</span>
        </div>

        <div className="nav-center">
          <div className="search-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder={t({ vi: "Tìm kiếm tài nguyên...", en: "Search resources..." })}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="nav-right">
          <button onClick={handleLangToggle} className="icon-btn" title={t({ vi: "Chuyển đổi ngôn ngữ", en: "Change language" })}>
            <Globe size={20} />
            <span className="lang-text">{language.toUpperCase()}</span>
          </button>
          <button onClick={handleThemeToggle} className="icon-btn" title={t({ vi: "Chế độ sáng/tối", en: "Light/Dark mode" })}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: var(--bg-primary);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          padding: 0.75rem 0;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
        }
        .nav-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .logo-gradient {
          width: 36px;
          height: 36px;
          background: var(--brand-gradient);
          color: white;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1rem;
        }
        .nav-title {
          font-weight: 700;
          font-size: 1.125rem;
          background: var(--brand-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: none;
        }
        @media (min-width: 640px) { .nav-title { display: block; } }

        .nav-center {
          flex: 1;
          max-width: 500px;
          margin: 0 1.5rem;
        }
        .search-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
          pointer-events: none;
        }
        .search-input {
          width: 100%;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          padding: 0.625rem 1rem 0.625rem 2.75rem;
          color: var(--text-primary);
          font-size: 0.875rem;
          transition: all 0.2s;
        }
        .search-input:focus {
          outline: none;
          border-color: var(--brand-primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .icon-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          transition: all 0.2s;
        }
        .icon-btn:hover {
          background: var(--bg-secondary);
          color: var(--brand-primary);
        }
        .lang-text {
          font-weight: 600;
          font-size: 0.75rem;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
