import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import des écrans
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';
import TeacherNavigator from './src/navigation/TeacherNavigator';
import StudentNavigator from './src/navigation/StudentNavigator';
import ParentNavigator from './src/navigation/ParentNavigator';

// Types pour la navigation
export type RootStackParamList = {
  RoleSelection: undefined;
  Teacher: undefined;
  Student: undefined;
  Parent: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="RoleSelection"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
          <Stack.Screen name="Teacher" component={TeacherNavigator} />
          <Stack.Screen name="Student" component={StudentNavigator} />
          <Stack.Screen name="Parent" component={ParentNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
