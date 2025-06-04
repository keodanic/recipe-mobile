import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🍽️ AnyRecipe</Text>
      <Text style={styles.subtitle}>Suas receitas favoritas em um só lugar</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/recipes')}>
        <Text style={styles.buttonText}>Explorar Receitas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1B26',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFCC00',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FFCC00',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 4,
  },
  buttonText: {
    color: '#1E1B26',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
