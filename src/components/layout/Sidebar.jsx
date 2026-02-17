import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUsers, FiDollarSign, FiBook, FiFileText, FiSliders, FiBell, FiHelpCircle, FiSettings } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { path: 'dashboard', icon: <FiHome />, label: 'Dashboard' },
    { path: 'cuentas', icon: <FiUsers />, label: 'Cuenta' },
    { path: 'creditos', icon: <FiDollarSign />, label: 'Créditos' },
    { path: 'contabilidad', icon: <FiBook />, label: 'Contabilidad' },
    { path: 'reportes', icon: <FiFileText />, label: 'Reportes' },
    { path: 'parametrizacion', icon: <FiSliders />, label: 'Parametrización Financiera' },
    { path: 'notificaciones', icon: <FiBell />, label: 'Notificaciones' },
    { path: 'soporte', icon: <FiHelpCircle />, label: 'Soporte' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-circle">
          <span>C</span>
        </div>
        <h2>CACFES</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-nav-item ${isActive ? 'active' : ''}`
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <NavLink
          to="configuracion"
          className={({ isActive }) =>
            `sidebar-nav-item ${isActive ? 'active' : ''}`
          }
        >
          <span className="nav-icon"><FiSettings /></span>
          <span className="nav-label">Configuración</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
