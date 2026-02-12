import React, { useState } from 'react';
import { FiPlus, FiTrendingUp, FiTrendingDown, FiDollarSign, FiFileText, FiBook, FiBarChart2 } from 'react-icons/fi';
import StatCard from '../components/dashboard/StatCard';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Table from '../components/common/Table';
import './Contabilidad.css';

const Contabilidad = () => {
  const [activeTab, setActiveTab] = useState('asientos');

  const asientosContables = [
    { id: 1, fecha: '05 Feb 2024', descripcion: 'Pago de préstamo - Juan Pérez', debe: 850, haber: 0, tipo: 'Ingreso' },
    { id: 2, fecha: '05 Feb 2024', descripcion: 'Gasto administrativo - Material oficina', debe: 0, haber: 120, tipo: 'Egreso' },
    { id: 3, fecha: '04 Feb 2024', descripcion: 'Depósito a plazo - María González', debe: 5000, haber: 0, tipo: 'Ingreso' },
    { id: 4, fecha: '04 Feb 2024', descripcion: 'Pago servicios básicos', debe: 0, haber: 250, tipo: 'Egreso' },
    { id: 5, fecha: '03 Feb 2024', descripcion: 'Intereses ganados - Préstamos', debe: 1250, haber: 0, tipo: 'Ingreso' },
  ];

  const columns = [
    { header: 'ID', accessor: 'id', width: '80px' },
    { header: 'Fecha', accessor: 'fecha' },
    { header: 'Descripción', accessor: 'descripcion' },
    { 
      header: 'Debe', 
      accessor: 'debe',
      render: (value) => value > 0 ? `$${value.toLocaleString()}` : '-'
    },
    { 
      header: 'Haber', 
      accessor: 'haber',
      render: (value) => value > 0 ? `$${value.toLocaleString()}` : '-'
    },
    { 
      header: 'Tipo', 
      accessor: 'tipo',
      render: (value) => (
        <span className={`badge ${value === 'Ingreso' ? 'badge-success' : 'badge-error'}`}>
          {value}
        </span>
      )
    },
  ];

  const ingresosMes = 125450;
  const egresosMes = 89200;
  const balance = 3450000;
  const cuentasPorCobrar = 245000;

  const stats = [
    {
      title: 'Ingresos del Mes',
      value: `$${ingresosMes.toLocaleString()}`,
      subtitle: 'Ingresos totales',
      icon: <FiTrendingUp />,
      color: 'green',
      trend: { type: 'up', value: '12%', label: 'vs. mes anterior' }
    },
    {
      title: 'Egresos del Mes',
      value: `$${egresosMes.toLocaleString()}`,
      subtitle: 'Gastos operativos',
      icon: <FiTrendingDown />,
      color: 'red',
      trend: { type: 'down', value: '5%', label: 'vs. mes anterior' }
    },
    {
      title: 'Balance General',
      value: `$${balance.toLocaleString()}`,
      subtitle: 'Patrimonio total',
      icon: <FiDollarSign />,
      color: 'blue',
      trend: { type: 'up', value: '8%', label: 'vs. mes anterior' }
    },
    {
      title: 'Cuentas por Cobrar',
      value: `$${cuentasPorCobrar.toLocaleString()}`,
      subtitle: 'Pendientes de cobro',
      icon: <FiFileText />,
      color: 'orange',
      trend: { type: 'down', value: '3%', label: 'vs. mes anterior' }
    }
  ];

  const quickActions = [
    { id: 'nuevo-asiento', label: 'Nuevo Asiento', icon: <FiPlus />, variant: 'primary' },
    { id: 'plan-cuentas', label: 'Plan de Cuentas', icon: <FiBook />, variant: 'outline' },
    { id: 'balance', label: 'Balance General', icon: <FiDollarSign />, variant: 'outline' },
    { id: 'estado-resultados', label: 'Estado de Resultados', icon: <FiBarChart2 />, variant: 'outline' }
  ];

  return (
    <div className="contabilidad-page">
      <div className="page-header">
        <div>
          <h2>Contabilidad</h2>
          <p className="text-muted">Gestión contable de la cooperativa</p>
        </div>
        <Button variant="primary" icon={<FiPlus />}>
          Nuevo Asiento
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
          <div className="contabilidad-tabs">
            <button 
              className={`tab ${activeTab === 'asientos' ? 'active' : ''}`}
              onClick={() => setActiveTab('asientos')}
            >
              Asientos Contables
            </button>
            <button 
              className={`tab ${activeTab === 'plan' ? 'active' : ''}`}
              onClick={() => setActiveTab('plan')}
            >
              Plan de Cuentas
            </button>
            <button 
              className={`tab ${activeTab === 'balance' ? 'active' : ''}`}
              onClick={() => setActiveTab('balance')}
            >
              Balance General
            </button>
          </div>

          <Card>
            {activeTab === 'asientos' && (
              <>
                <div className="card-header">
                  <h3>Asientos Contables Recientes</h3>
                </div>
                <Table columns={columns} data={asientosContables} />
              </>
            )}
            
            {activeTab === 'plan' && (
              <div className="placeholder-content">
                <FiFileText size={48} />
                <h3>Plan de Cuentas</h3>
                <p>Configuración del plan de cuentas contable de la cooperativa</p>
              </div>
            )}
            
            {activeTab === 'balance' && (
              <div className="placeholder-content">
                <FiDollarSign size={48} />
                <h3>Balance General</h3>
                <p>Estado de situación financiera de la cooperativa</p>
              </div>
            )}
          </Card>
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

export default Contabilidad;
