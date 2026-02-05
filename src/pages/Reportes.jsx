import React from 'react';
import { FiFileText, FiDollarSign, FiUsers, FiPieChart, FiTrendingUp, FiDownload } from 'react-icons/fi';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './Reportes.css';

const Reportes = () => {
  const reportes = [
    {
      id: 1,
      titulo: 'Reporte de Socios',
      descripcion: 'Listado completo de socios con sus datos personales y estado',
      icono: <FiUsers />,
      color: 'green'
    },
    {
      id: 2,
      titulo: 'Reporte de Préstamos',
      descripcion: 'Detalle de préstamos activos, pagados y en mora',
      icono: <FiDollarSign />,
      color: 'blue'
    },
    {
      id: 3,
      titulo: 'Reporte de Ahorros',
      descripcion: 'Estado de cuentas de ahorro y movimientos',
      icono: <FiPieChart />,
      color: 'green'
    },
    {
      id: 4,
      titulo: 'Reporte Financiero',
      descripcion: 'Balance general e ingresos por período',
      icono: <FiTrendingUp />,
      color: 'orange'
    },
    {
      id: 5,
      titulo: 'Reporte de Morosidad',
      descripcion: 'Análisis de préstamos en mora y cartera vencida',
      icono: <FiFileText />,
      color: 'red'
    },
    {
      id: 6,
      titulo: 'Reporte de Transacciones',
      descripcion: 'Historial completo de transacciones del sistema',
      icono: <FiFileText />,
      color: 'blue'
    }
  ];

  const handleGenerateReport = (reportId) => {
    console.log('Generando reporte:', reportId);
    // Aquí se implementaría la lógica para generar el reporte
  };

  return (
    <div className="reportes-page">
      <div className="page-header">
        <div>
          <h2>Reportes</h2>
          <p className="text-muted">Genera y descarga reportes del sistema</p>
        </div>
      </div>

      <div className="reportes-grid">
        {reportes.map((reporte) => (
          <Card key={reporte.id} className="reporte-card">
            <div className={`reporte-icon ${reporte.color}`}>
              {reporte.icono}
            </div>
            <h3 className="reporte-titulo">{reporte.titulo}</h3>
            <p className="reporte-descripcion">{reporte.descripcion}</p>
            <div className="reporte-actions">
              <Button 
                variant="primary" 
                icon={<FiDownload />}
                onClick={() => handleGenerateReport(reporte.id)}
                size="small"
              >
                Generar
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="export-options">
        <Card.Header>
          <Card.Title>Opciones de Exportación</Card.Title>
        </Card.Header>
        <div className="export-buttons">
          <Button variant="outline" icon={<FiFileText />}>
            Exportar a PDF
          </Button>
          <Button variant="outline" icon={<FiFileText />}>
            Exportar a Excel
          </Button>
          <Button variant="outline" icon={<FiFileText />}>
            Exportar a CSV
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Reportes;
