import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#F3C622' }}>
      <Tabs.Screen
        name="recipes/index"
        options={{
          headerShown: false,
          title: 'Receitas',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}
          />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerShown: false,
          title: 'Sobre',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="info" color={color} />,
        }}
      />
    </Tabs>
  );
}
