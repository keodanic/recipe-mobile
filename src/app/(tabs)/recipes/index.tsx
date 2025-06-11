import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { ClockIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';

type Recipe = {
  id: number;
  name: string;
  image: string;
  prepTimeMinutes?: number;
  cookTimeMinutes?: number;
};

export default function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState('');
  const router = useRouter();
   

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/search?q=${search}`)
      .then(res => res.json())
      .then(data => setRecipes(data.recipes || []))
      .catch(err => console.error(err));
  }, [search]);

  return (
  <View className="flex-1 bg-[#FFF8F0]">
    
    <LinearGradient
      colors={['#8B5A2B', '#D4A59A']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="pt-12 pb-6 px-6 rounded-b-3xl shadow-sm"
    >
      <Text className="text-2xl font-bold text-white mb-1">Sabores Autênticos</Text>
      <Text className="text-white opacity-95">Descubra receitas que encantam</Text>
      
      
      <View className="mt-4 bg-white bg-opacity-90 rounded-full flex-row items-center px-4 py-2 shadow">
        <MagnifyingGlassIcon size={20} color="#8B5A2B" />
        <TextInput
          placeholder="Buscar receitas..."
          value={search}
          onChangeText={setSearch}
          placeholderTextColor="#D4A59A"
          className="ml-2 flex-1 text-[#4A3C30]"
        />
      </View>
    </LinearGradient>

    
    <FlatList
      data={recipes}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => router.push(`/recipes/${item.id}`)}
          className="bg-white rounded-2xl p-3 mb-4 shadow-sm flex-row items-center border border-[#F0E6DC]"
          activeOpacity={0.8}
        >
          <Image
            source={{ uri: item.image }}
            className="w-20 h-20 rounded-lg mr-4"
            resizeMode="cover"
          />
          <View className="flex-1">
            <Text className="text-lg font-semibold text-[#4A3C30] mb-1">{item.name}</Text>
            <View className="flex-row items-center mt-1">
              <ClockIcon size={16} color="#6B8E23" />
              <Text className="text-xs text-[#8B5A2B] ml-1">25 min</Text>
              <View className="bg-[#F3E9E0] rounded-full px-2 py-1 ml-3">
                <Text className="text-xs text-[#C06C84]">Fácil</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  </View>
);
}