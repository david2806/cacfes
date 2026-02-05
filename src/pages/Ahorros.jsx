import React, { useState } from 'react';
import { FiSearch, FiPlus, FiMinus } from 'react-icons/fi';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Table from '../components/common/Table';
import './Ahorros.css';

const Ahorros = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const cuentas = [
    { id: 1, socio: 'Juan Pérez García', numeroCuenta: 'AH-001', saldo: 12500, ultimoMovimiento: '05 Feb 2024', tipo: 'Depósito', estado: 'Activa' },
    { id: 2, socio: 'María González López', numeroCuenta: 'AH-002', saldo: 8750, ultimoMovimiento: '04 Feb 2024', tipo: 'Retiro', estado: 'Activa' },
    { id: 3, socio: 'Carlos Rodríguez Díaz', numeroCuenta: 'AH-003', saldo: 25000, ultimoMovimiento: '03 Feb 2024', tipo: 'Depósito', estado: 'Activa' },
    { id: 4, socio: 'Ana Martínez Torres', numeroCuenta: 'AH-004', saldo: 5600, ultimoMovimiento: '02 Feb 2024', tipo: 'Depósito', estado: 'Activa' },
    { id: 5, socio: 'Luis Torres Sánchez', numeroCuenta: 'AH-005', saldo: 15800, ultimoMovimiento: '01 Feb 2024', tipo: 'Retiro', estado: 'Inactiva' },
  ];

  const columns = [
    { header: 'Cuenta', accessor: 'numeroCuenta', width: '120px' },
    { header: 'Socio', accessor: 'socio' },
    { 
      header: 'Saldo', 
      accessor: 'saldo',
      render: (value) => (
        <span style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-success)' }}>
          ${value.toLocaleString()}
        </span>
      )
    },
    { header: 'Último Movimiento', accessor: 'ultimoMovimiento' },
    { 
      header: 'Tipo', 
      accessor: 'tipo',
      render: (value) => (
        <span className={`badge ${value === 'Depósito' ? 'badge-success' : 'badge-warning'}`}>
          {value}
        </span>
      )
    },
    { 
      header: 'Estado', 
      accessor: 'estado',
      render: (value) => (
        <span className={`badge ${value === 'Activa' ? 'badge-info' : 'badge-error'}`}>
          {value}
        </span>
      )
    },
    {
      header: 'Acciones',
      accessor: 'id',
      render: () => (
        <div className="action-buttons">
          <button className="action-btn deposit" title="Depósito">
            <FiPlus />
          </button>
          <button className="action-btn withdraw" title="Retiro">
            <FiMinus />
          </button>
        </div>
      )
    }
  ];

  const filteredCuentas = cuentas.filter(cuenta =>
    cuenta.socio.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cuenta.numeroCuenta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCuentas = cuentas.length;
  const cuentasActivas = cuentas.filter(c => c.estado === 'Activa').length;
  const saldoTotal = cuentas.reduce((sum, c) => sum + c.saldo, 0);

  return (
    <div className="ahorros-page">
      <div className="page-header">
        <div>
          <h2>Gestión de Ahorros</h2>
          <p className="text-muted">Administra las cuentas de ahorro de los socios</p>
        </div>
        <Button variant="primary" icon={<FiPlus />}>
          Nueva Cuenta
        </Button>
      </div>

      <div className="ahorros-stats">
        <div className="stat-box">
          <div className="stat-label">Total Cuentas</div>
          <div className="stat-value">{totalCuentas}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Cuentas Activas</div>
          <div className="stat-value success">{cuentasActivas}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Saldo Total</div>
          <div className="stat-value success">${saldoTotal.toLocaleString()}</div>
        </div>
      </div>

      <Card>
        <div className="table-controls">
          <Input
            type="text"
            placeholder="Buscar por socio o número de cuenta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<FiSearch />}
          />
        </div>
        <Table columns={columns} data={filteredCuentas} />
      </Card>
    </div>
  );
};

export default Ahorros;
