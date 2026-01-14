import React, { useState, useEffect } from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import {useResponsive} from "@/hooks/useResponsive";
import {useThemeContext} from "@/components/ThemeContext";
import { categories, activityTypes, activities, type Activity } from '@/data/mockData';
import { useProductsStore } from '@/app/store';
import NavBar from '@/components/NavBar';
import TrendingCard from '@/components/TrendingCard';
import ActivityListItem from '@/components/ActivityListItem';
import CategoryFilter from '@/components/CategoryFilter';
import SearchBar from '@/components/SearchBar';
import FilterModal from '@/components/FilterModal';
import {HamburgerMenu} from '@/components/HamburgerMenu';

const FEATURE_ICONS: { [key: string]: string } = {
    'Fast Track': 'directions-run',
    'Audio Guide': 'headphones',
    'Mobile Ticket': 'confirmation-number',
    'Flexible': 'schedule',
    'Entry Ticket': 'confirmation-number',
    'Best View': 'photo-camera',
    'Elevator': 'elevator',
    'Reserved Seating': 'event-seat',
    'Traditional Performance': 'theater-comedy',
    'Cultural Experience': 'palette',
    'Photo Opportunity': 'photo-camera',
    'Live Show': 'theater-comedy',
    'Historic Venue': 'account-balance'
};

const getCategoriesFromMockData = () => {
    const baseCategories = [
        { id: 'all', name: 'All', icon: 'grid-on' }
    ];

    const categoryMapping: { [key: string]: { id: string, icon: string } } = {
        'Museums': { id: 'museums', icon: 'account-balance' },
        'Mosques & Places of Worship': { id: 'mosques', icon: 'place' },
        'Historical Landmarks': { id: 'historical', icon: 'location-city' },
        'Towers & Observation Decks': { id: 'towers', icon: 'location-city' },
        'Sightseeing & Bosphorus Cruise': { id: 'cruises', icon: 'directions-boat' },
        'Shows & Entertainment': { id: 'entertainment', icon: 'theater-comedy' },
        'Experiences': { id: 'experiences', icon: 'star' },
        'Family Friendly': { id: 'family', icon: 'family-restroom' }
    };

    const mockDataCategories = categories
        .filter(cat => categoryMapping[cat.categoryName])
        .map(cat => ({
            id: categoryMapping[cat.categoryName].id,
            name: cat.categoryName,
            icon: categoryMapping[cat.categoryName].icon
        }));

    return [...baseCategories, ...mockDataCategories];
};

const CATEGORIES = getCategoriesFromMockData();

const adaptProductToActivity = (product: any): Activity => ({
    id: product.id,
    title: product.internalName || 'NULL',
    category: (product.bookberryContent?.richContent?.categoryLabels !== null &&
        product.bookberryContent?.richContent?.categoryLabels !== undefined)
        ? product.bookberryContent.richContent.categoryLabels
        : 'NULL',
    image: product.bookberryContent?.media?.cover || 'NULL',
    rating: product.bookberryContent?.reviews?.rating || 'NULL',
    reviews: product.bookberryContent?.reviews?.count !== undefined ? `${product.bookberryContent.reviews.count}` : 'NULL',
    tags: product.tags || ['NULL'],
    features: product.bookberryContent?.richContent?.features || ['NULL'],
    status: product.instantConfirmation ? 'AVAILABLE' : 'PENDING',
    price: 25,
    priceType: product.priceType || 'NULL',
    operatingHours: product.bookberryContent?.duration?.serviceHours || 'NULL',
    faqs: product.bookberryContent?.richContent?.faqs || 'NULL',
    address: product.bookberryContent?.location?.address || 'NULL',
    importantInfo: product.bookberryContent?.htmlContent?.importantInfo || 'NULL',
    included: product.bookberryContent?.htmlContent?.inclusions || 'NULL',
    excluded: product.bookberryContent?.htmlContent?.exclusions || 'NULL'
});

export default function OffersScreen() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchText, setSearchText] = useState('');
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState<string[]>(['All']);
    const [menuVisible, setMenuVisible] = useState(false);
    const { large, medium } = useResponsive();
    const { theme } = useThemeContext();

    const { products, loading, error, fetchProducts } = useProductsStore();

    const safeProducts = products || [];

    useEffect(() => {
        fetchProducts();
    }, []);

    // Filter
    const getFilterOptionsFromActivityTypes = () => {
        const allOption = ['All'];
        const typeOptions = activityTypes
            .sort((a, b) => a.sort - b.sort)
            .map(type => type.name);

        return [...allOption, ...typeOptions];
    };

    const FILTER_OPTIONS = getFilterOptionsFromActivityTypes();

    const activitiesData = safeProducts.length > 0
        ? safeProducts.map(product => adaptProductToActivity(product))
        : [];

    const filteredActivities = activitiesData.filter(activity => {
        const matchesCategory = selectedCategory === 'all' ||
            activity.category?.toLowerCase() === selectedCategory;

        const matchesSearch = searchText === '' ||
            activity.title?.toLowerCase().includes(searchText.toLowerCase()) ||
            activity.tags?.some((tag: string) => tag.toLowerCase().includes(searchText.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

    const toggleFilter = (filter: string) => {
        if (filter === 'All') {
            setSelectedFilters(['All']);
        } else {
            const newFilters = selectedFilters.includes(filter)
                ? selectedFilters.filter(f => f !== filter && f !== 'All')
                : [...selectedFilters.filter(f => f !== 'All'), filter];

            setSelectedFilters(newFilters.length === 0 ? ['All'] : newFilters);
        }
    };

    const resetFilters = () => {
        setSelectedFilters(['All']);
        setFilterModalVisible(false);
    };

    const applyFilters = () => {
        setFilterModalVisible(false);
    };

    return (
        <SafeAreaView className={`flex-1 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"}`} style={{
            backgroundColor: theme === "dark" ? "#111827" : "#f9fafb"
        }}>
            <NavBar
                title="Offers"
                subtitle="All Offers"
                subtitleColor="#A04662"
                showIcon={false}
                showNotification={true}
                showMenu={true}
                onNotificationPress={() => console.log('Notification pressed')}
                onMenuPress={() => setMenuVisible(true)}
                className=""
            />

            <View
                className="px-4 pb-4"
                style={{
                    backgroundColor: theme === "dark" ? "rgba(17,24,39,0.95)" : "rgba(249,250,251,0.95)"
                }}
            >
                <SearchBar
                    searchText={searchText}
                    onSearchChange={setSearchText}
                    onFilterPress={() => setFilterModalVisible(true)}
                    theme={theme}
                />

                <CategoryFilter
                    categories={CATEGORIES}
                    selectedCategory={selectedCategory}
                    // onCategorySelect={setSelectedCategory}
                    theme={theme}
                />
            </View>

            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                style={{
                    backgroundColor: theme === "dark" ? "#111827" : "#f9fafb"
                }}
            >
                <View className="gap-8 py-4 pb-8">
                    {/*<View className="gap-4">*/}
                        {/*<View className="flex-row items-end justify-between px-4">*/}
                        {/*    <Text className={`text-xl font-bold leading-6 ${theme === "dark" ? "text-white" : "text-[#1C0C11]"}`}>Trending Now</Text>*/}
                        {/*    <TouchableOpacity>*/}
                        {/*        <Text className="text-sm font-semibold text-[#f2024e]">See All</Text>*/}
                        {/*    </TouchableOpacity>*/}
                        {/*</View>*/}

                        {/*<ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4 pb-4">*/}
                        {/*    <View className="flex-row">*/}
                        {/*        {activities.map((activity) => (*/}
                        {/*            <TrendingCard key={activity.id} activity={activity} theme={theme} />*/}
                        {/*        ))}*/}
                        {/*    </View>*/}
                        {/*</ScrollView>*/}
                    {/*</View>*/}

                    <View className="gap-4 pb-20">
                        <Text className={`text-xl font-bold leading-6 px-4 ${theme === "dark" ? "text-white" : "text-[#1C0C11]"}`}>All Offers</Text>

                        {loading ? (
                            <View className="px-4 py-8 items-center">
                                <Text className="text-gray-500 dark:text-gray-400 text-center text-base">
                                    Loading offers...
                                </Text>
                            </View>
                        ) : error ? (
                            <View className="px-4 py-8 items-center">
                                <Text className="text-red-500 text-center text-base mb-2">
                                    {error}
                                </Text>
                                <Text className="text-gray-500 text-center text-sm mb-4">
                                    ERROR
                                </Text>
                                <TouchableOpacity onPress={fetchProducts} className="mt-2">
                                    <Text className="text-[#f2024e] font-semibold">Try Again</Text>
                                </TouchableOpacity>
                            </View>
                        ) : filteredActivities.length > 0 ? (
                            filteredActivities.map((activity) => (
                                <ActivityListItem key={activity.id} activity={activity} theme={theme} FEATURE_ICONS={FEATURE_ICONS} />
                            ))
                        ) : (
                            <View className="px-4 py-8 items-center">
                                <Text className="text-gray-500 dark:text-gray-400 text-center text-base">
                                    No offers found. Try adjusting your search or filters.
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>

            <FilterModal
                visible={filterModalVisible}
                onClose={() => setFilterModalVisible(false)}
                filterOptions={FILTER_OPTIONS}
                selectedFilters={selectedFilters}
                onToggleFilter={toggleFilter}
                onReset={resetFilters}
                onApply={applyFilters}
                theme={theme}
            />
            <HamburgerMenu
                visible={menuVisible}
                onClose={() => setMenuVisible(false)}
            />
        </SafeAreaView>
    );
}
