// authService.js
// Example service for authentication API calls
import { apiFetch } from '../api';

export async function login(data) {
  return apiFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
