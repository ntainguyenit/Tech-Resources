import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { WZ_DATA } from '../data/resources';
import type { WizardStep } from '../data/resources';

interface WizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFinish: (prefs: { [key: string]: string }) => void;
}

export const WizardModal: React.FC<WizardModalProps> = ({ 
  isOpen, 
  onClose, 
  onFinish 
}) => {
  const { language } = useLanguage();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [error, setError] = useState('');

  const steps: WizardStep[] = WZ_DATA[language].steps;
  const currentStep = steps[step];
  const stepKey = `step${step}`;

  // Reset local state when opened/reopened
  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setAnswers({});
      setError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOptionSelect = (val: string) => {
    setAnswers(prev => ({
      ...prev,
      [stepKey]: val
    }));
    setError('');
  };

  const handleNext = () => {
    if (!answers[stepKey]) {
      setError(language === 'vi' 
        ? '⚠ Vui lòng chọn một lựa chọn.' 
        : '⚠ Please select an option.');
      return;
    }

    if (step < steps.length - 1) {
      setStep(prev => prev + 1);
    } else {
      onFinish(answers);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
      setError('');
    }
  };

  const handleSkip = () => {
    localStorage.setItem('trh-wizard-done', '1');
    onClose();
  };

  const progressPercentage = ((step + 1) / steps.length) * 100;
  const isLastStep = step === steps.length - 1;

  return (
    <div className="wz-overlay open">
      <div className="wz-box">
        {/* Progress Bar */}
        <div className="wz-progress">
          <div 
            className="wz-progress-bar" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Head */}
        <div className="wz-head">
          <div className="wz-steps">
            {steps.map((_, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div className={`wz-step-line ${i <= step ? 'done' : ''}`}></div>
                )}
                <div className={`wz-step-dot ${i < step ? 'done' : i === step ? 'active' : ''}`}>
                  {i < step ? '✓' : i + 1}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="wz-title">{currentStep.title}</div>
          <div className="wz-sub">{currentStep.sub}</div>
        </div>

        {/* Body */}
        <div className="wz-body">
          <div className="wz-grid">
            {currentStep.opts.map(opt => (
              <div 
                key={opt.val} 
                className={`wz-opt ${answers[stepKey] === opt.val ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(opt.val)}
              >
                <span className="wz-opt-icon">{opt.icon}</span>
                <span className="link-info">
                  <span className="wz-opt-label">{opt.label}</span>
                  <span className="wz-opt-sub">{opt.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Error Notification */}
        <div className="wz-err">{error}</div>

        {/* Footer Actions */}
        <div className="wz-foot">
          <button className="wz-skip" onClick={handleSkip}>
            {language === 'vi' ? 'Bỏ qua' : 'Skip'}
          </button>
          
          <div className="wz-actions">
            {step > 0 && (
              <button 
                className="wz-btn wz-btn-back" 
                onClick={handleBack}
              >
                {language === 'vi' ? '← Quay lại' : '← Back'}
              </button>
            )}
            <button 
              className={`wz-btn ${isLastStep ? 'wz-btn-done' : 'wz-btn-next'}`} 
              onClick={handleNext}
            >
              {isLastStep 
                ? (language === 'vi' ? 'Hoàn tất ✓' : 'Finish ✓') 
                : (language === 'vi' ? 'Tiếp theo →' : 'Next →')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizardModal;
