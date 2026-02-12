import React, { useState } from 'react';
import { FiPlus, FiEdit, FiTrash2, FiSearch, FiUsers, FiUserPlus, FiUserX, FiTrendingUp } from 'react-icons/fi';
import StatCard from '../components/dashboard/StatCard';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Table from '../components/common/Table';
import Modal from '../components/common/Modal';
import './Cuentas.css';

const Cuentas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    telefono: '',
    email: '',
    direccion: ''
  });

  const socios = [
    { id: 1, nombre: 'Juan Pérez García', cedula: '1234567890', telefono: '0987654321', email: 'juan@email.com', estado: 'Activo' },
    { id: 2, nombre: 'María González López', cedula: '0987654321', telefono: '0987654322', email: 'maria@email.com', estado: 'Activo' },
    { id: 3, nombre: 'Carlos Rodríguez Díaz', cedula: '1122334455', telefono: '0987654323', email: 'carlos@email.com', estado: 'Activo' },
    { id: 4, nombre: 'Ana Martínez Torres', cedula: '5544332211', telefono: '0987654324', email: 'ana@email.com', estado: 'Activo' },
    { id: 5, nombre: 'Luis Torres Sánchez', cedula: '6677889900', telefono: '0987654325', email: 'luis@email.com', estado: 'Inactivo' },
  ];

  const columns = [
    { header: 'ID', accessor: 'id', width: '80px' },
    { header: 'Nombre', accessor: 'nombre' },
    { header: 'Cédula', accessor: 'cedula' },
    { header: 'Teléfono', accessor: 'telefono' },
    { 
      header: 'Estado', 
      accessor: 'estado',
      render: (value) => (
        <span className={`badge ${value === 'Activo' ? 'badge-success' : 'badge-error'}`}>
          {value}
        </span>
      )
    },
    {
      header: 'Acciones',
      accessor: 'id',
      render: () => (
        <div className="action-buttons">
          <button className="action-btn edit" title="Editar">
            <FiEdit />
          </button>
          <button className="action-btn delete" title="Eliminar">
            <FiTrash2 />
          </button>
        </div>
      )
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nuevo socio:', formData);
    setShowModal(false);
    setFormData({
      nombre: '',
      cedula: '',
      telefono: '',
      email: '',
      direccion: ''
    });
  };

  const filteredSocios = socios.filter(socio =>
    socio.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    socio.cedula.includes(searchTerm)
  );

  const sociosActivos = socios.filter(s => s.estado === 'Activo').length;
  const sociosInactivos = socios.filter(s => s.estado === 'Inactivo').length;

  const stats = [
    {
      title: 'Total de Socios Activos',
      value: sociosActivos.toString(),
      subtitle: 'Socios registrados',
      icon: <FiUsers />,
      color: 'green',
      trend: { type: 'up', value: '12%', label: 'vs. mes anterior' }
    },
    {
      title: 'Socios Nuevos este Mes',
      value: '8',
      subtitle: 'Nuevos registros',
      icon: <FiUserPlus />,
      color: 'blue',
      trend: { type: 'up', value: '25%', label: 'vs. mes anterior' }
    },
    {
      title: 'Socios Inactivos',
      value: sociosInactivos.toString(),
      subtitle: 'Requieren atención',
      icon: <FiUserX />,
      color: 'orange',
      trend: { type: 'down', value: '5%', label: 'vs. mes anterior' }
    },
    {
      title: 'Tasa de Retención',
      value: '94%',
      subtitle: 'Últimos 12 meses',
      icon: <FiTrendingUp />,
      color: 'green',
      trend: { type: 'up', value: '3%', label: 'vs. mes anterior' }
    }
  ];

  return (
    <div className="cuentas-page">
      <div className="page-header">
        <div>
          <h2>Cuenta - Socios/Clientes</h2>
          <p className="text-muted">Gestión de socios y clientes de la cooperativa</p>
        </div>
        <Button variant="primary" icon={<FiPlus />} onClick={() => setShowModal(true)}>
          Nuevo Socio
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

      <Card>
        <div className="table-controls">
          <Input
            type="text"
            placeholder="Buscar por nombre o cédula..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<FiSearch />}
          />
          <div className="table-info">
            <span className="text-muted">Total: {filteredSocios.length} socios</span>
          </div>
        </div>
        <Table columns={columns} data={filteredSocios} />
      </Card>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Agregar Nuevo Socio"
        size="large"
        footer={
          <>
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Guardar
            </Button>
          </>
        }
      >
        <form className="socio-form">
          <Input
            label="Nombre Completo"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <div className="form-row">
            <Input
              label="Cédula"
              name="cedula"
              value={formData.cedula}
              onChange={handleChange}
              required
            />
            <Input
              label="Teléfono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Dirección"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
        </form>
      </Modal>
    </div>
  );
};

export default Cuentas;
