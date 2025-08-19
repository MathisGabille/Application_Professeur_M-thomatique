import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import des écrans de l'élève
import StudentDashboardScreen from '../screens/student/StudentDashboardScreen';
import StudentCoursesScreen from '../screens/student/StudentCoursesScreen';
import StudentExercisesScreen from '../screens/student/StudentExercisesScreen';
import StudentFlashCardsScreen from '../screens/student/StudentFlashCardsScreen';

const Tab = createBottomTabNavigator();

const StudentNavigator = () => {
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
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f093fb',
        tabBarInactiveTintColor: 'gray',
        headerStyle: {
          backgroundColor: '#f093fb',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={StudentDashboardScreen}
        options={{ title: 'Tableau de bord' }}
      />
      <Tab.Screen 
        name="Cours" 
        component={StudentCoursesScreen}
        options={{ title: 'Mes Cours' }}
      />
      <Tab.Screen 
        name="Exercices" 
        component={StudentExercisesScreen}
        options={{ title: 'Exercices' }}
      />
      <Tab.Screen 
        name="FlashCards" 
        component={StudentFlashCardsScreen}
        options={{ title: 'Flash Cards' }}
      />
    </Tab.Navigator>
  );
};

export default StudentNavigator;
