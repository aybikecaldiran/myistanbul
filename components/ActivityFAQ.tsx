import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ActivityFAQProps {
  theme: string;
  expandedFaq: number | null;
  onToggleFaq: (index: number) => void;
}

export default function ActivityFAQ({ theme, expandedFaq, onToggleFaq }: ActivityFAQProps) {
  const faqItems = [
    {
      question: 'How do I access this attraction?',
      answer: 'Simply show your Istanbul Tourist Pass at the entrance. No additional tickets needed!'
    },
    {
      question: 'What should I bring?',
      answer: 'Please bring comfortable shoes, a camera, and your Istanbul Tourist Pass. Check the weather for appropriate clothing.'
    },
    {
      question: 'Is this suitable for children?',
      answer: 'Yes, this attraction is family-friendly and suitable for children of all ages.'
    }
  ];

  return (
    <View className="mb-32">
      <Text className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>
        Frequently Asked Questions
      </Text>
      <View className="gap-3">
        {faqItems.map((item, index) => (
          <View key={index} className={`rounded-2xl shadow-sm ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-white'
          }`}>
            <TouchableOpacity
              className="flex-row items-center justify-between p-5"
              onPress={() => onToggleFaq(index)}
            >
              <Text className={`font-bold flex-1 ${theme === 'dark' ? 'text-white' : 'text-[#1c0c11]'}`}>
                {item.question}
              </Text>
              <MaterialIcons
                name={expandedFaq === index ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                size={24}
                color={theme === 'dark' ? '#ffffff' : '#1c0c11'}
              />
            </TouchableOpacity>
            {expandedFaq === index && (
              <View className="px-5 pb-5">
                <Text className="text-sm text-gray-600 dark:text-gray-300">
                  {item.answer}
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}
