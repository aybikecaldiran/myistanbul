import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalization } from '@/hooks/useDeviceHooks';
import { SupportedLanguage } from '@/constants/translations';

interface LanguageContextType {
  currentLanguage: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => Promise<void>;
  isAutoDetect: boolean;
  setAutoDetect: (auto: boolean) => Promise<void>;
  availableLanguages: { code: SupportedLanguage; name: string; nativeName: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const STORAGE_KEYS = {
  SELECTED_LANGUAGE: '@myistanbul_selected_language',
  AUTO_DETECT: '@myistanbul_auto_detect',
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { language: deviceLanguage } = useLocalization();
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('en');
  const [isAutoDetect, setIsAutoDetect] = useState(true);

  const availableLanguages = [
    { code: 'en' as SupportedLanguage, name: 'English', nativeName: 'English' },
    { code: 'tr' as SupportedLanguage, name: 'Turkish', nativeName: 'Türkçe' },
  ];

  // Initialize language settings
  useEffect(() => {
    initializeLanguage();
  }, [deviceLanguage]);

  const initializeLanguage = async () => {
    try {
      const storedAutoDetect = await AsyncStorage.getItem(STORAGE_KEYS.AUTO_DETECT);
      const storedLanguage = await AsyncStorage.getItem(STORAGE_KEYS.SELECTED_LANGUAGE);

      const autoDetect = storedAutoDetect ? JSON.parse(storedAutoDetect) : true;
      setIsAutoDetect(autoDetect);

      if (autoDetect) {
        // Use device language
        const mappedLanguage = mapDeviceLanguage(deviceLanguage);
        setCurrentLanguage(mappedLanguage);
      } else if (storedLanguage) {
        // Use stored manual selection
        setCurrentLanguage(storedLanguage as SupportedLanguage);
      } else {
        // Fallback to English
        setCurrentLanguage('en');
      }
    } catch (error) {
      console.error('Failed to initialize language settings:', error);
      setCurrentLanguage('en');
      setIsAutoDetect(true);
    }
  };

  const mapDeviceLanguage = (deviceLang: string): SupportedLanguage => {
    switch (deviceLang.toLowerCase()) {
      case 'tr':
      case 'tur':
        return 'tr';
      default:
        return 'en'; // Default to English for all other languages
    }
  };

  const setLanguage = async (language: SupportedLanguage): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.SELECTED_LANGUAGE, language);
      await AsyncStorage.setItem(STORAGE_KEYS.AUTO_DETECT, JSON.stringify(false));
      setCurrentLanguage(language);
      setIsAutoDetect(false);
    } catch (error) {
      console.error('Failed to save language preference:', error);
      throw error;
    }
  };

  const setAutoDetect = async (auto: boolean): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.AUTO_DETECT, JSON.stringify(auto));
      setIsAutoDetect(auto);

      if (auto) {
        // Switch back to device language
        const mappedLanguage = mapDeviceLanguage(deviceLanguage);
        setCurrentLanguage(mappedLanguage);
        await AsyncStorage.removeItem(STORAGE_KEYS.SELECTED_LANGUAGE);
      }
    } catch (error) {
      console.error('Failed to save auto-detect preference:', error);
      throw error;
    }
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    isAutoDetect,
    setAutoDetect,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
