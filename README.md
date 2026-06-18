# Portfolio — Sebastian Grisales Vanegas

Portfolio profesional diseñado para mostrar tus proyectos, tu experiencia y tu tecnología. Este sitio es una carta de presentación limpia, moderna y enfocada en resultados.

## Qué incluye

- Sección de proyectos con detalles claros
- Enlaces directos a GitHub y despliegues
- Sección de habilidades y tecnologías
- Diseño responsive para desktop y móvil
- Modo oscuro y claro
- Soporte de español e inglés

## Objetivo

Este portfolio está pensado para que reclutadores y clientes vean tu trabajo de forma rápida y profesional. No es un demo técnico, es una vitrina de tu trabajo real.

## Cómo usarlo

### Ejecutar localmente

Desde la raíz del proyecto:

```bash
npm install
npm run dev
```

Abrir en el navegador:

```text
http://localhost:5173/
```

### Contenido editable

Actualiza fácilmente tu información desde estos archivos:

- `packages/config/src/personal.ts` — datos personales, descripción y redes
- `packages/config/src/projects.ts` — proyectos destacados
- `packages/config/src/skills.ts` — herramientas y tecnologías
- `packages/i18n/src/es.ts` — textos en español
- `packages/i18n/src/en.ts` — textos en inglés

## Agregar un nuevo proyecto

Añade un proyecto a `packages/config/src/projects.ts` con esta estructura:

```ts
{
  id: 'mi-proyecto',
  name: 'Mi Proyecto',
  description: {
    es: 'Descripción en español',
    en: 'Description in English',
  },
  category: 'web',
  tech: ['React', 'Node.js'],
  githubUrl: 'https://github.com/SebasGV2006/mi-proyecto',
  deployUrl: 'https://mi-proyecto.vercel.app',
  year: 2025,
}
```

## Razones para usar este portfolio

- Presenta tu trabajo con estructura profesional
- Está listo para mostrar en entrevistas y redes profesionales
- Facilita la actualización de contenido sin cambiar la interfaz

---

**Sebastian Grisales Vanegas** | [GitHub](https://github.com/SebasGV2006) · [LinkedIn](https://www.linkedin.com/in/sebastian-grisales-vanegas-012282323/)
