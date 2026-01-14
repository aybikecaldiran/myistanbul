import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ImportantInfoBannerProps {
  theme: string;
  importantInfo?: string;
}

export default function ImportantInfoBanner({ theme, importantInfo }: ImportantInfoBannerProps) {
  return (
    <View className="mb-8 rounded-2xl bg-red-50 dark:bg-red-900/20 p-4">
      <View className="flex-row gap-3 items-start">
        <View className="mt-0.5 rounded-full bg-red-600 p-0.5 w-5 h-5 items-center justify-center">
          <MaterialIcons name="priority-high" size={14} color="white" />
        </View>
        <View className="flex-1">
          <Text className="text-sm font-bold text-red-700 dark:text-red-200">Important Info</Text>
          <Text className="text-sm text-red-600 dark:text-red-300 mt-1 leading-snug">
            {importantInfo && importantInfo !== 'NULL' ? importantInfo : 'NULL'}
          </Text>
        </View>
      </View>
    </View>
  );
}
