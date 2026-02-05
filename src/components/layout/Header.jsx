import React from 'react';
import { FiBell, FiUser, FiLogOut } from 'react-icons/fi';
import './Header.css';

const Header = ({ user = { name: 'Usuario', role: 'Administrador' }, onLogout }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1>Sistema de Gestión CACFES</h1>
        </div>
        <div className="header-actions">
          <button className="header-icon-btn" title="Notificaciones">
            <FiBell />
            <span className="notification-badge">3</span>
          </button>
          <div className="header-user">
            <div className="user-avatar">
              <FiUser />
            </div>
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-role">{user.role}</div>
            </div>
          </div>
          <button className="header-icon-btn" onClick={onLogout} title="Cerrar sesión">
            <FiLogOut />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
