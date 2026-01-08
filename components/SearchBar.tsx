import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface SearchBarProps {
  searchText: string;
  onSearchChange: (text: string) => void;
  onFilterPress: () => void;
  theme: string;
}

export default function SearchBar({ searchText, onSearchChange, onFilterPress, theme }: SearchBarProps) {
  return (
    <View className="w-full mb-4">
      <View className={`flex-row items-center h-12 rounded-full shadow-sm border ${
        theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
      }`}>
        <View className="h-full w-12 justify-center items-center pl-2">
          <MaterialIcons name="search" size={20} color="#f2024e" />
        </View>
        <TextInput
          className={`flex-1 h-full px-2 text-base font-medium ${
            theme === "dark" ? "text-white" : "text-[#1C0C11]"
          }`}
          placeholder="Search attractions, museums..."
          placeholderTextColor={theme === "dark" ? "#9CA3AF" : "#A04662"}
          value={searchText}
          onChangeText={onSearchChange}
        />
        <TouchableOpacity
          className="w-10 h-10 rounded-full bg-[#f2024e]/10 justify-center items-center mr-1"
          onPress={onFilterPress}
        >
          <MaterialIcons name="tune" size={20} color="#f2024e" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
