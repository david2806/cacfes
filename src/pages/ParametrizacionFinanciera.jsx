import React, { useState } from 'react';
import { FiPercent, FiClock, FiDollarSign, FiAlertCircle, FiSave } from 'react-icons/fi';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
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
  );
};

export default ParametrizacionFinanciera;
