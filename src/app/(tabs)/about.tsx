import { View, Text } from 'react-native';

export default function About() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Sobre o App</Text>
      <Text style={{ marginTop: 10 }}>
        Este aplicativo foi desenvolvido como parte de uma atividade avaliativa, utilizando Expo Router, API externa e React Native.
      </Text>
    </View>
  );
}
