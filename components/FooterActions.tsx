import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Button from '@/components/UI/Button';

interface FooterActionsProps {
  theme: string;
  large: boolean;
  medium: boolean;
  small: boolean;
  openModal: () => void;
  onOffersPress: () => void;
  onExplorePress: () => void;
  t: any;
}

export default function FooterActions({
  theme,
  large,
  medium,
  small,
  openModal,
  onOffersPress,
  onExplorePress,
  t
}: FooterActionsProps) {
  return (
    <View
      style={{
        marginTop: large ? 32 : medium ? 20 : small ? 16 : 12,
        paddingBottom: large ? 24 : medium ? 20 : small ? 16 : 12,
        alignItems: 'center',
        backgroundColor: theme === "dark" ? "#111827" : "#ffffff"
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: large ? 20 : medium ? 16 : small ? 12 : 8
        }}
        onPress={openModal}
      >
        <FontAwesome
          name="question-circle"
          size={large ? 18 : medium ? 16 : small ? 14 : 12}
          color="#F0034E"
        />
        <Text style={{
          marginLeft: 8,
          color: '#F0034E',
          fontWeight: '600',
          fontSize: large ? 16 : medium ? 14 : small ? 12 : 10
        }}>
          {t('whereCanIFind')}
        </Text>
      </TouchableOpacity>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
        marginBottom: large ? 16 : medium ? 12 : small ? 10 : 8
      }}>
        <Text style={{
          fontSize: large ? 16 : medium ? 14 : small ? 12 : 10,
          color: theme === "dark" ? "#94a3b8" : "#64748b"
        }}>
          {t('dontHavePass')}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          gap: large ? 20 : medium ? 16 : small ? 12 : 8,
          paddingHorizontal: large ? 24 : medium ? 20 : small ? 16 : 12,
          backgroundColor: theme === "dark" ? "#111827" : "#ffffff"
        }}
      >
        <Button
          title={t('buyNow')}
          onPress={onOffersPress}
          variant="outlined"
          size={large ? "md" : medium ? "sm" : "sm"}
          containerClassName="flex-1"
        />

        <Button
          title={t('justExplore')}
          onPress={onExplorePress}
          variant="outlined"
          size={large ? "md" : medium ? "sm" : "sm"}
          containerClassName="flex-1"
        />
      </View>
    </View>
  );
}
