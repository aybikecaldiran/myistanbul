import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ActivityIncludedProps {
  activity: any;
  theme: string;
}

export default function ActivityIncluded({ activity, theme }: ActivityIncludedProps) {
  return (
    <View className="mb-8">
      <Text className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>
        What's Included
      </Text>
      <View className="gap-3">
        {activity.has_skip_the_line && (
          <View className="flex-row items-start gap-3">
            <View className="mt-1 rounded-full bg-green-600 p-0.5">
              <MaterialIcons name="check" size={14} color="white" />
            </View>
            <Text className={`flex-1 text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Skip-the-line entry ticket
            </Text>
          </View>
        )}
        {activity.has_instant_access && (
          <View className="flex-row items-start gap-3">
            <View className="mt-1 rounded-full bg-green-600 p-0.5">
              <MaterialIcons name="check" size={14} color="white" />
            </View>
            <Text className={`flex-1 text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Instant digital access
            </Text>
          </View>
        )}
        {activity.is_free_with_pass && (
          <View className="flex-row items-start gap-3">
            <View className="mt-1 rounded-full bg-green-600 p-0.5">
              <MaterialIcons name="check" size={14} color="white" />
            </View>
            <Text className={`flex-1 text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Free entry with Istanbul Tourist Pass
            </Text>
          </View>
        )}
        <View className="flex-row items-start gap-3">
          <View className="w-6 h-6 rounded-full bg-green-100 dark:bg-greem-900/30 items-center justify-center">
            <MaterialIcons name="check" size={14} color="green" />
          </View>
          <Text className={`flex-1 text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Hotel pickup and drop-off
          </Text>
        </View>
        <View className="flex-row items-start gap-3">
          <View className="w-6 h-6 rounded-full bg-green-100 dark:bg-greem-900/30 items-center justify-center">
            <MaterialIcons name="check" size={14} color="green" />
          </View>
          <Text className={`flex-1 text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            3-course dinner
          </Text>
        </View>
        <View className="flex-row items-center gap-3">
          <View className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 items-center justify-center">
            <MaterialIcons name="close" size={18} color="#dc2626" />
          </View>
          <Text className="font-medium text-gray-400 line-through">
            Alcoholic beverages
          </Text>
        </View>
      </View>
    </View>
  );
}
