import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Linking, Modal} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '@/components/NavBar';
import {MaterialIcons} from "@expo/vector-icons";
import {WebView} from "react-native-webview";

export default function ContactUsScreen() {
    const [chatModalVisible, setChatModalVisible] = useState(false);


    const handleSupportAction = (type: 'call' | 'whatsapp' | 'chat') => {
        switch (type) {
            case 'call':
                console.log('Call support');
                Linking.openURL('tel:908503048726');
                break;
            case 'whatsapp':
                console.log('WhatsApp support');
                Linking.openURL('whatsapp://send?phone=905303852026');
                break;
            case 'chat':
                console.log('Chat support');
                setChatModalVisible(true);
                break;
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <NavBar title="Contact Us" showNotification={true} showMenu={true} onMenuPress={() => {}} titleAnimated={false} />
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="px-4">
                {/* Call Option */}
                <TouchableOpacity
                    className="flex-row items-center py-4 border-b border-gray-100 dark:border-gray-700"
                    onPress={() => handleSupportAction('call')}
                    activeOpacity={0.7}
                >
                    <View className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-full items-center justify-center mr-4">
                        <MaterialIcons name="phone" size={20} color="#10B981" />
                    </View>
                    <View className="flex-1">
                        <Text className="text-gray-900 dark:text-white font-semibold text-base">Call</Text>
                        <Text className="text-gray-500 dark:text-gray-400 text-sm">Get immediate help</Text>
                    </View>
                </TouchableOpacity>

                {/* WhatsApp Option */}
                <TouchableOpacity
                    className="flex-row items-center py-4 border-b border-gray-100 dark:border-gray-700"
                    onPress={() => handleSupportAction('whatsapp')}
                    activeOpacity={0.7}
                >
                    <View className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-full items-center justify-center mr-4">
                        <MaterialIcons name="message" size={20} color="#25D366" />
                    </View>
                    <View className="flex-1">
                        <Text className="text-gray-900 dark:text-white font-semibold text-base">WhatsApp</Text>
                        <Text className="text-gray-500 dark:text-gray-400 text-sm">Message us instantly</Text>
                    </View>
                </TouchableOpacity>

                {/* Chat Option */}
                <TouchableOpacity
                    className="flex-row items-center py-4"
                    onPress={() => handleSupportAction('chat')}
                    activeOpacity={0.7}
                >
                    <View className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full items-center justify-center mr-4">
                        <MaterialIcons name="chat-bubble" size={20} color="#3B82F6" />
                    </View>
                    <View className="flex-1">
                        <Text className="text-gray-900 dark:text-white font-semibold text-base">Chat with us</Text>
                        <Text className="text-gray-500 dark:text-gray-400 text-sm">Live chat support</Text>
                    </View>
                </TouchableOpacity>

                {/* Live Chat Modal */}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={chatModalVisible}
                    onRequestClose={() => setChatModalVisible(false)}
                >
                    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
                        <View className="pt-20 flex-row items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                            <Text className="text-lg font-bold text-gray-900 dark:text-white">
                                Live Chat Support
                            </Text>
                            <TouchableOpacity
                                onPress={() => setChatModalVisible(false)}
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700"
                            >
                                <MaterialIcons name="close" size={24} color="#6B7280" />
                            </TouchableOpacity>
                        </View>
                        <WebView
                            source={{
                                html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Live Chat Support</title>
                    <style>
                        body {
                            margin: 0;
                            padding: 0;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                            background-color: #f8fafc;
                            height: 100vh;
                        }
                        .loading {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 100vh;
                            flex-direction: column;
                            background-color: #f8fafc;
                        }
                        .spinner {
                            border: 4px solid #e5e7eb;
                            border-top: 4px solid #F0034E;
                            border-radius: 50%;
                            width: 40px;
                            height: 40px;
                            animation: spin 1s linear infinite;
                            margin-bottom: 16px;
                        }
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                        .loading-text {
                            color: #6b7280;
                            font-size: 16px;
                            font-weight: 500;
                        }
                    </style>
                </head>
                <body>
                    <div class="loading" id="loading">
                        <div class="spinner"></div>
                        <p class="loading-text">Loading Live Chat...</p>
                    </div>

                    <script src="https://cdn.pulse.is/livechat/loader.js" data-live-chat-id="6811ec48885c8c5c4e04ee38" async></script>

                    <script>
                        window.addEventListener('load', function() {
                            setTimeout(function() {
                                const loading = document.getElementById('loading');
                                if (loading) {
                                    loading.style.display = 'none';
                                }
                            }, 3000);
                        });

                        const checkChatWidget = setInterval(function() {
                            if (window.PulseChat || document.querySelector('[data-pulse-chat]')) {
                                const loading = document.getElementById('loading');
                                if (loading) {
                                    loading.style.display = 'none';
                                }
                                clearInterval(checkChatWidget);
                            }
                        }, 1000);
                    </script>
                </body>
                </html>
                `
                            }}
                            style={{ flex: 1 }}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            startInLoadingState={true}
                            allowsInlineMediaPlayback={true}
                            mixedContentMode="compatibility"
                            originWhitelist={['*']}
                            allowsFullscreenVideo={true}
                            onLoadEnd={() => console.log('Chat widget loaded')}
                            onError={(error: any) => console.log('WebView Error:', error)}
                        />
                    </SafeAreaView>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
}
