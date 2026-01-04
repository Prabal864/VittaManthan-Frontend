import React, { useEffect } from 'react';
import '../styles/Toast.css';

const Toast = ({ message, type = 'error', onClose, duration = 3000 }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className={`toast toast-${type} slide-in`}>
      <div className="toast-content">
        <span className="toast-icon">{type === 'error' ? '⚠️' : 'ℹ️'}</span>
        <span className="toast-message">{message}</span>
      </div>
      <button className="toast-close" onClick={onClose}>×</button>
    </div>
  );
};

export default Toast;
