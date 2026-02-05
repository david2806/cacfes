import React, { useState } from 'react';
import { FiPlus, FiSearch, FiEye } from 'react-icons/fi';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Table from '../components/common/Table';
import './Prestamos.css';

const Prestamos = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const prestamos = [
    { id: 1, socio: 'Juan Pérez García', monto: 15000, tasa: 12.5, plazo: 24, cuotasPagadas: 8, cuotasTotal: 24, estado: 'Activo' },
    { id: 2, socio: 'María González López', monto: 25000, tasa: 11.0, plazo: 36, cuotasPagadas: 36, cuotasTotal: 36, estado: 'Pagado' },
    { id: 3, socio: 'Carlos Rodríguez Díaz', monto: 10000, tasa: 13.0, plazo: 12, cuotasPagadas: 10, cuotasTotal: 12, estado: 'Activo' },
    { id: 4, socio: 'Ana Martínez Torres', monto: 20000, tasa: 12.0, plazo: 24, cuotasPagadas: 15, cuotasTotal: 24, estado: 'Mora' },
    { id: 5, socio: 'Luis Torres Sánchez', monto: 8000, tasa: 14.0, plazo: 18, cuotasPagadas: 18, cuotasTotal: 18, estado: 'Pagado' },
  ];

  const columns = [
    { header: 'ID', accessor: 'id', width: '80px' },
    { header: 'Socio', accessor: 'socio' },
    { 
      header: 'Monto', 
      accessor: 'monto',
      render: (value) => `$${value.toLocaleString()}`
    },
    { 
      header: 'Tasa', 
      accessor: 'tasa',
      render: (value) => `${value}%`
    },
    { 
      header: 'Cuotas', 
      accessor: 'cuotasPagadas',
      render: (value, row) => `${value}/${row.cuotasTotal}`
    },
    { 
      header: 'Estado', 
      accessor: 'estado',
      render: (value) => {
        let badgeClass = 'badge-success';
        if (value === 'Mora') badgeClass = 'badge-error';
        if (value === 'Activo') badgeClass = 'badge-info';
        return <span className={`badge ${badgeClass}`}>{value}</span>;
      }
    },
    {
      header: 'Acciones',
      accessor: 'id',
      render: () => (
        <button className="action-btn view" title="Ver detalles">
          <FiEye />
        </button>
      )
    }
  ];

  const filteredPrestamos = prestamos.filter(prestamo =>
    prestamo.socio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalActivos = prestamos.filter(p => p.estado === 'Activo').length;
  const totalMora = prestamos.filter(p => p.estado === 'Mora').length;
  const montoTotal = prestamos.reduce((sum, p) => sum + p.monto, 0);

  return (
    <div className="prestamos-page">
      <div className="page-header">
        <div>
          <h2>Gestión de Préstamos</h2>
          <p className="text-muted">Administra los préstamos de la cooperativa</p>
        </div>
        <Button variant="primary" icon={<FiPlus />}>
          Nuevo Préstamo
        </Button>
      </div>

      <div className="prestamos-stats">
        <div className="stat-box">
          <div className="stat-label">Total Préstamos</div>
          <div className="stat-value">{prestamos.length}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Activos</div>
          <div className="stat-value success">{totalActivos}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">En Mora</div>
          <div className="stat-value error">{totalMora}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Monto Total</div>
          <div className="stat-value">${montoTotal.toLocaleString()}</div>
        </div>
      </div>

      <Card>
        <div className="table-controls">
          <Input
            type="text"
            placeholder="Buscar por socio..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<FiSearch />}
          />
        </div>
        <Table columns={columns} data={filteredPrestamos} />
      </Card>
    </div>
  );
};

export default Prestamos;
