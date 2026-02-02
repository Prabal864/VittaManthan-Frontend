import React, { useEffect, useState } from 'react';
import { CheckCircle2, AlertTriangle, Info, X, Loader2 } from 'lucide-react';
import '../styles/Toast.css';

const Toast = ({ title, message, type = 'info', onClose, duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to allow enter animation
    const showTimer = setTimeout(() => setIsVisible(true), 10);
    
    const hideTimer = setTimeout(() => {
        setIsVisible(false);
        // Wait for animation to finish before unmounting
        setTimeout(onClose, 300);
    }, duration);

    return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
    };
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success': return <CheckCircle2 size={24} className="toast-icon-svg success" />;
      case 'error': return <AlertTriangle size={24} className="toast-icon-svg error" />;
      case 'loading': return <Loader2 size={24} className="toast-icon-svg spin" />;
      default: return <Info size={24} className="toast-icon-svg info" />;
    }
  };

  return (
    <div className={`toast-card ${isVisible ? 'visible' : ''}`}>
      <div className="toast-icon-box">
        {getIcon()}
      </div>
      
      <div className="toast-content">
        <h4 className="toast-title">{title}</h4>
        <p className="toast-desc">{message}</p>
        
        {/* Optional Action Buttons Area - mimicing the design */}
        <div className="toast-actions">
           {/* We can add buttons here later if needed, e.g. "View" */}
           <button className="toast-action-btn primary" onClick={() => { setIsVisible(false); setTimeout(onClose, 300); }}>
              Dismiss
           </button>
        </div>
      </div>

      <button className="toast-close-btn" onClick={() => { setIsVisible(false); setTimeout(onClose, 300); }}>
        <X size={16} />
      </button>
    </div>
  );
};

export default Toast;
