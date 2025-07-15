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

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


