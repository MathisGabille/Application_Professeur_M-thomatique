import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const TeacherDashboardScreen = () => {
  const stats = [
    {
      title: 'Élèves actifs',
      value: '12',
      icon: 'people',
      color: '#667eea',
      gradient: ['#667eea', '#764ba2'],
    },
    {
      title: 'Cours créés',
      value: '8',
      icon: 'book',
      color: '#f093fb',
      gradient: ['#f093fb', '#f5576c'],
    },
    {
      title: 'Exercices',
      value: '24',
      icon: 'calculator',
      color: '#4facfe',
      gradient: ['#4facfe', '#00f2fe'],
    },
    {
      title: 'Factures en attente',
      value: '3',
      icon: 'card',
      color: '#43e97b',
      gradient: ['#43e97b', '#38f9d7'],
    },
  ];

  const quickActions = [
    {
      title: 'Créer un cours',
      icon: 'add-circle',
      action: () => console.log('Créer un cours'),
    },
    {
      title: 'Ajouter un exercice',
      icon: 'add-circle',
      action: () => console.log('Ajouter un exercice'),
    },
    {
      title: 'Créer des Flash Cards',
      icon: 'add-circle',
      action: () => console.log('Créer des Flash Cards'),
    },
    {
      title: 'Nouvelle facture',
      icon: 'add-circle',
      action: () => console.log('Nouvelle facture'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header avec salutation */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Bonjour, Professeur !</Text>
        <Text style={styles.subtitle}>Voici un aperçu de votre activité</Text>
      </View>

      {/* Statistiques */}
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Statistiques</Text>
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <LinearGradient
                colors={stat.gradient}
                style={styles.statGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Ionicons name={stat.icon as any} size={24} color="white" />
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statTitle}>{stat.title}</Text>
              </LinearGradient>
            </View>
          ))}
        </View>
      </View>

      {/* Actions rapides */}
      <View style={styles.actionsContainer}>
        <Text style={styles.sectionTitle}>Actions rapides</Text>
        <View style={styles.actionsGrid}>
          {quickActions.map((action, index) => (
            <TouchableOpacity
              key={index}
              style={styles.actionCard}
              onPress={action.action}
            >
              <Ionicons name={action.icon as any} size={32} color="#667eea" />
              <Text style={styles.actionTitle}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Activité récente */}
      <View style={styles.recentContainer}>
        <Text style={styles.sectionTitle}>Activité récente</Text>
        <View style={styles.recentItem}>
          <Ionicons name="checkmark-circle" size={20} color="#43e97b" />
          <Text style={styles.recentText}>Nouveau cours "Algèbre" créé</Text>
          <Text style={styles.recentTime}>Il y a 2h</Text>
        </View>
        <View style={styles.recentItem}>
          <Ionicons name="checkmark-circle" size={20} color="#43e97b" />
          <Text style={styles.recentText}>5 exercices ajoutés au cours "Géométrie"</Text>
          <Text style={styles.recentTime}>Il y a 4h</Text>
        </View>
        <View style={styles.recentItem}>
          <Ionicons name="checkmark-circle" size={20} color="#43e97b" />
          <Text style={styles.recentText}>Facture envoyée à la famille Martin</Text>
          <Text style={styles.recentTime}>Il y a 1j</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#667eea',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  statsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: (width - 60) / 2,
    marginBottom: 15,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  statGradient: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginBottom: 5,
  },
  statTitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  actionsContainer: {
    padding: 20,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: (width - 60) / 2,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginTop: 10,
    textAlign: 'center',
  },
  recentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  recentText: {
    flex: 1,
    fontSize: 14,
    color: '#2c3e50',
    marginLeft: 10,
  },
  recentTime: {
    fontSize: 12,
    color: '#7f8c8d',
  },
});

export default TeacherDashboardScreen;
