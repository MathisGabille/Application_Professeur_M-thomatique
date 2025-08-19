import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import des écrans du parent
import ParentDashboardScreen from '../screens/parent/ParentDashboardScreen';
import ParentProgressScreen from '../screens/parent/ParentProgressScreen';
import ParentBillingScreen from '../screens/parent/ParentBillingScreen';

const Tab = createBottomTabNavigator();

const ParentNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Progrès') {
            iconName = focused ? 'trending-up' : 'trending-up-outline';
          } else if (route.name === 'Facturation') {
            iconName = focused ? 'card' : 'card-outline';
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4facfe',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#4facfe',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={ParentDashboardScreen}
        options={{ title: 'Tableau de bord' }}
      />
      <Tab.Screen 
        name="Progrès" 
        component={ParentProgressScreen}
        options={{ title: 'Suivi du progrès' }}
      />
      <Tab.Screen 
        name="Facturation" 
        component={ParentBillingScreen}
        options={{ title: 'Facturation' }}
      />
    </Tab.Navigator>
  );
};

export default ParentNavigator;
