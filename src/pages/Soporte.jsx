import React, { useState } from 'react';
import { FiPlus, FiHelpCircle, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Table from '../components/common/Table';
import './Soporte.css';

const Soporte = () => {
  const [activeSection, setActiveSection] = useState('tickets');

  const tickets = [
    { id: 1, asunto: 'Error al generar reporte', estado: 'Abierto', prioridad: 'Alta', fecha: '05 Feb 2024' },
    { id: 2, asunto: 'Consulta sobre tasas de interés', estado: 'En Progreso', prioridad: 'Media', fecha: '04 Feb 2024' },
    { id: 3, asunto: 'No puedo acceder al módulo de socios', estado: 'Abierto', prioridad: 'Alta', fecha: '04 Feb 2024' },
    { id: 4, asunto: 'Solicitud de nueva funcionalidad', estado: 'Cerrado', prioridad: 'Baja', fecha: '03 Feb 2024' },
    { id: 5, asunto: 'Problema con el cálculo de cuotas', estado: 'Cerrado', prioridad: 'Media', fecha: '02 Feb 2024' },
  ];

  const faqs = [
    {
      pregunta: '¿Cómo registro un nuevo socio?',
      respuesta: 'Para registrar un nuevo socio, dirígete al módulo "Cuenta" y haz clic en el botón "Nuevo Socio". Completa el formulario con los datos requeridos y guarda.'
    },
    {
      pregunta: '¿Cómo aprobar un préstamo?',
      respuesta: 'En el módulo "Créditos", selecciona el préstamo pendiente y haz clic en "Aprobar". Verifica que todos los datos sean correctos antes de confirmar.'
    },
    {
      pregunta: '¿Cómo generar un reporte?',
      respuesta: 'Ve al módulo "Reportes", selecciona el tipo de reporte que deseas generar, configura los filtros necesarios y haz clic en "Generar".'
    },
    {
      pregunta: '¿Cómo cambio mi contraseña?',
      respuesta: 'Ve a "Configuración" > "Perfil de Usuario" y haz clic en "Cambiar Contraseña". Ingresa tu contraseña actual y la nueva contraseña.'
    },
  ];

  const columns = [
    { header: 'ID', accessor: 'id', width: '80px' },
    { header: 'Asunto', accessor: 'asunto' },
    { 
      header: 'Estado', 
      accessor: 'estado',
      render: (value) => {
        let badgeClass = 'badge-info';
        if (value === 'Cerrado') badgeClass = 'badge-success';
        if (value === 'Abierto') badgeClass = 'badge-error';
        return <span className={`badge ${badgeClass}`}>{value}</span>;
      }
    },
    { 
      header: 'Prioridad', 
      accessor: 'prioridad',
      render: (value) => {
        let badgeClass = 'badge-info';
        if (value === 'Alta') badgeClass = 'badge-error';
        if (value === 'Media') badgeClass = 'badge-warning';
        return <span className={`badge ${badgeClass}`}>{value}</span>;
      }
    },
    { header: 'Fecha', accessor: 'fecha' },
    {
      header: 'Acciones',
      accessor: 'id',
      render: () => (
        <button className="action-btn view" title="Ver detalles">
          <FiMessageSquare />
        </button>
      )
    }
  ];

  return (
    <div className="soporte-page">
      <div className="page-header">
        <div>
          <h2>Soporte</h2>
          <p className="text-muted">Centro de ayuda y soporte técnico</p>
        </div>
        <Button variant="primary" icon={<FiPlus />}>
          Nuevo Ticket
        </Button>
      </div>

      <div className="soporte-tabs">
        <button 
          className={`tab ${activeSection === 'tickets' ? 'active' : ''}`}
          onClick={() => setActiveSection('tickets')}
        >
          Tickets de Soporte
        </button>
        <button 
          className={`tab ${activeSection === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveSection('faq')}
        >
          Preguntas Frecuentes
        </button>
        <button 
          className={`tab ${activeSection === 'contacto' ? 'active' : ''}`}
          onClick={() => setActiveSection('contacto')}
        >
          Contacto
        </button>
      </div>

      {activeSection === 'tickets' && (
        <Card>
          <div className="card-header">
            <h3>Mis Tickets de Soporte</h3>
          </div>
          <Table columns={columns} data={tickets} />
        </Card>
      )}

      {activeSection === 'faq' && (
        <div className="faq-section">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <div className="faq-item">
                <div className="faq-icon">
                  <FiHelpCircle />
                </div>
                <div className="faq-content">
                  <h4>{faq.pregunta}</h4>
                  <p>{faq.respuesta}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {activeSection === 'contacto' && (
        <div className="contacto-section">
          <Card>
            <div className="contacto-grid">
              <div className="contacto-item">
                <div className="contacto-icon">
                  <FiMail />
                </div>
                <h4>Email</h4>
                <p>soporte@cacfes.com</p>
                <Button variant="outline" size="small">
                  Enviar Email
                </Button>
              </div>

              <div className="contacto-item">
                <div className="contacto-icon">
                  <FiPhone />
                </div>
                <h4>Teléfono</h4>
                <p>+593 2 123 4567</p>
                <Button variant="outline" size="small">
                  Llamar
                </Button>
              </div>

              <div className="contacto-item">
                <div className="contacto-icon">
                  <FiMessageSquare />
                </div>
                <h4>Chat en Vivo</h4>
                <p>Lun - Vie: 8:00 AM - 6:00 PM</p>
                <Button variant="outline" size="small">
                  Iniciar Chat
                </Button>
              </div>
            </div>
          </Card>

          <Card>
            <h3>Horario de Atención</h3>
            <div className="horario-info">
              <p><strong>Lunes a Viernes:</strong> 8:00 AM - 6:00 PM</p>
              <p><strong>Sábados:</strong> 9:00 AM - 1:00 PM</p>
              <p><strong>Domingos y Feriados:</strong> Cerrado</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Soporte;
