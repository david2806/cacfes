import React, { useState } from 'react';
import { FiPlus, FiHelpCircle, FiMail, FiPhone, FiMessageSquare, FiCheckCircle, FiClock, FiTrendingUp, FiBook, FiFileText, FiUser, FiMapPin, FiUsers } from 'react-icons/fi';
import StatCard from '../components/dashboard/StatCard';
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

  const ticketsAbiertos = tickets.filter(t => t.estado === 'Abierto').length;
  const ticketsResueltos = 42;
  const tiempoRespuesta = '2h';
  const satisfaccion = '95%';

  const stats = [
    {
      title: 'Tickets Abiertos',
      value: ticketsAbiertos.toString(),
      subtitle: 'Requieren atención',
      icon: <FiHelpCircle />,
      color: 'orange',
      trend: { type: 'down', value: '2', label: 'vs. semana anterior' }
    },
    {
      title: 'Tickets Resueltos este Mes',
      value: ticketsResueltos.toString(),
      subtitle: 'Casos cerrados',
      icon: <FiCheckCircle />,
      color: 'green',
      trend: { type: 'up', value: '18%', label: 'vs. mes anterior' }
    },
    {
      title: 'Tiempo Promedio de Respuesta',
      value: tiempoRespuesta,
      subtitle: 'Tiempo de atención',
      icon: <FiClock />,
      color: 'blue',
      trend: { type: 'down', value: '30min', label: 'vs. mes anterior' }
    },
    {
      title: 'Satisfacción del Cliente',
      value: satisfaccion,
      subtitle: 'Rating promedio',
      icon: <FiTrendingUp />,
      color: 'green',
      trend: { type: 'up', value: '2%', label: 'vs. mes anterior' }
    }
  ];

  const quickActions = [
    { id: 'nuevo-ticket', label: 'Nuevo Ticket', icon: <FiPlus />, variant: 'primary' },
    { id: 'faq', label: 'FAQ', icon: <FiHelpCircle />, variant: 'outline' },
    { id: 'contactar', label: 'Contactar Soporte', icon: <FiMail />, variant: 'outline' },
    { id: 'base-conocimiento', label: 'Base de Conocimiento', icon: <FiMessageSquare />, variant: 'outline' },
    { id: 'manual', label: 'Ver Manual', icon: <FiBook />, variant: 'outline' },
    { id: 'asesores', label: 'Info Asesores', icon: <FiUsers />, variant: 'outline' },
  ];

  const modulosManual = [
    {
      id: 'cuentas',
      titulo: 'Módulo de Cuentas',
      descripcion: 'Gestión de cuentas de ahorro y socios de la cooperativa.',
      pasos: [
        'Ir a "Cuentas" en el menú lateral.',
        'Hacer clic en "Nueva Cuenta" para registrar un socio.',
        'Completar datos personales y tipo de cuenta.',
        'Guardar para activar la cuenta.',
      ],
      icono: <FiFileText />,
    },
    {
      id: 'creditos',
      titulo: 'Módulo de Créditos',
      descripcion: 'Solicitud, aprobación y seguimiento de créditos.',
      pasos: [
        'Acceder al módulo "Créditos".',
        'Seleccionar "Nuevo Crédito" e ingresar el monto y plazo.',
        'El sistema calcula la tabla de amortización automáticamente.',
        'Aprobar o rechazar la solicitud desde el panel de revisión.',
      ],
      icono: <FiFileText />,
    },
    {
      id: 'contabilidad',
      titulo: 'Módulo de Contabilidad',
      descripcion: 'Registro de asientos contables, balance y estado de resultados.',
      pasos: [
        'Ir a "Contabilidad" en el menú principal.',
        'Los asientos se generan automáticamente con cada transacción.',
        'Consultar el balance general en la sección de reportes contables.',
        'Cerrar el período contable al final de cada mes.',
      ],
      icono: <FiBook />,
    },
    {
      id: 'reportes',
      titulo: 'Módulo de Reportes',
      descripcion: 'Generación y exportación de reportes del sistema.',
      pasos: [
        'Acceder al módulo "Reportes".',
        'Seleccionar la pestaña del tipo de reporte deseado.',
        'Hacer clic en "Generar" en el reporte específico.',
        'Usar la pestaña "Exportar" para descargar en PDF o Excel.',
      ],
      icono: <FiFileText />,
    },
    {
      id: 'parametrizacion',
      titulo: 'Módulo de Parametrización',
      descripcion: 'Configuración de tasas, plazos y parámetros del sistema.',
      pasos: [
        'Acceder a "Parametrización" desde el menú de configuración.',
        'Definir tasas de interés por tipo de crédito.',
        'Configurar plazos máximos y montos permitidos.',
        'Guardar cambios; aplican a nuevos créditos de inmediato.',
      ],
      icono: <FiBook />,
    },
    {
      id: 'notificaciones',
      titulo: 'Módulo de Notificaciones',
      descripcion: 'Alertas automáticas de vencimientos, mora y eventos del sistema.',
      pasos: [
        'Las notificaciones se generan automáticamente por el sistema.',
        'Revisar el panel de notificaciones en la barra superior.',
        'Configurar qué alertas recibir en "Configuración > Notificaciones".',
        'Las alertas de mora se envían por email a los socios afectados.',
      ],
      icono: <FiFileText />,
    },
  ];

  const asesores = [
    { id: 1, nombre: 'Carlos Mendoza', cargo: 'Asesor de Crédito Senior', zona: 'Agencia Central', telefono: '+593 99 123 4567', email: 'c.mendoza@cacfes.com', creditos: 87 },
    { id: 2, nombre: 'Ana Rodríguez', cargo: 'Asesor de Crédito', zona: 'Agencia Norte', telefono: '+593 99 234 5678', email: 'a.rodriguez@cacfes.com', creditos: 64 },
    { id: 3, nombre: 'Luis Torres', cargo: 'Asesor de Microcréditos', zona: 'Agencia Sur', telefono: '+593 99 345 6789', email: 'l.torres@cacfes.com', creditos: 72 },
    { id: 4, nombre: 'María Jiménez', cargo: 'Asesor de Crédito', zona: 'Agencia Este', telefono: '+593 99 456 7890', email: 'm.jimenez@cacfes.com', creditos: 55 },
    { id: 5, nombre: 'Pedro Castillo', cargo: 'Asesor de Crédito Hipotecario', zona: 'Agencia Oeste', telefono: '+593 99 567 8901', email: 'p.castillo@cacfes.com', creditos: 38 },
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
            <button
              className={`tab ${activeSection === 'manual' ? 'active' : ''}`}
              onClick={() => setActiveSection('manual')}
            >
              Manual del Sistema
            </button>
            <button
              className={`tab ${activeSection === 'asesores' ? 'active' : ''}`}
              onClick={() => setActiveSection('asesores')}
            >
              Info Asesores
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
          {activeSection === 'manual' && (
            <div className="manual-section">
              {modulosManual.map((modulo) => (
                <Card key={modulo.id} className="manual-card">
                  <div className="manual-card-header">
                    <div className="manual-icon">{modulo.icono}</div>
                    <div>
                      <h4>{modulo.titulo}</h4>
                      <p className="text-muted">{modulo.descripcion}</p>
                    </div>
                  </div>
                  <ol className="manual-pasos">
                    {modulo.pasos.map((paso, i) => (
                      <li key={i}>{paso}</li>
                    ))}
                  </ol>
                </Card>
              ))}
            </div>
          )}

          {activeSection === 'asesores' && (
            <div className="asesores-grid">
              {asesores.map((asesor) => (
                <Card key={asesor.id} className="asesor-card">
                  <div className="asesor-avatar">
                    {asesor.nombre.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <h4 className="asesor-nombre">{asesor.nombre}</h4>
                  <p className="asesor-cargo">{asesor.cargo}</p>
                  <div className="asesor-info">
                    <div className="asesor-info-item">
                      <FiMapPin />
                      <span>{asesor.zona}</span>
                    </div>
                    <div className="asesor-info-item">
                      <FiPhone />
                      <span>{asesor.telefono}</span>
                    </div>
                    <div className="asesor-info-item">
                      <FiMail />
                      <span>{asesor.email}</span>
                    </div>
                    <div className="asesor-info-item">
                      <FiUser />
                      <span>{asesor.creditos} créditos gestionados</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div className="dashboard-sidebar">
          <Card>
            <div className="card-header">
              <h3>Acciones Rápidas</h3>
            </div>
            <div className="quick-actions-list">
              {quickActions.map((action) => (
                <Button
                  key={action.id}
                  variant={action.variant}
                  icon={action.icon}
                  onClick={() => console.log('Action:', action.id)}
                  className="quick-action-btn"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Soporte;
