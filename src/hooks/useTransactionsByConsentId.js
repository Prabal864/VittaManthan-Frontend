import { useState } from "react";
import { fetchTransactionsByConsentId } from "../api";

export function useTransactionsByConsentId() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [notification, setNotification] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("");

  const [rawResponse, setRawResponse] = useState(null);
  const fetchTransactions = async (consentId, page = 1, pageSize = 10) => {
    if (!consentId) {
      setError("Please enter a consent ID");
      setTransactions([]);
      setAllTransactions([]);
      setTotal(0);
      setRawResponse(null);
      return;
    }
    setLoading(true);
    try {
      const data = await fetchTransactionsByConsentId(consentId);
      setRawResponse(data);
      const txs = Array.isArray(data) ? data : (data.transactions || []);
      setAllTransactions(txs);
      setTotal(txs.length);
      // Paginate on frontend
      const start = (page - 1) * pageSize;
      setTransactions(txs.slice(start, start + pageSize));
      setError(null);
    } catch {
      setError("Failed to load transactions");
      setTransactions([]);
      setAllTransactions([]);
      setTotal(0);
      setRawResponse(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchTransactionsViaSession = async (consentId, page = 1, pageSize = 10) => {
    if (!consentId) return;
    setLoading(true);
    setError(null);
    setLoadingMessage("Checking existing records...");

    try {
      // Check if we already have data
      try {
        const existingData = await fetchTransactionsByConsentId(consentId);
        const existingTxs = Array.isArray(existingData) ? existingData : (existingData.transactions || []);
        
        if (existingTxs.length > 0) {
          setAllTransactions(existingTxs);
          setTotal(existingTxs.length);
          const start = (page - 1) * pageSize;
          setTransactions(existingTxs.slice(start, start + pageSize));
          setRawResponse(existingData);
          setNotification({ type: 'success', message: 'Data loaded from database.' });
          setTimeout(() => setNotification(null), 3000);
          setLoading(false);
          setLoadingMessage("");
          return;
        }
      } catch {
        // Ignore error here, means no data or fetch failed, so proceed to fetch from Setu
        console.log("No existing data found or error checking DB, proceeding to fetch from Setu.");
      }

      const token = localStorage.getItem('access_token');
      if (!token) {
        throw new Error("Authentication token not found. Please login again.");
      }

      // Step 1: Create/Get Data Session via Backend Proxy
      setLoadingMessage("Creating data session...");
      const sessionRes = await fetch(`http://localhost:8072/api/setu/auth/${consentId}/consentDataSession`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Backend might not need auth for this specific endpoint based on controller code, 
          // but good practice to send if we have it.
          'Authorization': `Bearer ${token}` 
        }
      });
      
      if (!sessionRes.ok) {
        const errText = await sessionRes.text();
        throw new Error(`Failed to create data session: ${sessionRes.status} ${errText}`);
      }
      
      const sessionData = await sessionRes.json();
      // The backend returns ConsentDataSessionResponseDTO which likely matches the Setu response structure
      const sessionId = sessionData.dataSessions?.[0]?.sessionId;

      if (!sessionId) throw new Error('No session ID returned from data session endpoint');

      // Step 2: Get FI Data via Backend Proxy
      setLoadingMessage("Fetching financial data...");
      const fiDataRes = await fetch(`http://localhost:8072/api/setu/auth/${sessionId}/getFiData`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Required by backend controller
        }
      });
      
      if (!fiDataRes.ok) {
        const errText = await fiDataRes.text();
        throw new Error(`Failed to fetch FI data: ${fiDataRes.status} ${errText}`);
      }

      // Success!
      setNotification({ type: 'success', message: 'Transactions fetched and saved successfully!' });
      
      // Clear notification after 3 seconds
      setTimeout(() => setNotification(null), 3000);

      // Refresh the transaction list from the DB
      setLoadingMessage("Finalizing...");
      await fetchTransactions(consentId);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setLoadingMessage("");
    }
  };

  // For manual pagination in the component
  const paginate = (page, pageSize) => {
    const start = (page - 1) * pageSize;
    setTransactions(allTransactions.slice(start, start + pageSize));
  };

  return { transactions, allTransactions, loading, error, fetchTransactions, fetchTransactionsViaSession, total, paginate, rawResponse, notification, loadingMessage };
}
