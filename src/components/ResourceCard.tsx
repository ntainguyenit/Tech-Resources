import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Resource } from '../data/resources';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const { t } = useLanguage();

  return (
    <motion.a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="card-content">
        <div className="card-header">
          <div className="title-wrapper">
            <h3 className="card-title">{resource.name}</h3>
            {resource.isNew && (
              <span className="new-badge">NEW</span>
            )}
          </div>
          <ExternalLink size={14} className="card-icon" />
        </div>
        <p className="card-note">{t(resource.note)}</p>
      </div>
      <div className="card-glow" />
      
      <style>{`
        .card {
          position: relative;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: block;
          transition: border-color 0.2s, box-shadow 0.2s;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .card:hover {
          border-color: var(--brand-primary);
          box-shadow: var(--shadow-lg);
        }
        .card-content {
          position: relative;
          z-index: 2;
        }
        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .title-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .card-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .new-badge {
          background: var(--brand-gradient);
          color: white;
          font-size: 0.625rem;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          line-height: 1;
        }
        .card-icon {
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .card:hover .card-icon {
          color: var(--brand-primary);
        }
        .card-note {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .card-glow {
          position: absolute;
          inset: 0;
          background: var(--brand-gradient);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 1;
        }
        /* Subtle indicator at the bottom */
        .card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0%;
          background: var(--brand-gradient);
          transition: width 0.3s;
        }
        .card:hover::after {
          width: 100%;
        }
      `}</style>
    </motion.a>
  );
};

export default ResourceCard;
