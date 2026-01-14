import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { Text } from '@/components/Themed';
import { useThemeContext } from '@/components/ThemeContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import NotificationsMenu from './NotificationsMenu';

interface NavBarProps {
  title: string;
  subtitle?: string;
  subtitleColor?: string;
  showIcon?: boolean;
  iconName?: string;
  iconColor?: string;
  iconComponent?: React.ReactNode;
  showNotification?: boolean;
  showMenu?: boolean;
  onMenuPress?: () => void;
  onNotificationPress?: () => void;
  className?: string;
  titleAnimated?: boolean;
}

export default function NavBar({
  title,
  subtitle,
  subtitleColor,
  showIcon = false,
  iconName,
  iconColor,
  iconComponent,
  showNotification = false,
  showMenu = false,
  onMenuPress,
  onNotificationPress,
  className = "",
  titleAnimated = false
}: NavBarProps) {
  const { theme } = useThemeContext();
  const [hasNotification] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const pingAnim = useRef(new Animated.Value(0)).current;
  const titleFadeAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    if (titleAnimated && !title.includes('Merhaba') && !title.includes('Hello')) {
      Animated.sequence([
        Animated.timing(titleFadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(titleFadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [title, titleAnimated]);

  useEffect(() => {
    if (!showNotification || !hasNotification) return;

    const createPingAnimation = () => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(pingAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(pingAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      );
    };

    const pingAnimation = createPingAnimation();
    pingAnimation.start();

    return () => {
      pingAnimation.stop();
    };
  }, [showNotification, hasNotification]);

  const handleNotificationPress = () => {
    setShowNotifications(true);
  };

  return (
    <>
      <View className={`px-4 pt-4 pb-6 ${className}`}>
        <View className="flex-row items-center justify-between">
          {/* Left Section - Title Area */}
          <View className="flex-row items-center flex-1">
            {showIcon && (iconComponent || (iconName && iconColor)) && (
              <View className={`w-10 h-10 rounded-lg items-center justify-center mr-3 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-red-50'
              }`}>
                {iconComponent ? (
                  iconComponent
                ) : (
                  <MaterialIcons name={iconName as any} size={24} color={iconColor} />
                )}
              </View>
            )}

            <View className="flex-1">
              {subtitle && (
                <Text
                  className={`text-sm font-medium mb-1`}
                  style={{
                    color: subtitleColor || (theme === 'dark' ? '#9ca3af' : '#6b7280')
                  }}
                >
                  {subtitle}
                </Text>
              )}
              {titleAnimated ? (
                <Animated.Text
                  className={`text-2xl font-bold tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                  style={{
                    opacity: titleFadeAnim
                  }}
                >
                  {title}
                </Animated.Text>
              ) : (
                <Text className={`text-2xl font-bold tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {title}
                </Text>
              )}
            </View>
          </View>


          {/* Right Section - Action Buttons */}
          {(showNotification || showMenu) && (
            <View className="flex-row items-center gap-2">
              {/* Notification Button */}
              {showNotification && (
                <TouchableOpacity
                  onPress={handleNotificationPress}
                  className={`w-10 h-10 rounded-full items-center justify-center shadow-sm border relative ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-700' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <MaterialIcons
                    name="notifications-none"
                    size={20}
                    color={theme === 'dark' ? '#ffffff' : '#111827'}
                  />

                  {hasNotification && (
                    <View className="absolute top-2 right-2 w-2 h-2">
                      <Animated.View
                        style={{
                          position: 'absolute',
                          width: 8,
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: '#F0034E',
                          transform: [
                            {
                              scale: pingAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 1.8],
                              }),
                            },
                          ],
                          opacity: pingAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.75, 0],
                          }),
                        }}
                      />
                      <View className="w-2 h-2 bg-primary rounded-full" />
                    </View>
                  )}
                </TouchableOpacity>
              )}

              {/* Menu Button */}
              {showMenu && (
                <TouchableOpacity
                  onPress={onMenuPress}
                  className={`w-10 h-10 rounded-full items-center justify-center shadow-sm border ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-700' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <MaterialIcons
                    name="menu"
                    size={20}
                    color={theme === 'dark' ? '#ffffff' : '#111827'}
                  />
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </View>
      <NotificationsMenu visible={showNotifications} onClose={() => setShowNotifications(false)} />
    </>
  );
}
