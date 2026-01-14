import React, { useState } from 'react';
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

const getImageUri = (activity: Activity): string => {
  if (activity.image && activity.image !== 'NULL' && activity.image !== '/assets/images/placeholder.jpg') {
    return activity.image;
  }
  return 'https://via.placeholder.com/150x200?text=No+Image';
};

const getPriceDisplay = (activity: Activity) => {
  if (activity.priceType === 'NULL') return 'NULL';
  return activity.priceType === 'free' ? 'FREE WITH PASS' : 'DISCOUNTED';
};

const getPriceIcon = (activity: Activity) => {
  if (activity.priceType === 'NULL') return 'help-outline';
  return activity.priceType === 'free' ? 'check-circle' : 'percent';
};

const getPriceColors = (activity: Activity) => {
  if (activity.priceType === 'NULL') {
    return {
      bg: 'bg-gray-100 dark:bg-gray-800',
      text: 'text-gray-700 dark:text-gray-400',
      icon: '#6B7280'
    };
  }
  return activity.priceType === 'free' ? {
    bg: 'bg-green-100 dark:bg-green-800',
    text: 'text-green-700 dark:text-green-400',
    icon: '#15803D'
  } : {
    bg: 'bg-orange-100 dark:bg-orange-800',
    text: 'text-orange-700 dark:text-orange-400',
    icon: '#EA580C'
  };
};
const safeArray = (arr: any): string[] => {
  if (!arr || arr === 'NULL' || (Array.isArray(arr) && arr[0] === 'NULL')) {
    return [];
  }
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.map(item => {
    if (typeof item === 'object' && item !== null) {
      return item.title || item.name || JSON.stringify(item);
    }
    return String(item);
  });
};

const safeString = (value: any): string => {
  if (typeof value === 'object' && value !== null) {
    return value.title || value.name || value.label || String(value);
  }
  return String(value);
};

const safeValue = (value: any): string => {
  return value && value !== 'NULL' ? value.toString() : '';
};

export default function ActivityListItem({ activity, theme, FEATURE_ICONS }: ActivityListItemProps) {
  const { large, medium } = useResponsive();
  const priceColors = getPriceColors(activity);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => router.push(`/activity/${activity.id}`)}
      className="bg-white dark:bg-gray-800 rounded-[28px] shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mx-4 mb-4">
      <View className="flex-row p-3 gap-4">
        <View className="relative h-48 w-36 rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex-shrink-0">
          <Image source={{ uri: getImageUri(activity) }} className="w-full h-full" resizeMode="cover" />
          <TouchableOpacity className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/20 justify-center items-center" onPress={() => setIsFavorite((prev) => !prev)}>
            <MaterialIcons name={isFavorite ? "favorite" : "favorite-border"} size={16} color={isFavorite ? "#f2024e" : "white"} />
          </TouchableOpacity>
        </View>

        <View className="flex-1 justify-between py-0.5">
          <View>
            <Text className="text-base font-bold text-gray-900 dark:text-white leading-tight mb-2" numberOfLines={2}>
              {activity.title}
            </Text>

            <View className="flex-row flex-wrap gap-2 mb-3">
              {safeArray(activity.tags).length > 0 ?
                safeArray(activity.tags).slice(0, 3).map((tag: string, index: number) => (
                  <View key={index} className="bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-md">
                    <Text className="text-xs font-medium text-[#A04662] dark:text-[#A04662]">
                      {safeString(tag)}
                    </Text>
                  </View>
                )) : (
                  <View className="bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-md">
                    <Text className="text-xs font-medium text-[#A04662] dark:text-[#A04662]">
                      NULL
                    </Text>
                  </View>
                )
              }
            </View>

            <View className="gap-1.5">
              {safeArray(activity.features).length > 0 ? (
                <>
                  <View className="flex-row gap-2">
                    {safeArray(activity.features).slice(0, 2).map((feature: string, index: number) => (
                      <View key={index} className="flex-1 flex-row items-center gap-1.5">
                        <MaterialIcons
                          name={FEATURE_ICONS[safeString(feature)] as any || 'check'}
                          size={16}
                          color="#f2024e"
                        />
                        <Text className="text-xs text-gray-500 dark:text-gray-400 flex-1" numberOfLines={1}>
                          {safeString(feature)}
                        </Text>
                      </View>
                    ))}
                  </View>
                  <View className="flex-row gap-2">
                    {safeArray(activity.features).slice(2, 4).map((feature: string, index: number) => (
                      <View key={index + 2} className="flex-1 flex-row items-center gap-1.5">
                        <MaterialIcons
                          name={FEATURE_ICONS[safeString(feature)] as any || 'check'}
                          size={16}
                          color="#f2024e"
                        />
                        <Text className="text-xs text-gray-500 dark:text-gray-400 flex-1" numberOfLines={1}>
                          {safeString(feature)}
                        </Text>
                      </View>
                    ))}
                  </View>
                </>
              ) : (
                <View className="flex-row items-center gap-1.5">
                  <MaterialIcons
                    name="help-outline"
                    size={16}
                    color="#f2024e"
                  />
                  <Text className="text-xs text-gray-500 dark:text-gray-400">
                    NULL
                  </Text>
                </View>
              )}
            </View>
          </View>

          <View className={`mt-3 ${large || medium ? "flex-row items-center" : "flex-col items-end"} justify-between border-t border-gray-50 dark:border-gray-700 pt-2 gap-2`}>
            <View className="flex-1 flex-row items-center gap-1">
              <MaterialIcons name="star" size={16} color="#EAB308" />
              <Text className="text-xs font-bold text-gray-900 dark:text-gray-200">
                {activity.rating !== 'NULL' ? activity.rating : 'NULL'}
              </Text>
              <Text className="text-xs text-gray-400">
                ({safeValue(activity.reviews) || 'NULL'})
              </Text>
            </View>

            <View className={`flex-shrink px-2 py-1 rounded-md flex-row items-center gap-1 min-w-[50px] ${priceColors.bg}`}>
              <MaterialIcons
                name={getPriceIcon(activity) as any}
                size={14}
                color={priceColors.icon}
              />
              <Text className={`text-xs font-bold tracking-wide ${priceColors.text}`}>
                {getPriceDisplay(activity)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
