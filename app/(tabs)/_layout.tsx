import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useThemeContext } from "@/components/ThemeContext";

// Tailwind-style TabBarIcon component
function TabBarIcon({ name, color, focused, isWallet }: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  focused?: boolean;
  isWallet?: boolean;
}) {
  if (isWallet) {
    return (
      <View className="relative -top-6 items-center justify-center">
        <View className="w-16 h-16 rounded-full bg-primary items-center justify-center shadow-2xl border-4 border-white dark:border-[#101c22]">
          <FontAwesome size={20} name={name} color="#ffffff" />
        </View>
      </View>
    );
  }

  return (
    <View className="flex items-center justify-center w-16">
      <FontAwesome
        size={focused ? 28 : 26}
        name={name}
        color={color}
      />
    </View>
  );
}

export default function TabLayout() {
  const { theme } = useThemeContext();
  const [menuVisible, setMenuVisible] = useState(false);

  const screenOptions = {
    headerShown: false,
    tabBarActiveTintColor: '#F0034E',
    tabBarInactiveTintColor: '#9CA3AF',
    tabBarShowLabel: true,

    tabBarStyle: {
      position: 'absolute' as const,
      bottom: 0,
      left: 0,
      right: 0,
      height: 90,

      paddingBottom: 20, // pb-5
      paddingTop: 8,     // pt-2
      paddingHorizontal: 24, // px-6

      backgroundColor: theme === 'dark'
        ? 'rgba(16, 28, 34, 0.95)'  // bg-background-dark/95
        : 'rgba(255, 255, 255, 0.95)', // bg-white/95

      // Border
      borderTopWidth: 1, // border-t
      borderTopColor: theme === 'dark' ? '#374151' : '#E5E7EB', // border-gray-800/200

      // Shadow
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 8,
    },

    tabBarLabelStyle: {
      fontSize: 10,        // text-xs
      fontWeight: '500' as const,   // font-medium
      marginTop: 4,        // gap-1
    },

    tabBarItemStyle: {
      flex: 1,
      paddingVertical: 4,  // py-1
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      width: 64,          // w-16
    },
  };

  return (
    <>
      <SafeAreaProvider>
        <Tabs screenOptions={screenOptions}>

          {/* Home Tab */}
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name="home" color={color} focused={focused} />
              ),
            }}
          />

          {/* Explore Tab */}
          <Tabs.Screen
            name="activities"
            options={{
              title: "Explore",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name="compass" color={color} focused={focused} />
              ),
            }}
          />

          {/* Center Wallet Tab */}
          <Tabs.Screen
            name="offers"
            options={{
              title: "",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name="credit-card" color={color} focused={focused} isWallet={true} />
              ),
            }}
          />

          {/* Saved Tab */}
          <Tabs.Screen
            name="favorites"
            options={{
              title: "Saved",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name="heart-o" color={color} focused={focused} />
              ),
            }}
          />

          {/* Profile Tab */}
          <Tabs.Screen
            name="myUsage"
            options={{
              title: "Profile",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name="user-o" color={color} focused={focused} />
              ),
            }}
          />

        </Tabs>
      </SafeAreaProvider>

    </>
  );
}
