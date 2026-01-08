import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ActivityReviewsProps {
  theme: string;
}

export default function ActivityReviews({ theme }: ActivityReviewsProps) {
  return (
    <View className="mb-8">
      <View className="flex-row items-center justify-between mb-4">
        <Text className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>
          Reviews
        </Text>
        <TouchableOpacity>
          <Text className="text-sm font-bold text-[#f2024e]">See all</Text>
        </TouchableOpacity>
      </View>

      <View className="rounded-2xl bg-gray-50 dark:bg-gray-700 p-4">
        <View className="flex-row items-start gap-4">
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDICUF_wkjxBKTKzqniZ6NHlY3RGVKbj3HJBx_c--aokvxQowIrKNgaPbZoDD00YT949SUBsRMWPKzLBUm8rxC_YUcS2DEug4aJ6gXMREB-V1jja803LSAoQhiqXXMh6QansLsxnRyJ7mH1dQA8TPfWX36xY1aEei8WsV8C3STvlWKtLFjOgr5dbMnn15lK5f0VNJn1byHvEV2Vxv9_Bv0A4Gpx_KwJQI2nvJj53Flyq5AaOGLaKkEFHIDZcFn1pdaeow3yOMKEigA'
            }}
            className="w-12 h-12 rounded-full"
            resizeMode="cover"
          />
          <View className="flex-1">
            <View className="flex-row items-center justify-between mb-1">
              <Text className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>
                Sarah M.
              </Text>
              <Text className="text-xs text-gray-400">2 days ago</Text>
            </View>
            <View className="flex-row mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <MaterialIcons key={star} name="star" size={16} color="#fbbf24" />
              ))}
            </View>
            <Text className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
              Absolutely magical! The food was great and the show was very entertaining.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
