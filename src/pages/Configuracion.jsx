import React, { useState } from 'react';
import { FiUser, FiUsers, FiShield, FiSettings, FiSave, FiDatabase, FiActivity } from 'react-icons/fi';
import StatCard from '../components/dashboard/StatCard';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Table from '../components/common/Table';
import './Configuracion.css';

const Configuracion = () => {
  const [activeTab, setActiveTab] = useState('perfil');

  const [perfilData, setPerfilData] = useState({
    nombre: 'Administrador',
    email: 'admin@cacfes.com',
    telefono: '+593 2 123 4567',
    cargo: 'Gerente General'
  });

  const usuarios = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@cacfes.com', rol: 'Administrador', estado: 'Activo' },
    { id: 2, nombre: 'María González', email: 'maria@cacfes.com', rol: 'Operador', estado: 'Activo' },
    { id: 3, nombre: 'Carlos Rodríguez', email: 'carlos@cacfes.com', rol: 'Cajero', estado: 'Activo' },
  ];

  const roles = [
    { nombre: 'Administrador', permisos: ['Todos los permisos'], usuarios: 1 },
    { nombre: 'Operador', permisos: ['Gestión de socios', 'Gestión de créditos', 'Reportes'], usuarios: 5 },
    { nombre: 'Cajero', permisos: ['Transacciones', 'Consultas'], usuarios: 3 },
  ];

  const handlePerfilChange = (field, value) => {
    setPerfilData({ ...perfilData, [field]: value });
  };

  const handleSave = () => {
    console.log('Guardando configuración:', perfilData);
    alert('Configuración guardada exitosamente');
  };

  const stats = [
    {
      title: 'Usuarios Activos',
      value: '24',
      subtitle: 'Usuarios del sistema',
      icon: <FiUsers />,
      color: 'green',
      trend: { type: 'up', value: '3', label: 'vs. mes anterior' }
    },
    {
      title: 'Roles Configurados',
      value: '5',
      subtitle: 'Roles de acceso',
      icon: <FiShield />,
      color: 'blue',
      trend: { type: 'up', value: '1', label: 'nuevo rol' }
    },
    {
      title: 'Últimos Cambios',
      value: '12',
      subtitle: 'Esta semana',
      icon: <FiActivity />,
      color: 'orange',
      trend: { type: 'up', value: '5', label: 'vs. semana anterior' }
    },
    {
      title: 'Respaldos',
      value: '3',
      subtitle: 'Últimos 7 días',
      icon: <FiDatabase />,
      color: 'green',
      trend: { type: 'up', value: '1', label: 'vs. semana anterior' }
    }
  ];

  const actividadReciente = [
    { id: 1, accion: 'Creación de usuario', usuario: 'Admin', fecha: '05 Feb 2024 10:30', detalle: 'Usuario: nuevo_operador' },
    { id: 2, accion: 'Modificación de rol', usuario: 'Admin', fecha: '04 Feb 2024 15:20', detalle: 'Rol: Cajero' },
    { id: 3, accion: 'Respaldo de datos', usuario: 'Sistema', fecha: '04 Feb 2024 02:00', detalle: 'Automático' },
    { id: 4, accion: 'Cambio de contraseña', usuario: 'maria_gonzalez', fecha: '03 Feb 2024 14:45', detalle: 'Usuario propio' },
  ];

  const columns = [
    { header: 'Acción', accessor: 'accion' },
    { header: 'Usuario', accessor: 'usuario' },
    { header: 'Fecha', accessor: 'fecha' },
    { header: 'Detalle', accessor: 'detalle' },
  ];

  const quickActions = [
    { id: 'gestion-usuarios', label: 'Gestión de Usuarios', icon: <FiUsers />, variant: 'primary' },
    { id: 'roles-permisos', label: 'Roles y Permisos', icon: <FiShield />, variant: 'outline' },
    { id: 'respaldo', label: 'Respaldo de Datos', icon: <FiDatabase />, variant: 'outline' },
    { id: 'config-general', label: 'Configuración General', icon: <FiSettings />, variant: 'outline' }
  ];

  return (
    <div className="configuracion-page">
      <div className="page-header">
        <div>
          <h2>Configuración</h2>
          <p className="text-muted">Configuración general del sistema</p>
        </div>
        <Button variant="primary" icon={<FiSave />} onClick={handleSave}>
          Guardar Cambios
        </Button>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
            color={stat.color}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="dashboard-content">
        <div className="dashboard-main">
          <Card>
            <div className="card-header">
              <h3>Actividad Reciente del Sistema</h3>
            </div>
            <Table columns={columns} data={actividadReciente} />
          </Card>

          <div className="configuracion-tabs">
            <button 
              className={`tab ${activeTab === 'perfil' ? 'active' : ''}`}
              onClick={() => setActiveTab('perfil')}
            >
              <FiUser /> Perfil de Usuario
            </button>
            <button 
              className={`tab ${activeTab === 'usuarios' ? 'active' : ''}`}
              onClick={() => setActiveTab('usuarios')}
            >
              <FiUsers /> Gestión de Usuarios
            </button>
            <button 
              className={`tab ${activeTab === 'roles' ? 'active' : ''}`}
              onClick={() => setActiveTab('roles')}
            >
              <FiShield /> Roles y Permisos
            </button>
            <button 
              className={`tab ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              <FiSettings /> Configuración General
            </button>
          </div>

          {activeTab === 'perfil' && (
            <div className="config-grid">
              <Card>
                <div className="card-header">
                  <h3>Información Personal</h3>
                </div>
                <div className="config-form">
                  <Input
                    label="Nombre Completo"
                    value={perfilData.nombre}
                    onChange={(e) => handlePerfilChange('nombre', e.target.value)}
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={perfilData.email}
                    onChange={(e) => handlePerfilChange('email', e.target.value)}
                  />
                  <Input
                    label="Teléfono"
                    value={perfilData.telefono}
                    onChange={(e) => handlePerfilChange('telefono', e.target.value)}
                  />
                  <Input
                    label="Cargo"
                    value={perfilData.cargo}
                    onChange={(e) => handlePerfilChange('cargo', e.target.value)}
                  />
                </div>
              </Card>

              <Card>
                <div className="card-header">
                  <h3>Seguridad</h3>
                </div>
                <div className="config-form">
                  <Input
                    label="Contraseña Actual"
                    type="password"
                    placeholder="Ingrese su contraseña actual"
                  />
                  <Input
                    label="Nueva Contraseña"
                    type="password"
                    placeholder="Ingrese la nueva contraseña"
                  />
                  <Input
                    label="Confirmar Contraseña"
                    type="password"
                    placeholder="Confirme la nueva contraseña"
                  />
                  <Button variant="primary">
                    Cambiar Contraseña
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'usuarios' && (
            <Card>
              <div className="card-header">
                <h3>Usuarios del Sistema</h3>
                <Button variant="primary" size="small" icon={<FiUser />}>
                  Nuevo Usuario
                </Button>
              </div>
              <div className="usuarios-list">
                {usuarios.map((usuario) => (
                  <div key={usuario.id} className="usuario-item">
                    <div className="usuario-avatar">
                      {usuario.nombre.charAt(0)}
                    </div>
                    <div className="usuario-info">
                      <h4>{usuario.nombre}</h4>
                      <p>{usuario.email}</p>
                    </div>
                    <div className="usuario-meta">
                      <span className="badge badge-info">{usuario.rol}</span>
                      <span className="badge badge-success">{usuario.estado}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'roles' && (
            <Card>
              <div className="card-header">
                <h3>Roles y Permisos</h3>
                <Button variant="primary" size="small" icon={<FiShield />}>
                  Nuevo Rol
                </Button>
              </div>
              <div className="roles-list">
                {roles.map((rol, index) => (
                  <div key={index} className="rol-item">
                    <div className="rol-header">
                      <h4>{rol.nombre}</h4>
                      <span className="rol-usuarios">{rol.usuarios} usuarios</span>
                    </div>
                    <div className="rol-permisos">
                      {rol.permisos.map((permiso, idx) => (
                        <span key={idx} className="permiso-tag">{permiso}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'general' && (
            <div className="config-grid">
              <Card>
                <div className="card-header">
                  <h3>Información de la Cooperativa</h3>
                </div>
                <div className="config-form">
                  <Input
                    label="Nombre de la Cooperativa"
                    value="CACFES"
                    disabled
                  />
                  <Input
                    label="RUC"
                    value="1234567890001"
                    disabled
                  />
                  <Input
                    label="Dirección"
                    value="Av. Principal 123, Quito, Ecuador"
                    disabled
                  />
                  <Input
                    label="Teléfono"
                    value="+593 2 123 4567"
                    disabled
                  />
                </div>
              </Card>

              <Card>
                <div className="card-header">
                  <h3>Preferencias del Sistema</h3>
                </div>
                <div className="config-form">
                  <div className="form-group">
                    <label>Moneda</label>
                    <select className="select-input">
                      <option value="USD">Dólares (USD)</option>
                      <option value="EUR">Euros (EUR)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Idioma</label>
                    <select className="select-input">
                      <option value="es">Español</option>
                      <option value="en">Inglés</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Zona Horaria</label>
                    <select className="select-input">
                      <option value="America/Guayaquil">America/Guayaquil (UTC-5)</option>
                      <option value="America/New_York">America/New_York (UTC-5)</option>
                    </select>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>

        <div className="dashboard-sidebar">
          <Card>
            <div className="card-header">
              <h3>Acciones Rápidas</h3>
            </div>
            <div className="quick-actions-list">
              {quickActions.map((action) => (
                <Button
                  key={action.id}
                  variant={action.variant}
                  icon={action.icon}
                  onClick={() => console.log('Action:', action.id)}
                  className="quick-action-btn"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;
