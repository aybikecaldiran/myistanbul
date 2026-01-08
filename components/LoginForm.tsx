import React from 'react';
import { ScrollView } from 'react-native';
import { View } from '@/components/Themed';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';

interface LoginFormProps {
  theme: string;
  large: boolean;
  medium: boolean;
  small: boolean;
  passNumber: string;
  setPassNumber: (value: string) => void;
  currentPlaceholder: string;
  lastName: string;
  setLastName: (value: string) => void;
  handleStartExploring: () => void;
  scrollViewRef: any;
  t: any;
}

export default function LoginForm({
  theme,
  large,
  medium,
  small,
  passNumber,
  setPassNumber,
  currentPlaceholder,
  lastName,
  setLastName,
  handleStartExploring,
  scrollViewRef,
  t
}: LoginFormProps) {
  return (
    <View style={{
      backgroundColor: theme === "dark" ? "#111827" : "#ffffff"
    }}>
      <Input
        label={t('passNumber')}
        placeholder={currentPlaceholder || t('passNumberPlaceholder')}
        value={passNumber}
        onChangeText={setPassNumber}
        autoCapitalize="characters"
        required
        helpText={t('passNumberHelpText')}
        containerClassName={large ? "mb-6" : medium ? "mb-5" : small ? "mb-4" : "mb-3"}
        leftIcon="ticket"
        size={large ? "md" : medium ? "md" : "sm"}
      />

      <Input
        label={t('lastName')}
        placeholder={t('lastNamePlaceholder')}
        value={lastName}
        onChangeText={setLastName}
        autoCapitalize="words"
        required
        containerClassName={large ? "mb-6" : medium ? "mb-5" : small ? "mb-4" : "mb-3"}
        leftIcon="user"
        size={large ? "md" : medium ? "md" : "sm"}
        onFocus={() => {
          setTimeout(() => {
            scrollViewRef.current?.scrollTo({
              y: 200,
              animated: true
            });
          }, 100);
        }}
      />

      <Button
        title={t('logIn')}
        onPress={handleStartExploring}
        variant="primary"
        size={large ? "lg" : medium ? "md" : "sm"}
        fullWidth
        containerClassName={`mt-${large ? "5" : medium ? "4" : "2"}`}
      />
    </View>
  );
}
