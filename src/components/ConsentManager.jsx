import React, { useState, useEffect } from 'react';
import { useSetu } from '../contexts/SetuContext';
import '../styles/ConsentManager.css';

const ConsentManager = () => {
  const { token, login, createConsent, getConsentStatus, loading, error: contextError, logout } = useSetu();
  
  // Initialize consents from localStorage
  const [consents, setConsents] = useState(() => {
    const saved = localStorage.getItem('setu_consents');
    return saved ? JSON.parse(saved) : [];
  });

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedConsent, setSelectedConsent] = useState(null);
  const [localError, setLocalError] = useState('');
  
  // Persist consents to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('setu_consents', JSON.stringify(consents));
  }, [consents]);

  // Check for redirect params (success & id) to update status
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const success = params.get('success');
    const id = params.get('id');

    if (success === 'true' && id) {
      const fetchStatus = async () => {
        try {
          // Call backend to get latest status
          const statusData = await getConsentStatus(id);
          
          setConsents(prev => {
            const exists = prev.find(c => c.id === id);
            if (exists) {
              // Update existing
              return prev.map(c => c.id === id ? { ...c, ...statusData, status: statusData.status || 'ACTIVE' } : c);
            } else {
              // Add new if not found (e.g. created on another device or cleared cache)
              return [{ 
                id, 
                ...statusData, 
                status: statusData.status || 'ACTIVE', 
                createdAt: new Date().toISOString(),
                vua: statusData.vua || 'Unknown'
              }, ...prev];
            }
          });
          
          // Clear query params to prevent re-fetching on reload
          window.history.replaceState({}, document.title, window.location.pathname);
          
          // Optionally show the details of the updated consent
          // setSelectedConsent({ id, ...statusData }); 
        } catch (err) {
          console.error("Failed to update status from URL", err);
          setLocalError("Failed to verify consent status from redirect.");
        }
      };
      fetchStatus();
    }
  }, [getConsentStatus]);

  const [formData, setFormData] = useState({
    mobileNumber: '',
    unit: 'MONTH',
    value: '2',
    dateFrom: '2022-01-01',
    dateTo: '2024-01-24',
    consentTypes: {
      PROFILE: true,
      SUMMARY: true,
      TRANSACTIONS: true
    }
  });

  const handleLogin = async () => {
    setLocalError('');
    try {
      await login();
    } catch (err) {
      // Error is handled in context
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      consentTypes: {
        ...prev.consentTypes,
        [name]: checked
      }
    }));
  };

  const handleCreateConsent = async (e) => {
    e.preventDefault();
    setLocalError('');

    if (!formData.mobileNumber) {
      setLocalError("Mobile number is required");
      return;
    }

    try {
      const payload = {
        consentDuration: {
          unit: formData.unit,
          value: formData.value
        },
        vua: `${formData.mobileNumber}@onemoney`,
        dataRange: {
          from: new Date(formData.dateFrom).toISOString(),
          to: new Date(formData.dateTo).toISOString()
        },
        consentTypes: Object.keys(formData.consentTypes).filter(k => formData.consentTypes[k]),
        context: [],
        redirectUrl: `${window.location.origin}/dashboard`
      };

      const result = await createConsent(payload);
      
      // Add to list and reset view
      const newConsent = {
        ...result,
        ...payload, // Merge payload to show details if not returned
        createdAt: new Date().toISOString()
      };
      
      setConsents(prev => [newConsent, ...prev]);
      setShowCreateForm(false);

      if (result && result.url) {
        window.open(result.url, '_blank');
      }
    } catch (err) {
      setLocalError('Failed to create consent.');
    }
  };

  const error = contextError || localError;

  return (
    <div className="consent-manager">
      <div className="consent-header">
        <div className="header-content">
          <h2>Consent Management</h2>
          <p>Manage your SETU consents and permissions</p>
        </div>
        {token && !showCreateForm && !selectedConsent && (
          <button className="btn-primary create-btn" onClick={() => setShowCreateForm(true)}>
            + Create Consent
          </button>
        )}
      </div>

      {!token ? (
        <div className="login-section">
          <h3>Login to SETU</h3>
          <p>Authenticate with SETU to manage consents.</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="setu-login-actions" style={{ marginTop: '1.5rem' }}>
            <button onClick={handleLogin} className="btn-primary" disabled={loading}>
              {loading ? 'Logging in...' : 'Login with SETU'}
            </button>
          </div>
        </div>
      ) : (
        <div className="actions-section">
          <div className="token-display">
            <span className="status-badge success">Authenticated</span>
            <p className="token-text">Access Token: {token.substring(0, 20)}...</p>
            <button onClick={logout} className="btn-secondary" style={{ marginLeft: 'auto', marginTop: 0 }}>Logout</button>
          </div>

          {/* Create Form View */}
          {showCreateForm && (
            <div className="action-card">
              <div className="card-header">
                <h3>Create New Consent</h3>
                <button className="close-btn" onClick={() => setShowCreateForm(false)}>✕</button>
              </div>
              <p>Initiate a new consent request for financial data sharing.</p>
              
              <form onSubmit={handleCreateConsent} className="consent-form">
                <div className="form-group">
                  <label>Mobile Number (linked to OneMoney)</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      name="mobileNumber"
                      value={formData.mobileNumber} 
                      onChange={handleInputChange} 
                      placeholder="Enter 10-digit mobile number"
                      required
                    />
                    <span className="input-suffix">@onemoney</span>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Duration Value</label>
                    <input 
                      type="number" 
                      name="value"
                      value={formData.value} 
                      onChange={handleInputChange} 
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Duration Unit</label>
                    <select name="unit" value={formData.unit} onChange={handleInputChange}>
                      <option value="MONTH">Month</option>
                      <option value="YEAR">Year</option>
                      <option value="DAY">Day</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Data From</label>
                    <input 
                      type="date" 
                      name="dateFrom"
                      value={formData.dateFrom} 
                      onChange={handleInputChange} 
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Data To</label>
                    <input 
                      type="date" 
                      name="dateTo"
                      value={formData.dateTo} 
                      onChange={handleInputChange} 
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Consent Types</label>
                  <div className="checkbox-group">
                    <label>
                      <input 
                        type="checkbox" 
                        name="PROFILE" 
                        checked={formData.consentTypes.PROFILE} 
                        onChange={handleCheckboxChange} 
                      /> Profile
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        name="SUMMARY" 
                        checked={formData.consentTypes.SUMMARY} 
                        onChange={handleCheckboxChange} 
                      /> Summary
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        name="TRANSACTIONS" 
                        checked={formData.consentTypes.TRANSACTIONS} 
                        onChange={handleCheckboxChange} 
                      /> Transactions
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'Creating...' : 'Create Consent'}
                </button>
              </form>
            </div>
          )}

          {/* Details View */}
          {selectedConsent && !showCreateForm && (
            <div className="consent-details-view">
              <div className="card-header">
                <h3>Consent Details</h3>
                <button className="close-btn" onClick={() => setSelectedConsent(null)}>✕</button>
              </div>
              
              <div className="details-grid">
                <div className="detail-item">
                  <span className="label">Consent ID</span>
                  <span className="value">{selectedConsent.id}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Status</span>
                  <span className={`status-pill ${selectedConsent.status?.toLowerCase()}`}>
                    {selectedConsent.status || 'PENDING'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="label">VUA</span>
                  <span className="value">{selectedConsent.vua}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Created At</span>
                  <span className="value">{new Date(selectedConsent.createdAt).toLocaleString()}</span>
                </div>
                <div className="detail-item full-width">
                  <span className="label">Consent Types</span>
                  <div className="tags">
                    {selectedConsent.consentTypes?.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="detail-item">
                  <span className="label">Data Range</span>
                  <span className="value">
                    {new Date(selectedConsent.dataRange?.from).toLocaleDateString()} - {new Date(selectedConsent.dataRange?.to).toLocaleDateString()}
                  </span>
                </div>
                
                {/* Linked Accounts Section */}
                {selectedConsent.accountsLinked && selectedConsent.accountsLinked.length > 0 && (
                  <div className="detail-item full-width">
                    <span className="label">Linked Accounts</span>
                    <div className="linked-accounts-list">
                      {selectedConsent.accountsLinked.map((acc, idx) => (
                        <div key={idx} className="linked-account-card">
                          <div className="acc-header">
                            <span className="acc-type">{acc.accType}</span>
                            <span className="acc-fip">{acc.fipId}</span>
                          </div>
                          <div className="acc-number">
                            {acc.maskedAccNumber}
                          </div>
                          <div className="acc-meta">
                            <span className="acc-fi-type">{acc.fiType}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedConsent.url && (
                  <div className="detail-item full-width">
                    <a href={selectedConsent.url} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      Open Consent Page
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* List View */}
          {!showCreateForm && !selectedConsent && (
            <div className="consents-list">
              {consents.length === 0 ? (
                <div className="empty-consents">
                  <p>No consents created yet.</p>
                  <button className="btn-link" onClick={() => setShowCreateForm(true)}>Create your first consent</button>
                </div>
              ) : (
                <div className="consent-cards">
                  {consents.map((consent, idx) => (
                    <div key={idx} className="consent-item-card">
                      <div className="consent-info">
                        <span className="consent-id">ID: {consent.id}</span>
                        <span className={`status-dot ${consent.status?.toLowerCase()}`}></span>
                        <span className="consent-status">{consent.status || 'PENDING'}</span>
                      </div>
                      <div className="consent-meta">
                        <span>{consent.vua}</span>
                        <span className="date">{new Date(consent.createdAt).toLocaleDateString()}</span>
                      </div>
                      <button className="btn-small" onClick={() => setSelectedConsent(consent)}>
                        Details
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {error && <div className="error-message">{error}</div>}
        </div>
      )}
    </div>
  );
};

export default ConsentManager;
