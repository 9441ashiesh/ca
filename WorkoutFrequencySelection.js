import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const WorkoutFrequencySelection = ({ navigation }) => {
  const [selectedFrequency, setSelectedFrequency] = useState(null);

  const handleNext = () => {
    if (selectedFrequency) {
      console.log('Attempting to navigate with frequency:', selectedFrequency);
      try {
        navigation.navigate('MealsPerDay', { frequency: selectedFrequency });
      } catch (error) {
        console.error('Navigation error:', error);
      }
    }
  };

  const frequencies = [
    { id: 1, title: 'Once a week' },
    { id: 2, title: 'A few times a week' },
    { id: 3, title: 'Consistently, No Days Off' },
    { id: 4, title: 'Once in a Blue Moon' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressBar}>
        <View style={styles.progress} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>How often do you{'\n'}work out?</Text>
        <Text style={styles.subtitle}>
          Your answer helps us tailor a{'\n'}workout plan that fits your lifestyle.
        </Text>

        <View style={styles.frequencyContainer}>
          {frequencies.map((frequency) => (
            <TouchableOpacity
              key={frequency.id}
              style={[
                styles.frequencyButton,
                selectedFrequency === frequency.id && styles.selectedFrequency
              ]}
              onPress={() => setSelectedFrequency(frequency.id)}
            >
              <Text style={[
                styles.frequencyText,
                selectedFrequency === frequency.id && styles.selectedFrequencyText
              ]}>
                {frequency.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={[
            styles.nextButton,
            selectedFrequency ? { backgroundColor: '#4CAF50', borderColor: '#4CAF50' } : styles.disabledButton
          ]}
          onPress={handleNext}
          disabled={!selectedFrequency}
        >
          <Text style={[
            styles.nextButtonText,
            selectedFrequency && { color: '#fff' }
          ]}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  progressBar: {
    height: 3,
    backgroundColor: '#E8E8E8',
  },
  progress: {
    width: '33%',
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 12,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  frequencyContainer: {
    width: '100%',
    gap: 16,
  },
  frequencyButton: {
    width: '100%',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
  },
  selectedFrequency: {
    backgroundColor: '#E8F5E9',
    borderColor: '#4CAF50',
  },
  frequencyText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    fontWeight: '500',
  },
  selectedFrequencyText: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  disabledButton: {
    borderColor: '#E0E0E0',
  },
  nextButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  weekTitle: {
      fontSize: 32,
      fontWeight: '700',
      color: '#000',
      marginBottom: 24,
      marginTop: 8,
    },
    calendar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 32,
      paddingHorizontal: 4,
    },
    dayContainer: {
      alignItems: 'center',
      borderRadius: 16,
      width: 48,
      height: 64,
      justifyContent: 'center',
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    activeDay: {
      backgroundColor: '#4CAF50',
      shadowColor: '#4CAF50',
      shadowOpacity: 0.2,
      elevation: 3,
    },
    inactiveDay: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#E0E0E0',
    },
    dayText: {
      fontSize: 15,
      fontWeight: '600',
      color: '#000',
      marginBottom: 4,
    },
    activeDayText: {
      color: 'white',
    },
    dateText: {
      fontSize: 13,
      color: '#666',
    },
    activeDateText: {
      color: 'white',
    },
});

export default WorkoutFrequencySelection;