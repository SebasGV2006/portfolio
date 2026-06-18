import { useState } from 'react';
import { Bot, Globe, Smartphone, BookOpen, LayoutGrid } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '@portfolio/config';
import type { Project } from '@portfolio/types';

type FilterCategory = Project['category'] | 'all';

const categoryIcons = {
  all:      LayoutGrid,
  ai:       Bot,
  web:      Globe,
  mobile:   Smartphone,
  learning: BookOpen,
};

const categoryOrder: FilterCategory[] = ['all', 'learning', 'ai', 'web', 'mobile'];

export function Projects() {
  const { t } = useLanguage();
  const [active, setActive] = useState<FilterCategory>('all');

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active);

  const categoryLabels: Record<FilterCategory, string> = {
    all:      t.projects.categories.all,
    ai:       t.projects.categories.ai,
    web:      t.projects.categories.web,
    mobile:   t.projects.categories.mobile,
    learning: t.projects.categories.learning,
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.title}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoryOrder.map((cat) => {
            const Icon = categoryIcons[cat];
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-gray-100 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {categoryLabels[cat]}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-md font-mono ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {cat === 'all' ? projects.length : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400 dark:text-gray-600">
            <p className="text-lg font-mono">{'// próximamente'}</p>
          </div>
        )}
      </div>
    </section>
  );
}
