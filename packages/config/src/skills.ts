import type { Skill } from '@portfolio/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', category: 'frontend', color: '#61DAFB' },
  { name: 'TypeScript', icon: 'typescript', category: 'frontend', color: '#3178C6' },
  { name: 'JavaScript', icon: 'javascript', category: 'frontend', color: '#F7DF1E' },
  { name: 'HTML5', icon: 'html5', category: 'frontend', color: '#E34F26' },
  { name: 'CSS3', icon: 'css3', category: 'frontend', color: '#1572B6' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'frontend', color: '#06B6D4' },
  { name: 'Next.js', icon: 'nextdotjs', category: 'frontend', color: '#000000' },

  // Backend
  { name: 'Python', icon: 'python', category: 'backend', color: '#3776AB' },
  { name: 'Node.js', icon: 'nodedotjs', category: 'backend', color: '#339933' },
  { name: 'Express', icon: 'express', category: 'backend', color: '#000000' },

  // Mobile
  { name: 'React Native', icon: 'react', category: 'mobile', color: '#61DAFB' },
  { name: 'Expo', icon: 'expo', category: 'mobile', color: '#000020' },

  // Tools
  { name: 'Git', icon: 'git', category: 'tools', color: '#F05032' },
  { name: 'GitHub', icon: 'github', category: 'tools', color: '#181717' },
  { name: 'VS Code', icon: 'visualstudiocode', category: 'tools', color: '#007ACC' },
  { name: 'Figma', icon: 'figma', category: 'tools', color: '#F24E1E' },
  { name: 'Docker', icon: 'docker', category: 'tools', color: '#2496ED' },

  // AI
  { name: 'OpenAI', icon: 'openai', category: 'ai', color: '#412991' },
];
