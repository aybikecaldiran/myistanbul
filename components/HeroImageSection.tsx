import React from 'react';
import { View as RNView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface HeroImageSectionProps {
  theme: string;
  height: number;
  width: number;
  large: boolean;
  medium: boolean;
  small: boolean;
}

export default function HeroImageSection({
  theme,
  height,
  width,
  large,
  medium,
  small
}: HeroImageSectionProps) {
  return (
    <RNView
      style={{
        height: large
          ? height * 0.45
          : medium
            ? height * 0.30
            : small
              ? height * 0.25
              : height * 0.20
      }}
      className="w-full relative"
    >
      <Image
        source={require("../assets/images/PHOTO.jpg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />

      <LinearGradient
        colors={[
          "transparent",
          "rgba(0,0,0,0.1)",
          "rgba(184,183,183,0.23)",
          "rgba(209,209,209,0.42)",
          theme === "dark" ? "#111827" : "#ffffff",
        ]}
        locations={[0, 0.3, 0.6, 0.8, 1]}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      />

      <RNView
        style={{
          position: "absolute",
          width: "100%",
          alignItems: "center",
          bottom: large
            ? Math.max(height * 0.25, 140)
            : medium
              ? Math.max(height * 0.18, 120)
              : small
                ? Math.max(height * 0.06, 40)
                : Math.max(height * 0.04, 25),
        }}
      >
        <Image
          source={require("../assets/images/itp-logo-white.svg")}
          resizeMode="contain"
          style={{
            width: large
              ? Math.min(width * 0.7, 300)
              : medium
                ? Math.min(width * 0.65, 260)
                : small
                  ? Math.min(width * 0.6, 220)
                  : Math.min(width * 0.55, 180),
            height: large
              ? 120
              : medium
                ? 100
                : small
                  ? 85
                  : 70,
          }}
        />
      </RNView>
    </RNView>
  );
}
