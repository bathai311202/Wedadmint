import { PrivateRoutes, PublicRoutes, RouterPaths } from '@/config';
import { getAccessToken, isAccessTokenExpired, logout } from '@/utils';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const useAuth = () => {
  const navigate = useNavigate();
  const handleAuth = () => {
    setTimeout(() => {
      if (!getAccessToken() && PrivateRoutes.includes(location.pathname)) {
        logout();
        navigate(RouterPaths.login);
      }
      if (!isAccessTokenExpired() && PublicRoutes.includes(location.pathname))
        navigate(RouterPaths.home);
    }, 300);
  };
  useEffect(() => {
    //handleAuth();
    window.addEventListener('storage', handleAuth);
    return () => window.removeEventListener('storage', handleAuth);
  }, []);
  return { isLoggedIn: isAccessTokenExpired() };
};
