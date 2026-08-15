// Base URL of the backend API (server/). Override via VITE_API_URL in
// client/.env for non-local deployments -- see client/.env.example.
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
