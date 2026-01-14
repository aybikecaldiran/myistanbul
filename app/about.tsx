import React from 'react';
import { ScrollView, View, Text, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '@/components/NavBar';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function AboutScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavBar title="About" showNotification={true} showMenu={true} onMenuPress={() => {}} titleAnimated={false} />
      <ScrollView contentContainerStyle={{ padding: 0, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../assets/images/about-banner.png')}
          style={{ width: SCREEN_WIDTH, height: 250, resizeMode: 'contain', marginBottom: 8, marginTop: 0, alignSelf: 'center' }}
        />
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#1c0c11', marginBottom: 18 }}>
            About Us
          </Text>
          <Text style={{ fontSize: 16, color: '#444', marginBottom: 18, lineHeight: 24 }}>
Istanbul Tourist Pass is not just a travel agency – we are a team of passionate digital-native entrepreneurs, united by a love for exploring the world and making travel easier, more enjoyable, and hassle-free. Our mission is simple: to revolutionize the way you experience travel by providing a seamless, enjoyable, and stress-free journey, no matter where you’re going. At Tourist Pass, we believe that travel should be about discovering new places, making memories, and enjoying every moment, not about dealing with complicated logistics or wasting time on tedious planning.
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1c0c11', marginBottom: 10 }}>
            Introducing Istanbul Tourist Pass: Your Ultimate Travel Companion
          </Text>
          <Text style={{ fontSize: 16, color: '#444', marginBottom: 18, lineHeight: 24 }}>
With Istanbul Tourist Pass, we’ve redefined sightseeing in Istanbul. We know how overwhelming it can be to plan a trip to a city as vibrant and diverse as Istanbul. That’s why we’ve curated everything you need in one convenient Tourist Pass, so you can focus on the exciting parts of your journey.
          </Text>
          <Text style={{ fontSize: 16, color: '#444', marginBottom: 18, lineHeight: 24 }}>
When you choose the Istanbul Tourist Pass, you’re not just buying a ticket – you’re gaining access to an expertly designed itinerary that brings the very best of Istanbul to your fingertips. From the moment you arrive, we ensure that your experience is seamless and stress-free. No more wasting hours researching what to do or standing in long lines to buy tickets – with Istanbul Tourist Pass, everything is taken care of.
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1c0c11', marginBottom: 10 }}>
            What Makes Istanbul Tourist Pass Special?
          </Text>
          <Text style={{ fontSize: 16, color: '#444', marginBottom: 10, lineHeight: 24 }}>
1. Skip the Hassle, Enjoy the Best{"\n"}
The Istanbul Tourist Pass gives you fast-track entry to the city's top attractions, including iconic landmarks like Dolmabahce Palace, Topkapi Palace, Basilica Cistern and the Bosphorus Dinner Cruise. Forget waiting in long queues – we make sure you spend more time exploring and less time waiting.
          </Text>
          <Text style={{ fontSize: 16, color: '#444', marginBottom: 10, lineHeight: 24 }}>
2. More Than Just a Pass{"\n"}
We don’t just provide access to attractions – we offer a complete, all-in-one solution for your trip. Along with free entry to over 100+ attractions, your Istanbul Tourist Pass includes complimentary internet access and discounted transportation during your stay, so you’re always connected and mobile. Explore the city with ease, while staying in touch with family and friends.
          </Text>
          <Text style={{ fontSize: 16, color: '#444', marginBottom: 10, lineHeight: 24 }}>
3. Personalized Assistance Every Step of the Way.{"\n"}
Our team of experts is dedicated to ensuring your trip goes smoothly. From the moment you purchase your pass to your final day in Istanbul, we’re here to help. Whether you need recommendations, directions, or assistance with bookings, we’re just a message away.
          </Text>
          <Text style={{ fontSize: 16, color: '#444', marginBottom: 10, lineHeight: 24 }}>
4. Virtual Tourist Guide{"\n"}
We believe that travel is about more than just visiting places – it’s about learning and experiencing the culture in a meaningful way. That’s why we’ve included a Virtual Tourist Guide in your Istanbul Tourist Pass. Packed with insider tips, historical facts, and expert suggestions, it’s your personal guide to navigating Istanbul like a local.
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1c0c11', marginBottom: 10 }}>
            Our Vision
          </Text>
          <Text style={{ fontSize: 16, color: '#444', marginBottom: 18, lineHeight: 24 }}>
At Tourist Pass, we are driven by a single, straightforward goal: to make your travel experience effortless, enjoyable, and unforgettable. We understand how overwhelming trip planning can be, especially when visiting a city as rich in culture and history as Istanbul. That's why we've designed the Istanbul Tourist Pass to be your trusted companion, simplifying your journey and allowing you to immerse yourself in the magic of Istanbul without any stress.
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1c0c11', marginBottom: 10 }}>
            What's Included in the Istanbul Tourist Pass?
          </Text>
          <Text style={{ fontSize: 16, color: '#444', marginBottom: 18, lineHeight: 24 }}>
- Free Entry to 100 + Top Attractions{"\n"}
- Skip-the-Line Access{ "\n"}
- Complimentary 5 GB FREE Wi-Fi & Discounted Transportation Card{ "\n"}
- Guided Tours & Experiences{ "\n"}
- Virtual Tourist Guide{ "\n"}
- Exclusive Discounts at Local Restaurants and Shops{ "\n"}
- And much more!
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1c0c11', marginBottom: 10 }}>
            Join Us on Your Next Adventure
          </Text>
          <Text style={{ fontSize: 16, color: '#444', marginBottom: 18, lineHeight: 24 }}>
The Istanbul Tourist Pass is your gateway to a seamless, unforgettable travel experience in Istanbul. Say goodbye to the complexities of travel planning and embrace the future of tourism – where everything you need is right at your fingertips. Whether you're here for a few days or a longer stay, the Istanbul Tourist Pass is designed to make your time in this incredible city as enjoyable, flexible, and cost-effective as possible.
          </Text>
          <Text style={{ fontSize: 16, color: '#444', marginBottom: 18, lineHeight: 24 }}>
So why wait? Purchase your Istanbul Tourist Pass today and embark on an adventure you’ll never forget. Welcome to the future of travel – Welcome to Istanbul Tourist Pass
          </Text>
          <Text style={{ fontSize: 14, color: '#6b7280', marginBottom: 8, textAlign: 'center' }}>
APP VERSION 1.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
