import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface CategoryFilterProps {
  categories: Array<{ id: string; name: string; icon: string }>;
  selectedCategory: string;
  onCategorySelect?: (categoryId: string) => void;
  theme: string;
}

export default function CategoryFilter({ categories, selectedCategory, onCategorySelect, theme }: CategoryFilterProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pt-1">
      <View className="flex-row gap-3">
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => onCategorySelect?.(category.id)}
            className={`h-9 flex-row items-center gap-2 rounded-full px-4 ${
              selectedCategory === category.id
                ? 'bg-[#f2024e] shadow-[#f2024e]/20'
                : theme === "dark"
                  ? 'bg-gray-800 border border-gray-700'
                  : 'bg-white border border-gray-100'
            }`}
          >
            <MaterialIcons
              name={category.icon as any}
              size={18}
              color={selectedCategory === category.id ? 'white' : (theme === "dark" ? '#9CA3AF' : '#A04662')}
            />
            <Text className={`text-sm ${
              selectedCategory === category.id
                ? 'text-white font-semibold'
                : theme === "dark"
                  ? 'text-gray-300 font-medium'
                  : 'text-[#1C0C11] font-medium'
            }`}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
