import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';

export default function WelcomeScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <LinearGradient
      colors={['#FFF8F0', '#F3E9E0']}
      className="flex-1 items-center justify-center p-8"
    >
      
      <View className="bg-[#8B5A2B] p-6 rounded-full mb-6 shadow-md">
        <Image
          source={require('../../assets/images/chef-icon.png')} 
          className="w-24 h-24"
          tintColor="#FFF8F0"
        />
      </View>

      
      <Text className="text-4xl font-bold text-[#4A3C30] mb-2">
        AnyRecipe
      </Text>

      <Text className="text-xl text-[#8B5A2B] text-center mb-12 max-w-[280px]">
        Onde cada ingrediente conta uma história
      </Text>

      <Animated.View style={{ opacity: fadeAnim }}>
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/recipes')}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#8B5A2B', '#C06C84']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="py-4 px-12 rounded-full shadow-lg"
          >
            <Text className="text-lg font-bold text-white">Explorar Receitas</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>

      <Text className="absolute bottom-8 text-[#D4A59A]">
        Comece sua jornada culinária
      </Text>
    </LinearGradient>
  );
}