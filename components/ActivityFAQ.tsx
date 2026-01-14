import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface ActivityFAQProps {
  theme: string;
  faqs?: { question: string; answer: string }[];
}

export default function ActivityFAQ({ theme, faqs }: ActivityFAQProps) {
  const faqItems = Array.isArray(faqs) && faqs.length > 0 ? faqs : [{ question: 'NULL', answer: 'NULL' }];
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleToggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
              onPress={() => handleToggleFaq(index)}
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
