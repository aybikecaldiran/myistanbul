import React, { useState, useEffect, useRef } from "react";
import { ScrollView, TouchableOpacity, Animated } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from "@/components/Themed";
import { useThemeContext } from "@/components/ThemeContext";
import { userPassData, activities } from "@/data/mockData";
import NavBar from "@/components/NavBar";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/constants/translations";
import { router } from 'expo-router';
import PassInfoCard from "@/components/PassInfoCard";
import QuickActionButton from "@/components/QuickActionButton";
import HappeningNowItem from "@/components/HappeningNowItem";
import HelpSection from "@/components/HelpSection";

export default function TabOneScreen() {
  const { theme } = useThemeContext();
  const { t, language } = useTranslation();
  const { currentLanguage, isAutoDetect } = useLanguage();
  const [notificationVisible, setNotificationVisible] = useState(false);

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titleFadeAnim = useRef(new Animated.Value(1)).current;
  const pingAnim = useRef(new Animated.Value(0)).current;

  const getHelloTranslation = () => {
    const lang = currentLanguage || language || 'en';
    return translations[lang]?.hello || translations.en.hello || 'Hello';
  };

  const animatedTitles = [
    "Merhaba, Alex!",
    `${getHelloTranslation()}, Alex!`
  ];

  const getClosingTimeByCategory = (category: string) => {
    const categoryTimes: { [key: string]: string } = {
      'Historical': 'Closes at 6:00 PM',
      'Cruise': 'Closes at 11:00 PM',
      'Tour': 'Closes at 8:00 PM',
      'Museum': 'Closes at 5:00 PM',
      'Landmark': 'Closes at 9:00 PM'
    };
    return categoryTimes[category] || 'Closes at 6:00 PM';
  };

  const getHappeningNow = () => {
    return activities
      .filter(activity => activity.status && ['OPEN NOW', 'BUSY', 'TONIGHT'].includes(activity.status))
      .slice(0, 4)
      .map(activity => ({
        id: activity.id,
        title: activity.title,
        image: activity.image,
        status: activity.status || 'OPEN NOW',
        statusColor: activity.status === 'OPEN NOW' ? 'green' : activity.status === 'BUSY' ? 'yellow' : 'blue',
        closingTime: getClosingTimeByCategory(activity.category)
      }));
  };

  const remainingDays = () => {
    const now = new Date();
    const start = userPassData.startDate ? new Date(userPassData.startDate) : new Date();
    const passDays = parseInt(userPassData.passType.split(' ')[0]);

    if (now < start) {
      return Math.ceil((start.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    }

    const daysSinceStart = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    const remaining = passDays - daysSinceStart;

    return Math.max(0, remaining);
  }

  const isPassStarted = () => {
    const now = new Date();
    const start = userPassData.startDate ? new Date(userPassData.startDate) : new Date();
    return now >= start;
  }

  const happeningNowData = getHappeningNow();

  useEffect(() => {
    const titleInterval = setInterval(() => {
      Animated.timing(titleFadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        setCurrentTitleIndex(prev => (prev + 1) % animatedTitles.length);

        Animated.timing(titleFadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }).start();
      });
    }, 4000);

    const createPingAnimation = () => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(pingAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pingAnim, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ])
      );
    };

    const pingAnimation = createPingAnimation();
    const pingTimer = setTimeout(() => {
      pingAnimation.start();
    }, 500);

    return () => {
      clearTimeout(pingTimer);
      clearInterval(titleInterval);
      pingAnimation.stop();
    };
  }, [t]);

  return (
    <SafeAreaView className="flex-1 bg-[#f5f7f8] dark:bg-[#101c22]">
      <NavBar
        title={animatedTitles[currentTitleIndex]}
        subtitle="Welcome Back"
        showIcon={true}
        iconName="local-activity"
        iconColor="#F0034E"
        showNotification={true}
        showMenu={true}
        onMenuPress={() => console.log('Menu pressed')}
        onNotificationPress={() => setNotificationVisible(!notificationVisible)}
        className=""
        titleAnimated={false}
      />

      <ScrollView
        className="bg-[#f5f7f8] dark:bg-[#101c22]"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >

        <View className="px-4">
          <PassInfoCard
            passType={userPassData.passType}
            participants={userPassData.participants}
            startDate={userPassData.startDate}
            passId={userPassData.passId}
            remainingDays={remainingDays()}
            isPassStarted={isPassStarted()}
            pingAnim={pingAnim}
          />

          <View className="mb-6">
            <Text className="text-lg font-bold mb-3 text-[#111618] dark:text-white">
              Quick Actions
            </Text>
            <View className="flex-row flex-wrap -mx-1.5">
              <QuickActionButton
                title="All Activities"
                subtitle="View All 100+ Attractions"
                iconName="place"
                iconColor="#3B82F6"
                backgroundColor="bg-blue-50 dark:bg-blue-900/20"
                onPress={() => router.push('/activities')}
              />
              <QuickActionButton
                title="My Activities"
                subtitle="See Your Activities"
                iconName="map"
                iconColor="#8B5CF6"
                backgroundColor="bg-purple-50 dark:bg-purple-900/20"
              />
              <QuickActionButton
                title="Discounted Offers"
                subtitle="Save on extras"
                iconName="local-offer"
                iconColor="#F97316"
                backgroundColor="bg-orange-50 dark:bg-orange-900/20"
              />
            </View>
          </View>
        </View>

          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-3 px-4">
              <Text className="text-lg font-bold text-[#111618] dark:text-white">
                Happening Now
              </Text>
              <TouchableOpacity>
                <Text className="text-sm font-semibold text-primary">See All</Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 20 }}
            >
              {happeningNowData.map((item) => (
                <HappeningNowItem
                  key={item.id}
                  // id={item.id}
                  id={Number(item.id)}
                  title={item.title}
                  image={item.image}
                  status={item.status}
                  closingTime={item.closingTime}
                />
              ))}
            </ScrollView>
          </View>

        <HelpSection />


      </ScrollView>
    </SafeAreaView>
  );
}
