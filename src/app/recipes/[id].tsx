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

      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      {recipe.ingredients?.map((item, idx) => (
        <Text key={idx} style={styles.listItem}>• {item}</Text>
      ))}

      <Text style={styles.sectionTitle}>Instruções:</Text>
      <Text style={styles.instructions}>{recipe.instructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  loadingText: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 16,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 4,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },
});
