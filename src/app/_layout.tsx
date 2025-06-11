import { Stack } from 'expo-router';
import "../../global.css";


export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen name="recipes/[id]" options={{ headerShown: false }} />
      <Stack.Screen name="aboutme" options={{ headerShown: false }} />
      <Stack.Screen name="aboutapp" options={{ headerShown: false }} />
      
    </Stack>
  );
}
