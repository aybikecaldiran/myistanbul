import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface HelpSectionProps {
  onPress?: () => void;
}

export default function HelpSection({ onPress }: HelpSectionProps) {
  return (
    <View className="px-4">
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View className="rounded-xl p-5 flex-row items-center justify-between bg-primary shadow-lg shadow-primary/20 mb-6 overflow-hidden">
          <View className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />

          <View className="flex-1 z-10">
            <Text className="text-lg font-bold text-white">Need Help?</Text>
            <Text className="text-xs text-white/90 font-medium mt-1">
              Our support team is online 24/7
            </Text>
          </View>
          <View className="bg-white px-4 py-2.5 rounded-lg flex-row items-center z-10">
            <MaterialIcons name="chat" size={18} color="#F0034E" />
            <Text className="text-primary text-sm font-bold ml-2">Support</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={18}
              color="#F0034E"
              style={{ marginLeft: 4 }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
