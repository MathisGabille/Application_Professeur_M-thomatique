import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const TeacherExercisesScreen = () => {
  const [exercises, setExercises] = useState([
    {
      id: '1',
      title: 'Résolution d\'équations du premier degré',
      course: 'Algèbre de base',
      difficulty: 'Facile',
      type: 'QCM',
      questions: 10,
      completedBy: 8,
      color: '#667eea',
      gradient: ['#667eea', '#764ba2'],
    },
    {
      id: '2',
      title: 'Calcul de périmètres et aires',
      course: 'Géométrie euclidienne',
      difficulty: 'Moyen',
      type: 'Exercices',
      questions: 15,
      completedBy: 5,
      color: '#f093fb',
      gradient: ['#f093fb', '#f5576c'],
    },
    {
      id: '3',
      title: 'Dérivées de fonctions simples',
      course: 'Calcul différentiel',
      difficulty: 'Difficile',
      type: 'Problèmes',
      questions: 8,
      completedBy: 3,
      color: '#4facfe',
      gradient: ['#4facfe', '#00f2fe'],
    },
    {
      id: '4',
      title: 'Calcul de probabilités',
      course: 'Probabilités',
      difficulty: 'Moyen',
      type: 'QCM',
      questions: 12,
      completedBy: 6,
      color: '#43e97b',
      gradient: ['#43e97b', '#38f9d7'],
    },
  ]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile':
        return '#43e97b';
      case 'Moyen':
        return '#f093fb';
      case 'Difficile':
        return '#f5576c';
      default:
        return '#667eea';
    }
  };

  const renderExerciseCard = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.exerciseCard}>
      <LinearGradient
        colors={item.gradient}
        style={styles.exerciseGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.exerciseHeader}>
          <Text style={styles.exerciseTitle}>{item.title}</Text>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="create" size={20} color="white" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.exerciseInfo}>
          <View style={styles.infoRow}>
            <Ionicons name="book" size={16} color="rgba(255, 255, 255, 0.8)" />
            <Text style={styles.infoText}>{item.course}</Text>
          </View>
          
          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(item.difficulty) }]}>
                <Text style={styles.difficultyText}>{item.difficulty}</Text>
              </View>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="help-circle" size={16} color="rgba(255, 255, 255, 0.8)" />
              <Text style={styles.detailText}>{item.type}</Text>
            </View>
          </View>
          
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Ionicons name="document-text" size={16} color="rgba(255, 255, 255, 0.8)" />
              <Text style={styles.statText}>{item.questions} questions</Text>
            </View>
            <View style={styles.stat}>
              <Ionicons name="people" size={16} color="rgba(255, 255, 255, 0.8)" />
              <Text style={styles.statText}>{item.completedBy} élèves</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header avec bouton d'ajout */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Exercices</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Statistiques rapides */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{exercises.length}</Text>
          <Text style={styles.statLabel}>Exercices créés</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {exercises.reduce((acc, exercise) => acc + exercise.questions, 0)}
          </Text>
          <Text style={styles.statLabel}>Questions total</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {exercises.reduce((acc, exercise) => acc + exercise.completedBy, 0)}
          </Text>
          <Text style={styles.statLabel}>Complétions</Text>
        </View>
      </View>

      {/* Liste des exercices */}
      <FlatList
        data={exercises}
        renderItem={renderExerciseCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.exercisesList}
        showsVerticalScrollIndicator={false}
      />

      {/* Bouton flottant pour ajouter un exercice */}
      <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
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
    backgroundColor: '#667eea',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  exercisesList: {
    padding: 20,
  },
  exerciseCard: {
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
  exerciseGradient: {
    padding: 20,
    borderRadius: 15,
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  editButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseInfo: {
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginLeft: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  detailText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginLeft: 5,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 20,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginLeft: 5,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#667eea',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default TeacherExercisesScreen;
