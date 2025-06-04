import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

type Recipe = {
  id: number;
  name: string;
  image: string;
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
    <View style={styles.container}>
      <Text style={styles.title}>Explore Receitas</Text>
      <TextInput
        placeholder="Buscar receitas..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
        placeholderTextColor="#FFCC00"
      />
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/recipes/${item.id}`)}
            style={styles.recipeCard}
          >
            <Image source={{ uri: item.image }} style={styles.recipeImage} />
            <View style={styles.recipeInfo}>
              <Text style={styles.recipeName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1E1B26',
  },
  title: {
    fontSize: 22,
    color: '#FFCC00',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  searchInput: {
    borderWidth: 2,
    borderColor: '#FFCC00',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#2A2733',
    color: '#FFCC00',
    marginBottom: 16,
  },
  recipeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2733',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#FFCC00',
    elevation: 4,
  },
  recipeImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 12,
    resizeMode: 'cover',
  },
  recipeInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  recipeName: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
