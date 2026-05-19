import React, { useState } from 'react';
import type { Category } from '../data/resources';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, ChevronRight } from 'lucide-react';
import LinkCard from './LinkCard';

interface ModuleCardProps {
  category: Category;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ category }) => {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section 
      className={`category-group ${category.id}`} 
      id={category.id}
    >
      {/* Category Branding Header */}
      <div 
        className="category-header-wrap" 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          cursor: 'pointer', 
          marginBottom: isExpanded ? '2rem' : '0.5rem',
          userSelect: 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'stretch', gap: '16px' }}>
          <div className="category-glow-bar" style={{
            width: '4px',
            background: 'linear-gradient(to bottom, var(--accent1), var(--accent2))',
            borderRadius: '4px',
            boxShadow: '0 0 12px rgba(56, 189, 248, 0.45)'
          }}></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
              {language === 'vi' ? category.title.vi : category.title.en}
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
              {language === 'vi' ? category.description.vi : category.description.en}
            </p>
          </div>
        </div>

        {/* Collapse / Expand Icon Indicator */}
        <div 
          className="collapse-toggle-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--surface2)',
            border: '1px solid var(--border)',
            color: 'var(--text)',
            transition: 'transform 0.2s ease, background-color 0.15s ease'
          }}
        >
          {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </div>
      </div>

      {/* Sections & Grids */}
      {isExpanded && (
        <div className="category-body">
          {category.sections.map((section, idx) => (
            <div key={idx} className="section" style={{ marginBottom: '24px' }}>
              {section.title && (
                <div className="section-header">
                  <span className="section-title">
                    {language === 'vi' ? section.title.vi.toUpperCase() : section.title.en.toUpperCase()}
                  </span>
                  <div className="section-divider-line"></div>
                </div>
              )}
              
              {section.links && section.links.length > 0 && (
                <div className="links-grid">
                  {section.links.map(link => (
                    <LinkCard 
                      key={link.id}
                      name={link.name}
                      url={link.url}
                      note={language === 'vi' ? link.note.vi : link.note.en}
                      isNew={link.isNew}
                    />
                  ))}
                </div>
              )}
              
              {section.tags && section.tags.length > 0 && (
                <div className="text-list" style={{ marginTop: '12px' }}>
                  {section.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-tag" style={{ marginRight: '8px', display: 'inline-block' }}>{tag}</span>
                  ))}
                </div>
              )}
              
              {section.note && (
                <div 
                  className="note-block" 
                  style={{ borderColor: 'var(--accent3)', marginTop: '16px' }}
                >
                  <span>▸ </span>
                  <span dangerouslySetInnerHTML={{ 
                    __html: language === 'vi' ? section.note.vi : section.note.en 
                  }} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ModuleCard;
