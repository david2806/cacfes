import React from 'react';
import Card from '../common/Card';
import './RecentTransactions.css';

const RecentTransactions = ({ transactions = [] }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case 'prestamo': return 'var(--color-primary-blue)';
      case 'deposito': return 'var(--color-success)';
      case 'retiro': return 'var(--color-error)';
      case 'pago': return 'var(--color-primary-green)';
      default: return 'var(--color-gray-medium)';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'prestamo': return 'Préstamo';
      case 'deposito': return 'Depósito';
      case 'retiro': return 'Retiro';
      case 'pago': return 'Pago';
      default: return type;
    }
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title>Transacciones Recientes</Card.Title>
      </Card.Header>
      <div className="transactions-list">
        {transactions.length === 0 ? (
          <div className="empty-state">No hay transacciones recientes</div>
        ) : (
          transactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-icon" style={{ backgroundColor: getTypeColor(transaction.type) }}>
                {transaction.type === 'deposito' ? '↓' : transaction.type === 'retiro' ? '↑' : '$'}
              </div>
              <div className="transaction-info">
                <div className="transaction-name">{transaction.socio}</div>
                <div className="transaction-type">{getTypeLabel(transaction.type)}</div>
              </div>
              <div className="transaction-amount">
                <div className={`amount ${transaction.type === 'retiro' ? 'negative' : 'positive'}`}>
                  {transaction.type === 'retiro' ? '-' : '+'} ${transaction.amount.toLocaleString()}
                </div>
                <div className="transaction-date">{transaction.date}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
};

export default RecentTransactions;
