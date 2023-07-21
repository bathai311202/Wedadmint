import { ITokenDecode } from '@/types';
import jwtDecode from 'jwt-decode';

export const getAccessToken = (): string => {
  return localStorage.getItem(import.meta.env.VITE_ACCESS_TOKEN ?? '') ?? '';
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem(import.meta.env.VITE_ACCESS_TOKEN ?? '', accessToken);
};

export const clearAccessToken = () => {
  localStorage.removeItem(import.meta.env.VITE_ACCESS_TOKEN ?? '');
};

export const getRefreshToken = (): string => {
  return localStorage.getItem(import.meta.env.VITE_REFRESH_TOKEN ?? '') ?? '';
};

export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem(import.meta.env.VITE_REFRESH_TOKEN ?? '', refreshToken);
};

export const clearRefreshToken = () => {
  localStorage.removeItem(import.meta.env.VITE_REFRESH_TOKEN ?? '');
};

export const decodeAccessToken = () => {
  const accessToken = getAccessToken();
  if (!accessToken) return;
  try {
    return jwtDecode(accessToken);
  } catch (_) {
    localStorage.clear();
    window.location.replace('/login');
    return;
  }
};

export const decodeRefreshToken = () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return;
  return jwtDecode(refreshToken);
};

export const isAccessTokenExpired = () => {
  const data = decodeAccessToken() as ITokenDecode;
  if (!data?.exp) return true;
  return data.exp < Date.now() / 1000;
};

export const isRefreshTokenExpired = () => {
  const data = decodeRefreshToken() as ITokenDecode;
  if (!data?.exp) return true;
  return data.exp < Date.now() / 1000;
};

export const logout = () => {
  clearAccessToken();
  clearRefreshToken();
};

export const setToken = ({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) => {
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
};
