import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useLanguage } from '@/contexts/LanguageContext';
import { useThemeContext } from '@/components/ThemeContext';
import { SupportedLanguage } from '@/constants/translations';

interface LanguageSettingsProps {
  visible?: boolean;
  onClose?: () => void;
}

export const LanguageSettings: React.FC<LanguageSettingsProps> = ({
  visible = false,
  onClose
}) => {
  const { theme } = useThemeContext();
  const {
    currentLanguage,
    setLanguage,
    isAutoDetect,
    setAutoDetect
  } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  const handleLanguageSelect = async (language: SupportedLanguage) => {
    if (language === currentLanguage && !isAutoDetect) return;

    setIsLoading(true);
    try {
      await setLanguage(language);
      Alert.alert(
        'Dil Değiştirildi',
        'Dil başarıyla değiştirildi.',
        [{ text: 'Tamam', onPress: onClose }]
      );
    } catch (error) {
      Alert.alert('Hata', 'Dil değiştirilemedi. Lütfen tekrar deneyin.');
    }
    setIsLoading(false);
  };

  const handleAutoDetectToggle = async () => {
    setIsLoading(true);
    try {
      await setAutoDetect(!isAutoDetect);
      if (!isAutoDetect) {
        Alert.alert(
          'Otomatik Tespit Açıldı',
          'Dil artık cihaz ayarınıza göre otomatik tespit edilecek.',
          [{ text: 'Tamam' }]
        );
      }
    } catch (error) {
      Alert.alert('Hata', 'Ayar değiştirilemedi. Lütfen tekrar deneyin.');
    }
    setIsLoading(false);
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      {/* Modal Overlay */}
      <View className="flex-1 bg-black/50 justify-end">

        {/* Modal Container */}
        <View className={`rounded-t-2xl max-h-[80%] min-h-[400px] ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>

          {/* Header */}
          <View className={`flex-row items-center justify-between p-5 border-b ${
            theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
          }`}>
            <Text className={`text-xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              Dil Ayarları
            </Text>
            <TouchableOpacity onPress={onClose} className="p-1">
              <MaterialIcons
                name="close"
                size={24}
                color={theme === 'dark' ? '#ffffff' : '#000000'}
              />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <ScrollView className="flex-1">

            {/* Auto Detect Toggle */}
            <View className={`px-5 py-5 border-b ${
              theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
            }`}>
              <TouchableOpacity
                onPress={handleAutoDetectToggle}
                disabled={isLoading}
                className="flex-row items-center justify-between"
              >
                <View className="flex-1">
                  <Text className={`text-base font-semibold mb-1 ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    Otomatik Dil Tespiti
                  </Text>
                  <Text className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Cihaz dil ayarını kullan
                  </Text>
                </View>

                {/* Toggle Switch */}
                <View className={`w-12 h-7 rounded-full p-0.5 justify-center ${
                  isAutoDetect 
                    ? 'bg-green-500 items-end' 
                    : 'bg-gray-300 items-start'
                }`}>
                  <View className="w-6 h-6 bg-white rounded-full" />
                </View>
              </TouchableOpacity>
            </View>

            {/* Language Options */}
            <View className="p-5">
              <Text className={`text-base font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Dil Seçin
              </Text>

              {/* English Option */}
              <TouchableOpacity
                onPress={() => handleLanguageSelect('en' as SupportedLanguage)}
                className={`flex-row items-center justify-between p-4 mb-3 rounded-xl border ${
                  currentLanguage === 'en'
                    ? theme === 'dark' 
                      ? 'bg-green-900 border-green-500' 
                      : 'bg-green-100 border-green-500'
                    : theme === 'dark'
                      ? 'border-gray-600 bg-transparent'
                      : 'border-gray-200 bg-transparent'
                }`}
              >
                <View className="flex-1">
                  <Text className={`text-base ${
                    currentLanguage === 'en' ? 'font-semibold' : 'font-normal'
                  } ${
                    currentLanguage === 'en'
                      ? theme === 'dark' ? 'text-white' : 'text-green-700'
                      : theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    English
                  </Text>
                  <Text className={`text-sm ${
                    currentLanguage === 'en'
                      ? theme === 'dark' ? 'text-green-200' : 'text-green-600'
                      : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    English
                  </Text>
                </View>
                {currentLanguage === 'en' && (
                  <MaterialIcons
                    name="check"
                    size={24}
                    color={theme === 'dark' ? '#10b981' : '#065f46'}
                  />
                )}
              </TouchableOpacity>

              {/* Turkish Option */}
              <TouchableOpacity
                onPress={() => handleLanguageSelect('tr' as SupportedLanguage)}
                className={`flex-row items-center justify-between p-4 mb-3 rounded-xl border ${
                  currentLanguage === 'tr'
                    ? theme === 'dark' 
                      ? 'bg-green-900 border-green-500' 
                      : 'bg-green-100 border-green-500'
                    : theme === 'dark'
                      ? 'border-gray-600 bg-transparent'
                      : 'border-gray-200 bg-transparent'
                }`}
              >
                <View className="flex-1">
                  <Text className={`text-base ${
                    currentLanguage === 'tr' ? 'font-semibold' : 'font-normal'
                  } ${
                    currentLanguage === 'tr'
                      ? theme === 'dark' ? 'text-white' : 'text-green-700'
                      : theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    Türkçe
                  </Text>
                  <Text className={`text-sm ${
                    currentLanguage === 'tr'
                      ? theme === 'dark' ? 'text-green-200' : 'text-green-600'
                      : theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Turkish
                  </Text>
                </View>
                {currentLanguage === 'tr' && (
                  <MaterialIcons
                    name="check"
                    size={24}
                    color={theme === 'dark' ? '#10b981' : '#065f46'}
                  />
                )}
              </TouchableOpacity>
            </View>

            {/* Current Status */}
            <View className={`mx-5 mb-5 p-4 rounded-xl ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <Text className={`text-sm text-center ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Mevcut Dil: {currentLanguage === 'tr' ? 'Türkçe' : 'English'}
                {isAutoDetect ? ' (Otomatik)' : ' (Manuel)'}
              </Text>
            </View>

            {/* Bottom Padding */}
            <View className="h-10" />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

