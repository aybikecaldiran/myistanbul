import { useDeviceInfo } from '@/contexts/DeviceContext';

export const useLocalization = () => {
  const { deviceInfo } = useDeviceInfo();

  if (!deviceInfo) {
    return {
      locale: 'en-US',
      language: 'en',
      region: null,
      currency: null,
      timezone: 'UTC',
      isRTL: false,
    };
  }

  return {
    locale: deviceInfo.locale,
    language: deviceInfo.language,
    region: deviceInfo.region,
    currency: deviceInfo.currency,
    timezone: deviceInfo.timezone,
    isRTL: deviceInfo.isRTL,
  };
};

export const useDevice = () => {
  const { deviceInfo } = useDeviceInfo();

  if (!deviceInfo) {
    return {
      deviceName: null,
      deviceType: null,
      brand: null,
      modelName: null,
      isDevice: false,
      platform: 'ios' as const,
      osVersion: '1.0',
    };
  }

  return {
    deviceName: deviceInfo.deviceName,
    deviceType: deviceInfo.deviceType,
    brand: deviceInfo.brand,
    manufacturer: deviceInfo.manufacturer,
    modelName: deviceInfo.modelName,
    modelId: deviceInfo.modelId,
    designName: deviceInfo.designName,
    productName: deviceInfo.productName,
    deviceYearClass: deviceInfo.deviceYearClass,
    totalMemory: deviceInfo.totalMemory,
    supportedCpuArchitectures: deviceInfo.supportedCpuArchitectures,
    isDevice: deviceInfo.isDevice,
    platform: deviceInfo.platform,
    osName: deviceInfo.osName,
    osVersion: deviceInfo.osVersion,
    osBuildId: deviceInfo.osBuildId,
    platformApiLevel: deviceInfo.platformApiLevel,
  };
};

export const useAppInfo = () => {
  const { deviceInfo } = useDeviceInfo();

  if (!deviceInfo) {
    return {
      appName: 'MyIstanbul',
      appVersion: '1.0.0',
      buildVersion: '1',
      bundleIdentifier: 'com.myistanbul.app',
    };
  }

  return {
    appName: deviceInfo.appName,
    appVersion: deviceInfo.appVersion,
    buildVersion: deviceInfo.buildVersion,
    bundleIdentifier: deviceInfo.bundleIdentifier,
  };
};


export const useDeviceCapabilities = () => {
  const { deviceInfo } = useDeviceInfo();

  if (!deviceInfo) {
    return {
      isPhysicalDevice: false,
      hasHighMemory: false,
      isModernDevice: false,
      supportsRTL: false,
    };
  }

  return {
    isPhysicalDevice: deviceInfo.isDevice,
    hasHighMemory: (deviceInfo.totalMemory || 0) > 4 * 1024 * 1024 * 1024, // >4GB
    isModernDevice: (deviceInfo.deviceYearClass || 0) >= 2020,
    supportsRTL: deviceInfo.isRTL,
    isIOS: deviceInfo.platform === 'ios',
    isAndroid: deviceInfo.platform === 'android',
    isWeb: deviceInfo.platform === 'web',
  };
};
