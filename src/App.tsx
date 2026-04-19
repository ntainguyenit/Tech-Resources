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
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onBrandClick={() => setSearchQuery('')}
      />
      
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

        <section id="about" className="about-section">
          <header className="section-label">
            {t({ vi: "Về Dự Án", en: "About Project" })}
          </header>
          <div className="about-content">
            <h3 className="about-title">
              {t({ 
                vi: "Trung tâm lưu trữ tài nguyên kỹ thuật chọn lọc", 
                en: "Curated Technical Resource Repository" 
              })}
            </h3>
            <p className="about-text">
              {t({
                vi: "Tech Resources Hub là một nền tảng học thuật được thiết kế để quản lý và phân loại các tài nguyên kỹ thuật số chất lượng cao trong lĩnh vực phát triển phần mềm và khoa học máy tính. Dự án tập trung vào việc sàng lọc các công cụ, thư viện và kiến thức nền tảng nhằm tối ưu hóa lộ trình học tập và nghiên cứu cho cộng đồng lập trình viên chuyên nghiệp.",
                en: "The Tech Resources Hub is an academic-oriented platform designed to curate and categorize high-quality digital assets within the software development and computer science domains. This project focuses on filtering essential tools, libraries, and fundamental knowledge to optimize learning pathways and research methodologies for the professional developer community."
              })}
            </p>
            <div className="about-meta">
              <span className="meta-item">
                <strong>Project Lead:</strong> Tai Nguyen
              </span>
              <span className="meta-item">
                <strong>Focus:</strong> Quality over Quantity, Academic Integrity
              </span>
            </div>
          </div>
        </section>
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
            top: 5rem;
            height: fit-content;
            align-self: start;
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
        
        .about-section {
          margin-top: 8rem;
          padding-top: 4rem;
          border-top: 1px solid var(--border);
        }
        .about-content {
          max-width: 800px;
        }
        .about-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }
        .about-text {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          text-align: justify;
        }
        .about-meta {
          display: flex;
          gap: 2rem;
          font-size: 0.8125rem;
          color: var(--text-muted);
          font-family: 'IBM Plex Mono', monospace;
        }
        .meta-item strong {
          color: var(--brand-primary);
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default App;
