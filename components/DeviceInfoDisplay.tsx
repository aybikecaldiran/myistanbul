import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDeviceInfo } from '@/contexts/DeviceContext';
import { useLocalization, useDevice, useAppInfo, useDeviceCapabilities } from '@/hooks/useDeviceHooks';
import { useTranslation } from '@/hooks/useTranslation';
import { useThemeContext } from '@/components/ThemeContext';

/**
 * Component to display comprehensive device information
 * This demonstrates how to use the device context and hooks
 */
export const DeviceInfoDisplay: React.FC = () => {
  const { theme } = useThemeContext();
  const { deviceInfo, isLoading, error } = useDeviceInfo();
  const localization = useLocalization();
  const device = useDevice();
  const appInfo = useAppInfo();
  const capabilities = useDeviceCapabilities();
  const { t, language } = useTranslation();

  if (isLoading) {
    return (
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>
          Loading device information...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>
          Error loading device info: {error}
        </Text>
      </View>
    );
  }

  const InfoSection: React.FC<{ title: string; data: any }> = ({ title, data }) => (
    <View style={{
      marginBottom: 20,
      padding: 15,
      backgroundColor: theme === 'dark' ? '#374151' : '#f3f4f6',
      borderRadius: 8
    }}>
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: theme === 'dark' ? '#fff' : '#000'
      }}>
        {title}
      </Text>
      {Object.entries(data).map(([key, value]) => (
        <View key={key} style={{ flexDirection: 'row', marginBottom: 5 }}>
          <Text style={{
            flex: 1,
            fontWeight: '600',
            color: theme === 'dark' ? '#d1d5db' : '#374151'
          }}>
            {key}:
          </Text>
          <Text style={{
            flex: 2,
            color: theme === 'dark' ? '#e5e7eb' : '#6b7280'
          }}>
            {value?.toString() || 'N/A'}
          </Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={{
      flex: 1,
      padding: 20,
      backgroundColor: theme === 'dark' ? '#111827' : '#ffffff'
    }}>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: theme === 'dark' ? '#fff' : '#000'
      }}>
        Device Information Dashboard
      </Text>

      <InfoSection
        title="🌍 Localization"
        data={{
          'Language': localization.language,
          'Locale': localization.locale,
          'Region': localization.region,
          'Currency': localization.currency,
          'Timezone': localization.timezone,
          'RTL Support': localization.isRTL ? 'Yes' : 'No',
          'Current Translation Language': language,
        }}
      />

      <InfoSection
        title="📱 Device Hardware"
        data={{
          'Device Name': device.deviceName,
          'Platform': device.platform,
          'OS Name': device.osName,
          'OS Version': device.osVersion,
          'Brand': device.brand,
          'Model': device.modelName,
          'Manufacturer': device.manufacturer,
          'Year Class': device.deviceYearClass,
          'Total Memory': device.totalMemory ? `${Math.round(device.totalMemory / (1024**3))} GB` : 'Unknown',
          'Is Physical Device': device.isDevice ? 'Yes' : 'No (Simulator)',
        }}
      />

      <InfoSection
        title="📦 App Information"
        data={{
          'App Name': appInfo.appName,
          'Version': appInfo.appVersion,
          'Build': appInfo.buildVersion,
          'Bundle ID': appInfo.bundleIdentifier,
        }}
      />

      <InfoSection
        title="🔧 Device Capabilities"
        data={{
          'Physical Device': capabilities.isPhysicalDevice ? 'Yes' : 'No',
          'High Memory': capabilities.hasHighMemory ? 'Yes (>4GB)' : 'No (<4GB)',
          'Modern Device': capabilities.isModernDevice ? 'Yes (2020+)' : 'No (<2020)',
          'RTL Support': capabilities.supportsRTL ? 'Yes' : 'No',
          'Platform Type': capabilities.isIOS ? 'iOS' : capabilities.isAndroid ? 'Android' : 'Web',
        }}
      />

      <InfoSection
        title="🔤 Translation Demo"
        data={{
          'Welcome': t('welcome'),
          'Let\'s Begin': t('letsBegin'),
          'Pass Number': t('passNumber'),
          'Last Name': t('lastName'),
          'Log In': t('logIn'),
          'Buy Now': t('buyNow'),
          'Just Explore': t('justExplore'),
        }}
      />

      <View style={{ marginBottom: 40 }}>
        <Text style={{
          fontSize: 14,
          textAlign: 'center',
          color: theme === 'dark' ? '#9ca3af' : '#6b7280',
          fontStyle: 'italic'
        }}>
          This information is automatically detected from your device using expo-localization and expo-device.
          {'\n'}Language translations change automatically based on device locale.
        </Text>
      </View>
    </ScrollView>
  );
};
