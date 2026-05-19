import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MODULE_NAMES } from '../data/resources';

interface RecommendationBannerProps {
  recommendations: string[];
  onRetake: () => void;
}

export const RecommendationBanner: React.FC<RecommendationBannerProps> = ({ 
  recommendations, 
  onRetake 
}) => {
  const { language } = useLanguage();

  if (recommendations.length === 0) {
    return null;
  }

  const names = MODULE_NAMES[language];

  const handleChipClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="suggest-banner show">
      <div className="suggest-banner-title">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span>
          {language === 'vi' ? 'Tài nguyên gợi ý cho bạn' : 'Recommended for you'}
        </span>
      </div>
      <div className="suggest-chips">
        {recommendations.map(mid => (
          <a 
            key={mid}
            href={`#${mid}`} 
            className="suggest-chip"
            onClick={(e) => handleChipClick(e, mid)}
          >
            {names[mid] || mid}
          </a>
        ))}
      </div>
      <span className="suggest-reset" onClick={onRetake}>
        {language === 'vi' ? 'Làm lại khảo sát →' : 'Retake survey →'}
      </span>
    </div>
  );
};

export default RecommendationBanner;
