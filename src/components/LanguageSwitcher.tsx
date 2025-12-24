import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { languages, Language } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(l => l.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/20 backdrop-blur-sm border border-alpine-snow/20 text-alpine-snow hover:bg-background/30 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLang?.flag} {currentLang?.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute right-0 top-full mt-2 z-50 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl overflow-hidden min-w-[160px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary/10 transition-colors ${
                  language === lang.code ? 'bg-primary/20 text-primary' : 'text-foreground'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
