import React from 'react';
import { Text } from 'react-native';
import { View } from '@/components/Themed';

interface WelcomeHeaderProps {
  theme: string;
  large: boolean;
  medium: boolean;
  small: boolean;
  t: any;
}

export default function WelcomeHeader({
  theme,
  large,
  medium,
  small,
  t
}: WelcomeHeaderProps) {
  return (
    <View
      style={{
        alignItems: "center",
        marginBottom: large ? 24 : medium ? 20 : small ? 16 : 12,
        backgroundColor: theme === "dark" ? "#111827" : "#ffffff"
      }}
    >
      <Text
        className={`font-bold text-center ${
          large
            ? "text-3xl"
            : medium
              ? "text-3xl"
              : small
                ? "text-xl"
                : "text-md"
        } ${theme === "dark" ? "text-white" : "text-gray-900"}`}
      >
        {t('welcome')}
      </Text>
      <Text
        className={`${
          large
            ? "text-3xl"
            : medium
              ? "text-2xl"
              : small
                ? "text-xl"
                : "text-sm"
        } font-medium text-center ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {t('letsBegin')}
      </Text>
    </View>
  );
}
