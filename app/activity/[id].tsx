import React, { useEffect, useState, useRef } from 'react';
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
import { getProduct } from '@/app/api/services/products';
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

interface Activity {
  id: number;
  title: string;
  category: string;
  image: string;
  rating: string;
  reviews: string;
  tags: string | string[];
  features: string | any[];
  priceType: string;
  opening_hours: string;
  faqs: string | any[];
  address: string;
  importantInfo: string;
  included: string;
  description?: string;
  short_description?: string;
  location?: string;
  duration?: string;
  price: string;
}

const { height } = Dimensions.get('window');

export default function ActivityDetailScreen() {
  const { theme } = useThemeContext();
  const { tiny, small } = useResponsive();
  const { id } = useLocalSearchParams();
  const [currentImageIndex] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [readMore, setReadMore] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getProduct(id as string)
      .then((data: any) => {
        const content = data.bookberryContent || {};
        const display = content.display || {};
        const richContent = content.richContent || {};
        const media = content.media || {};
        const htmlContent = content.htmlContent || {};
        const inclusions = Array.isArray(richContent.features)
          ? richContent.features.filter((f: any) => f.type === 'INCLUSION')
          : ['NULL'];
        const mappedActivity: Activity = {
          id: typeof data.id === 'string' ? data.id : (parseInt(data.id) || 0),
          title: display.title ?? 'NULL',
          short_description: display.shortDescription ?? 'NULL',
          description: display.shortDescription ?? 'NULL',
          category: !richContent.categoryLabels || richContent.categoryLabels.length === 0
            ? 'NULL'
            : richContent.categoryLabels.join(', '),
          image: media.cover ?? 'NULL',
          features: richContent.features ?? ['NULL'],
          faqs: Array.isArray(richContent.faqs) && richContent.faqs.length > 0 ? richContent.faqs : [{ question: 'NULL', answer: 'NULL' }],
          importantInfo: htmlContent.importantInfo && htmlContent.importantInfo.trim() !== '' ? htmlContent.importantInfo : 'NULL',
          included: inclusions.length > 0 ? inclusions : ['NULL'],
          address: 'NULL',
          priceType: data.priceType ?? 'NULL',
          rating: data.rating ?? 'NULL',
          reviews:
            data.reviews && typeof data.reviews.count === 'number'
              ? data.reviews.count.toString()
              : 'NULL',
          tags: data.tags ?? 'NULL',
          opening_hours: data.opening_hours ?? 'NULL',
          duration: data.duration ?? 'NULL',
          location: data.location ?? 'NULL',
          price: data.price ?? 'NULL',
        };
        setActivity(mappedActivity);
        setLoading(false);
      })
      .catch(() => {
        setError('Activity Not Found');
        setLoading(false);
      });
  }, [id]);

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

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-gray-900">
        <MaterialIcons name="hourglass-empty" size={64} color="#f2024e" />
        <Text className="text-xl font-bold text-gray-900 dark:text-white mt-4">
          Loading...
        </Text>
      </View>
    );
  }

  if (error || !activity) {
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

      <ActivityFeatures features={Array.isArray(activity.features) ? activity.features : ['NULL']} theme={theme} />

      <ImportantInfoBanner theme={theme} importantInfo={activity.importantInfo} />

      <ActivityDescription
        activity={activity}
        theme={theme}
        readMore={readMore}
        onToggleReadMore={handleToggleReadMore}
      />

      <ActivityIncluded activity={activity} theme={theme} />

      <ActivityOperatingHours theme={theme} openingHours={activity.opening_hours} />

      <ActivityLocationMap activity={activity} theme={theme} />

      <ActivityReviews theme={theme} />

      <ActivityFAQ
        theme={theme}
        expandedFaq={expandedFaq}
        onToggleFaq={handleToggleFaq}
        faqs={Array.isArray(activity.faqs) ? activity.faqs : undefined}
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
            <Text className="text-xs font-medium text-gray-400 line-through">
              {activity.price && activity.price !== 'NULL' ? `Price Without Pass €${activity.price}` : 'Price Without Pass € NULL'}
            </Text>
            <View className="flex-row items-center gap-1.5 mt-0.5">
              <Text className="text-lg font-black text-[#f2024e] tracking-tight">
                {/*FREE WITH PASS*/}
                {activity.priceType && activity.priceType !== 'NULL' ? activity.priceType : 'NULL'}
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
