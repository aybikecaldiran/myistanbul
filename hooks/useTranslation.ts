import { useLanguage } from '@/contexts/LanguageContext';
import { translations, SupportedLanguage, TranslationKey } from '@/constants/translations';


export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  /**
   * Get translated text for a given key
   * @param key - Translation key
   * @param fallback - Optional fallback text if translation not found
   * @returns Translated text
   */
  const t = (key: TranslationKey, fallback?: string): string => {
    const translation = translations[currentLanguage]?.[key] || translations.en[key];
    return translation || fallback || key;
  };

  return {
    t,
    language: currentLanguage,
    isRTL: false, // Only EN/TR supported, no RTL needed
  };
};
