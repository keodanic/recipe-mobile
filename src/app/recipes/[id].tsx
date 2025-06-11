import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ArrowLeftIcon, HeartIcon, ClockIcon } from 'react-native-heroicons/solid';
import { Square3Stack3DIcon } from 'react-native-heroicons/outline';

type Recipe = {
  id: number;
  name: string;
  image?: string;
  ingredients?: string[];
  instructions?: string;
  prepTimeMinutes?: number;
  cookTimeMinutes?: number;
  servings?: number;
};

export default function RecipeDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json())
      .then(setRecipe)
      .catch(err => console.error(err));
  }, [id]);

  if (!recipe) {
    return (
      <View className="flex-1 items-center justify-center bg-[#FFF8F0]">
        <Text className="text-lg text-[#8B5A2B]">Carregando receita...</Text>
      </View>
    );
  }

  
  const totalTime = (recipe.prepTimeMinutes || 0) + (recipe.cookTimeMinutes || 0);
  const servings = recipe.servings

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-[#FFF8F0]"
      showsVerticalScrollIndicator={false}
    >
      
      <View className="relative">
        <Image
          source={{ uri: recipe.image || 'https://via.placeholder.com/400' }}
          className="w-full h-64"
          resizeMode="cover"
        />
        
        <TouchableOpacity 
          className="absolute top-12 left-4 bg-white p-2 rounded-full shadow-md"
          onPress={() => router.back()}
        >
          <ArrowLeftIcon size={24} color="#8B5A2B" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="absolute top-12 right-4 bg-white p-2 rounded-full shadow-md"
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <HeartIcon size={24} color={isFavorite ? "#C06C84" : "#D4A59A"} fill={isFavorite ? "#C06C84" : "none"} />
        </TouchableOpacity>
      </View>

      
      <View className="px-6 pt-6 pb-10">
        <Text className="text-3xl font-bold text-[#4A3C30] mb-3">
          {recipe.name}
        </Text>
        
        
        <View className="flex-row justify-between mb-6">
          <View className="flex-row items-center">
            <ClockIcon size={20} color="#6B8E23" />
            <Text className="ml-2 text-[#8B5A2B]">
              {totalTime} min
            </Text>
          </View>
          
          <View className="flex-row items-center">
            <Square3Stack3DIcon size={20} color="#6B8E23" />
            <Text className="ml-2 text-[#8B5A2B]">{servings} porções</Text>
          </View>
        </View>

        
        <View className="mb-8">
          <Text className="text-xl font-bold text-[#6B8E23] mb-3 border-b border-[#F0E6DC] pb-2">
            Ingredientes
          </Text>
          <View className="bg-white rounded-lg p-4 shadow-sm">
            {recipe.ingredients?.map((item, idx) => (
              <View key={idx} className="flex-row items-start mb-2">
                <View className="bg-[#6B8E23] w-1.5 h-1.5 rounded-full mt-2 mr-2" />
                <Text className="text-base text-[#4A3C30] flex-1">{item}</Text>
              </View>
            ))}
          </View>
        </View>

       
        <View>
          <Text className="text-xl font-bold text-[#6B8E23] mb-3 border-b border-[#F0E6DC] pb-2">
            Modo de Preparo
          </Text>
          <View className="bg-white rounded-lg p-4 shadow-sm">
            <Text className="text-base text-[#4A3C30] leading-6 whitespace-pre-line">
              {recipe.instructions || 'Instruções não disponíveis.'}
            </Text>
          </View>
        </View>

        
        <TouchableOpacity 
          className="mt-8 bg-[#8B5A2B] py-3 rounded-full shadow-md items-center"
          activeOpacity={0.8}
        >
          <Text className="text-lg font-bold text-white">Marcar como Feito</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}