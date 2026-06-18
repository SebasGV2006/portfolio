import { Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-sm font-bold bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent">
          {'<SebasGV />'}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1.5">
          {t.footer.built}
          <Heart className="w-3.5 h-3.5 text-primary-400 fill-current" />
          {t.footer.by}
        </p>
      </div>
    </footer>
  );
}
