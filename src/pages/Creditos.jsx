import React, { useState } from 'react';
import { FiPlus, FiSearch, FiEye, FiDollarSign, FiTrendingUp, FiAlertCircle, FiPercent } from 'react-icons/fi';
import StatCard from '../components/dashboard/StatCard';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Table from '../components/common/Table';
import './Creditos.css';

const Creditos = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const creditos = [
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

  const filteredCreditos = creditos.filter(credito =>
    credito.socio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalActivos = creditos.filter(p => p.estado === 'Activo').length;
  const totalMora = creditos.filter(p => p.estado === 'Mora').length;
  const montoTotal = creditos.reduce((sum, p) => sum + p.monto, 0);

  const stats = [
    {
      title: 'Créditos Activos',
      value: totalActivos.toString(),
      subtitle: `De ${creditos.length} totales`,
      icon: <FiDollarSign />,
      color: 'green',
      trend: { type: 'up', value: '8%', label: 'vs. mes anterior' }
    },
    {
      title: 'Monto Total Desembolsado',
      value: `$${montoTotal.toLocaleString()}`,
      subtitle: 'Capital activo',
      icon: <FiTrendingUp />,
      color: 'blue',
      trend: { type: 'up', value: '15%', label: 'vs. mes anterior' }
    },
    {
      title: 'Créditos en Mora',
      value: totalMora.toString(),
      subtitle: 'Requieren seguimiento',
      icon: <FiAlertCircle />,
      color: 'red',
      trend: { type: 'down', value: '3%', label: 'vs. mes anterior' }
    },
    {
      title: 'Tasa de Recuperación',
      value: '96%',
      subtitle: 'Pagos al día',
      icon: <FiPercent />,
      color: 'green',
      trend: { type: 'up', value: '2%', label: 'vs. mes anterior' }
    }
  ];

  return (
    <div className="creditos-page">
      <div className="page-header">
        <div>
          <h2>Créditos</h2>
          <p className="text-muted">Gestión de créditos de la cooperativa</p>
        </div>
        <Button variant="primary" icon={<FiPlus />}>
          Nuevo Crédito
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
            placeholder="Buscar por socio..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<FiSearch />}
          />
        </div>
        <Table columns={columns} data={filteredCreditos} />
      </Card>
    </div>
  );
};

export default Creditos;
