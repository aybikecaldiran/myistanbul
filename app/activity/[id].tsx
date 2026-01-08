import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useThemeContext } from '@/components/ThemeContext';
import { useResponsive } from '@/hooks/useResponsive';
import { list_activities, activities, type Activity as BaseActivity } from '@/data/mockData';
import Button from '@/components/UI/Button';
import ActivityHeader from '@/components/ActivityHeader';
import ActivityTitleSection from '@/components/ActivityTitleSection';
import ActivityFeatures from '@/components/ActivityFeatures';
import ImportantInfoBanner from '@/components/ImportantInfoBanner';
import ActivityDescription from '@/components/ActivityDescription';
import ActivityIncluded from '@/components/ActivityIncluded';
import ActivityOperatingHours from '@/components/ActivityOperatingHours';
import ActivityLocationMap from '@/components/ActivityLocationMap';
import ActivityReviews from '@/components/ActivityReviews';
import ActivityFAQ from '@/components/ActivityFAQ';

interface Activity extends BaseActivity {
  description?: string;
  short_description?: string;
  location?: string;
  opening_hours?: string;
  duration?: string;
  has_skip_the_line?: boolean;
  has_instant_access?: boolean;
  is_free_with_pass?: boolean;
  is_discounted_with_pass?: boolean;
  category_id?: number;
  click_count?: number;
  discounted_price?: number;
}

const { height } = Dimensions.get('window');

const getActivityById = (id: string | number): Activity | null => {
  const allActivities = [...list_activities, ...activities];
  const found = allActivities.find(activity => activity.id.toString() === id.toString());
  return found ? (found as Activity) : null;
};


export default function ActivityDetailScreen() {
  const { theme } = useThemeContext();
  const { tiny, small } = useResponsive();
  const { id } = useLocalSearchParams();
  const [currentImageIndex] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [readMore, setReadMore] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const activity = getActivityById(id as string);

  const scrollToMapSection = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: height,
        animated: true
      });
    }
  };

  const handleToggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleToggleReadMore = () => {
    setReadMore(!readMore);
  };

  if (!activity) {
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-gray-900">
        <MaterialIcons name="error-outline" size={64} color="#EF4444" />
        <Text className="text-xl font-bold text-gray-900 dark:text-white mt-4">
          Activity Not Found
        </Text>
        <Text className="text-gray-600 dark:text-gray-400 mt-2">
          The activity you're looking for doesn't exist.
        </Text>
        <TouchableOpacity
          className="mt-6 px-6 py-3 bg-[#f2024e] rounded-full"
          onPress={() => router.back()}
        >
          <Text className="text-white font-semibold">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderHeader = () => (
    <ActivityHeader
      activity={activity}
      height={height}
      currentImageIndex={currentImageIndex}
      onLocationPress={scrollToMapSection}
    />
  );

  const renderContent = () => (
    <View
      className={`relative -mt-10 rounded-t-2xl px-5 pt-8 pb-4 shadow-xl z-10 min-h-screen ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <View className="absolute top-3 left-1/2 w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full" style={{ marginLeft: -24 }} />

      <ActivityTitleSection activity={activity} theme={theme} />

      <ActivityFeatures features={activity.features} theme={theme} />

      <ImportantInfoBanner theme={theme} />

      <ActivityDescription
        activity={activity}
        theme={theme}
        readMore={readMore}
        onToggleReadMore={handleToggleReadMore}
      />

      {activity.opening_hours && (
        <View className="mb-8">
          <Text className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>
            Opening Hours
          </Text>
          <View className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-4">
            <View className="flex-row items-center gap-3">
              <MaterialIcons name="access-time" size={24} color="#f2024e" />
              <Text className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>
                {activity.location || 'Istanbul, Turkey'}
              </Text>
            </View>
            {activity.location && (
              <View className="flex-row items-center gap-3 mt-3">
                <MaterialIcons name="place" size={24} color="#f2024e" />
                <Text className={`text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {activity.location}
                </Text>
              </View>
            )}
          </View>
        </View>
      )}

      <ActivityIncluded activity={activity} theme={theme} />

      <ActivityOperatingHours theme={theme} />

      <ActivityLocationMap activity={activity} theme={theme} />

      <ActivityReviews theme={theme} />

      <ActivityFAQ
        theme={theme}
        expandedFaq={expandedFaq}
        onToggleFaq={handleToggleFaq}
      />
    </View>
  );

  return (
    <View className="flex-1" style={{ backgroundColor: theme === 'dark' ? '#111827' : '#f9fafb' }}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        ref={scrollViewRef}
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
      >
        {renderHeader()}
        {renderContent()}
      </ScrollView>

      {/* Bottom Price Bar */}
      <View className={`absolute bottom-0 left-0 right-0 z-40 px-5 py-4 pb-8 border-t ${
        theme === 'dark'
          ? 'bg-gray-800/90 border-gray-700'
          : 'bg-white/95 border-gray-100'
      }`}>
        <View className="flex-row items-center justify-between gap-4">
          <View>
            {/*{activity.price && activity.price > 0 && (*/}
              <Text className="text-xs font-medium text-gray-400 line-through">
                {/*Price Without Pass €{activity.price}.00*/}
                Price Without Pass €45.00
              </Text>
            {/*)}*/}
            <View className="flex-row items-center gap-1.5 mt-0.5">
              <Text className="text-lg font-black text-[#f2024e] tracking-tight">
                FREE WITH PASS
                {/*{activity.priceType === 'free'*/}
                {/*  ? 'FREE WITH PASS'*/}
                {/*  : activity.is_discounted_with_pass*/}
                {/*    ? `€${activity.discounted_price || Math.floor((activity.price || 0) * 0.7)}`*/}
                {/*    : `€${activity.price || 0}`*/}
                {/*}*/}
                {/*<Text className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>*/}
                {/*  {activity.priceType === 'free'*/}
                {/*      ? 'FREE with Pass'*/}
                {/*      : activity.priceType === 'discounted'*/}
                {/*          ? `€${activity.price || 0} DISCOUNTED`*/}
              </Text>
              <MaterialIcons name="check-circle" size={20} color="#f2024e" />
            </View>
          </View>

          <View className={"flex-1"}>
          <Button
            title="Reserve Now"
            variant="primary"
            size={tiny ? 'sm' : small ? 'md' : 'lg'}
            rounded="full"
            onPress={() => {}}
            containerClassName={tiny ? "px-2" : small ? "px-4" : "px-8"}
            shadow={true}
          />
          </View>
        </View>
      </View>
    </View>
  );
}
