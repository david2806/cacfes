import React from 'react';
import { FiPlus, FiDollarSign, FiPieChart, FiFileText } from 'react-icons/fi';
import Button from '../common/Button';
import Card from '../common/Card';
import './QuickActions.css';

const QuickActions = ({ onAction }) => {
  const actions = [
    {
      id: 'nuevo-socio',
      label: 'Nuevo Socio',
      icon: <FiPlus />,
      variant: 'primary',
      color: 'green'
    },
    {
      id: 'nuevo-prestamo',
      label: 'Nuevo Préstamo',
      icon: <FiDollarSign />,
      variant: 'secondary',
      color: 'blue'
    },
    {
      id: 'movimiento-ahorro',
      label: 'Movimiento Ahorro',
      icon: <FiPieChart />,
      variant: 'outline',
      color: 'green'
    },
    {
      id: 'generar-reporte',
      label: 'Generar Reporte',
      icon: <FiFileText />,
      variant: 'outline',
      color: 'green'
    }
  ];

  return (
    <Card>
      <Card.Header>
        <Card.Title>Acciones Rápidas</Card.Title>
      </Card.Header>
      <div className="quick-actions-grid">
        {actions.map((action) => (
          <Button
            key={action.id}
            variant={action.variant}
            icon={action.icon}
            onClick={() => onAction && onAction(action.id)}
            className="quick-action-btn"
          >
            {action.label}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default QuickActions;
