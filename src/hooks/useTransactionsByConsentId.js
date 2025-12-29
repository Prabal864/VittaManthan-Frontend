import { useState } from "react";
import { fetchTransactionsByConsentId } from "../api";

export function useTransactionsByConsentId() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTransactions = async (consentId) => {
    if (!consentId) {
      setError("Please enter a consent ID");
      setTransactions([]);
      return;
    }
    setLoading(true);
    try {
      const data = await fetchTransactionsByConsentId(consentId);
      setTransactions(Array.isArray(data) ? data : (data.transactions || []));
      setError(null);
    } catch {
      setError("Failed to load transactions");
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  };

  return { transactions, loading, error, fetchTransactions };
}
