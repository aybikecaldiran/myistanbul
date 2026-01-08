import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, View, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { useThemeContext } from '../ThemeContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  title?: string;
  children?: React.ReactNode;
  onPress?: () => void;

  // Icon props
  leftIcon?: keyof typeof FontAwesome.glyphMap | keyof typeof MaterialIcons.glyphMap;
  rightIcon?: keyof typeof FontAwesome.glyphMap | keyof typeof MaterialIcons.glyphMap;
  iconLibrary?: 'FontAwesome' | 'MaterialIcons';
  onRightIconPress?: () => void;

  // Variant
  variant?: 'primary' | 'secondary' | 'outlined' | 'filled' | 'ghost' | 'danger' | 'success';

  // Size
  size?: 'sm' | 'md' | 'lg' | 'xl';

  // State props
  loading?: boolean;
  disabled?: boolean;

  // Styling props
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: boolean;
  fullWidth?: boolean;

  // Custom styles
  containerClassName?: string;
  textClassName?: string;
}

const Button = forwardRef<View, ButtonProps>(({
  title,
  children,
  onPress,
  leftIcon,
  rightIcon,
  iconLibrary = 'FontAwesome',
  onRightIconPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  rounded = 'lg',
  shadow = false,
  fullWidth = false,
  containerClassName = '',
  textClassName = '',
  ...touchableOpacityProps
}, ref) => {
  const { theme } = useThemeContext();

  // Size configurations
  const sizeConfig = {
    sm: {
      container: 'py-2 px-3',
      text: 'text-sm',
      icon: 16,
      gap: 6,
    },
    md: {
      container: 'py-3 px-4',
      text: 'text-base',
      icon: 18,
      gap: 8,
    },
    lg: {
      container: 'py-4 px-6',
      text: 'text-lg',
      icon: 20,
      gap: 10,
    },
    xl: {
      container: 'py-5 px-8',
      text: 'text-xl',
      icon: 24,
      gap: 12,
    },
  };

  // Rounded configurations
  const roundedConfig = {
    sm: 'rounded',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
    full: 'rounded-full',
  };

  // Variant configurations
  const getVariantStyles = () => {
    const isDark = theme === 'dark';
    const isDisabled = disabled || loading;

    let baseStyles = `${roundedConfig[rounded]} transition-all duration-200`;

    if (shadow) {
      baseStyles += ' shadow-lg';
    }

    if (fullWidth) {
      baseStyles += ' w-full';
    }

    if (isDisabled) {
      baseStyles += ' opacity-50';
    }

    switch (variant) {
      case 'primary':
        baseStyles += isDark
          ? ' bg-primary border border-primary'
          : ' bg-primary border border-primary';
        break;

      case 'secondary':
        baseStyles += isDark
          ? ' bg-secondary border border-secondary'
          : ' bg-secondary border border-secondary';
        break;

      case 'outlined':
        baseStyles += isDark
          ? ' bg-transparent border-2 border-primary'
          : ' bg-transparent border-2 border-primary';
        break;

      case 'filled':
        baseStyles += isDark
          ? ' bg-slate-700 border border-slate-600'
          : ' bg-slate-100 border border-slate-200';
        break;

      case 'ghost':
        baseStyles += ' bg-transparent border border-transparent';
        break;

      case 'danger':
        baseStyles += ' bg-red-500 border border-red-500';
        break;

      case 'success':
        baseStyles += ' bg-green-500 border border-green-500';
        break;
    }

    return baseStyles;
  };

  // Text color
  const getTextColor = () => {
    const isDark = theme === 'dark';

    switch (variant) {
      case 'primary':
        return 'text-white';
      case 'secondary':
        return 'text-white';
      case 'outlined':
        return isDark ? 'text-primary' : 'text-primary';
      case 'filled':
        return isDark ? 'text-white' : 'text-slate-900';
      case 'ghost':
        return isDark ? 'text-white' : 'text-slate-900';
      case 'danger':
        return 'text-white';
      case 'success':
        return 'text-white';
      default:
        return isDark ? 'text-white' : 'text-slate-900';
    }
  };

  // Icon color
  const getIconColor = () => {
    switch (variant) {
      case 'primary':
        return '#ffffff';
      case 'secondary':
        return '#ffffff';
      case 'outlined':
        return '#F0034E'; // primary color
      case 'filled':
        return theme === 'dark' ? '#ffffff' : '#1e293b';
      case 'ghost':
        return theme === 'dark' ? '#ffffff' : '#1e293b';
      case 'danger':
        return '#ffffff';
      case 'success':
        return '#ffffff';
      default:
        return theme === 'dark' ? '#ffffff' : '#1e293b';
    }
  };

  const currentSize = sizeConfig[size];
  const IconComponent = iconLibrary === 'MaterialIcons' ? MaterialIcons : FontAwesome;
  const isDisabled = disabled || loading;

  const handlePress = () => {
    if (!isDisabled && onPress) {
      onPress();
    }
  };

  const handleRightIconPress = () => {
    if (!isDisabled && onRightIconPress) {
      onRightIconPress();
    }
  };

  return (
    <TouchableOpacity
      ref={ref}
      className={`flex-row items-center justify-center ${currentSize.container} ${getVariantStyles()} ${containerClassName}`}
      onPress={handlePress}
      disabled={isDisabled}
      activeOpacity={isDisabled ? 1 : 0.8}
      {...touchableOpacityProps}
    >
      {/* Left Icon */}
      {leftIcon && !loading && (
        <View style={{ marginRight: currentSize.gap }}>
          <IconComponent
            name={leftIcon as any}
            size={currentSize.icon}
            color={getIconColor()}
          />
        </View>
      )}

      {/* Loading Indicator */}
      {loading && (
        <View style={{ marginRight: title || children ? currentSize.gap : 0 }}>
          <ActivityIndicator
            size={currentSize.icon}
            color={getIconColor()}
          />
        </View>
      )}

      {/* Text Content */}
      {(title || children) && (
        <View className="flex-1 items-center">
          {children || (
            <Text className={`font-semibold ${currentSize.text} ${getTextColor()} ${textClassName}`}>
              {title}
            </Text>
          )}
        </View>
      )}

      {/* Right Icon */}
      {rightIcon && !loading && (
        <TouchableOpacity
          style={{ marginLeft: currentSize.gap }}
          onPress={handleRightIconPress}
          disabled={!onRightIconPress}
        >
          <IconComponent
            name={rightIcon as any}
            size={currentSize.icon}
            color={getIconColor()}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
});

Button.displayName = 'Button';

export default Button;
