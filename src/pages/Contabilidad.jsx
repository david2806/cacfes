import React, { useState } from 'react';
import { FiPlus, FiTrendingUp, FiTrendingDown, FiDollarSign, FiFileText } from 'react-icons/fi';
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

  const ingresosMes = 7100;
  const egresosMes = 370;
  const balance = ingresosMes - egresosMes;
  const cuentasPorCobrar = 45600;

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

      <div className="contabilidad-stats">
        <div className="stat-card">
          <div className="stat-icon success">
            <FiTrendingUp />
          </div>
          <div className="stat-content">
            <div className="stat-label">Ingresos del Mes</div>
            <div className="stat-value">${ingresosMes.toLocaleString()}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon error">
            <FiTrendingDown />
          </div>
          <div className="stat-content">
            <div className="stat-label">Egresos del Mes</div>
            <div className="stat-value">${egresosMes.toLocaleString()}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon info">
            <FiDollarSign />
          </div>
          <div className="stat-content">
            <div className="stat-label">Balance</div>
            <div className="stat-value">${balance.toLocaleString()}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon warning">
            <FiFileText />
          </div>
          <div className="stat-content">
            <div className="stat-label">Cuentas por Cobrar</div>
            <div className="stat-value">${cuentasPorCobrar.toLocaleString()}</div>
          </div>
        </div>
      </div>

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
  );
};

export default Contabilidad;
