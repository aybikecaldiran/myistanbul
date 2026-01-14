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
        style={{
        }}
        className={"w-full h-full absolute top-0"}
      />

    </RNView>
  );
}
