import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

const { width, height } = Dimensions.get('window');

type RoleSelectionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RoleSelection'>;

const RoleSelectionScreen = () => {
  const navigation = useNavigation<RoleSelectionScreenNavigationProp>();

  const roles = [
    {
      id: 'teacher',
      title: 'Professeur',
      subtitle: 'Gérer les cours, exercices et facturation',
      gradient: ['#667eea', '#764ba2'],
      icon: '👨‍🏫',
    },
    {
      id: 'student',
      title: 'Élève',
      subtitle: 'Consulter les cours et faire des exercices',
      gradient: ['#f093fb', '#f5576c'],
      icon: '🎓',
    },
    {
      id: 'parent',
      title: 'Parent',
      subtitle: 'Suivre le progrès et gérer la facturation',
      gradient: ['#4facfe', '#00f2fe'],
      icon: '👨‍👩‍👧‍👦',
    },
  ];

  const handleRoleSelection = (roleId: string) => {
    switch (roleId) {
      case 'teacher':
        navigation.navigate('Teacher');
        break;
      case 'student':
        navigation.navigate('Student');
        break;
      case 'parent':
        navigation.navigate('Parent');
        break;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Application Professeur</Text>
        <Text style={styles.subtitle}>Mathématique</Text>
      </View>

      {/* Role Selection Cards */}
      <View style={styles.rolesContainer}>
        {roles.map((role) => (
          <TouchableOpacity
            key={role.id}
            style={styles.roleCard}
            onPress={() => handleRoleSelection(role.id)}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={role.gradient}
              style={styles.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.roleIcon}>{role.icon}</Text>
              <Text style={styles.roleTitle}>{role.title}</Text>
              <Text style={styles.roleSubtitle}>{role.subtitle}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Sélectionnez votre rôle pour commencer
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    alignItems: 'center',
    paddingTop: height * 0.1,
    paddingBottom: height * 0.05,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: '#7f8c8d',
    marginTop: 5,
  },
  rolesContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  roleCard: {
    marginBottom: 20,
    borderRadius: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  gradient: {
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
  },
  roleIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  roleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  roleSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 22,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: height * 0.05,
  },
  footerText: {
    fontSize: 16,
    color: '#95a5a6',
    textAlign: 'center',
  },
});

export default RoleSelectionScreen;
