import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuthContext } from './context/AuthContext';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Cuentas from './pages/Cuentas';
import Creditos from './pages/Creditos';
import Contabilidad from './pages/Contabilidad';
import Reportes from './pages/Reportes';
import ParametrizacionFinanciera from './pages/ParametrizacionFinanciera';
import Notificaciones from './pages/Notificaciones';
import Soporte from './pages/Soporte';
import Configuracion from './pages/Configuracion';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, checkAuth } = useAuthContext();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Public Route Component (redirect to dashboard if already logged in)
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router basename="/cacfes">
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="cuentas" element={<Cuentas />} />
            <Route path="creditos" element={<Creditos />} />
            <Route path="contabilidad" element={<Contabilidad />} />
            <Route path="reportes" element={<Reportes />} />
            <Route path="parametrizacion" element={<ParametrizacionFinanciera />} />
            <Route path="notificaciones" element={<Notificaciones />} />
            <Route path="soporte" element={<Soporte />} />
            <Route path="configuracion" element={<Configuracion />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
