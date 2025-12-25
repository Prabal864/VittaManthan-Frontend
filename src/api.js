// api.js
// Centralized API base URL and helper for requests

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
