import React, { useState } from 'react';
import { FiBell, FiCheck, FiTrash2, FiAlertCircle, FiInfo, FiCheckCircle } from 'react-icons/fi';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './Notificaciones.css';

const Notificaciones = () => {
  const [filter, setFilter] = useState('todas');

  const notificaciones = [
    { 
      id: 1, 
      tipo: 'alerta', 
      titulo: 'Pago vencido', 
      mensaje: 'El socio Juan Pérez tiene una cuota vencida del préstamo #1234',
      fecha: '05 Feb 2024 10:30 AM',
      leida: false
    },
    { 
      id: 2, 
      tipo: 'info', 
      titulo: 'Nuevo socio registrado', 
      mensaje: 'María González se ha registrado como nuevo socio de la cooperativa',
      fecha: '05 Feb 2024 09:15 AM',
      leida: false
    },
    { 
      id: 3, 
      tipo: 'success', 
      titulo: 'Pago completado', 
      mensaje: 'Carlos Rodríguez ha completado el pago de su préstamo #5678',
      fecha: '04 Feb 2024 04:45 PM',
      leida: true
    },
    { 
      id: 4, 
      tipo: 'alerta', 
      titulo: 'Depósito pendiente de aprobación', 
      mensaje: 'Hay 3 depósitos pendientes de aprobación',
      fecha: '04 Feb 2024 02:20 PM',
      leida: true
    },
    { 
      id: 5, 
      tipo: 'info', 
      titulo: 'Actualización del sistema', 
      mensaje: 'Se ha actualizado el sistema a la versión 2.1.0',
      fecha: '03 Feb 2024 11:00 AM',
      leida: true
    },
  ];

  const filteredNotificaciones = notificaciones.filter(notif => {
    if (filter === 'no_leidas') return !notif.leida;
    if (filter === 'leidas') return notif.leida;
    return true;
  });

  const noLeidas = notificaciones.filter(n => !n.leida).length;

  const getIconByTipo = (tipo) => {
    switch (tipo) {
      case 'alerta': return <FiAlertCircle />;
      case 'success': return <FiCheckCircle />;
      default: return <FiInfo />;
    }
  };

  const handleMarkAsRead = (id) => {
    console.log('Marcar como leída:', id);
  };

  const handleDelete = (id) => {
    console.log('Eliminar notificación:', id);
  };

  return (
    <div className="notificaciones-page">
      <div className="page-header">
        <div>
          <h2>Notificaciones</h2>
          <p className="text-muted">Centro de notificaciones del sistema</p>
        </div>
        <div className="notification-badge">
          <FiBell size={24} />
          {noLeidas > 0 && <span className="badge-count">{noLeidas}</span>}
        </div>
      </div>

      <div className="notification-filters">
        <button 
          className={`filter-btn ${filter === 'todas' ? 'active' : ''}`}
          onClick={() => setFilter('todas')}
        >
          Todas ({notificaciones.length})
        </button>
        <button 
          className={`filter-btn ${filter === 'no_leidas' ? 'active' : ''}`}
          onClick={() => setFilter('no_leidas')}
        >
          No leídas ({noLeidas})
        </button>
        <button 
          className={`filter-btn ${filter === 'leidas' ? 'active' : ''}`}
          onClick={() => setFilter('leidas')}
        >
          Leídas ({notificaciones.length - noLeidas})
        </button>
      </div>

      <Card>
        <div className="notifications-list">
          {filteredNotificaciones.map((notif) => (
            <div 
              key={notif.id} 
              className={`notification-item ${!notif.leida ? 'unread' : ''}`}
            >
              <div className={`notification-icon ${notif.tipo}`}>
                {getIconByTipo(notif.tipo)}
              </div>
              <div className="notification-content">
                <h4>{notif.titulo}</h4>
                <p>{notif.mensaje}</p>
                <span className="notification-time">{notif.fecha}</span>
              </div>
              <div className="notification-actions">
                {!notif.leida && (
                  <button 
                    className="action-btn check" 
                    title="Marcar como leída"
                    onClick={() => handleMarkAsRead(notif.id)}
                  >
                    <FiCheck />
                  </button>
                )}
                <button 
                  className="action-btn delete" 
                  title="Eliminar"
                  onClick={() => handleDelete(notif.id)}
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
          
          {filteredNotificaciones.length === 0 && (
            <div className="empty-state">
              <FiBell size={64} />
              <h3>No hay notificaciones</h3>
              <p>No tienes notificaciones en esta categoría</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Notificaciones;
