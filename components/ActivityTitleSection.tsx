import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ActivityTitleSectionProps {
  activity: any;
  theme: string;
}

export default function ActivityTitleSection({ activity, theme }: ActivityTitleSectionProps) {
  return (
    <View className="mb-6">
      <Text className={`text-2xl font-extrabold leading-tight ${
        theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'
      }`}>
        {activity.title || activity.name}
      </Text>

      <View className="mt-3 flex-row items-center gap-2">
        <View className="flex-row items-center gap-1 rounded bg-[#fff0f4] dark:bg-[#f2024e]/20 px-2 py-1">
          <MaterialIcons name="star" size={16} color="#f2024e" />
          <Text className="font-bold text-[#f2024e]">{activity.rating}</Text>
        </View>
        <Text className="text-gray-500 dark:text-gray-400 underline">
          {activity.reviews} Reviews
        </Text>
        <Text className="text-gray-300 dark:text-gray-600">•</Text>
        <Text className="text-gray-500 dark:text-gray-400">{activity.category}</Text>
      </View>
    </View>
  );
}
