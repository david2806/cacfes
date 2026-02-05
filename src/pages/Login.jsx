import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiLock } from 'react-icons/fi';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useAuthContext } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      setError('Por favor complete todos los campos');
      return;
    }

    const result = login(formData.username, formData.password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-gradient"></div>
      </div>
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <div className="logo-circle-large">
              <span>C</span>
            </div>
          </div>
          <h1>CACFES</h1>
          <p>Cooperativa de Ahorro y Crédito</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          {error && (
            <div className="login-error">
              {error}
            </div>
          )}
          <Input
            label="Usuario"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Ingrese su usuario"
            icon={<FiUser />}
            required
          />
          <Input
            label="Contraseña"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingrese su contraseña"
            icon={<FiLock />}
            required
          />
          <Button type="submit" variant="primary" size="large" className="login-button">
            Iniciar Sesión
          </Button>
        </form>
        <div className="login-footer">
          <p>¿Olvidó su contraseña? <a href="#recuperar">Recuperar</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
