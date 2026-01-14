import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ActivityDescriptionProps {
  activity: any;
  theme: string;
  readMore: boolean;
  onToggleReadMore: () => void;
}

export default function ActivityDescription({
  activity,
  theme,
  readMore,
  onToggleReadMore
}: ActivityDescriptionProps) {
  const description = activity.description || activity.short_description || 'Discover this amazing attraction in Istanbul.';
  const showReadMore = description.length > 120;

  return (
    <View className="mb-8">
      <Text className={`text-lg font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>
        Experience
      </Text>
      <Text
        className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
        numberOfLines={readMore ? undefined : 2}
        ellipsizeMode="tail"
      >
        {description}
      </Text>
      {showReadMore && (
        <TouchableOpacity
          className="mt-2 flex-row items-center gap-1"
          onPress={onToggleReadMore}
        >
          <Text className="text-sm font-bold text-[#f2024e]">
            {readMore ? 'Read less' : 'Read more'}
          </Text>
          <MaterialIcons
            name={readMore ? "expand-less" : "expand-more"}
            size={16}
            color="#f2024e"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
