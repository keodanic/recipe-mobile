import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

type Recipe = {
  id: number;
  name: string;
  image?: string;
  ingredients?: string[];
  instructions?: string;
};

export default function RecipeDetail() {
  const { id } = useLocalSearchParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json())
      .then(setRecipe)
      .catch(err => console.error(err));
  }, [id]);

  if (!recipe) return <Text style={styles.loadingText}>Carregando...</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>

      {recipe.image && (
        <Image source={{ uri: recipe.image }} style={styles.image} />
      )}

      <Text style={styles.sectionTitle}>Ingredientes</Text>
      <View style={styles.listContainer}>
        {recipe.ingredients?.map((item, idx) => (
          <Text key={idx} style={styles.listItem}>• {item}</Text>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Instruções</Text>
      <Text style={styles.instructions}>{recipe.instructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1E1B26',
    flex:1
  },
  loadingText: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#FFCC00',
    backgroundColor: '#1E1B26',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFCC00',
    marginBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#2A2733',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFCC00',
    marginTop: 20,
    marginBottom: 10,
  },
  listContainer: {
    marginLeft: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 6,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
    marginTop: 4,
  },
});
