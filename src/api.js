export const API_BASE_URL = 'http://localhost:8086/api';

export async function apiFetch(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    credentials: 'include', // if you need cookies
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  return response.json();
}

export async function fetchTransactionsByConsentId(consentId) {
  const SERVER_PORT = import.meta.env.VITE_SERVER_PORT || 8092;
  const url = `${SERVER_PORT}/api/setu/transaction/byConsentID?consentId=${consentId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch transactions');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
}
