import { Github, Linkedin, MapPin, ArrowDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { personal } from '@portfolio/config';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(rgb(124 58 237 / 0.3) 1px, transparent 1px), linear-gradient(90deg, rgb(124 58 237 / 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            {/* Greeting tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t.hero.greeting}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4">
              <span className="text-gray-900 dark:text-white">{personal.name.split(' ')[0]}</span>
              <br />
              <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-cyan-400 bg-clip-text text-transparent">
                {personal.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-mono text-gray-500 dark:text-gray-400 mb-6">
              <span className="text-cyan-400">{'// '}</span>
              {t.hero.role}
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed mb-8">
              {t.hero.bio}
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500 dark:text-gray-500 mb-10">
              <MapPin className="w-4 h-4 text-primary-400" />
              <span>{personal.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-cyan-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5"
              >
                {t.hero.cta}
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:border-primary-500/50 hover:text-primary-500 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-500/40 to-cyan-400/40 blur-xl animate-pulse-slow" />
              {/* Gradient border */}
              <div className="relative p-1 rounded-full bg-gradient-to-br from-primary-400 via-primary-600 to-cyan-400">
                <div className="p-1 rounded-full bg-gray-950 dark:bg-gray-950 bg-white">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Social badges */}
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-2 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:border-primary-500/50 transition-colors"
              >
                <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">GitHub</span>
              </a>

              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-2 -right-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:border-cyan-400/50 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
