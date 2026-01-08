import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useResponsive } from '@/hooks/useResponsive';

interface QuickActionButtonProps {
  title: string;
  subtitle: string;
  iconName: string;
  iconColor: string;
  backgroundColor: string;
  onPress?: () => void;
}

export default function QuickActionButton({
  title,
  subtitle,
  iconName,
  iconColor,
  backgroundColor,
  onPress
}: QuickActionButtonProps) {
  const { tiny, small } = useResponsive();

  return (
    <View className="w-1/3 px-1.5 mb-3">
      <TouchableOpacity
        onPress={onPress}
        className={`rounded-xl border p-3 items-center bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600 ${
          tiny ? 'h-28' : small ? 'h-32' : 'h-36'
        }`}
      >
        <View className={`w-10 h-10 rounded-full items-center justify-center mb-2 ${backgroundColor}`}>
          <MaterialIcons
            name={iconName as any}
            size={tiny ? 20 : 24}
            color={iconColor}
          />
        </View>
        <View className="flex-1 justify-center">
          <Text
            className={`${
              tiny ? 'text-xs' : small ? 'text-sm' : 'text-sm'
            } font-bold text-center mb-1 text-[#111618] dark:text-white`}
            numberOfLines={2}
          >
            {title}
          </Text>
          <Text
            className={`${
              tiny ? 'text-xs' : 'text-xs'
            } text-center text-gray-600 dark:text-gray-400`}
            numberOfLines={2}
          >
            {subtitle}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
