import { View, Text, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { UserIcon } from 'react-native-heroicons/solid';

export default function AboutMe() {
  return (
    <LinearGradient
      colors={['#FFF8F0', '#F3E9E0']}
      className="flex-1"
    >
      <ScrollView 
        className="p-6"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        
        <View className="flex-row items-center mb-6">
          <View className="bg-[#6B8E23] p-2 rounded-full mr-3">
            <UserIcon size={24} color="#FFF8F0" />
          </View>
          <Text className="text-2xl font-bold text-[#4A3C30]">
            Sobre o Desenvolvedor
          </Text>
        </View>

       
        <View className="bg-white rounded-xl p-6 shadow-sm mb-4 items-center">
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/146472220?v=4' }}
            className="w-28 h-28 rounded-full mb-4 bg-[#2A2733]"
          />
          <Text className="text-[#8B5A2B] text-xl font-bold">
            Victor Daniel Santos Cardoso
          </Text>
          <Text className="text-[#4A3C30] text-sm mt-1">
            Desenvolvedor Full Stack
          </Text>
        </View>

        
        <View className="bg-white rounded-xl p-6 shadow-sm mb-4">
          <Text className="text-lg font-semibold text-[#8B5A2B] mb-3">
            Biografia
          </Text>
          <Text className="text-[#4A3C30] leading-6">
            Olá! Sou Victor, estudante de Sistemas para Internet no IFMA, apaixonado por tecnologia e
            desenvolvimento de software. Tenho experiência com React Native, NestJS, Prisma e
            PostgreSQL.
          </Text>
        </View>

        
        <View className="bg-white rounded-xl p-6 shadow-sm">
          <Text className="text-lg font-semibold text-[#8B5A2B] mb-3">
            Agradecimento
          </Text>
          <Text className="text-[#4A3C30] leading-6">
            Obrigado por usar o AnyRecipe!{"\n"}
            Sinta-se à vontade para explorar, aprender e se inspirar com as receitas disponíveis.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
