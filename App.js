import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FuelCalculator from './FuelCalculator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Üst başlıkları kaldırır
          tabBarStyle: {
            backgroundColor: '#f8fafc',
            borderTopColor: '#e2e8f0',
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
            color: '#1e293b',
          },
        }}
        
      >
        <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
        <Tab.Screen name="Yakıt Hesaplama" component={FuelCalculator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
