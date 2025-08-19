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

const TeacherFlashCardsScreen = () => {
  const [flashCards, setFlashCards] = useState([
    {
      id: '1',
      question: 'Qu\'est-ce qu\'une équation du premier degré ?',
      answer: 'Une équation de la forme ax + b = 0 où a ≠ 0',
      course: 'Algèbre de base',
      category: 'Définitions',
      difficulty: 'Facile',
      usageCount: 15,
      color: '#667eea',
      gradient: ['#667eea', '#764ba2'],
    },
    {
      id: '2',
      question: 'Comment calcule-t-on l\'aire d\'un cercle ?',
      answer: 'A = π × r² où r est le rayon',
      course: 'Géométrie euclidienne',
      category: 'Formules',
      difficulty: 'Moyen',
      usageCount: 12,
      color: '#f093fb',
      gradient: ['#f093fb', '#f5576c'],
    },
    {
      id: '3',
      question: 'Quelle est la dérivée de x² ?',
      answer: '2x',
      course: 'Calcul différentiel',
      category: 'Calculs',
      difficulty: 'Facile',
      usageCount: 20,
      color: '#4facfe',
      gradient: ['#4facfe', '#00f2fe'],
    },
    {
      id: '4',
      question: 'Qu\'est-ce qu\'un événement certain ?',
      answer: 'Un événement qui se produit toujours (probabilité = 1)',
      course: 'Probabilités',
      category: 'Définitions',
      difficulty: 'Moyen',
      usageCount: 8,
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Définitions':
        return 'book';
      case 'Formules':
        return 'calculator';
      case 'Calculs':
        return 'code-working';
      default:
        return 'help-circle';
    }
  };

  const renderFlashCard = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.flashCard}>
      <LinearGradient
        colors={item.gradient}
        style={styles.flashCardGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.flashCardHeader}>
          <View style={styles.headerLeft}>
            <Ionicons name={getCategoryIcon(item.category) as any} size={20} color="white" />
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="create" size={20} color="white" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.flashCardContent}>
          <View style={styles.questionSection}>
            <Text style={styles.sectionLabel}>Question</Text>
            <Text style={styles.questionText}>{item.question}</Text>
          </View>
          
          <View style={styles.answerSection}>
            <Text style={styles.sectionLabel}>Réponse</Text>
            <Text style={styles.answerText}>{item.answer}</Text>
          </View>
        </View>
        
        <View style={styles.flashCardFooter}>
          <View style={styles.footerLeft}>
            <Text style={styles.courseText}>{item.course}</Text>
            <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(item.difficulty) }]}>
              <Text style={styles.difficultyText}>{item.difficulty}</Text>
            </View>
          </View>
          <View style={styles.usageInfo}>
            <Ionicons name="eye" size={16} color="rgba(255, 255, 255, 0.8)" />
            <Text style={styles.usageText}>{item.usageCount} utilisations</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header avec bouton d'ajout */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Flash Cards</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Statistiques rapides */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{flashCards.length}</Text>
          <Text style={styles.statLabel}>Cartes créées</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {flashCards.reduce((acc, card) => acc + card.usageCount, 0)}
          </Text>
          <Text style={styles.statLabel}>Utilisations total</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {new Set(flashCards.map(card => card.course)).size}
          </Text>
          <Text style={styles.statLabel}>Cours couverts</Text>
        </View>
      </View>

      {/* Liste des Flash Cards */}
      <FlatList
        data={flashCards}
        renderItem={renderFlashCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flashCardsList}
        showsVerticalScrollIndicator={false}
      />

      {/* Bouton flottant pour ajouter une Flash Card */}
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
  flashCardsList: {
    padding: 20,
  },
  flashCard: {
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
  flashCardGradient: {
    padding: 20,
    borderRadius: 15,
  },
  flashCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.9)',
    marginLeft: 8,
  },
  editButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flashCardContent: {
    gap: 15,
    marginBottom: 15,
  },
  questionSection: {
    gap: 5,
  },
  answerSection: {
    gap: 5,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.7)',
    textTransform: 'uppercase',
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    lineHeight: 22,
  },
  answerText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 20,
  },
  flashCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  courseText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  difficultyText: {
    fontSize: 10,
    fontWeight: '600',
    color: 'white',
  },
  usageInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  usageText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
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

export default TeacherFlashCardsScreen;
