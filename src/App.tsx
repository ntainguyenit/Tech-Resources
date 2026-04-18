import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResourceCard from './components/ResourceCard';
import Footer from './components/Footer';
import { categories } from './data/resources';
import { useLanguage } from './context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useLanguage();

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    
    const query = searchQuery.toLowerCase();
    return categories.map(cat => {
      const filteredSections = cat.sections.map(sec => {
        const filteredLinks = sec.links.filter(link => 
          link.name.toLowerCase().includes(query) || 
          t(link.note).toLowerCase().includes(query)
        );
        return { ...sec, links: filteredLinks };
      }).filter(sec => sec.links.length > 0);
      
      return { ...cat, sections: filteredSections };
    }).filter(cat => cat.sections.length > 0);
  }, [searchQuery, t]);

  return (
    <div className="app">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="container">
        <Hero />

        <div className="content-layout">
          <aside className="sidebar">
            <nav className="side-nav">
              <h3 className="side-nav-title">{t({ vi: "Danh mục", en: "Categories" })}</h3>
              {categories.map(cat => (
                <a key={cat.id} href={`#${cat.id}`} className="side-nav-link">
                  {t(cat.title)}
                </a>
              ))}
            </nav>
          </aside>

          <section className="main-content">
            <AnimatePresence mode="popLayout">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat, idx) => (
                  <motion.div
                    key={cat.id}
                    id={cat.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="category-section"
                  >
                    <header className="category-header">
                      <h2 className="category-title">{t(cat.title)}</h2>
                      <p className="category-desc">{t(cat.description)}</p>
                    </header>

                    {cat.sections.map((sec, sIdx) => (
                      <div key={sIdx} className="section-group">
                        <h4 className="section-label">{t(sec.title)}</h4>
                        <div className="resource-grid">
                          {sec.links.map(link => (
                            <ResourceCard key={link.id} resource={link} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="no-results"
                >
                  <p>{t({ vi: "Không tìm thấy tài nguyên phù hợp.", en: "No matching resources found." })}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </div>
      </main>

      <Footer />

      <style>{`
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 72px 1.5rem 1.5rem;
          flex: 1;
        }
        .content-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-top: 2rem;
        }
        @media (min-width: 1024px) {
          .content-layout {
            grid-template-columns: 240px 1fr;
          }
        }

        .sidebar {
          display: none;
        }
        @media (min-width: 1024px) {
          .sidebar {
            display: block;
            position: sticky;
            top: 6rem;
            height: fit-content;
          }
        }
        .side-nav-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        .side-nav-link {
          display: block;
          padding: 0.625rem 0;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .side-nav-link:hover {
          color: var(--brand-primary);
        }

        .category-section {
          margin-bottom: 5rem;
          scroll-margin-top: 6rem;
        }
        .category-header {
          margin-bottom: 2rem;
        }
        .category-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .category-desc {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .section-group {
          margin-bottom: 2.5rem;
        }
        .section-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        .resource-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        
        .no-results {
          padding: 4rem;
          text-align: center;
          color: var(--text-muted);
          border: 2px dashed var(--border);
          border-radius: var(--radius-lg);
        }
      `}</style>
    </div>
  );
};

export default App;
