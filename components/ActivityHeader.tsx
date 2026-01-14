import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Share, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

interface ActivityHeaderProps {
  activity: any;
  height: number;
  currentImageIndex: number;
  onLocationPress: () => void;
}

export default function ActivityHeader({
  activity,
  height,
  currentImageIndex,
  onLocationPress
}: ActivityHeaderProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const imageUrl = activity.image || activity.cover || (activity.media && activity.media.cover) || 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400';
  const appStoreUrl = 'https://apps.apple.com/app/id123456789';
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.myistanbul';

  const handleShare = async () => {
    const storeUrl = Platform.OS === 'ios' ? appStoreUrl : playStoreUrl;
    try {
      await Share.share({
        message: `Discover Istanbul with the MyIstanbul app! Download now: `,
        url: storeUrl,
        title: 'MyIstanbul'
      });
    } catch (error) {}
  };

  return (
    <View style={{ height: height * 0.45 }}>
      <Image
        source={{ uri: imageUrl }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        resizeMode="cover"
      />

      <LinearGradient
        colors={['rgba(0,0,0,0.4)', 'transparent', 'rgba(0,0,0,0.1)']}
        locations={[0, 0.3, 1]}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      {/* Header */}
      <View className="absolute top-16 left-0 right-0 z-50 px-4 flex-row items-center justify-between">
        <TouchableOpacity
          className="w-10 h-10 rounded-full bg-white/30 backdrop-blur justify-center items-center pl-2"
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back-ios" size={20} color="white" />
        </TouchableOpacity>

        <View className="flex-row gap-3">
          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-white/30 backdrop-blur justify-center items-center"
            onPress={onLocationPress}
          >
            <MaterialIcons name="location-on" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-white/30 backdrop-blur justify-center items-center" onPress={handleShare}>
            <MaterialIcons name="share" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-white/30 backdrop-blur justify-center items-center"
            onPress={() => setIsFavorite((prev) => !prev)}
          >
            <MaterialIcons
                name={isFavorite ? "favorite" : "favorite-border"}
                size={20}
                color={isFavorite ? "#f2024e" : "white"}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/*<View className="absolute bottom-12 right-4 flex-row items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5">*/}
      {/*  <MaterialIcons name="photo-library" size={16} color="white" />*/}
      {/*  <Text className="text-white text-xs font-semibold">{currentImageIndex}/12 Photos</Text>*/}
      {/*</View>*/}
    </View>
  );
}
