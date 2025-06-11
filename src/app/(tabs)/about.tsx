import { View, Text, TouchableOpacity } from "react-native";
import { UserIcon, InformationCircleIcon } from "react-native-heroicons/solid";
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

export default function About() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#FFF8F0', '#F3E9E0']}
      className="flex-1 p-6 mt-8"
    >
      {/* Cabeçalho */}
      <View className="mb-8">
        <Text className="text-2xl font-bold text-[#8B5A2B] mb-2">
          Sobre o AnyRecipe
        </Text>
        <Text className="text-[#4A3C30]">
          Conheça mais sobre o aplicativo que está revolucionando sua experiência culinária
        </Text>
      </View>

      {/* Cards de navegação */}
      <View className="flex-1 justify-center space-y-6">
        <TouchableOpacity
          className="flex-row items-center bg-white p-5 rounded-xl shadow-sm border border-[#F0E6DC]"
          onPress={() => router.push("/aboutme")}
          activeOpacity={0.8}
        >
          <View className="bg-[#8B5A2B] p-3 rounded-full mr-4">
            <UserIcon size={24} color="#FFF8F0" />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-semibold text-[#4A3C30]">Sobre o Autor</Text>
            <Text className="text-[#8B5A2B] mt-1">Conheça quem criou este app</Text>
          </View>
          <Text className="text-[#D4A59A]">{'>'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center bg-white p-5 rounded-xl shadow-sm border border-[#F0E6DC]"
          onPress={() => router.push("/aboutapp")}
          activeOpacity={0.8}
        >
          <View className="bg-[#6B8E23] p-3 rounded-full mr-4">
            <InformationCircleIcon size={24} color="#FFF8F0" />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-semibold text-[#4A3C30]">Sobre o App</Text>
            <Text className="text-[#8B5A2B] mt-1">Descubra mais sobre o AnyRecipe</Text>
          </View>
          <Text className="text-[#D4A59A]">{'>'}</Text>
        </TouchableOpacity>
      </View>

     
    </LinearGradient>
  );
}