import React from 'react';
import { FiUsers, FiDollarSign, FiPieChart, FiTrendingUp } from 'react-icons/fi';
import StatCard from '../components/dashboard/StatCard';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import QuickActions from '../components/dashboard/QuickActions';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total de Socios',
      value: '1,247',
      subtitle: 'Activos',
      icon: <FiUsers />,
      color: 'green',
      trend: { type: 'up', value: '12%', label: 'vs. mes anterior' }
    },
    {
      title: 'Préstamos Activos',
      value: '485',
      subtitle: '$2,450,000.00',
      icon: <FiDollarSign />,
      color: 'blue',
      trend: { type: 'up', value: '8%', label: 'vs. mes anterior' }
    },
    {
      title: 'Ahorros Totales',
      value: '$3.2M',
      subtitle: '892 cuentas',
      icon: <FiPieChart />,
      color: 'green',
      trend: { type: 'up', value: '15%', label: 'vs. mes anterior' }
    },
    {
      title: 'Ingresos del Mes',
      value: '$125,450',
      subtitle: 'Intereses y comisiones',
      icon: <FiTrendingUp />,
      color: 'orange',
      trend: { type: 'up', value: '5%', label: 'vs. mes anterior' }
    }
  ];

  const recentTransactions = [
    { id: 1, socio: 'Juan Pérez', type: 'deposito', amount: 5000, date: '05 Feb 2024' },
    { id: 2, socio: 'María González', type: 'prestamo', amount: 15000, date: '05 Feb 2024' },
    { id: 3, socio: 'Carlos Rodríguez', type: 'pago', amount: 850, date: '04 Feb 2024' },
    { id: 4, socio: 'Ana Martínez', type: 'retiro', amount: 2000, date: '04 Feb 2024' },
    { id: 5, socio: 'Luis Torres', type: 'deposito', amount: 3500, date: '03 Feb 2024' },
  ];

  const handleQuickAction = (actionId) => {
    console.log('Quick action:', actionId);
    // Aquí se implementaría la lógica para cada acción rápida
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <p className="text-muted">Resumen general de la cooperativa</p>
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
          <RecentTransactions transactions={recentTransactions} />
        </div>
        <div className="dashboard-sidebar">
          <QuickActions onAction={handleQuickAction} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
