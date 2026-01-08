import React, { useState, forwardRef } from 'react';
import { View as RNView, TextInput, Text, Pressable, TextInputProps, StyleSheet, Keyboard } from 'react-native';
import { View } from '../Themed';
import { useThemeContext } from '../ThemeContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;

  // Icon props
  leftIcon?: keyof typeof FontAwesome.glyphMap | keyof typeof MaterialIcons.glyphMap;
  rightIcon?: keyof typeof FontAwesome.glyphMap | keyof typeof MaterialIcons.glyphMap;
  iconLibrary?: 'FontAwesome' | 'MaterialIcons';
  onRightIconPress?: () => void;

  // Variant
  variant?: 'primary' | 'secondary' | 'outlined' | 'filled' | 'ghost';

  // Size
  size?: 'sm' | 'md' | 'lg' | 'xl';

  // State props
  error?: string | boolean;
  success?: boolean;
  helpText?: string;
  disabled?: boolean;
  loading?: boolean;

  // Styling props
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: boolean;

  // Validation
  required?: boolean;

  // Keyboard behavior
  dismissKeyboardOnSubmit?: boolean;
  blurOnSubmit?: boolean;

  // Custom styles
  containerStyle?: object;
  containerClassName?: string;
  inputStyle?: object;
  labelStyle?: object;
}

const Input = forwardRef<TextInput, InputProps>(({
                                                   label,
                                                   placeholder,
                                                   value,
                                                   onChangeText,
                                                   leftIcon,
                                                   rightIcon,
                                                   iconLibrary = 'FontAwesome',
                                                   onRightIconPress,
                                                   variant = 'primary',
                                                   size = 'md',
                                                   error,
                                                   success,
                                                   helpText,
                                                   disabled = false,
                                                   loading = false,
                                                   rounded = 'lg',
                                                   shadow = false,
                                                   required = false,
                                                   dismissKeyboardOnSubmit = true,
                                                   blurOnSubmit = true,
                                                   containerStyle = {},
                                                   containerClassName = '',
                                                   inputStyle = {},
                                                   labelStyle = {},
                                                   ...textInputProps
                                                 }, ref) => {
  const { theme } = useThemeContext();
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Theme colors
  const colors = {
    primary: '#F0034E',
    secondary: '#EC4899',
    background: theme === 'dark' ? '#1E293B' : '#FFFFFF',
    surface: theme === 'dark' ? '#334155' : '#F8FAFC',
    text: theme === 'dark' ? '#FFFFFF' : '#0F172A',
    textSecondary: theme === 'dark' ? '#CBD5E1' : '#64748B',
    border: theme === 'dark' ? '#475569' : '#E2E8F0',
    borderFocused: theme === 'dark' ? '#0EA5E9' : '#0EA5E9',
    error: '#EF4444',
    success: '#10B981',
    placeholder: theme === 'dark' ? '#64748B' : '#94A3B8',
  };

  // Size configurations
  const sizeConfig = {
    sm: {
      height: 36,
      fontSize: 14,
      iconSize: 16,
      paddingHorizontal: 12,
      paddingLeft: leftIcon ? 36 : 12,
      paddingRight: rightIcon ? 36 : 12,
    },
    md: {
      height: 44,
      fontSize: 16,
      iconSize: 18,
      paddingHorizontal: 16,
      paddingLeft: leftIcon ? 44 : 16,
      paddingRight: rightIcon ? 44 : 16,
    },
    lg: {
      height: 52,
      fontSize: 18,
      iconSize: 20,
      paddingHorizontal: 20,
      paddingLeft: leftIcon ? 52 : 20,
      paddingRight: rightIcon ? 52 : 20,
    },
    xl: {
      height: 60,
      fontSize: 20,
      iconSize: 24,
      paddingHorizontal: 24,
      paddingLeft: leftIcon ? 60 : 24,
      paddingRight: rightIcon ? 60 : 24,
    },
  };

  // Border radius configuration
  const borderRadiusConfig = {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 100,
  };

  const currentSize = sizeConfig[size];
  const IconComponent = iconLibrary === 'MaterialIcons' ? MaterialIcons : FontAwesome;

  const handleRightIconPress = () => {
    if (textInputProps.secureTextEntry) {
      setShowPassword(!showPassword);
    } else if (onRightIconPress) {
      onRightIconPress();
    }
  };

  // Right icon logic
  const getRightIcon = () => {
    if (textInputProps.secureTextEntry) {
      return showPassword ? 'visibility-off' : 'visibility';
    }
    return rightIcon;
  };

  const getRightIconLibrary = () => {
    if (textInputProps.secureTextEntry) {
      return 'MaterialIcons';
    }
    return iconLibrary;
  };

  // Icon color logic
  const getIconColor = () => {
    if (error && error !== '') return colors.error;
    if (success) return colors.success;
    if (isFocused) {
      switch (variant) {
        case 'secondary': return colors.secondary;
        default: return colors.primary;
      }
    }
    return colors.textSecondary;
  };

  // Container style logic
  const getContainerStyle = () => {
    const hasError = error && error !== '';
    const hasSuccess = success && !hasError;

    let borderColor = colors.border;
    let backgroundColor = colors.surface;
    let borderWidth = 1;

    if (hasError) {
      borderColor = colors.error;
      backgroundColor = theme === 'dark' ? '#7F1D1D20' : '#FEF2F2';
    } else if (hasSuccess) {
      borderColor = colors.success;
      backgroundColor = theme === 'dark' ? '#14532D20' : '#F0FDF4';
    } else if (isFocused) {
      borderColor = variant === 'secondary' ? colors.secondary : colors.primary;
      borderWidth = 2;
    }

    switch (variant) {
      case 'outlined':
        backgroundColor = 'transparent';
        break;
      case 'filled':
        borderWidth = 0;
        backgroundColor = colors.surface;
        break;
      case 'ghost':
        borderWidth = 0;
        backgroundColor = isFocused ? colors.surface : 'transparent';
        break;
    }

    return {
      height: currentSize.height,
      borderRadius: borderRadiusConfig[rounded],
      borderWidth,
      borderColor,
      backgroundColor,
      opacity: disabled ? 0.5 : 1,
      elevation: shadow ? 2 : 0,
      shadowColor: '#000',
      shadowOffset: shadow ? { width: 0, height: 1 } : { width: 0, height: 0 },
      shadowOpacity: shadow ? 0.1 : 0,
      shadowRadius: shadow ? 2 : 0,
    };
  };

  return (
      <View style={[styles.container, containerStyle]} className={containerClassName}>
        {/* Label */}
        {label && (
            <RNView style={styles.labelContainer}>
              <Text style={[styles.label, { color: colors.text }, labelStyle]}>
                {label}
                {required && <Text style={[styles.required, { color: colors.error }]}> *</Text>}
              </Text>
            </RNView>
        )}

        {/* Input Container */}
        <RNView style={[styles.inputContainer, getContainerStyle()]}>
          {/* Left Icon */}
          {leftIcon && (
              <RNView style={styles.leftIconContainer}>
                <IconComponent
                    name={leftIcon as any}
                    size={currentSize.iconSize}
                    color={getIconColor()}
                />
              </RNView>
          )}

          {/* Input Field */}
          <TextInput
              ref={ref}
              style={[
                styles.input,
                {
                  fontSize: currentSize.fontSize,
                  paddingLeft: currentSize.paddingLeft,
                  paddingRight: currentSize.paddingRight,
                  color: colors.text,
                },
                inputStyle
              ]}
              placeholder={placeholder}
              placeholderTextColor={colors.placeholder}
              value={value}
              onChangeText={onChangeText}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              editable={!disabled && !loading}
              secureTextEntry={textInputProps.secureTextEntry && !showPassword}
              returnKeyType={textInputProps.returnKeyType || 'done'}
              onSubmitEditing={(event) => {
                if (dismissKeyboardOnSubmit) {
                  Keyboard.dismiss();
                }
                if (textInputProps.onSubmitEditing) {
                  textInputProps.onSubmitEditing(event);
                }
              }}
              {...textInputProps}
          />

          {/* Right Icon */}
          {(rightIcon || textInputProps.secureTextEntry) && (
              <Pressable
                  style={styles.rightIconContainer}
                  onPress={handleRightIconPress}
                  disabled={!textInputProps.secureTextEntry && !onRightIconPress}
              >
                {getRightIconLibrary() === 'MaterialIcons' ? (
                    <MaterialIcons
                        name={getRightIcon() as any}
                        size={currentSize.iconSize}
                        color={getIconColor()}
                    />
                ) : (
                    <FontAwesome
                        name={getRightIcon() as any}
                        size={currentSize.iconSize}
                        color={getIconColor()}
                    />
                )}
              </Pressable>
          )}

          {/* Loading Indicator */}
          {loading && (
              <RNView style={styles.loadingContainer}>
                <RNView style={[styles.loadingSpinner, { borderColor: colors.primary }]} />
              </RNView>
          )}
        </RNView>

        {/* Help Text, Error, Success Message */}
        {(helpText || error || success) && (
            <RNView style={styles.helpContainer}>
              {error && typeof error === 'string' && (
                  <RNView style={styles.messageContainer}>
                    <FontAwesome name="exclamation-circle" size={12} color={colors.error} />
                    <Text style={[styles.errorText, { color: colors.error }]}>
                      {error}
                    </Text>
                  </RNView>
              )}
              {success && (
                  <RNView style={styles.messageContainer}>
                    <FontAwesome name="check-circle" size={12} color={colors.success} />
                    <Text style={[styles.successText, { color: colors.success }]}>
                      Successfully validated!
                    </Text>
                  </RNView>
              )}
              {helpText && !error && (
                  <Text style={[styles.helpText, { color: colors.textSecondary }]}>
                    {helpText}
                  </Text>
              )}
            </RNView>
        )}
      </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  labelContainer: {
    marginBottom: 8,
    marginLeft: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  required: {
    fontSize: 14,
    fontWeight: '600',
  },
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: '100%',
    backgroundColor: 'transparent',
    paddingVertical: 0,
  },
  leftIconContainer: {
    position: 'absolute',
    left: 12,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconContainer: {
    position: 'absolute',
    right: 12,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  loadingContainer: {
    position: 'absolute',
    right: 12,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingSpinner: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderTopColor: 'transparent',
    borderRadius: 8,
  },
  helpContainer: {
    marginTop: 8,
    marginLeft: 4,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 12,
    marginLeft: 4,
  },
  successText: {
    fontSize: 12,
    marginLeft: 4,
  },
  helpText: {
    fontSize: 12,
  },
});

Input.displayName = 'Input';

export default Input;
