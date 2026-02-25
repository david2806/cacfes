import React, { useState } from 'react';
import {
  FiFileText, FiDollarSign, FiUsers, FiPieChart, FiTrendingUp, FiDownload,
  FiAlertTriangle, FiBarChart2, FiCalendar, FiBookOpen, FiClipboard, FiPercent
} from 'react-icons/fi';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import StatCard from '../components/dashboard/StatCard';
import './Reportes.css';

const Reportes = () => {
  const [activeSection, setActiveSection] = useState('creditos');

  const tabs = [
    { id: 'creditos', label: 'Reportes de Créditos' },
    { id: 'ahorros', label: 'Reportes de Ahorros' },
    { id: 'mora', label: 'Reporte de Mora' },
    { id: 'administrativos', label: 'Reportes Administrativos' },
    { id: 'contables', label: 'Reportes Contables' },
    { id: 'generales', label: 'Reportes Generales' },
    { id: 'estadisticas', label: 'Estadísticas de Créditos' },
    { id: 'exportar', label: 'Exportar PDF / Excel' },
  ];

  const handleGenerate = (nombre) => {
    console.log('Generando reporte:', nombre);
  };

  const ReporteCard = ({ titulo, descripcion, icono, color }) => (
    <Card className="reporte-card">
      <div className={`reporte-icon ${color}`}>{icono}</div>
      <h3 className="reporte-titulo">{titulo}</h3>
      <p className="reporte-descripcion">{descripcion}</p>
      <div className="reporte-actions">
        <Button variant="primary" icon={<FiDownload />} size="small" onClick={() => handleGenerate(titulo)}>
          Generar
        </Button>
      </div>
    </Card>
  );

  const reportesCreditos = [
    { titulo: 'Créditos Otorgados', descripcion: 'Listado de créditos otorgados en un período determinado con montos y condiciones.', icono: <FiDollarSign />, color: 'blue' },
    { titulo: 'Estado de Créditos', descripcion: 'Estado actual de todos los créditos: activos, cancelados, refinanciados.', icono: <FiFileText />, color: 'green' },
    { titulo: 'Desembolsos', descripcion: 'Detalle de desembolsos realizados por fecha, tipo y monto.', icono: <FiTrendingUp />, color: 'blue' },
    { titulo: 'Tabla de Amortización', descripcion: 'Cronograma de pagos de cuotas de capital e interés por crédito.', icono: <FiCalendar />, color: 'orange' },
    { titulo: 'Créditos por Asesor', descripcion: 'Reporte de créditos gestionados por cada asesor de crédito.', icono: <FiUsers />, color: 'green' },
    { titulo: 'Historial de Pagos', descripcion: 'Historial de abonos y pagos realizados sobre los créditos.', icono: <FiClipboard />, color: 'blue' },
  ];

  const reportesAhorros = [
    { titulo: 'Estado de Cuentas', descripcion: 'Saldo actual y movimientos de cuentas de ahorro por socio.', icono: <FiPieChart />, color: 'green' },
    { titulo: 'Movimientos de Ahorros', descripcion: 'Detalle de depósitos y retiros por período y cuenta.', icono: <FiFileText />, color: 'blue' },
    { titulo: 'Depósitos por Período', descripcion: 'Consolidado de depósitos realizados en un rango de fechas.', icono: <FiDollarSign />, color: 'green' },
    { titulo: 'Retiros por Período', descripcion: 'Consolidado de retiros realizados en un rango de fechas.', icono: <FiTrendingUp />, color: 'orange' },
    { titulo: 'Cuentas Inactivas', descripcion: 'Cuentas de ahorro sin movimientos en los últimos 6 meses.', icono: <FiUsers />, color: 'red' },
  ];

  const reportesMora = [
    { titulo: 'Cartera en Mora', descripcion: 'Análisis completo de la cartera vencida y en mora por tramos.', icono: <FiAlertTriangle />, color: 'red' },
    { titulo: 'Antigüedad de Mora', descripcion: 'Clasificación de mora por rangos: 1-30, 31-60, 61-90, >90 días.', icono: <FiCalendar />, color: 'red' },
    { titulo: 'Índice de Morosidad', descripcion: 'Cálculo del índice de morosidad global y por tipo de crédito.', icono: <FiPercent />, color: 'orange' },
    { titulo: 'Socios Morosos', descripcion: 'Listado de socios con cuotas vencidas y detalle de deuda.', icono: <FiUsers />, color: 'red' },
    { titulo: 'Proyección de Recuperación', descripcion: 'Proyección de recuperación de cartera vencida por período.', icono: <FiTrendingUp />, color: 'orange' },
  ];

  const reportesAdministrativos = [
    { titulo: 'Socios Activos / Inactivos', descripcion: 'Listado de socios por estado con fecha de ingreso y última operación.', icono: <FiUsers />, color: 'green' },
    { titulo: 'Operaciones del Personal', descripcion: 'Registro de operaciones realizadas por cada usuario del sistema.', icono: <FiClipboard />, color: 'blue' },
    { titulo: 'Auditoría del Sistema', descripcion: 'Log de accesos, modificaciones y transacciones del sistema.', icono: <FiFileText />, color: 'orange' },
    { titulo: 'Nuevos Socios', descripcion: 'Reporte de socios incorporados en un período determinado.', icono: <FiUsers />, color: 'green' },
    { titulo: 'Gestión de Asesores', descripcion: 'Reporte de productividad y gestión de asesores de crédito.', icono: <FiBarChart2 />, color: 'blue' },
  ];

  const reportesContables = [
    { titulo: 'Balance General', descripcion: 'Estado de situación financiera con activos, pasivos y patrimonio.', icono: <FiBookOpen />, color: 'blue' },
    { titulo: 'Estado de Resultados', descripcion: 'Ingresos, gastos y utilidad neta en el período seleccionado.', icono: <FiTrendingUp />, color: 'green' },
    { titulo: 'Libro Diario', descripcion: 'Registro cronológico de todos los asientos contables del período.', icono: <FiFileText />, color: 'orange' },
    { titulo: 'Plan de Cuentas', descripcion: 'Listado completo del catálogo de cuentas contables vigente.', icono: <FiClipboard />, color: 'blue' },
    { titulo: 'Mayor General', descripcion: 'Movimientos y saldos de cada cuenta contable por período.', icono: <FiBarChart2 />, color: 'green' },
  ];

  const reportesGenerales = [
    { titulo: 'Estadísticas Generales', descripcion: 'Resumen estadístico global de socios, créditos y ahorros.', icono: <FiBarChart2 />, color: 'blue' },
    { titulo: 'Reporte Personalizado', descripcion: 'Genera reportes con filtros y campos configurables según necesidad.', icono: <FiClipboard />, color: 'green' },
    { titulo: 'Resumen Ejecutivo', descripcion: 'Informe ejecutivo con los principales indicadores de la cooperativa.', icono: <FiFileText />, color: 'orange' },
    { titulo: 'Indicadores Financieros', descripcion: 'KPIs y ratios financieros clave de la cooperativa.', icono: <FiPercent />, color: 'blue' },
    { titulo: 'Transacciones del Sistema', descripcion: 'Historial completo de todas las transacciones registradas.', icono: <FiTrendingUp />, color: 'green' },
  ];

  const estadisticasStats = [
    { title: 'Monto Total Desembolsado', value: '$1,245,800', subtitle: 'Créditos activos', icon: <FiDollarSign />, color: 'blue', trend: { type: 'up', value: '12%', label: 'vs. mes anterior' } },
    { title: 'Créditos Activos', value: '348', subtitle: 'En cartera vigente', icon: <FiFileText />, color: 'green', trend: { type: 'up', value: '8', label: 'nuevos este mes' } },
    { title: 'Tasa Promedio', value: '14.5%', subtitle: 'Tasa de interés anual', icon: <FiPercent />, color: 'orange', trend: { type: 'down', value: '0.5%', label: 'vs. mes anterior' } },
    { title: 'Índice de Morosidad', value: '3.2%', subtitle: 'Cartera vencida', icon: <FiAlertTriangle />, color: 'red', trend: { type: 'down', value: '0.3%', label: 'vs. mes anterior' } },
  ];

  const [exportTipo, setExportTipo] = useState('');
  const [exportFechaInicio, setExportFechaInicio] = useState('');
  const [exportFechaFin, setExportFechaFin] = useState('');

  return (
    <div className="reportes-page">
      <div className="page-header">
        <div>
          <h2>Reportes</h2>
          <p className="text-muted">Genera y descarga reportes del sistema</p>
        </div>
      </div>

      <div className="reportes-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeSection === tab.id ? 'active' : ''}`}
            onClick={() => setActiveSection(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeSection === 'creditos' && (
        <div>
          <div className="seccion-header">
            <h3>Reportes de Créditos</h3>
            <p className="text-muted">Reportes específicos de créditos otorgados, estados, desembolsos y amortizaciones.</p>
          </div>
          <div className="reportes-grid">
            {reportesCreditos.map((r, i) => <ReporteCard key={i} {...r} />)}
          </div>
        </div>
      )}

      {activeSection === 'ahorros' && (
        <div>
          <div className="seccion-header">
            <h3>Reportes de Ahorros</h3>
            <p className="text-muted">Estado de cuentas de ahorro, movimientos, depósitos y retiros.</p>
          </div>
          <div className="reportes-grid">
            {reportesAhorros.map((r, i) => <ReporteCard key={i} {...r} />)}
          </div>
        </div>
      )}

      {activeSection === 'mora' && (
        <div>
          <div className="seccion-header">
            <h3>Reporte de Mora</h3>
            <p className="text-muted">Análisis detallado de cartera en mora, antigüedad, índice de morosidad y socios morosos.</p>
          </div>
          <div className="reportes-grid">
            {reportesMora.map((r, i) => <ReporteCard key={i} {...r} />)}
          </div>
        </div>
      )}

      {activeSection === 'administrativos' && (
        <div>
          <div className="seccion-header">
            <h3>Reportes Administrativos</h3>
            <p className="text-muted">Reportes de gestión: socios activos/inactivos, operaciones del personal y auditoría.</p>
          </div>
          <div className="reportes-grid">
            {reportesAdministrativos.map((r, i) => <ReporteCard key={i} {...r} />)}
          </div>
        </div>
      )}

      {activeSection === 'contables' && (
        <div>
          <div className="seccion-header">
            <h3>Reportes Contables</h3>
            <p className="text-muted">Balance general, estado de resultados, libro diario y plan de cuentas.</p>
          </div>
          <div className="reportes-grid">
            {reportesContables.map((r, i) => <ReporteCard key={i} {...r} />)}
          </div>
        </div>
      )}

      {activeSection === 'generales' && (
        <div>
          <div className="seccion-header">
            <h3>Reportes Generales (Otros)</h3>
            <p className="text-muted">Estadísticas generales, reportes personalizados y otros reportes varios.</p>
          </div>
          <div className="reportes-grid">
            {reportesGenerales.map((r, i) => <ReporteCard key={i} {...r} />)}
          </div>
        </div>
      )}

      {activeSection === 'estadisticas' && (
        <div>
          <div className="seccion-header">
            <h3>Estadísticas de Créditos</h3>
            <p className="text-muted">Dashboard con KPIs visuales y tendencias del portafolio de créditos.</p>
          </div>
          <div className="stats-grid">
            {estadisticasStats.map((stat, index) => (
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
          <div className="reportes-grid" style={{ marginTop: 'var(--spacing-xl)' }}>
            <Card className="reporte-card">
              <div className="reporte-icon blue"><FiPieChart /></div>
              <h3 className="reporte-titulo">Distribución por Tipo</h3>
              <p className="reporte-descripcion">Distribución porcentual de créditos por tipo: consumo, vivienda, microempresa, comercial.</p>
              <div className="reporte-actions">
                <Button variant="primary" icon={<FiDownload />} size="small" onClick={() => handleGenerate('Distribución por Tipo')}>Generar</Button>
              </div>
            </Card>
            <Card className="reporte-card">
              <div className="reporte-icon green"><FiTrendingUp /></div>
              <h3 className="reporte-titulo">Tendencias de Crédito</h3>
              <p className="reporte-descripcion">Tendencias mensuales de otorgamiento, recuperación y morosidad de créditos.</p>
              <div className="reporte-actions">
                <Button variant="primary" icon={<FiDownload />} size="small" onClick={() => handleGenerate('Tendencias de Crédito')}>Generar</Button>
              </div>
            </Card>
          </div>
        </div>
      )}

      {activeSection === 'exportar' && (
        <div>
          <div className="seccion-header">
            <h3>Exportar PDF / Excel</h3>
            <p className="text-muted">Selecciona el tipo de reporte, el rango de fechas y el formato de exportación.</p>
          </div>
          <Card className="export-card">
            <div className="export-form">
              <div className="export-field">
                <label htmlFor="tipo-reporte">Tipo de Reporte</label>
                <select
                  id="tipo-reporte"
                  className="export-select"
                  value={exportTipo}
                  onChange={(e) => setExportTipo(e.target.value)}
                >
                  <option value="">-- Seleccionar reporte --</option>
                  <option value="creditos">Reportes de Créditos</option>
                  <option value="ahorros">Reportes de Ahorros</option>
                  <option value="mora">Reporte de Mora</option>
                  <option value="administrativos">Reportes Administrativos</option>
                  <option value="contables">Reportes Contables</option>
                  <option value="generales">Reportes Generales</option>
                  <option value="estadisticas">Estadísticas de Créditos</option>
                </select>
              </div>
              <div className="export-field">
                <label htmlFor="fecha-inicio">Fecha Inicio</label>
                <input
                  id="fecha-inicio"
                  type="date"
                  className="export-input"
                  value={exportFechaInicio}
                  onChange={(e) => setExportFechaInicio(e.target.value)}
                />
              </div>
              <div className="export-field">
                <label htmlFor="fecha-fin">Fecha Fin</label>
                <input
                  id="fecha-fin"
                  type="date"
                  className="export-input"
                  value={exportFechaFin}
                  onChange={(e) => setExportFechaFin(e.target.value)}
                />
              </div>
            </div>
            <div className="export-buttons">
              <Button variant="primary" icon={<FiDownload />} className="btn-export-pdf" onClick={() => console.log('Exportar PDF', exportTipo, exportFechaInicio, exportFechaFin)}>
                Exportar a PDF
              </Button>
              <Button variant="primary" icon={<FiDownload />} className="btn-export-excel" onClick={() => console.log('Exportar Excel', exportTipo, exportFechaInicio, exportFechaFin)}>
                Exportar a Excel
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Reportes;
