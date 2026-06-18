import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { Project } from '@portfolio/types';

const categoryColors: Record<Project['category'], string> = {
  ai:       'bg-violet-500/10 text-violet-400 border-violet-500/20',
  web:      'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  mobile:   'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  learning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

const categoryLabels: Record<string, Record<Project['category'], string>> = {
  es: { ai: 'IA', web: 'Web', mobile: 'Móvil', learning: 'Aprendizaje' },
  en: { ai: 'AI', web: 'Web', mobile: 'Mobile', learning: 'Learning' },
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { lang, t } = useLanguage();

  return (
    <article className="group relative flex flex-col rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm p-6 hover:border-primary-500/40 hover:bg-white/80 dark:hover:bg-gray-900/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10">
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-cyan-400/0 group-hover:from-primary-500/5 group-hover:to-cyan-400/5 transition-all duration-300 pointer-events-none" />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-gray-900 dark:text-white text-lg leading-tight group-hover:text-primary-400 transition-colors">
          {project.name}
        </h3>
        <span
          className={`flex-shrink-0 px-2 py-0.5 rounded-md text-xs font-medium border ${categoryColors[project.category]}`}
        >
          {categoryLabels[lang][project.category]}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-5">
        {project.description[lang]}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-md text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-primary-500/50 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-200"
        >
          <Github className="w-4 h-4" />
          {t.projects.buttons.github}
        </a>

        {project.deployUrl && (
          <a
            href={project.deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-cyan-500 text-white text-sm font-medium transition-all duration-200 shadow-md shadow-primary-500/20"
          >
            <ExternalLink className="w-4 h-4" />
            {t.projects.buttons.deploy}
          </a>
        )}
      </div>

      {/* Year */}
      <p className="mt-3 text-xs text-gray-400 dark:text-gray-600 font-mono text-right">
        {project.year}
      </p>
    </article>
  );
}
