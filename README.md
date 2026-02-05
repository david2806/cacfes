# CACFES - Sistema Web Profesional

Sistema web moderno y profesional para la Cooperativa de Ahorro y Crédito **CACFES**, desarrollado con React y Vite.

## 🎨 Características

- **Diseño Profesional**: Interfaz moderna con paleta de colores institucionales (verde y azul)
- **Sistema de Autenticación**: Login seguro con gestión de sesiones
- **Dashboard Completo**: Estadísticas en tiempo real y resumen de operaciones
- **Gestión de Socios**: CRUD completo con búsqueda y filtros
- **Gestión de Préstamos**: Control de préstamos con estados (Activo, Pagado, Mora)
- **Gestión de Ahorros**: Administración de cuentas de ahorro y movimientos
- **Sistema de Reportes**: Generación y exportación de reportes
- **Responsive Design**: Adaptable a móviles, tablets y desktop
- **Componentes Reutilizables**: Arquitectura modular y escalable

## 🚀 Tecnologías

- **React 19**: Biblioteca de UI moderna
- **Vite 7**: Build tool ultra-rápido
- **React Router DOM 7**: Navegación y rutas
- **React Icons 5**: Iconografía profesional
- **CSS Variables**: Diseño consistente y mantenible

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/david2806/cacfes.git

# Instalar dependencias
cd cacfes
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🎯 Estructura del Proyecto

```
cacfes/
├── src/
│   ├── components/
│   │   ├── common/          # Componentes reutilizables
│   │   ├── layout/          # Componentes de layout
│   │   └── dashboard/       # Componentes del dashboard
│   ├── pages/               # Páginas de la aplicación
│   ├── styles/              # Estilos globales y variables
│   ├── hooks/               # Custom hooks
│   ├── context/             # Context API
│   ├── utils/               # Utilidades
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Punto de entrada
├── public/                  # Archivos estáticos
└── vite.config.js          # Configuración de Vite
```

## 🎨 Paleta de Colores

- **Verde institucional**: `#2E7D32` (confianza, crecimiento)
- **Verde claro**: `#4CAF50` (acento)
- **Azul corporativo**: `#1565C0` (profesionalismo)
- **Azul claro**: `#42A5F5` (acento secundario)

## 📱 Páginas

1. **Login**: Autenticación de usuarios
2. **Dashboard**: Panel principal con estadísticas
3. **Socios**: Gestión de miembros de la cooperativa
4. **Préstamos**: Administración de préstamos
5. **Ahorros**: Gestión de cuentas de ahorro
6. **Reportes**: Generación de reportes

## 🔐 Autenticación

Para acceder al sistema (demo):
- Usuario: cualquier texto
- Contraseña: cualquier texto

*Nota: En producción, esto debe conectarse a una API real con autenticación segura.*

## 🛠️ Desarrollo

```bash
# Ejecutar linter
npm run lint

# Construir para producción
npm run build
```

## 📄 Licencia

© 2026 CACFES - Cooperativa de Ahorro y Crédito. Todos los derechos reservados.

## 👨‍💻 Autor

Desarrollado para CACFES
