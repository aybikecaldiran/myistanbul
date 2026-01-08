import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import * as Localization from 'expo-localization';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

export interface DeviceInfo {
  // Localization
  locale: string;
  language: string;
  region: string | null;
  currency: string | null;
  timezone: string;
  isRTL: boolean;

  // Device
  deviceName: string | null;
  deviceType: Device.DeviceType | null;
  brand: string | null;
  manufacturer: string | null;
  modelName: string | null;
  modelId: string | null;
  designName: string | null;
  productName: string | null;
  deviceYearClass: number | null;
  totalMemory: number | null;
  supportedCpuArchitectures: string[] | null;
  osName: string;
  osVersion: string;
  osBuildId: string | null;
  platformApiLevel: number | null;
  isDevice: boolean;

  // App
  appName: string;
  appVersion: string;
  buildVersion: string;
  bundleIdentifier: string;

  // Platform
  platform: 'ios' | 'android' | 'web';
}

interface DeviceContextType {
  deviceInfo: DeviceInfo | null;
  isLoading: boolean;
  error: string | null;
  refreshDeviceInfo: () => Promise<void>;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export const useDeviceInfo = () => {
  const context = useContext(DeviceContext);
  if (context === undefined) {
    throw new Error('useDeviceInfo must be used within a DeviceProvider');
  }
  return context;
};

interface DeviceProviderProps {
  children: ReactNode;
}

export const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const collectDeviceInfo = async (): Promise<DeviceInfo> => {
    try {
      // Get localization info
      const locales = Localization.getLocales();
      const primaryLocale = locales[0];

      // Get device info
      return {
        // Localization
        locale: primaryLocale?.languageTag || 'en-US',
        language: primaryLocale?.languageCode || 'en',
        region: primaryLocale?.regionCode || null,
        currency: primaryLocale?.currencyCode || null,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        isRTL: primaryLocale?.textDirection === 'rtl',

        // Device
        deviceName: Device.deviceName,
        deviceType: Device.deviceType,
        brand: Device.brand,
        manufacturer: Device.manufacturer,
        modelName: Device.modelName,
        modelId: Device.modelId,
        designName: Device.designName,
        productName: Device.productName,
        deviceYearClass: Device.deviceYearClass,
        totalMemory: Device.totalMemory,
        supportedCpuArchitectures: Device.supportedCpuArchitectures,
        osName: Device.osName || 'Unknown',
        osVersion: Device.osVersion || 'Unknown',
        osBuildId: Device.osBuildId,
        platformApiLevel: Device.platformApiLevel,
        isDevice: Device.isDevice,

        // App
        appName: Constants.expoConfig?.name || 'MyIstanbul',
        appVersion: Constants.expoConfig?.version || '1.0.0',
        buildVersion: Constants.expoConfig?.android?.versionCode?.toString() ||
                     Constants.expoConfig?.ios?.buildNumber || '1',
        bundleIdentifier: Constants.expoConfig?.ios?.bundleIdentifier ||
                         Constants.expoConfig?.android?.package || 'com.myistanbul.app',

        // Platform
        platform: Platform.OS as 'ios' | 'android' | 'web',
      };
    } catch (err) {
      throw new Error(`Failed to collect device info: ${err}`);
    }
  };

  const refreshDeviceInfo = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const info = await collectDeviceInfo();
      setDeviceInfo(info);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      console.error('DeviceProvider: Failed to collect device info:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshDeviceInfo();
  }, []);

  const value: DeviceContextType = {
    deviceInfo,
    isLoading,
    error,
    refreshDeviceInfo,
  };

  return (
    <DeviceContext.Provider value={value}>
      {children}
    </DeviceContext.Provider>
  );
};
