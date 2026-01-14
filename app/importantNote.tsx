import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '@/components/NavBar';
import {MaterialIcons} from "@expo/vector-icons";

export default function ImportantNoteScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <NavBar title="Important Note" showNotification={true} showMenu={true} onMenuPress={() => {}} titleAnimated={false} />
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="px-4 py-6">

                <Text className="text-base text-gray-700 mb-4">
                    We want you to have the best experience with your Istanbul Tourist Pass!
                    To make sure everything goes smoothly, here are a few important things to keep in mind:
                </Text>

                <View className="space-y-3">
                    <View className="flex-row items-start pb-2">
                        <View className="w-6 h-6 rounded-full bg-green-500/80 items-center justify-center mr-3 shadow-sm">
                            <MaterialIcons name={"check"} size={16} color="white" />
                        </View>
                        <Text className="flex-1 text-gray-700">
                            Please make sure you have a stable internet connection on your smartphone to access and display your mobile e-ticket QR codes.
                        </Text>
                    </View>

                    <View className="flex-row items-start pb-2">
                        <View className="w-6 h-6 rounded-full bg-green-500/80 items-center justify-center mr-3 shadow-sm">
                            <MaterialIcons name={"check"} size={16} color="white" />
                        </View>
                        <Text className="flex-1 text-gray-700">
                            To enter an attraction, tap the “Show e-ticket QR code” button for that attraction. The system will warn you that this action cannot be undone. Once confirmed, the QR code will be displayed on your screen. Remember: E-ticket QR codes can only be generated when you are in proximity to the attraction to prevent accidental activation.
                        </Text>
                    </View>

                    <View className="flex-row items-start pb-2">
                        <View className="w-6 h-6 rounded-full bg-green-500/80 items-center justify-center mr-3 shadow-sm">
                            <MaterialIcons name={"check"} size={16} color="white" />
                        </View>
                        <Text className="flex-1 text-gray-700">All guided tours are in English.</Text>
                    </View>

                    <View className="flex-row items-start pb-2">
                        <View className="w-6 h-6 rounded-full bg-green-500/80 items-center justify-center mr-3 shadow-sm">
                            <MaterialIcons name={"check"} size={16} color="white" />
                        </View>
                        <Text className="flex-1 text-gray-700">Topkapi Palace can only be visited on a guided tour.</Text>
                    </View>

                    <View className="flex-row items-start pb-2">
                        <View className="w-6 h-6 rounded-full bg-green-500/80 items-center justify-center mr-3 shadow-sm">
                            <MaterialIcons name={"check"} size={16} color="white" />
                        </View>
                        <Text className="flex-1 text-gray-700">
                            If you're joining a guided museum tour, please arrive at the meeting point at least 15 minutes before the tour starts. Unfortunately, guests who arrive more than 5 minutes late won’t be able to enter. We don’t want you to miss out, so plan ahead!
                        </Text>
                    </View>

                    <View className="flex-row items-start pb-2">
                        <View className="w-6 h-6 rounded-full bg-green-500/80 items-center justify-center mr-3 shadow-sm">
                            <MaterialIcons name={"check"} size={16} color="white" />
                        </View>
                        <Text className="flex-1 text-gray-700">Security checks are mandatory at museum entrances, so be prepared for a quick screening.</Text>
                    </View>

                    <View className="flex-row items-start pb-2">
                        <View className="w-6 h-6 rounded-full bg-green-500/80 items-center justify-center mr-3 shadow-sm">
                            <MaterialIcons name={"check"} size={16} color="white" />
                        </View>
                        <Text className="flex-1 text-gray-700">
                            Traveling with kids? Don’t forget that children must show a valid passport at museum entrances to confirm their age.
                        </Text>
                    </View>

                    <View className="flex-row items-start pb-2">
                        <View className="w-6 h-6 rounded-full bg-green-500/80 items-center justify-center mr-3 shadow-sm">
                            <MaterialIcons name={"check"} size={16} color="white" />
                        </View>
                        <Text className="flex-1 text-gray-700">
                            Some of our 100+ experiences are enhanced with specially curated audio guides. Check the attraction details and don’t forget to listen while you explore!
                        </Text>
                    </View>
                </View>

                <View className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <Text className="text-base font-medium text-gray-900 mb-2">Have a question or need help?</Text>
                    <Text className="text-sm text-gray-700">
                        You can message us anytime on WhatsApp or email us. We’re here for you. Most importantly—enjoy your time in Istanbul!
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
