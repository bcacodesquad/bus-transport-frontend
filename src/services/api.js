import axios from 'axios';

const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  'http://localhost:8080/api';

if (!process.env.REACT_APP_API_URL) {
  console.warn('REACT_APP_API_URL is not set. Falling back to http://localhost:8080/api');
}

const API_TIMEOUT = parseInt(process.env.REACT_APP_API_TIMEOUT, 10) || 30000;
const API_WITH_CREDENTIALS = process.env.REACT_APP_API_WITH_CREDENTIALS === 'true';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  withCredentials: API_WITH_CREDENTIALS,
});

// Centralized response error normalization
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const isNetworkError = !error.response;
    const message = isNetworkError
      ? 'Unable to reach the backend API. Verify REACT_APP_API_URL and backend CORS settings for this frontend domain.'
      : error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        'An unexpected error occurred';

    const normalizedError = new Error(message);
    normalizedError.status = error.response?.status;
    normalizedError.isNetworkError = isNetworkError;
    return Promise.reject(normalizedError);
  }
);

// ─── Standalone named bus functions (with try-catch) ────────────────────────

export async function getAllBuses() {
  try {
    const response = await api.get('/buses');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getBusById(id) {
  try {
    const response = await api.get(`/buses/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addBus(data) {
  try {
    const response = await api.post('/buses', data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateBus(id, data) {
  try {
    const response = await api.put(`/buses/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteBus(id) {
  try {
    await api.delete(`/buses/${id}`);
  } catch (error) {
    throw error;
  }
}

// ─── Object-style API helpers (kept for existing components) ─────────────────

export const busAPI = {
  getAll: () => api.get('/buses'),
  getById: (id) => api.get(`/buses/${id}`),
  create: (data) => api.post('/buses', data),
  update: (id, data) => api.put(`/buses/${id}`, data),
  delete: (id) => api.delete(`/buses/${id}`),
};

export const routeAPI = {
  getAll: () => api.get('/routes'),
  getById: (id) => api.get(`/routes/${id}`),
  create: (data) => api.post('/routes', data),
  update: (id, data) => api.put(`/routes/${id}`, data),
  delete: (id) => api.delete(`/routes/${id}`),
};

export const scheduleAPI = {
  getAll: () => api.get('/schedules'),
  getById: (id) => api.get(`/schedules/${id}`),
  create: (data) => api.post('/schedules', data),
  update: (id, data) => api.put(`/schedules/${id}`, data),
  delete: (id) => api.delete(`/schedules/${id}`),
};

export const timetableAPI = {
  getAll: () => api.get('/timetables'),
  getById: (id) => api.get(`/timetables/${id}`),
  create: (data) => api.post('/timetables', data),
  update: (id, data) => api.put(`/timetables/${id}`, data),
  delete: (id) => api.delete(`/timetables/${id}`),
};

export const userAPI = {
  getAll: () => api.get('/users'),
  getById: (id) => api.get(`/users/${id}`),
  create: (data) => api.post('/users', data),
  update: (id, data) => api.put(`/users/${id}`, data),
  delete: (id) => api.delete(`/users/${id}`),
};

export default api;
