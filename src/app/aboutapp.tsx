import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { InformationCircleIcon } from "react-native-heroicons/solid";

export default function AboutApp() {
  return (
    <LinearGradient
      colors={['#FFF8F0', '#F3E9E0']}
      className="flex-1 mt-8"
    >
      <ScrollView 
        className="p-6"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        
        <View className="flex-row items-center mb-6">
          <View className="bg-[#6B8E23] p-2 rounded-full mr-3">
            <InformationCircleIcon size={24} color="#FFF8F0" />
          </View>
          <Text className="text-2xl font-bold text-[#4A3C30]">
            Sobre o AnyRecipe
          </Text>
        </View>

    
        <View className="bg-white rounded-xl p-6 shadow-sm mb-4">
          <Text className="text-lg font-semibold text-[#8B5A2B] mb-3">
            Sobre o App
          </Text>
          <Text className="text-[#4A3C30] leading-6 mb-4">
            Desenvolvido como atividade avaliativa na matéria de Desenvolvimento Mobile
          </Text>
        </View>

        <View className="bg-white rounded-xl p-6 shadow-sm mb-4">
          <Text className="text-lg font-semibold text-[#8B5A2B] mb-3">
            Tecnologias Utilizadas
          </Text>
          <Text className="text-[#4A3C30] leading-6 mb-2">
            • React Native + TypeScript
            {"\n"}• Expo Router para navegação
            {"\n"}• Tailwind CSS (NativeWind) para estilização
            {"\n"}• DummyJSON API para dados simulados
          </Text>
        </View>

        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-lg font-semibold text-[#8B5A2B] mb-3">
            Versão e Atualizações
          </Text>
          <Text className="text-[#4A3C30] leading-6">
            Versão 2.0.0 {"\n"}
            Última atualização: Junho 2025
          </Text>
        </View>

      </ScrollView>
    </LinearGradient>
  );
}