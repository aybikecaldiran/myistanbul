import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ActivityLocationMapProps {
  activity: any;
  theme: string;
}

export default function ActivityLocationMap({ activity, theme }: ActivityLocationMapProps) {
  return (
    <View className="mb-8">
      <Text className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>
        Where Exactly Will We Meet?
      </Text>

      <View className="relative h-48 w-full overflow-hidden rounded-2xl bg-gray-200 mb-4">
        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfm2TLpA82986m2cPo3nxYhzMx3sLKjjZ7HgK-6TodWvWyStRMYQQfy0GX-yNj00TX0Kqx840_pDY8HKtn3sNO7RH3MeXk0jsYzE_KGX286nezN1bfEGxpQvt8tETO7zYLar9d3O-IgaGKfYrSD3cxo2c5FB7db_GNqIuDqiYG3KWrqwYEF3ffE0VaOimLbrKUXbjNaitMx1nY7CfEmwwMc7vnxSTcEKK7okXqh52mnVLTGvWFgm9Z92AcbeZYIY_QFG6sLB09XQo'
          }}
          className="w-full h-full"
          resizeMode="cover"
        />
        <View className="absolute inset-0 items-center justify-center">
          <TouchableOpacity className="flex-row items-center gap-2 rounded-full bg-white px-5 py-3 shadow-xl">
            <MaterialIcons name="near-me" size={20} color="#f2024e" />
            <Text className="text-sm font-bold text-[#1c0c11]">Get Directions</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row items-start gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700">
        <MaterialIcons name="location-on" size={20} color="#6b7280" />
        <Text className="flex-1 text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
          {activity.location || 'Central Istanbul location. Please check with your Istanbul Tourist Pass for detailed directions.'}
        </Text>
      </View>
    </View>
  );
}
