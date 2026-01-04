import React from 'react';
import { Loader2 } from 'lucide-react';
import '../styles/ConfirmationModal.css';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose} disabled={isLoading}>×</button>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose} disabled={isLoading}>Cancel</button>
          <button className="btn-danger" onClick={onConfirm} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={16} style={{ marginRight: '8px' }} />
                Revoking...
              </>
            ) : (
              'Revoke'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
