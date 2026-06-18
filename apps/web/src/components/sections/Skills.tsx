import { useLanguage } from '../../context/LanguageContext';
import { skills } from '@portfolio/config';

// Simple-icons CDN base URL para iconos SVG
function SkillIcon({ icon, color, name }: { icon: string; color: string; name: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-200/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm hover:border-primary-500/40 transition-colors group">
      <div
        className="w-5 h-5 flex items-center justify-center"
        style={{ color }}
      >
        <img
          src={`https://cdn.simpleicons.org/${icon}`}
          alt={name}
          className="w-5 h-5"
          style={{ filter: 'none' }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap group-hover:text-primary-400 transition-colors">
        {name}
      </span>
    </div>
  );
}

// Duplicar items para el carrusel infinito
function buildTrack(items: typeof skills) {
  return [...items, ...items];
}

export function Skills() {
  const { t } = useLanguage();

  const row1 = skills.slice(0, Math.ceil(skills.length / 2));
  const row2 = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-14">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            {t.skills.title}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>
      </div>

      {/* Carrusel row 1 — izquierda */}
      <div className="relative mb-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent pointer-events-none" />

        <div className="flex gap-3 animate-scroll-left" style={{ width: 'max-content' }}>
          {buildTrack(row1).map((skill, i) => (
            <SkillIcon key={`r1-${skill.name}-${i}`} icon={skill.icon} color={skill.color} name={skill.name} />
          ))}
        </div>
      </div>

      {/* Carrusel row 2 — derecha */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent pointer-events-none" />

        <div className="flex gap-3 animate-scroll-right" style={{ width: 'max-content' }}>
          {buildTrack(row2).map((skill, i) => (
            <SkillIcon key={`r2-${skill.name}-${i}`} icon={skill.icon} color={skill.color} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
