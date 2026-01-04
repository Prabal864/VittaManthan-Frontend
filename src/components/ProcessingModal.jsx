import React from 'react';
import { Loader2 } from 'lucide-react';
import '../styles/ConfirmationModal.css';

const ProcessingModal = ({ isOpen, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{ zIndex: 2000 }}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Processing Request</h3>
        </div>
        <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: '1rem 0' }}>
          <Loader2 className="animate-spin" size={24} color="#ef4444" />
          <p style={{ textAlign: 'center' }}>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessingModal;
