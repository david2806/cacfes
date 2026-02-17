import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FiHome, FiUsers, FiDollarSign, FiBook, FiFileText, FiSliders, FiBell, FiHelpCircle, FiSettings } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/dashboard', icon: <FiHome />, label: 'Dashboard' },
    { path: '/cuentas', icon: <FiUsers />, label: 'Cuenta' },
    { path: '/creditos', icon: <FiDollarSign />, label: 'Créditos' },
    { path: '/contabilidad', icon: <FiBook />, label: 'Contabilidad' },
    { path: '/reportes', icon: <FiFileText />, label: 'Reportes' },
    { path: '/parametrizacion', icon: <FiSliders />, label: 'Parametrización Financiera' },
    { path: '/notificaciones', icon: <FiBell />, label: 'Notificaciones' },
    { path: '/soporte', icon: <FiHelpCircle />, label: 'Soporte' },
  ];

  const handleNavigation = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

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
            onClick={(e) => handleNavigation(e, item.path)}
            className={`sidebar-nav-item ${isActivePath(item.path) ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <NavLink
          to="/configuracion"
          onClick={(e) => handleNavigation(e, '/configuracion')}
          className={`sidebar-nav-item ${isActivePath('/configuracion') ? 'active' : ''}`}
        >
          <span className="nav-icon"><FiSettings /></span>
          <span className="nav-label">Configuración</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
