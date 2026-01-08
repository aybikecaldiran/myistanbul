import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Alert } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as Clipboard from 'expo-clipboard';

interface PassInfoCardProps {
  passType: string;
  participants: string;
  startDate: string;
  passId: string;
  remainingDays: number;
  isPassStarted: boolean;
  pingAnim: Animated.Value;
}

export default function PassInfoCard({
  passType,
  participants,
  startDate,
  passId,
  remainingDays,
  isPassStarted,
  pingAnim
}: PassInfoCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const copyPassNumber = async () => {
    try {
      await Clipboard.setStringAsync(passId);
      Alert.alert('Copied!', 'Pass number copied to clipboard');
    } catch (error) {
      Alert.alert('Error', 'Failed to copy pass number');
    }
  };

  return (
    <View className="rounded-3xl border mb-6 overflow-hidden bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <View className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/5 opacity-50 scale-150" />

      <View className="p-6 pb-8">
        <View className="flex-row flex-wrap">
          <View className="w-1/2 mb-6">
            <Text className="text-xs font-bold uppercase tracking-wider mb-1 text-gray-600 dark:text-gray-400">
              Pass Type
            </Text>
            <Text className="text-2xl font-extrabold text-[#111618] dark:text-white">
              {passType}
            </Text>
          </View>

          <View className="w-1/2 mb-6">
            <Text className="text-xs font-bold uppercase tracking-wider mb-1 text-gray-600 dark:text-gray-400">
              Guests
            </Text>
            <Text className="text-xl font-bold text-[#111618] dark:text-white">
              {participants}
            </Text>
          </View>

          <View className="w-1/2">
            <Text className="text-xs font-bold uppercase tracking-wider mb-1 text-gray-600 dark:text-gray-400">
              Start Date
            </Text>
            <Text className="text-base font-semibold text-[#111618] dark:text-white">
              {formatDate(startDate)}
            </Text>
          </View>

          <View className="w-1/2">
            <Text className="text-xs font-bold uppercase tracking-wider mb-1 text-gray-600 dark:text-gray-400">
              {isPassStarted ? 'Expires In' : 'Starts In'}
            </Text>
            <View className="flex-row items-center">
              <View className="relative w-2.5 h-2.5 mr-2">
                <Animated.View
                  style={{
                    position: 'absolute',
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: '#F0034E',
                    transform: [
                      {
                        scale: pingAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 2],
                        }),
                      },
                    ],
                    opacity: pingAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.75, 0],
                    }),
                  }}
                />
                <View className="w-2.5 h-2.5 bg-primary rounded-full" />
              </View>
              <Text className="text-base font-semibold text-primary">
                {remainingDays} Days Left
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View className="px-6 py-4 border-t border-gray-200 bg-gray-50/50 dark:border-gray-600 dark:bg-gray-800/30">
        <Text className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-1">
          Pass Number
        </Text>
        <TouchableOpacity className="flex-row items-center" onPress={copyPassNumber}>
          <Text className="font-mono text-xl font-bold tracking-widest mr-2 text-[#111618] dark:text-white">
            {passId}
          </Text>
          <MaterialIcons name="content-copy" size={18} color="#6B7280" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
