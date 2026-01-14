import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useThemeContext } from '@/components/ThemeContext';
import { router } from 'expo-router';

interface NotificationsMenuProps {
  visible: boolean;
  onClose: () => void;
}

const mockNotifications = [
  {
    id: '1',
    title: 'Welcome to MyIstanbul!',
    message: 'Discover the best of Istanbul with your new app.',
    date: '2026-01-12',
    read: false,
  },
  {
    id: '2',
    title: 'Special Offer',
    message: 'Get 20% off on your next activity booking.',
    date: '2026-01-10',
    read: false,
  },
  {
    id: '3',
    title: 'Update',
    message: 'New attractions have been added to the app.',
    date: '2026-01-08',
    read: true,
  },
];

export default function NotificationsMenu({ visible, onClose }: NotificationsMenuProps) {
  const { theme } = useThemeContext();
  const [notifications, setNotifications] = useState(mockNotifications);

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      className={`flex-row items-center px-5 py-4 border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-100'} bg-transparent`}
      activeOpacity={0.8}
      onPress={() => handleMarkAsRead(item.id)}
    >
      {!item.read ? (
        <View className="w-2 h-2 rounded-full bg-primary mr-3" />
      ) : (
        <View className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700 mr-3" />
      )}
      <View className="flex-1">
        <Text className={`font-semibold text-base ${item.read ? (theme === 'dark' ? 'text-gray-500' : 'text-gray-400') : (theme === 'dark' ? 'text-white' : 'text-gray-900')}`}>{item.title}</Text>
        <Text className={`text-sm mt-0.5 ${item.read ? (theme === 'dark' ? 'text-gray-600' : 'text-gray-400') : (theme === 'dark' ? 'text-gray-300' : 'text-gray-700')}`}>{item.message}</Text>
      </View>
      <Text className={`text-xs ml-2 ${item.read ? (theme === 'dark' ? 'text-gray-600' : 'text-gray-400') : (theme === 'dark' ? 'text-gray-400' : 'text-gray-500')}`}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
      presentationStyle="fullScreen"
    >
      <View className={"flex-1 pt-20 bg-white dark:bg-gray-900"}>
        <View className={`flex-1 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
          {/* Header */}
          <View className={`px-6 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
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
              <Text className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Notifications</Text>
              <View className="w-10 h-10" />
            </View>
          </View>

          {/* Notifications List */}
          {notifications.length === 0 ? (
            <View className="flex-1 justify-center items-center">
              <MaterialIcons name="notifications-none" size={48} color={theme === 'dark' ? '#6B7280' : '#9CA3AF'} />
              <Text className={`mt-2 text-base font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>No notifications</Text>
            </View>
          ) : (
            <FlatList
              data={notifications}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingVertical: 0 }}
            />
          )}
        </View>
      </View>
    </Modal>
  );
}

