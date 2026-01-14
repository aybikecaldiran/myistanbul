import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useThemeContext } from '@/components/ThemeContext';
import SearchBar from '@/components/SearchBar';
import { router } from 'expo-router';

interface HamburgerMenuProps {
  visible: boolean;
  onClose: () => void;
}

interface MenuItemProps {
  icon: string;
  title: string;
  onPress: () => void;
  isActive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, onPress, isActive = false }) => {
  const { theme } = useThemeContext();

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center py-4 px-6 mx-4 mb-2 rounded-xl ${
        isActive 
          ? 'bg-primary shadow-sm' 
          : 'bg-transparent'
      }`}
      activeOpacity={0.7}
    >
      <View className={`w-12 h-12 rounded-full items-center justify-center mr-4 ${
        isActive 
          ? 'bg-white' 
          : theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
      }`}>
        <MaterialIcons
          name={icon as any}
          size={24}
          color={isActive ? '#F0034E' : theme === 'dark' ? '#9CA3AF' : '#6B7280'}
        />
      </View>
      <Text className={`text-lg font-medium ${
        isActive 
          ? 'text-white' 
          : theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export function HamburgerMenu({visible, onClose}: HamburgerMenuProps) {
  const {theme} = useThemeContext();
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuItemPress = (item: string) => {
    if (item === 'Activities & Services') {
      router.push('/(tabs)/activities');
    } else if (item === 'About') {
      router.push('/about');
    }
    onClose();
  };

  const menuItems = [
    {icon: 'home', title: 'Home', isActive: true},
    {icon: 'star-outline', title: 'Activities & Services'},
    {icon: 'schedule', title: 'My Itinerary'},
    {icon: 'chat', title: 'Whatson Istanbul'},
    {icon: 'help-outline', title: 'About'},
    {icon: 'info-outline', title: 'Important Notes'},
    {icon: 'book', title: 'Usage Instructions'},
    {icon: 'support', title: 'Live Support'},
    {icon: 'help', title: 'How to Use'},
    {icon: 'logout', title: 'Logout'},
  ];

  const filteredMenuItems = useMemo(() => {
    if (!searchQuery.trim()) return menuItems;

    return menuItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
      <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          onRequestClose={onClose}
          presentationStyle="fullScreen"
      >
        <View className={"flex-1 pt-20 bg-white dark:bg-gray-900"}
        >
          <View className={`flex-1 ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}>
            {/* Header */}
            <View className={`px-6 border-b ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
            }`}>
              <View className="flex-row items-center justify-between">
                <TouchableOpacity
                    onPress={onClose}
                    className="w-10 h-10 rounded-full items-center justify-center"
                >
                  <MaterialIcons
                      name="chevron-left"
                      size={30}
                      color={theme === 'dark' ? '#9CA3AF' : '#6B7280'}
                  />
                </TouchableOpacity>

                <Text className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-800'
                }`}>
                  Menu
                </Text>

                <View className="w-10 h-10"/>
              </View>
            </View>

            {/* Search Bar */}
            <View className="px-6 py-3">
              <SearchBar
                  searchText={searchQuery}
                  onSearchChange={setSearchQuery}
                  onFilterPress={() => {
                  }}
                  theme={theme}
                  showFilterButton={false}
                  placeholderTextColor={theme === "dark" ? "#D1D5DB" : "#6B7280"}
              />
            </View>

            {/* Menu Items */}
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingVertical: 8, paddingBottom: 20}}
            >
              {filteredMenuItems.length > 0 ? (
                  filteredMenuItems.map((item, index) => (
                      <MenuItem
                          key={index}
                          icon={item.icon}
                          title={item.title}
                          isActive={item.isActive}
                          onPress={() => handleMenuItemPress(item.title)}
                      />
                  ))
              ) : (
                  <View className="px-6 py-8 items-center">
                    <MaterialIcons
                        name="search-off"
                        size={48}
                        color={theme === 'dark' ? '#6B7280' : '#9CA3AF'}
                    />
                    <Text className={`mt-2 text-center ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      No menu items found for "{searchQuery}"
                    </Text>
                  </View>
              )}
            </ScrollView>

            {/* Footer */}
            <View className={`p-6 border-t ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
            }`}>
              <Text className={`text-center text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Istanbul Tourist Pass
              </Text>
              <Text className={`text-center text-xs mt-1 ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
              }`}>
                Version 1.0.0
              </Text>
            </View>
          </View>
        </View>
      </Modal>
  );
}
