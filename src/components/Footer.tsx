import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer-copy">&copy; {year} Tai Nguyen. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
