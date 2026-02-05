import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-main">
        <Header onLogout={handleLogout} />
        <main className="layout-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
