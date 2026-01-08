import React from 'react';
import { Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ThemeToggleButtonProps {
  theme: string;
  onToggle: () => void;
}

export default function ThemeToggleButton({ theme, onToggle }: ThemeToggleButtonProps) {
  return (
    <Pressable
      onPress={onToggle}
      style={{
        position: "absolute",
        top: 16,
        right: 16,
        padding: 12,
        borderRadius: 999,
        backgroundColor:
          theme === "dark"
            ? "rgba(0,0,0,0.45)"
            : "rgba(255,255,255,0.6)",
      }}
    >
      <AntDesign
        name={theme === "dark" ? "sun" : "moon"}
        size={20}
        color={theme === "dark" ? "#fff" : "#374151"}
      />
    </Pressable>
  );
}
