import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Activity } from '@/data/mockData';

interface TrendingCardProps {
  activity: Activity;
  theme: string;
}

export default function TrendingCard({ activity, theme }: TrendingCardProps) {
  return (
    <TouchableOpacity
      className="relative w-[260px] h-[340px] mr-4 rounded-[28px] overflow-hidden bg-gray-700 shadow-lg"
      onPress={() => router.push(`/activity/${activity.id}`)}
    >
      <Image source={{ uri: activity.image }} className="absolute inset-0 w-full h-full" resizeMode="cover" />

      <LinearGradient
        colors={[
          theme === "dark" ? "rgba(17,24,39,0.8)" : "rgba(0,0,0,0.6)",
          "rgba(0,0,0,0.3)",
          "transparent"
        ]}
        locations={[0, 0.3, 1]}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '40%'
        }}
      />

      <LinearGradient
        colors={[
          "transparent",
          "rgba(0,0,0,0.1)",
          "rgba(0,0,0,0.3)",
          "rgba(0,0,0,0.6)",
          theme === "dark" ? "rgba(17,24,39,0.9)" : "rgba(0,0,0,0.8)"
        ]}
        locations={[0, 0.3, 0.6, 0.8, 1]}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60%'
        }}
      />

      <TouchableOpacity className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 justify-center items-center">
        <MaterialIcons name="favorite-border" size={18} color="white" />
      </TouchableOpacity>

      {activity.badge && (
        <View className={`absolute top-3 left-3 flex-row items-center gap-1 rounded-full px-2 py-1 ${
          activity.badge.type === 'primary'
            ? 'bg-[#f2024e]/90'
            : 'bg-white/20 border border-white/20'
        }`}>
          <MaterialIcons
            name={activity.badge.type === 'primary' ? 'whatshot' : 'flash-on'}
            size={12}
            color="white"
          />
          <Text className="text-white text-xs font-bold">{activity.badge.text}</Text>
        </View>
      )}

      <View className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <View className="flex-row items-center gap-1 mb-1">
          <MaterialIcons name="star" size={16} color="#FBBF24" />
          <Text className="text-white text-xs font-bold">
            {activity.rating} ({activity.reviews})
          </Text>
        </View>
        <Text className="text-white text-xl font-bold leading-6" numberOfLines={2}>
          {activity.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
