import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ActivityFeaturesProps {
  features: (string | { title?: string; shortDescription?: string })[] | undefined;
  theme: string;
}

export default function ActivityFeatures({ features, theme }: ActivityFeaturesProps) {
  if (!features || features.length === 0) return null;

  return (
    <View className="mb-6">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-2">
        <View className="flex-row gap-3">
          {features.map((feature, index) => (
            <View key={index} className="flex-row items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
              <MaterialIcons name="check-circle" size={20} color="#f2024e" />
              <Text className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>
                {typeof feature === 'string'
                  ? feature
                  : feature.title || feature.shortDescription || 'NULL'}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
