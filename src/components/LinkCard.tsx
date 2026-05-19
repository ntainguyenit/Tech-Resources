import React from 'react';

interface LinkCardProps {
  name: string;
  url: string;
  note: string;
  isNew?: boolean;
}

export const LinkCard: React.FC<LinkCardProps> = ({ 
  name, 
  url, 
  note, 
  isNew 
}) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="link-card"
    >
      <div className="link-card-header">
        <div className="link-card-title-area">
          <span className="link-card-name">{name}</span>
          {isNew && <span className="badge-new">NEW</span>}
        </div>
        <span className="link-card-ext">↗</span>
      </div>
      <div className="link-card-note">{note}</div>
    </a>
  );
};

export default LinkCard;
