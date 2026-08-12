import api from './apiClient';
import { getUserRole, getUser, saveAuth, clearAuth } from './storage';

function extractError(error) {
  if (error?.response?.data) {
    const message = error.response.data.message || error.response.data.error || error.message || 'Request failed';
    return { message };
  }

  return { message: error?.message || 'Request failed' };
}

export { getUserRole, getUser, clearAuth };

export function logout() {
  clearAuth();
}

export async function register({ firstName, lastName, email, password }) {
  try {
    const { data } = await api.post('/auth/register', {
      firstName,
      lastName,
      email,
      password,
    });
    saveAuth(data.accessToken, data.user);
    return { data, error: null };
  } catch (error) {
    return { data: null, error: extractError(error) };
  }
}

export async function login({ email, password }) {
  try {
    const { data } = await api.post('/auth/login', {
      email,
      password,
    });
    saveAuth(data.accessToken, data.user);
    return { data, error: null };
  } catch (error) {
    return { data: null, error: extractError(error) };
  }
}

export async function requestPasswordReset(email) {
  try {
    const { data } = await api.post('/auth/forgot-password', { email });
    return { data, error: null };
  } catch (error) {
    return { data: null, error: extractError(error) };
  }
}

export async function resetPassword({ token, newPassword }) {
  try {
    const { data } = await api.post('/auth/reset-password', {
      token,
      newPassword,
    });
    return { data, error: null };
  } catch (error) {
    return { data: null, error: extractError(error) };
  }
}
