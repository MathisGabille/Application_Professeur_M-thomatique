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

const TeacherBillingScreen = () => {
  const [invoices, setInvoices] = useState([
    {
      id: '1',
      studentName: 'Marie Martin',
      course: 'Algèbre de base',
      hours: 8,
      rate: 25,
      total: 200,
      status: 'Payée',
      dueDate: '2024-01-15',
      color: '#43e97b',
      gradient: ['#43e97b', '#38f9d7'],
    },
    {
      id: '2',
      studentName: 'Thomas Dubois',
      course: 'Géométrie euclidienne',
      hours: 6,
      rate: 25,
      total: 150,
      status: 'En attente',
      dueDate: '2024-01-20',
      color: '#f093fb',
      gradient: ['#f093fb', '#f5576c'],
    },
    {
      id: '3',
      studentName: 'Emma Rousseau',
      course: 'Calcul différentiel',
      hours: 10,
      rate: 25,
      total: 250,
      status: 'En retard',
      dueDate: '2024-01-10',
      color: '#f5576c',
      gradient: ['#f5576c', '#f093fb'],
    },
    {
      id: '4',
      studentName: 'Lucas Moreau',
      course: 'Probabilités',
      hours: 4,
      rate: 25,
      total: 100,
      status: 'Payée',
      dueDate: '2024-01-12',
      color: '#4facfe',
      gradient: ['#4facfe', '#00f2fe'],
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Payée':
        return '#43e97b';
      case 'En attente':
        return '#f093fb';
      case 'En retard':
        return '#f5576c';
      default:
        return '#667eea';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Payée':
        return 'checkmark-circle';
      case 'En attente':
        return 'time';
      case 'En retard':
        return 'warning';
      default:
        return 'help-circle';
    }
  };

  const renderInvoiceCard = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.invoiceCard}>
      <LinearGradient
        colors={item.gradient}
        style={styles.invoiceGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.invoiceHeader}>
          <View style={styles.headerLeft}>
            <Text style={styles.studentName}>{item.studentName}</Text>
            <Text style={styles.courseName}>{item.course}</Text>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
            <Ionicons name={getStatusIcon(item.status) as any} size={16} color="white" />
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>
        
        <View style={styles.invoiceDetails}>
          <View style={styles.detailRow}>
            <View style={styles.detailItem}>
              <Ionicons name="time" size={16} color="rgba(255, 255, 255, 0.8)" />
              <Text style={styles.detailText}>{item.hours}h</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="cash" size={16} color="rgba(255, 255, 255, 0.8)" />
              <Text style={styles.detailText}>{item.rate}€/h</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="calendar" size={16} color="rgba(255, 255, 255, 0.8)" />
              <Text style={styles.detailText}>{item.dueDate}</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.invoiceFooter}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>{item.total}€</Text>
        </View>
        
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="eye" size={16} color="white" />
            <Text style={styles.actionText}>Voir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="create" size={16} color="white" />
            <Text style={styles.actionText}>Modifier</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="send" size={16} color="white" />
            <Text style={styles.actionText}>Envoyer</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const totalEarnings = invoices
    .filter(invoice => invoice.status === 'Payée')
    .reduce((acc, invoice) => acc + invoice.total, 0);

  const pendingAmount = invoices
    .filter(invoice => invoice.status === 'En attente')
    .reduce((acc, invoice) => acc + invoice.total, 0);

  const overdueAmount = invoices
    .filter(invoice => invoice.status === 'En retard')
    .reduce((acc, invoice) => acc + invoice.total, 0);

  return (
    <View style={styles.container}>
      {/* Header avec bouton d'ajout */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Facturation</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Statistiques financières */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{totalEarnings}€</Text>
          <Text style={styles.statLabel}>Revenus totaux</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{pendingAmount}€</Text>
          <Text style={styles.statLabel}>En attente</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{overdueAmount}€</Text>
          <Text style={styles.statLabel}>En retard</Text>
        </View>
      </View>

      {/* Filtres rapides */}
      <View style={styles.filtersContainer}>
        <TouchableOpacity style={[styles.filterButton, styles.filterActive]}>
          <Text style={styles.filterText}>Toutes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Payées</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>En attente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>En retard</Text>
        </TouchableOpacity>
      </View>

      {/* Liste des factures */}
      <FlatList
        data={invoices}
        renderItem={renderInvoiceCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.invoicesList}
        showsVerticalScrollIndicator={false}
      />

      {/* Bouton flottant pour ajouter une facture */}
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 10,
    gap: 10,
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  filterActive: {
    backgroundColor: '#667eea',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
  },
  invoicesList: {
    padding: 20,
  },
  invoiceCard: {
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
  invoiceGradient: {
    padding: 20,
    borderRadius: 15,
  },
  invoiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  headerLeft: {
    flex: 1,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  courseName: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    gap: 5,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  invoiceDetails: {
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  detailText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  invoiceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    gap: 5,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
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

export default TeacherBillingScreen;
