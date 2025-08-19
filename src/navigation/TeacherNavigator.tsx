import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import des écrans du professeur
import TeacherDashboardScreen from '../screens/teacher/TeacherDashboardScreen';
import TeacherCoursesScreen from '../screens/teacher/TeacherCoursesScreen';
import TeacherExercisesScreen from '../screens/teacher/TeacherExercisesScreen';
import TeacherFlashCardsScreen from '../screens/teacher/TeacherFlashCardsScreen';
import TeacherBillingScreen from '../screens/teacher/TeacherBillingScreen';

const Tab = createBottomTabNavigator();

const TeacherNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cours') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Exercices') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          } else if (route.name === 'FlashCards') {
            iconName = focused ? 'card' : 'card-outline';
          } else if (route.name === 'Facturation') {
            iconName = focused ? 'cash' : 'cash-outline';
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#667eea',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#667eea',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={TeacherDashboardScreen}
        options={{ title: 'Tableau de bord' }}
      />
      <Tab.Screen 
        name="Cours" 
        component={TeacherCoursesScreen}
        options={{ title: 'Mes Cours' }}
      />
      <Tab.Screen 
        name="Exercices" 
        component={TeacherExercisesScreen}
        options={{ title: 'Exercices' }}
      />
      <Tab.Screen 
        name="FlashCards" 
        component={TeacherFlashCardsScreen}
        options={{ title: 'Flash Cards' }}
      />
      <Tab.Screen 
        name="Facturation" 
        component={TeacherBillingScreen}
        options={{ title: 'Facturation' }}
      />
    </Tab.Navigator>
  );
};

export default TeacherNavigator;
