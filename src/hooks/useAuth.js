// useAuth.js
// Example custom hook for authentication
import { useState } from 'react';

export default function useAuth() {
  const [user, setUser] = useState(null);
  // Add logic for login, logout, etc.
  return { user, setUser };
}
