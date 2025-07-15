# Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

```plaintext
atis-backup/
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── App.scss
│   │   ├── main.jsx
│   │   └── Components/
│   │       ├── Dashboard/
│   │       │   └── Dashboard.jsx
│   │       ├── Login/
│   │       │   ├── Login.jsx
│   │       │   ├── Login.css
│   │       │   └── Login.scss
│   │       └── Register/
│   │           ├── Register.jsx
│   │           ├── Register.css
│   │           └── Register.scss
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── index.html
├── server/
└── README.md
```

---

# ATIs-System: Sistema de Gestión

Este proyecto es una aplicación web desarrollada como parte de un sistema de gestión. Está compuesto por un frontend construido con **React** y **Vite**, y un backend (en la carpeta `server/`, no documentado aquí).

## Tecnologías y Lenguajes Utilizados

- **Lenguaje principal:** JavaScript (ES6+)
- **Framework de frontend:** React
- **Herramienta de desarrollo y bundler:** Vite
- **Estilos:** CSS, SCSS

## Dependencias Principales

Las dependencias principales se encuentran en el archivo `package.json`. Algunas de las más relevantes son:

- `react` y `react-dom`: Biblioteca principal para construir interfaces de usuario.
- `vite`: Herramienta de desarrollo y bundler para proyectos modernos de frontend.
- `@vitejs/plugin-react`: Plugin oficial para integrar React con Vite.
- `eslint`: Herramienta para análisis de código y buenas prácticas.

## Requisitos para Ejecutar el Proyecto

1. **Node.js** (versión recomendada: 18.x o superior)
2. **npm** (gestor de paquetes, viene con Node.js)

## Instalación y Ejecución

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Accede a la aplicación en [http://localhost:5173](http://localhost:5173) (puerto por defecto de Vite).

---

# Grupo de Trabajo

## La pinta, La Niña y La Santa Maria.
