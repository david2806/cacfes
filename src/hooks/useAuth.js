import { useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const { user, isAuthenticated, login, logout, checkAuth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleLogin = (username, password) => {
    const result = login(username, password);
    if (result.success) {
      navigate('/dashboard');
    }
    return result;
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return {
    user,
    isAuthenticated,
    login: handleLogin,
    logout: handleLogout,
  };
};

export default useAuth;
