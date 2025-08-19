import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const StudentDashboardScreen = () => {
  const stats = [
    {
      title: 'Cours suivis',
      value: '4',
      icon: 'book',
      color: '#f093fb',
      gradient: ['#f093fb', '#f5576c'],
    },
    {
      title: 'Exercices complétés',
      value: '18',
      icon: 'checkmark-circle',
      color: '#4facfe',
      gradient: ['#4facfe', '#00f2fe'],
    },
    {
      title: 'Flash Cards révisées',
      value: '32',
      icon: 'card',
      color: '#43e97b',
      gradient: ['#43e97b', '#38f9d7'],
    },
    {
      title: 'Score moyen',
      value: '85%',
      icon: 'trophy',
      color: '#667eea',
      gradient: ['#667eea', '#764ba2'],
    },
  ];

  const recentActivity = [
    {
      type: 'Exercice',
      title: 'Résolution d\'équations',
      course: 'Algèbre de base',
      score: 90,
      time: 'Il y a 2h',
    },
    {
      type: 'Flash Card',
      title: 'Formules de géométrie',
      course: 'Géométrie euclidienne',
      score: null,
      time: 'Il y a 4h',
    },
    {
      type: 'Cours',
      title: 'Nouvelle leçon sur les dérivées',
      course: 'Calcul différentiel',
      score: null,
      time: 'Il y a 1j',
    },
  ];

  const quickActions = [
    {
      title: 'Continuer les exercices',
      icon: 'play',
      action: () => console.log('Continuer les exercices'),
    },
    {
      title: 'Réviser les Flash Cards',
      icon: 'refresh',
      action: () => console.log('Réviser les Flash Cards'),
    },
    {
      title: 'Consulter un cours',
      icon: 'book',
      action: () => console.log('Consulter un cours'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header avec salutation */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Bonjour, Élève !</Text>
        <Text style={styles.subtitle}>Prêt à progresser en mathématiques ?</Text>
      </View>

      {/* Statistiques */}
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Vos statistiques</Text>
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
              <Ionicons name={action.icon as any} size={32} color="#f093fb" />
              <Text style={styles.actionTitle}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Activité récente */}
      <View style={styles.recentContainer}>
        <Text style={styles.sectionTitle}>Activité récente</Text>
        {recentActivity.map((activity, index) => (
          <View key={index} style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <Ionicons 
                name={
                  activity.type === 'Exercice' ? 'checkmark-circle' :
                  activity.type === 'Flash Card' ? 'card' : 'book'
                } 
                size={20} 
                color="#f093fb" 
              />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activityCourse}>{activity.course}</Text>
              {activity.score && (
                <View style={styles.scoreContainer}>
                  <Text style={styles.scoreText}>Score: {activity.score}%</Text>
                </View>
              )}
            </View>
            <Text style={styles.activityTime}>{activity.time}</Text>
          </View>
        ))}
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
    backgroundColor: '#f093fb',
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
    width: '48%',
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
    width: '48%',
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
  activityItem: {
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
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
  },
  activityCourse: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  scoreContainer: {
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  scoreText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#43e97b',
  },
  activityTime: {
    fontSize: 12,
    color: '#95a5a6',
  },
});

export default StudentDashboardScreen;
