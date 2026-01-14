import React, { useState, useEffect, useRef } from "react";
import { ScrollView, TouchableOpacity, Animated, Modal, Pressable, Linking, Image } from "react-native";
import { WebView } from 'react-native-webview';
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
import {HamburgerMenu} from "@/components/HamburgerMenu";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabOneScreen() {
  const { theme } = useThemeContext();
  const { t, language } = useTranslation();
  const { currentLanguage, isAutoDetect } = useLanguage();
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [helpModalVisible, setHelpModalVisible] = useState(false);
  const [chatModalVisible, setChatModalVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

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

  const handleSupportAction = (type: 'call' | 'whatsapp' | 'chat') => {
    switch (type) {
      case 'call':
        console.log('Call support');
        Linking.openURL('tel:908503048726');
        break;
      case 'whatsapp':
        console.log('WhatsApp support');
        Linking.openURL('whatsapp://send?phone=905303852026');
        break;
      case 'chat':
        console.log('Chat support');
        setChatModalVisible(true);
        break;
    }
    setHelpModalVisible(false);
  };

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
        iconComponent={
          <Image
            source={require('../../assets/images/favicon.png')}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        }
        showNotification={true}
        showMenu={true}
        onMenuPress={() => setMenuVisible(true)}
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
                onPress={() => router.push('/myUsage')}
              />
              <QuickActionButton
                title="Discounted Offers"
                subtitle="Save on extras"
                iconName="local-offer"
                iconColor="#F97316"
                backgroundColor="bg-orange-50 dark:bg-orange-900/20"
                onPress={() => router.push('/offers')}
              />
            </View>
          </View>
        </View>

          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-3 px-4">
              <Text className="text-lg font-bold text-[#111618] dark:text-white">
                Happening Now
              </Text>
              <TouchableOpacity
                  onPress={() => router.push('/activities')}>
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

        <HelpSection onPress={() => setHelpModalVisible(true)} />

        {/* Help Support Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={helpModalVisible}
          onRequestClose={() => setHelpModalVisible(false)}
        >
          <Pressable
            className="flex-1 bg-black/50 justify-center items-center"
            onPress={() => setHelpModalVisible(false)}
          >
            <Pressable className="mx-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg min-w-[300px]">
              <View className="px-6 py-5">
                <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Contact Support
                </Text>

                {/* Call Option */}
                <TouchableOpacity
                  className="flex-row items-center py-4 border-b border-gray-100 dark:border-gray-700"
                  onPress={() => handleSupportAction('call')}
                  activeOpacity={0.7}
                >
                  <View className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-full items-center justify-center mr-4">
                    <MaterialIcons name="phone" size={20} color="#10B981" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 dark:text-white font-semibold text-base">Call</Text>
                    <Text className="text-gray-500 dark:text-gray-400 text-sm">Get immediate help</Text>
                  </View>
                </TouchableOpacity>

                {/* WhatsApp Option */}
                <TouchableOpacity
                  className="flex-row items-center py-4 border-b border-gray-100 dark:border-gray-700"
                  onPress={() => handleSupportAction('whatsapp')}
                  activeOpacity={0.7}
                >
                  <View className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-full items-center justify-center mr-4">
                    <MaterialIcons name="message" size={20} color="#25D366" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 dark:text-white font-semibold text-base">WhatsApp</Text>
                    <Text className="text-gray-500 dark:text-gray-400 text-sm">Message us instantly</Text>
                  </View>
                </TouchableOpacity>

                {/* Chat Option */}
                <TouchableOpacity
                  className="flex-row items-center py-4"
                  onPress={() => handleSupportAction('chat')}
                  activeOpacity={0.7}
                >
                  <View className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full items-center justify-center mr-4">
                    <MaterialIcons name="chat-bubble" size={20} color="#3B82F6" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-gray-900 dark:text-white font-semibold text-base">Chat with us</Text>
                    <Text className="text-gray-500 dark:text-gray-400 text-sm">Live chat support</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Pressable>
        </Modal>

        {/* Live Chat Modal */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={chatModalVisible}
          onRequestClose={() => setChatModalVisible(false)}
        >
          <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
            <View className="pt-20 flex-row items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <Text className="text-lg font-bold text-gray-900 dark:text-white">
                Live Chat Support
              </Text>
              <TouchableOpacity
                onPress={() => setChatModalVisible(false)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700"
              >
                <MaterialIcons name="close" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>
            <WebView
              source={{
                html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Live Chat Support</title>
                    <style>
                        body {
                            margin: 0;
                            padding: 0;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                            background-color: #f8fafc;
                            height: 100vh;
                        }
                        .loading {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 100vh;
                            flex-direction: column;
                            background-color: #f8fafc;
                        }
                        .spinner {
                            border: 4px solid #e5e7eb;
                            border-top: 4px solid #F0034E;
                            border-radius: 50%;
                            width: 40px;
                            height: 40px;
                            animation: spin 1s linear infinite;
                            margin-bottom: 16px;
                        }
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                        .loading-text {
                            color: #6b7280;
                            font-size: 16px;
                            font-weight: 500;
                        }
                    </style>
                </head>
                <body>
                    <div class="loading" id="loading">
                        <div class="spinner"></div>
                        <p class="loading-text">Loading Live Chat...</p>
                    </div>

                    <script src="https://cdn.pulse.is/livechat/loader.js" data-live-chat-id="6811ec48885c8c5c4e04ee38" async></script>

                    <script>
                        window.addEventListener('load', function() {
                            setTimeout(function() {
                                const loading = document.getElementById('loading');
                                if (loading) {
                                    loading.style.display = 'none';
                                }
                            }, 3000);
                        });

                        const checkChatWidget = setInterval(function() {
                            if (window.PulseChat || document.querySelector('[data-pulse-chat]')) {
                                const loading = document.getElementById('loading');
                                if (loading) {
                                    loading.style.display = 'none';
                                }
                                clearInterval(checkChatWidget);
                            }
                        }, 1000);
                    </script>
                </body>
                </html>
                `
              }}
              style={{ flex: 1 }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              startInLoadingState={true}
              allowsInlineMediaPlayback={true}
              mixedContentMode="compatibility"
              originWhitelist={['*']}
              allowsFullscreenVideo={true}
              onLoadEnd={() => console.log('Chat widget loaded')}
              onError={(error: any) => console.log('WebView Error:', error)}
            />
          </SafeAreaView>
        </Modal>

        {/* Hamburger Menu */}
        <HamburgerMenu
          visible={menuVisible}
          onClose={() => setMenuVisible(false)}
        />

      </ScrollView>
    </SafeAreaView>
  );
}
