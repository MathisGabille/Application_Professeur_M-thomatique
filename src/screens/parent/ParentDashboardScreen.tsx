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

const ParentDashboardScreen = () => {
  const childInfo = {
    name: 'Marie Martin',
    grade: '4ème',
    progress: 78,
    nextLesson: 'Géométrie euclidienne',
    nextLessonTime: 'Demain à 14h',
  };

  const stats = [
    {
      title: 'Progrès global',
      value: '78%',
      icon: 'trending-up',
      color: '#4facfe',
      gradient: ['#4facfe', '#00f2fe'],
    },
    {
      title: 'Heures de cours',
      value: '24h',
      icon: 'time',
      color: '#f093fb',
      gradient: ['#f093fb', '#f5576c'],
    },
    {
      title: 'Exercices réussis',
      value: '18/24',
      icon: 'checkmark-circle',
      color: '#43e97b',
      gradient: ['#43e97b', '#38f9d7'],
    },
    {
      title: 'Factures en attente',
      value: '1',
      icon: 'card',
      color: '#667eea',
      gradient: ['#667eea', '#764ba2'],
    },
  ];

  const recentProgress = [
    {
      subject: 'Algèbre de base',
      progress: 85,
      lastActivity: 'Résolution d\'équations - Score: 90%',
      time: 'Il y a 2h',
    },
    {
      subject: 'Géométrie euclidienne',
      progress: 72,
      lastActivity: 'Calcul d\'aires - Score: 75%',
      time: 'Il y a 1j',
    },
    {
      subject: 'Calcul différentiel',
      progress: 65,
      lastActivity: 'Nouvelle leçon sur les dérivées',
      time: 'Il y a 2j',
    },
  ];

  const quickActions = [
    {
      title: 'Voir le progrès détaillé',
      icon: 'trending-up',
      action: () => console.log('Voir le progrès détaillé'),
    },
    {
      title: 'Consulter la facturation',
      icon: 'card',
      action: () => console.log('Consulter la facturation'),
    },
    {
      title: 'Contacter le professeur',
      icon: 'chatbubble',
      action: () => console.log('Contacter le professeur'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header avec informations de l'enfant */}
      <View style={styles.header}>
        <View style={styles.childInfo}>
          <Text style={styles.greeting}>Bonjour !</Text>
          <Text style={styles.childName}>{childInfo.name}</Text>
          <Text style={styles.childGrade}>{childInfo.grade}</Text>
        </View>
        <View style={styles.progressCircle}>
          <Text style={styles.progressText}>{childInfo.progress}%</Text>
          <Text style={styles.progressLabel}>Progrès</Text>
        </View>
      </View>

      {/* Prochaine leçon */}
      <View style={styles.nextLessonContainer}>
        <Text style={styles.nextLessonTitle}>Prochaine leçon</Text>
        <View style={styles.nextLessonCard}>
          <Ionicons name="book" size={24} color="#4facfe" />
          <View style={styles.nextLessonInfo}>
            <Text style={styles.nextLessonSubject}>{childInfo.nextLesson}</Text>
            <Text style={styles.nextLessonTime}>{childInfo.nextLessonTime}</Text>
          </View>
        </View>
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
              <Ionicons name={action.icon as any} size={32} color="#4facfe" />
              <Text style={styles.actionTitle}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Progrès récent par matière */}
      <View style={styles.progressContainer}>
        <Text style={styles.sectionTitle}>Progrès par matière</Text>
        {recentProgress.map((subject, index) => (
          <View key={index} style={styles.subjectCard}>
            <View style={styles.subjectHeader}>
              <Text style={styles.subjectName}>{subject.subject}</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${subject.progress}%` }]} />
              </View>
              <Text style={styles.progressPercentage}>{subject.progress}%</Text>
            </View>
            <Text style={styles.lastActivity}>{subject.lastActivity}</Text>
            <Text style={styles.activityTime}>{subject.time}</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4facfe',
  },
  childInfo: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 5,
  },
  childName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  childGrade: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  progressLabel: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  nextLessonContainer: {
    padding: 20,
  },
  nextLessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  nextLessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  nextLessonInfo: {
    marginLeft: 15,
    flex: 1,
  },
  nextLessonSubject: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
  },
  nextLessonTime: {
    fontSize: 14,
    color: '#7f8c8d',
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
    fontSize: 24,
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
  progressContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  subjectCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  subjectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  subjectName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    flex: 1,
  },
  progressBar: {
    width: 80,
    height: 8,
    backgroundColor: '#ecf0f1',
    borderRadius: 4,
    marginHorizontal: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4facfe',
    borderRadius: 4,
  },
  progressPercentage: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4facfe',
    minWidth: 35,
  },
  lastActivity: {
    fontSize: 14,
    color: '#2c3e50',
    marginBottom: 5,
  },
  activityTime: {
    fontSize: 12,
    color: '#95a5a6',
  },
});

export default ParentDashboardScreen;
