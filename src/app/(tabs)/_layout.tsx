import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#F3C622' }}>
      <Tabs.Screen
        name="recipes/index"
        options={{
          title: 'Receitas',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}
          />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
