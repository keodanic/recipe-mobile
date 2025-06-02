import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

type Recipe = {
  id: number;
  name: string;
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
      <TextInput
        placeholder="Buscar receitas..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/recipes/${item.id}`)}
            style={styles.recipeItem}
          >
            <Text style={styles.recipeName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 6,
  },
  recipeItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  recipeName: {
    fontSize: 18,
  },
});
