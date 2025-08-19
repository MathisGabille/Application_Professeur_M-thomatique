import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const TeacherCoursesScreen = () => {
  const [courses, setCourses] = useState([
    {
      id: '1',
      title: 'Algèbre de base',
      subject: 'Mathématiques',
      level: 'Collège',
      students: 8,
      lessons: 12,
      color: '#667eea',
      gradient: ['#667eea', '#764ba2'],
    },
    {
      id: '2',
      title: 'Géométrie euclidienne',
      subject: 'Mathématiques',
      level: 'Lycée',
      students: 5,
      lessons: 8,
      color: '#f093fb',
      gradient: ['#f093fb', '#f5576c'],
    },
    {
      id: '3',
      title: 'Calcul différentiel',
      subject: 'Mathématiques',
      level: 'Lycée',
      students: 3,
      lessons: 15,
      color: '#4facfe',
      gradient: ['#4facfe', '#00f2fe'],
    },
    {
      id: '4',
      title: 'Probabilités',
      subject: 'Mathématiques',
      level: 'Collège',
      students: 6,
      lessons: 10,
      color: '#43e97b',
      gradient: ['#43e97b', '#38f9d7'],
    },
  ]);

  const renderCourseCard = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.courseCard}>
      <LinearGradient
        colors={item.gradient}
        style={styles.courseGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.courseHeader}>
          <Text style={styles.courseTitle}>{item.title}</Text>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="create" size={20} color="white" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.courseInfo}>
          <View style={styles.infoRow}>
            <Ionicons name="school" size={16} color="rgba(255, 255, 255, 0.8)" />
            <Text style={styles.infoText}>{item.subject} - {item.level}</Text>
          </View>
          
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Ionicons name="people" size={16} color="rgba(255, 255, 255, 0.8)" />
              <Text style={styles.statText}>{item.students} élèves</Text>
            </View>
            <View style={styles.stat}>
              <Ionicons name="book" size={16} color="rgba(255, 255, 255, 0.8)" />
              <Text style={styles.statText}>{item.lessons} leçons</Text>
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
        <Text style={styles.headerTitle}>Mes Cours</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Statistiques rapides */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{courses.length}</Text>
          <Text style={styles.statLabel}>Cours actifs</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {courses.reduce((acc, course) => acc + course.students, 0)}
          </Text>
          <Text style={styles.statLabel}>Élèves total</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {courses.reduce((acc, course) => acc + course.lessons, 0)}
          </Text>
          <Text style={styles.statLabel}>Leçons total</Text>
        </View>
      </View>

      {/* Liste des cours */}
      <FlatList
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.coursesList}
        showsVerticalScrollIndicator={false}
      />

      {/* Bouton flottant pour ajouter un cours */}
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
  coursesList: {
    padding: 20,
  },
  courseCard: {
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
  courseGradient: {
    padding: 20,
    borderRadius: 15,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  courseTitle: {
    fontSize: 20,
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
  courseInfo: {
    gap: 10,
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

export default TeacherCoursesScreen;
