import type { Project } from '@portfolio/types';

export const projects: Project[] = [
  // ── Proyectos de Aprendizaje propios ───────────────────────────────
  {
    id: 'flowbit',
    name: 'Flowbit',
    description: {
      es: 'Aplicación web de productividad tipo Linear. Gestión de tareas, notas y hábitos en un dashboard interactivo. Organización intuitiva y seguimiento en tiempo real.',
      en: 'Linear-style productivity web app. Task, note and habit management in an interactive dashboard. Intuitive organization and real-time tracking.',
    },
    category: 'learning',
    tech: ['TypeScript', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/SebasGV2006/Flowbit',
    featured: true,
    year: 2026,
  },

  // ── Proyectos con IA ─────────────────────────────────────
  {
    id: 'cvinsight-ai',
    name: 'CVInsight AI',
    description: {
      es: '(En proceso) Analizador de hojas de vida en PDF impulsado por IA. Proporciona evaluaciones automatizadas, ATS Score y retroalimentación inteligente para mejorar tu CV.',
      en: '(In process) AI-powered PDF resume analyzer. Provides automated evaluations, ATS Score and smart feedback to improve your CV.',
    },
    category: 'ai',
    tech: ['Python', 'AI/ML', 'PDF Processing'],
    githubUrl: 'https://github.com/SebasGV2006/CVInsigth_AI',
    featured: true,
    year: 2026,
  },
  {
    id: 'ai-chat',
    name: 'AI Chat',
    description: {
      es: 'Aplicación de chat con IA de pila completa desarrollada con Turborepo, Next.js 14, TypeScript y la API de Google Gemini (plan gratuito). Incluye transmisión en vivo, historial de conversaciones, autenticación por correo electrónico/contraseña y modo oscuro.',
      en: 'Full-stack AI chat application developed with Turborepo, Next.js 14, TypeScript, and the Google Gemini API (free plan). Includes live streaming, conversation history, email/password authentication, and dark mode.',
    },
    category: 'ai',
    tech: ['TypeScript', 'React', 'AI/ML'],
    githubUrl: 'https://github.com/SebasGV2006/ai_chat',
    deployUrl: 'https://ai-chat-web-nine.vercel.app/chat',
    featured: true,
    year: 2026,
  },

  // ── Proyectos Web ──────────────────────────────────────────────────
  {
    id: 'arcana-mistica',
    name: 'Arcana Mistica',
    description: {
      es: 'Sitio web asistido por Base 44 de contenido para una tienda de artículos mágicos. Diseño atractivo y funcionalidad responsive.',
      en: 'Base 44-assisted website content for a magic item store. Attractive design and responsive functionality.',
    },
    category: 'web',
    tech: ['TypeScript', 'React', 'Tailwind CSS'],
    githubUrl: 'none',
    deployUrl: 'https://arcana-mistyc.base44.app/',
    featured: true,
    year: 2026,
  },

  // ── Proyectos Móviles ──────────────────────────────────────────────
  // Agrega aquí tus proyectos móviles
];
