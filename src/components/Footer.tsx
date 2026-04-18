import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link as LinkIcon, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-gradient">TR</div>
            <p className="footer-tagline">
              {t({
                vi: "Tuyển chọn những tài nguyên tốt nhất cho lập trình viên.",
                en: "Curating the best resources for developers."
              })}
            </p>
          </div>


          <div className="footer-column">
            <h4 className="footer-heading">Get Connects</h4>
            <a href="mailto:ntainguyen.it@gmail.com" className="email-link">
              <Mail size={16} className="inline-icon" />
              ntainguyen.it@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            {t({
              vi: "Lưu ý pháp lý: Các tài nguyên được tổng hợp tại đây nhằm mục đích chia sẻ kiến thức và hỗ trợ cộng đồng. Thông tin chỉ mang tính chất tham khảo, không có giá trị pháp lý hay thương mại. Chúng tôi không chịu trách nhiệm về nội dung của các liên kết bên ngoài.",
              en: "Legal Note: Resources curated here are for knowledge sharing and community support purposes. This information is for reference only and holds no legal or commercial value. We are not responsible for the content of external links."
            })}
          </p>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {year} Tai Nguyen. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="back-to-top" title={t({ vi: "Quay lại đầu trang", en: "Back to top" })}>
            <span>{t({ vi: "Lên đầu trang", en: "Back to top" })}</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          padding: 4rem 0 2rem;
          margin-top: 4rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .footer-brand .logo-gradient {
          width: 32px;
          height: 32px;
          margin-bottom: 1rem;
        }
        .footer-tagline {
          color: var(--text-secondary);
          font-size: 0.875rem;
          max-width: 240px;
        }
        .footer-heading {
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }
        .footer-list {
          list-style: none;
        }
        .footer-list li {
          margin-bottom: 0.75rem;
        }
        .footer-list a {
          color: var(--text-secondary);
          font-size: 0.875rem;
          transition: color 0.2s;
        }
        .footer-list a:hover {
          color: var(--brand-primary);
        }
        .social-links {
          display: flex;
          gap: 0.75rem;
        }
        .social-btn {
          width: 36px;
          height: 36px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.2s;
        }
        .social-btn:hover {
          background: var(--brand-gradient);
          color: white;
          border-color: transparent;
        }
        .email-link {
          color: var(--text-secondary);
          font-size: 0.9375rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .email-link:hover {
          color: var(--brand-primary);
        }
        .inline-icon {
          vertical-align: middle;
          margin-right: 0.5rem;
          color: var(--brand-primary);
        }
        .footer-disclaimer {
          padding: 1.5rem 0;
          border-top: 1px solid var(--border);
          margin-bottom: 2rem;
        }
        .footer-disclaimer p {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 800px;
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .copyright {
          font-size: 0.8125rem;
          color: var(--text-muted);
        }
        .back-to-top {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--brand-primary);
          font-weight: 600;
          font-size: 0.8125rem;
          transition: transform 0.2s;
        }
        .back-to-top:hover {
          transform: translateY(-4px);
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
      `}</style>
    </footer>
  );
};

export default Footer;
