import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  const weekDays = [
    { day: 'M', date: '07', active: true },
    { day: 'T', date: '08', active: true },
    { day: 'W', date: '09', active: false },
    { day: 'T', date: '10', active: true },
    { day: 'F', date: '11', active: true },
    { day: 'S', date: '12', active: true },
    { day: 'S', date: '13', active: true },
  ];

  const ProgressCircle = ({ percentage, label }) => (
    <View style={styles.progressCircle}>
      <View style={styles.circleContainer}>
        <View style={[
          styles.circleProgress,
          { transform: [{ rotate: `${percentage * 3.6}deg` }] }
        ]} />
        <View style={[
          styles.circleBackground,
          { transform: [{ rotate: '0deg' }] }
        ]} />
      </View>
      <Text style={styles.percentageText}>{percentage}%</Text>
      <Text style={styles.labelText}>{label}</Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
      <View style={styles.header}>
        <Text style={styles.logoText}>LOGO</Text>
        <View style={[styles.streakContainer, { backgroundColor: '#FFF5F5' }]}>
          <MaterialCommunityIcons name="fire" size={20} color="#FF4B4B" />
          <Text style={[styles.streakText, { color: '#FF4B4B' }]}>7</Text>
          <Text style={[styles.streakLabel, { color: '#FF4B4B' }]}>days</Text>
        </View>
      </View>

      <Text style={styles.weekTitle}>This Week</Text>

      <View style={styles.calendar}>
        {weekDays.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.dayContainer, 
              !item.active && styles.inactiveDay,
              item.active && styles.activeDay
            ]}
          >
            <Text style={[styles.dayText, item.active && styles.activeDayText]}>
              {item.day}
            </Text>
            <Text style={[styles.dateText, item.active && styles.activeDateText]}>
              {item.date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>Today's Progress</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.calorieSection}>
          <View style={styles.calorieRow}>
            <Ionicons name="flame" size={24} color="#FF5722" />
            <Text style={styles.calorieCount}>1284</Text>
          </View>
          <Text style={styles.calorieLabel}>Calories left</Text>
        </View>

        <View style={styles.progressCircles}>
          <ProgressCircle percentage={29} label="Fat left" />
          <ProgressCircle percentage={65} label="Protein" />
          <ProgressCircle percentage={85} label="Carb left" />
        </View>
      </View>

      <TouchableOpacity style={styles.uploadCard}>
        <Text style={styles.uploadTitle}>You haven't uploaded any food</Text>
        <Text style={styles.uploadSubtitle}>
          Snap a quick pic to start tracking today's meals!
        </Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#4CAF50" />
          <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="food-apple-outline" size={24} color="#666" />
          <Text style={styles.navText}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="dumbbell" size={24} color="#666" />
          <Text style={styles.navText}>Workout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  logo: {
    width: 120,
    height: 40,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5F5',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 4,
  },
  streakText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF4B4B',
  },
  streakLabel: {
    fontSize: 14,
    color: '#FF4B4B',
  },
  weekTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  dayContainer: {
    alignItems: 'center',
    borderRadius: 25,
    width: 42,
    height: 42,
    justifyContent: 'center',
  },
  activeDay: {
    backgroundColor: '#4CAF50',
  },
  inactiveDay: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  dayText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  activeDayText: {
    color: 'white',
  },
  dateText: {
    fontSize: 11,
    color: '#666',
  },
  activeDateText: {
    color: 'white',
  },
  progressCard: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  viewMore: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  calorieSection: {
    marginBottom: 28,
  },
  calorieRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  calorieCount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginLeft: 8,
  },
  calorieLabel: {
    fontSize: 14,
    color: '#666',
  },
  progressCircles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  progressCircle: {
    alignItems: 'center',
    width: '30%',
  },
  circleContainer: {
    width: 80,
    height: 80,
    position: 'relative',
    marginBottom: 8,
  },
  circleProgress: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#4CAF50',
    borderLeftColor: 'transparent',
    position: 'absolute',
  },
  circleBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#E8F5E9',
    position: 'absolute',
  },
  percentageText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  labelText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  uploadCard: {
    backgroundColor: '#E8F5E9',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
  },
  uploadTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  uploadSubtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeNavText: {
    color: '#4CAF50',
  },
  logoText: {
      fontSize: 24,
      fontWeight: '700',
      color: '#000',
    },
    streakContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF3E0',
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 20,
      gap: 4,
      shadowColor: '#FF5722',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      borderWidth: 1,
      borderColor: 'rgba(255, 87, 34, 0.1)',
    },
    streakText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#FF5722',
      marginLeft: 4,
    },
    streakLabel: {
      fontSize: 13,
      color: '#FF5722',
      fontWeight: '500',
      marginLeft: 2,
    },
});

export default HomeScreen;