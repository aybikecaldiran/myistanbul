import {
  Animated,
  View as RNView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { View } from "@/components/Themed";
import { useThemeContext } from "@/components/ThemeContext";
import { useResponsive } from "@/hooks/useResponsive";
import { useLocalization, useDevice, useAppInfo } from "@/hooks/useDeviceHooks";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSettings } from "@/components/LanguageSettings";
import HeroImageSection from "@/components/HeroImageSection";
import WelcomeHeader from "@/components/WelcomeHeader";
import LoginForm from "@/components/LoginForm";
import FooterActions from "@/components/FooterActions";
import ProviderModal from "@/components/ProviderModal";
import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function WelcomeScreen() {
  const { theme, toggleTheme } = useThemeContext();
  const router = useRouter();
  const { height, width } = useWindowDimensions();
  const { large, medium, small } = useResponsive();

  // Device information hooks
  const localization = useLocalization();
  const device = useDevice();
  const appInfo = useAppInfo();
  const { t, isRTL } = useTranslation();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;
  const modalAnim = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);

  const [passNumber, setPassNumber] = useState("");
  const [lastName, setLastName] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const placeholders = ["ISTPASS2024", "IT1234567890", "GYGMX4VR7R49"];

  const providers = [
    "Istanbul Tourist Pass®",
    "Istanbul.com",
    "GetYourGuide",
    "Viator",
    "Klook",
    "Tiqets"
  ];

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // // Log device information for development
    // console.log('Device Localization:', {
    //   locale: localization.locale,
    //   language: localization.language,
    //   region: localization.region,
    //   currency: localization.currency,
    //   timezone: localization.timezone,
    //   isRTL: localization.isRTL
    // });

    // console.log('📱 Device Info:', {
    //   deviceName: device.deviceName,
    //   platform: device.platform,
    //   osVersion: device.osVersion,
    //   brand: device.brand,
    //   modelName: device.modelName,
    //   isDevice: device.isDevice
    // });

  //   console.log('App Info:', {
  //     appName: appInfo.appName,
  //     appVersion: appInfo.appVersion,
  //     buildVersion: appInfo.buildVersion
  //   });
  }, [localization, device, appInfo]);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseSpeed = isDeleting ? 2000 : 500;

    const timeout = setTimeout(() => {
      const currentText = placeholders[currentPlaceholderIndex];

      if (isDeleting) {
        setCurrentPlaceholder(currentText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);

        if (currentCharIndex === 0) {
          setIsDeleting(false);
          setCurrentPlaceholderIndex(prev => (prev + 1) % placeholders.length);
        }
      } else {
        setCurrentPlaceholder(currentText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);

        if (currentCharIndex === currentText.length) {
          setIsDeleting(true);
        }
      }
    }, currentCharIndex === placeholders[currentPlaceholderIndex].length || currentCharIndex === 0 ? pauseSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentPlaceholderIndex, placeholders]);

  const handleStartExploring = () => {
    if (passNumber.trim() && lastName.trim()) {
      router.push("/(tabs)");
    }
  };

  const openModal = () => {
    setIsModalVisible(true);
    Animated.timing(modalAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsModalVisible(false);
    });
  };

  return (
    <>
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: theme === "dark" ? "#111827" : "#fff"
      }}
      className={""}
      >
        <View
            style={{
              flex: 1,
              backgroundColor: theme === "dark" ? "#111827" : "#fff",
              direction: isRTL ? 'rtl' : 'ltr',
            }}
        >
          <View
              className={"w-full h-70 overflow-hidden items-start"}
          >
          <HeroImageSection
            theme={theme}
            height={height}
            width={width}
            large={large}
            medium={medium}
            small={small}
          />
        </View>
          <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <RNView style={{ flex: 1 }}>
              <ScrollView
                ref={scrollViewRef}
                style={{ flex: 1 }}
                contentContainerStyle={{
                  flexGrow: 1,
                  minHeight: '100%',
                  paddingBottom: 20
                }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                bounces={true}
                alwaysBounceVertical={false}
              >
                <View
                    style={{
                      flex: 1,
                      paddingHorizontal: large ? 24 : medium ? 20 : small ? 16 : 12,
                      backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
                      paddingTop: 0,
                    }}
                >

                  <View style={{
                    paddingTop: 10,
                    zIndex: 2,
                    position: 'relative',
                    backgroundColor: theme === "dark" ? "#111827" : "#ffffff"
                  }}>
                    <WelcomeHeader
                      theme={theme}
                      large={large}
                      medium={medium}
                      small={small}
                      t={t}
                    />

                    <LoginForm
                      theme={theme}
                      large={large}
                      medium={medium}
                      small={small}
                      passNumber={passNumber}
                      setPassNumber={setPassNumber}
                      currentPlaceholder={currentPlaceholder}
                      lastName={lastName}
                      setLastName={setLastName}
                      handleStartExploring={handleStartExploring}
                      scrollViewRef={scrollViewRef}
                      t={t}
                    />

                    <FooterActions
                      theme={theme}
                      large={large}
                      medium={medium}
                      small={small}
                      openModal={openModal}
                      onOffersPress={() => router.push("/(tabs)/offers")}
                      onExplorePress={() => router.push("/(tabs)")}
                      t={t}
                    />
                  </View>
                </View>
              </ScrollView>
            </RNView>
          </KeyboardAvoidingView>

          <ProviderModal
            isVisible={isModalVisible}
            theme={theme}
            height={height}
            modalAnim={modalAnim}
            providers={providers}
            onClose={closeModal}
            t={t}
          />

          {/* Language Settings Button */}
          {/*<Pressable*/}
          {/*    onPress={() => setLanguageModalVisible(true)}*/}
          {/*    style={{*/}
          {/*      position: "absolute",*/}
          {/*      top: 16,*/}
          {/*      right: 70, // Right of theme button*/}
          {/*      padding: 12,*/}
          {/*      borderRadius: 999,*/}
          {/*      backgroundColor:*/}
          {/*          theme === "dark"*/}
          {/*              ? "rgba(0,0,0,0.45)"*/}
          {/*              : "rgba(255,255,255,0.6)",*/}
          {/*    }}*/}
          {/*>*/}
          {/*  <MaterialIcons*/}
          {/*      name="language"*/}
          {/*      size={20}*/}
          {/*      color={theme === "dark" ? "#fff" : "#374151"}*/}
          {/*  />*/}
          {/*</Pressable>*/}

          <ThemeToggleButton theme={theme} onToggle={toggleTheme} />
        </View>
      </SafeAreaView>

      {/* Language Settings Modal */}
      <LanguageSettings
        visible={languageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
      />
    </>
  );
}
