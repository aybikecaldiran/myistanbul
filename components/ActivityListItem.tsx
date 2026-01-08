import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useResponsive } from '@/hooks/useResponsive';
import { Activity } from '@/data/mockData';

interface ActivityListItemProps {
  activity: Activity;
  theme: string;
  FEATURE_ICONS: { [key: string]: string };
}

export default function ActivityListItem({ activity, theme, FEATURE_ICONS }: ActivityListItemProps) {
  const { large, medium } = useResponsive();

  return (
    <TouchableOpacity
      onPress={() => router.push(`/activity/${activity.id}`)}
      className="bg-white dark:bg-gray-800 rounded-[28px] shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mx-4 mb-4">
      <View className="flex-row p-3 gap-4">
        <View className="relative h-48 w-36 rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex-shrink-0">
          <Image source={{ uri: activity.image }} className="w-full h-full" resizeMode="cover" />
          <TouchableOpacity className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/20 justify-center items-center">
            <MaterialIcons name="favorite-border" size={16} color="white" />
          </TouchableOpacity>
        </View>

        <View className="flex-1 justify-between py-0.5">
          <View>
            <Text className="text-base font-bold text-gray-900 dark:text-white leading-tight mb-2" numberOfLines={2}>
              {activity.title}
            </Text>

            <View className="flex-row flex-wrap gap-2 mb-3">
              {activity.tags?.map((tag: string, index: number) => (
                <View key={index} className="bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-md">
                  <Text className="text-xs font-medium text-[#A04662] dark:text-[#A04662]">
                    {tag}
                  </Text>
                </View>
              ))}
            </View>

            <View className="gap-1.5">
              <View className="flex-row gap-2">
                {activity.features?.slice(0, 2).map((feature: string, index: number) => (
                  <View key={index} className="flex-1 flex-row items-center gap-1.5">
                    <MaterialIcons
                      name={FEATURE_ICONS[feature] as any || 'check'}
                      size={16}
                      color="#f2024e"
                    />
                    <Text className="text-xs text-gray-500 dark:text-gray-400 flex-1" numberOfLines={1}>
                      {feature}
                    </Text>
                  </View>
                ))}
              </View>
              <View className="flex-row gap-2">
                {activity.features?.slice(2, 4).map((feature: string, index: number) => (
                  <View key={index + 2} className="flex-1 flex-row items-center gap-1.5">
                    <MaterialIcons
                      name={FEATURE_ICONS[feature] as any || 'check'}
                      size={16}
                      color="#f2024e"
                    />
                    <Text className="text-xs text-gray-500 dark:text-gray-400 flex-1" numberOfLines={1}>
                      {feature}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View className={`mt-3 ${large || medium ? "flex-row items-center" : "flex-col items-end"} justify-between border-t border-gray-50 dark:border-gray-700 pt-2 gap-2`}>
            <View className="flex-1 flex-row items-center gap-1">
              <MaterialIcons name="star" size={16} color="#EAB308" />
              <Text className="text-xs font-bold text-gray-900 dark:text-gray-200">{activity.rating}</Text>
              <Text className="text-xs text-gray-400">({activity.reviews})</Text>
            </View>

            <View className={`flex-shrink px-2 py-1 rounded-md flex-row items-center gap-1 min-w-[50px] ${
              activity.priceType === 'discounted'
                ? 'bg-orange-100 dark:bg-orange-800'
                : 'bg-green-100 dark:bg-green-800'
            }`}>
              <MaterialIcons
                name={activity.priceType === 'discounted' ? 'percent' : 'check-circle'}
                size={14}
                color={activity.priceType === 'discounted' ? '#EA580C' : '#15803D'}
              />
              <Text className={`text-xs font-bold tracking-wide ${
                activity.priceType === 'discounted'
                  ? 'text-orange-700 dark:text-orange-400'
                  : 'text-green-700 dark:text-green-400'
              }`}>
                {activity.priceType === 'discounted' ? 'DISCOUNTED' : 'FREE WITH PASS'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
