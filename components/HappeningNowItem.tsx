import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

interface HappeningNowItemProps {
  id: number;
  title: string;
  image: string;
  status: string;
  closingTime: string;
}

export default function HappeningNowItem({
  id,
  title,
  image,
  status,
  closingTime
}: HappeningNowItemProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPEN NOW':
        return 'bg-green-500';
      case 'BUSY':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <TouchableOpacity
      className="w-64 rounded-xl overflow-hidden border mr-4 bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600"
      onPress={() => router.push(`/activity/${id}`)}
    >
      <View className="relative h-36 w-full">
        <Image
          source={{ uri: image }}
          className="w-full h-full"
          resizeMode="cover"
        />
        <View className="absolute inset-0 bg-black/30" />
        <View className={`absolute top-2 right-2 px-2 py-1 rounded-full ${getStatusColor(status)}`}>
          <Text className="text-white text-xs font-bold uppercase">
            {status}
          </Text>
        </View>
      </View>

      <View className="p-3">
        <Text className="text-base font-bold mb-1 text-[#111618] dark:text-white">
          {title}
        </Text>
        <View className="flex-row items-center">
          <MaterialIcons name="schedule" size={14} color="#6B7280" />
          <Text className="text-xs ml-1 text-gray-600 dark:text-gray-400">
            {closingTime}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
