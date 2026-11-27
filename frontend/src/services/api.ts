import axios from 'axios';

// Set VITE_API_BASE_URL in .env.local when the ASP.NET Core/FastAPI service is ready.
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});
