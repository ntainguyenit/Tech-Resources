import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const SecurityLock: React.FC = () => {
  const { language } = useLanguage();
  const [showWarning, setShowWarning] = useState(false);

  const triggerWarning = () => {
    setShowWarning(true);
  };

  useEffect(() => {
    // 1. Block Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerWarning();
    };

    // 2. Block Copy and Cut
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      triggerWarning();
    };

    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
      triggerWarning();
    };

    // 3. Block Shortcuts (F12, DevTools, Ctrl+U, Ctrl+S, Ctrl+P)
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        triggerWarning();
        return;
      }

      // Ctrl + Shift + I / J / C
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.key === 'i' || e.key === 'j' || e.key === 'c')) {
        e.preventDefault();
        triggerWarning();
        return;
      }

      // Ctrl + U (View Source), Ctrl + S (Save), Ctrl + P (Print)
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        triggerWarning();
        return;
      }
    };

    // 4. Block PrintScreen
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        triggerWarning();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div id="sec-warn" className={showWarning ? 'show' : ''}>
      <div className="sec-icon">🔒</div>
      <div className="sec-msg">
        {language === 'vi' ? 'THÔNG BÁO BẢO MẬT' : 'SECURITY NOTICE'}
      </div>
      <div className="sec-sub">
        {language === 'vi'
          ? 'Vui lòng không sao chép nội dung hoặc mở Developer Tools trên trang web này.'
          : 'Please do not copy content or open Developer Tools on this website.'}
      </div>
      <button className="sec-close" onClick={() => setShowWarning(false)}>
        {language === 'vi' ? 'Đồng ý' : 'I Understand'}
      </button>
    </div>
  );
};
