import React from 'react';
import { View, Text } from 'react-native';

interface ActivityOperatingHoursProps {
  theme: string;
  openingHours?: string;
}

export default function ActivityOperatingHours({ theme, openingHours }: ActivityOperatingHoursProps) {
  return (
    <View className="mb-8">
      <Text className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>
        Operating Hours
      </Text>
      <View className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-5">
        <View className="flex-row justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
          <Text className="text-gray-500 dark:text-gray-300 font-medium">Monday - Sunday</Text>
          <Text className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>
            {openingHours && openingHours !== 'NULL' ? openingHours : 'NULL'}
          </Text>
        </View>
      </View>
    </View>
  );
}
