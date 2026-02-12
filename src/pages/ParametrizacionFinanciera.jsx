import React, { useState } from 'react';
import { FiPercent, FiClock, FiDollarSign, FiAlertCircle, FiSave, FiCheckCircle, FiSliders } from 'react-icons/fi';
import StatCard from '../components/dashboard/StatCard';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Table from '../components/common/Table';
import './ParametrizacionFinanciera.css';

const ParametrizacionFinanciera = () => {
  const [tasas, setTasas] = useState({
    creditoOrdinario: '12.5',
    creditoEmergencia: '14.0',
    depositoPlazoFijo: '6.5',
    mora: '2.0'
  });

  const [plazos, setPlazos] = useState({
    minimo: '6',
    maximo: '60',
    plazoDefecto: '24'
  });

  const [montos, setMontos] = useState({
    minimoCredito: '1000',
    maximoCredito: '50000',
    minimoAhorro: '100',
    maximoAhorro: '100000'
  });

  const handleTasaChange = (field, value) => {
    setTasas({ ...tasas, [field]: value });
  };

  const handlePlazoChange = (field, value) => {
    setPlazos({ ...plazos, [field]: value });
  };

  const handleMontoChange = (field, value) => {
    setMontos({ ...montos, [field]: value });
  };

  const handleSave = () => {
    console.log('Guardando parametrización:', { tasas, plazos, montos });
    alert('Parámetros guardados exitosamente');
  };

  const stats = [
    {
      title: 'Tasa Promedio Activa',
      value: '12.5%',
      subtitle: 'Tasa de crédito',
      icon: <FiPercent />,
      color: 'green',
      trend: { type: 'down', value: '0.5%', label: 'vs. mes anterior' }
    },
    {
      title: 'Plazo Promedio',
      value: '24 meses',
      subtitle: 'Plazo estándar',
      icon: <FiClock />,
      color: 'blue',
      trend: { type: 'up', value: '2 meses', label: 'vs. mes anterior' }
    },
    {
      title: 'Mora Promedio',
      value: '3.2%',
      subtitle: 'Índice de mora',
      icon: <FiAlertCircle />,
      color: 'orange',
      trend: { type: 'down', value: '1.1%', label: 'vs. mes anterior' }
    },
    {
      title: 'Parámetros Configurados',
      value: '18',
      subtitle: 'Parámetros activos',
      icon: <FiCheckCircle />,
      color: 'green',
      trend: { type: 'up', value: '3', label: 'vs. mes anterior' }
    }
  ];

  const parametrosRecientes = [
    { id: 1, parametro: 'Tasa Crédito Ordinario', valorActual: '12.5%', ultimoCambio: '15 Ene 2024', estado: 'Activo' },
    { id: 2, parametro: 'Plazo Máximo', valorActual: '60 meses', ultimoCambio: '10 Ene 2024', estado: 'Activo' },
    { id: 3, parametro: 'Monto Mínimo Crédito', valorActual: '$1,000', ultimoCambio: '05 Ene 2024', estado: 'Activo' },
    { id: 4, parametro: 'Interés por Mora', valorActual: '2.0%', ultimoCambio: '01 Ene 2024', estado: 'Activo' },
  ];

  const columns = [
    { header: 'Parámetro', accessor: 'parametro' },
    { header: 'Valor Actual', accessor: 'valorActual' },
    { header: 'Último Cambio', accessor: 'ultimoCambio' },
    { 
      header: 'Estado', 
      accessor: 'estado',
      render: (value) => (
        <span className={`badge ${value === 'Activo' ? 'badge-success' : 'badge-error'}`}>
          {value}
        </span>
      )
    },
  ];

  const quickActions = [
    { id: 'tasas', label: 'Tasas de Interés', icon: <FiPercent />, variant: 'primary' },
    { id: 'plazos', label: 'Plazos', icon: <FiClock />, variant: 'outline' },
    { id: 'montos', label: 'Montos', icon: <FiDollarSign />, variant: 'outline' },
    { id: 'mora', label: 'Políticas de Mora', icon: <FiAlertCircle />, variant: 'outline' }
  ];

  return (
    <div className="parametrizacion-page">
      <div className="page-header">
        <div>
          <h2>Parametrización Financiera</h2>
          <p className="text-muted">Configure los parámetros financieros del sistema</p>
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
              <h3>Parámetros Recientes Configurados</h3>
            </div>
            <Table columns={columns} data={parametrosRecientes} />
          </Card>

          <div className="parametrizacion-grid">
        <Card>
          <div className="card-header">
            <div className="card-header-icon success">
              <FiPercent />
            </div>
            <div>
              <h3>Tasas de Interés</h3>
              <p className="text-muted">Configuración de tasas de interés</p>
            </div>
          </div>
          <div className="param-form">
            <Input
              label="Crédito Ordinario (%)"
              type="number"
              step="0.1"
              value={tasas.creditoOrdinario}
              onChange={(e) => handleTasaChange('creditoOrdinario', e.target.value)}
            />
            <Input
              label="Crédito de Emergencia (%)"
              type="number"
              step="0.1"
              value={tasas.creditoEmergencia}
              onChange={(e) => handleTasaChange('creditoEmergencia', e.target.value)}
            />
            <Input
              label="Depósito a Plazo Fijo (%)"
              type="number"
              step="0.1"
              value={tasas.depositoPlazoFijo}
              onChange={(e) => handleTasaChange('depositoPlazoFijo', e.target.value)}
            />
            <Input
              label="Interés por Mora (%)"
              type="number"
              step="0.1"
              value={tasas.mora}
              onChange={(e) => handleTasaChange('mora', e.target.value)}
            />
          </div>
        </Card>

        <Card>
          <div className="card-header">
            <div className="card-header-icon info">
              <FiClock />
            </div>
            <div>
              <h3>Plazos de Crédito</h3>
              <p className="text-muted">Configuración de plazos en meses</p>
            </div>
          </div>
          <div className="param-form">
            <Input
              label="Plazo Mínimo (meses)"
              type="number"
              value={plazos.minimo}
              onChange={(e) => handlePlazoChange('minimo', e.target.value)}
            />
            <Input
              label="Plazo Máximo (meses)"
              type="number"
              value={plazos.maximo}
              onChange={(e) => handlePlazoChange('maximo', e.target.value)}
            />
            <Input
              label="Plazo por Defecto (meses)"
              type="number"
              value={plazos.plazoDefecto}
              onChange={(e) => handlePlazoChange('plazoDefecto', e.target.value)}
            />
          </div>
        </Card>

        <Card>
          <div className="card-header">
            <div className="card-header-icon warning">
              <FiDollarSign />
            </div>
            <div>
              <h3>Montos Mínimos/Máximos</h3>
              <p className="text-muted">Configuración de montos permitidos</p>
            </div>
          </div>
          <div className="param-form">
            <Input
              label="Monto Mínimo Crédito ($)"
              type="number"
              value={montos.minimoCredito}
              onChange={(e) => handleMontoChange('minimoCredito', e.target.value)}
            />
            <Input
              label="Monto Máximo Crédito ($)"
              type="number"
              value={montos.maximoCredito}
              onChange={(e) => handleMontoChange('maximoCredito', e.target.value)}
            />
            <Input
              label="Monto Mínimo Ahorro ($)"
              type="number"
              value={montos.minimoAhorro}
              onChange={(e) => handleMontoChange('minimoAhorro', e.target.value)}
            />
            <Input
              label="Monto Máximo Ahorro ($)"
              type="number"
              value={montos.maximoAhorro}
              onChange={(e) => handleMontoChange('maximoAhorro', e.target.value)}
            />
          </div>
        </Card>

        <Card>
          <div className="card-header">
            <div className="card-header-icon error">
              <FiAlertCircle />
            </div>
            <div>
              <h3>Políticas de Mora</h3>
              <p className="text-muted">Configuración de políticas de mora</p>
            </div>
          </div>
          <div className="param-form">
            <Input
              label="Días de Gracia"
              type="number"
              value="5"
              disabled
              helper="Se aplicará mora después de este período"
            />
            <Input
              label="Penalización por Mora (%)"
              type="number"
              step="0.1"
              value={tasas.mora}
              disabled
              helper="Configurado en tasas de interés"
            />
            <div className="info-box">
              <FiAlertCircle />
              <div>
                <strong>Política de mora:</strong> Se aplicará un interés adicional del {tasas.mora}% 
                después de 5 días de retraso en el pago de cuotas.
              </div>
              </div>
            </div>
          </Card>
        </div>
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

export default ParametrizacionFinanciera;
