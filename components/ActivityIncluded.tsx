import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ActivityIncludedProps {
  activity: any;
  theme: string;
}

export default function ActivityIncluded({ activity, theme }: ActivityIncludedProps) {
  const inclusions = Array.isArray(activity.htmlContent?.inclusions)
    ? activity.htmlContent.inclusions
    : [];
  const declusions = Array.isArray(activity.htmlContent?.declusions)
    ? activity.htmlContent.declusions
    : [];

  return (
    <View className="mb-8">
      <Text className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>
        What's Included
      </Text>
      <View className="gap-3">
        {inclusions.length > 0 ? inclusions.map((item: any, idx: number) => (
          <View key={`inc-${idx}`} className="flex-row items-start gap-3">
            <View className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 items-center justify-center">
              <MaterialIcons name="check" size={14} color="green" />
            </View>
            <Text className={`flex-1 text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {typeof item === 'string' ? item : item.title || item.shortDescription || 'NULL'}
            </Text>
          </View>
        )) : (
          <View className="flex-row items-start gap-3">
            <View className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 items-center justify-center">
              <MaterialIcons name="check" size={14} color="green" />
            </View>
            <Text className={`flex-1 text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>NULL</Text>
          </View>
        )}
        {declusions.length > 0 ? declusions.map((item: any, idx: number) => (
          <View key={`dec-${idx}`} className="flex-row items-center gap-3">
            <View className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 items-center justify-center">
              <MaterialIcons name="close" size={18} color="#dc2626" />
            </View>
            <Text className="font-medium text-gray-400 line-through">
              {typeof item === 'string' ? item : item.title || item.shortDescription || 'NULL'}
            </Text>
          </View>
        )) : (
          <View className="flex-row items-center gap-3">
            <View className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 items-center justify-center">
              <MaterialIcons name="close" size={18} color="#dc2626" />
            </View>
            <Text className="font-medium text-gray-400 line-through">NULL</Text>
          </View>
        )}
      </View>
    </View>
  );
}
