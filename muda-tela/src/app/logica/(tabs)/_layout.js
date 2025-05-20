import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5568FE',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{ title: 'Home' , tabBarIcon: (()=> <FontAwesome name="home"/>)}}
      />
      <Tabs.Screen
        name="config"
        options={{ title: 'Config', tabBarIcon: (()=> <FontAwesome name="gear"/>) }}
      />
    </Tabs>
  );
}
