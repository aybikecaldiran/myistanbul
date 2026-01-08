import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '@/components/UI/Button';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  filterOptions: string[];
  selectedFilters: string[];
  onToggleFilter: (filter: string) => void;
  onReset: () => void;
  onApply: () => void;
  theme: string;
}

export default function FilterModal({
  visible,
  onClose,
  filterOptions,
  selectedFilters,
  onToggleFilter,
  onReset,
  onApply,
  theme
}: FilterModalProps) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        className="flex-1 justify-end"
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          className={`w-full rounded-t-[24px] min-h-[60vh] ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <View className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full" />

          <View className="flex-row items-center justify-between mb-6 mt-4 px-6">
            <Text className={`text-xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Filters
            </Text>
            <TouchableOpacity
              className="p-2 rounded-full"
              onPress={onClose}
            >
              <MaterialIcons
                name="close"
                size={24}
                color={theme === "dark" ? "#9CA3AF" : "#6B7280"}
              />
            </TouchableOpacity>
          </View>

          <ScrollView
            className="flex-1 px-6 pb-20"
            showsVerticalScrollIndicator={false}
          >
            <View className="mb-6">
              <Text className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                Activity Type
              </Text>
              <View className="flex-row flex-wrap gap-2">
                {filterOptions.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => onToggleFilter(option)}
                    className={`px-4 py-2 rounded-full ${
                      selectedFilters.includes(option)
                        ? 'bg-[#f2024e]'
                        : theme === "dark"
                          ? 'bg-white/5'
                          : 'bg-gray-100'
                    }`}
                  >
                    <Text className={`text-sm font-medium ${
                      selectedFilters.includes(option)
                        ? 'text-white'
                        : theme === "dark"
                          ? 'text-gray-300'
                          : 'text-gray-600'
                    }`}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>

          <View className={`absolute bottom-0 left-0 right-0 p-6 border-t flex-row gap-4 ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-100"
          }`}>
            <Button
              title="Reset"
              variant="outlined"
              size="md"
              rounded="full"
              onPress={onReset}
              containerClassName="flex-1"
            />

            <Button
              title="Show Results"
              variant="primary"
              size="md"
              rounded="full"
              onPress={onApply}
              containerClassName="flex-[2]"
              shadow={true}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}
