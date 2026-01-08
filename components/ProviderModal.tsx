import React from 'react';
import { TouchableOpacity, Text, ScrollView, Animated } from 'react-native';
import { View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface ProviderModalProps {
  isVisible: boolean;
  theme: string;
  height: number;
  modalAnim: Animated.Value;
  providers: string[];
  onClose: () => void;
  t: any;
}

export default function ProviderModal({
  isVisible,
  theme,
  height,
  modalAnim,
  providers,
  onClose,
  t
}: ProviderModalProps) {
  if (!isVisible) return null;

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        opacity: modalAnim,
      }}
    >
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
        activeOpacity={1}
        onPress={onClose}
      />

      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: theme === 'dark' ? '#1a2c35' : '#ffffff',
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: 32,
          maxHeight: height * 0.85,
          transform: [{
            translateY: modalAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [500, 0],
            })
          }],
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: -10 },
          shadowOpacity: 0.3,
          shadowRadius: 20,
          elevation: 20,
        }}
      >
        <View
          style={{
            width: 48,
            height: 6,
            backgroundColor: theme === 'dark' ? '#64748b' : '#cbd5e1',
            borderRadius: 3,
            alignSelf: 'center',
            marginBottom: 24,
          }}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'medium',
                color: theme === 'dark' ? '#ffffff' : '#0f172a',
                lineHeight: 28,
              }}
            >
              {t('whereDidYouBuy')}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: theme === 'dark' ? '#94a3b8' : '#64748b',
                marginTop: 4,
              }}
            >
              {t('selectProvider')}
            </Text>
          </View>
          <TouchableOpacity
            onPress={onClose}
            style={{
              padding: 8,
              marginTop: -8,
              marginRight: -8,
            }}
          >
            <FontAwesome
              name="close"
              size={20}
              color={theme === 'dark' ? '#94a3b8' : '#64748b'}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {providers.map((provider, index) => (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 16,
                backgroundColor: theme === 'dark' ? 'rgba(51, 65, 85, 0.5)' : '#f8fafc',
                borderRadius: 16,
                marginBottom: 12,
              }}
              activeOpacity={0.7}
            >
              <Text
                style={{
                  fontWeight: 'medium',
                  color: theme === 'dark' ? '#e2e8f0' : '#1e293b',
                  fontSize: 16,
                }}
              >
                {provider}
              </Text>
              <FontAwesome
                name="chevron-right"
                size={16}
                color={theme === 'dark' ? '#64748b' : '#94a3b8'}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    </Animated.View>
  );
}
