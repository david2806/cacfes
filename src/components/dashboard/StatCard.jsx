import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, icon, color = 'green', trend, subtitle }) => {
  const getColorClass = () => {
    switch (color) {
      case 'green': return 'stat-card-green';
      case 'blue': return 'stat-card-blue';
      case 'orange': return 'stat-card-orange';
      case 'red': return 'stat-card-red';
      default: return 'stat-card-green';
    }
  };

  return (
    <div className={`stat-card ${getColorClass()}`}>
      <div className="stat-card-header">
        <div className="stat-card-info">
          <h4 className="stat-card-title">{title}</h4>
          <div className="stat-card-value">{value}</div>
          {subtitle && <div className="stat-card-subtitle">{subtitle}</div>}
        </div>
        <div className="stat-card-icon">
          {icon}
        </div>
      </div>
      {trend && (
        <div className="stat-card-trend">
          <span className={`trend ${trend.type}`}>
            {trend.type === 'up' ? '↑' : '↓'} {trend.value}
          </span>
          <span className="trend-label">{trend.label}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
