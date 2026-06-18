import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { personal } from '@portfolio/config';

export function Contact() {
  const { t } = useLanguage();

  const links = [
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      href: personal.social.linkedin,
      color: 'text-blue-500',
      border: 'hover:border-blue-500/50',
    },
    {
      icon: Github,
      label: t.contact.github,
      href: personal.social.github,
      color: 'text-gray-700 dark:text-gray-300',
      border: 'hover:border-gray-400/50',
    },
    {
      icon: Mail,
      label: t.contact.email,
      href: personal.social.email,
      color: 'text-primary-400',
      border: 'hover:border-primary-500/50',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-3xl border border-gray-200/60 dark:border-gray-800/60 bg-white/40 dark:bg-gray-900/30 backdrop-blur-sm p-10 sm:p-14 text-center overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {links.map(({ icon: Icon, label, href, color, border }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/40 text-sm font-medium text-gray-700 dark:text-gray-300 ${border} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg`}
              >
                <Icon className={`w-5 h-5 ${color}`} />
                {label}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
