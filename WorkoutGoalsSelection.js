import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const WorkoutGoalsSelection = ({ navigation }) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleNext = () => {
    if (selectedGoal) {
      // Navigate to WorkoutFrequencySelection screen with selected goal
      navigation.navigate('WorkoutFrequencySelection', { goal: selectedGoal });
    }
  };
  const goals = [
    { id: 1, title: 'Strength Training for Muscle Gain' },
    { id: 2, title: 'High-Intensity Interval Training for Fat Loss' },
    { id: 3, title: 'Cardiovascular Exercise for Fat Loss' },
    { id: 4, title: 'Functional Training for Overall Fitness' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressBar}>
        <View style={styles.progress} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>What do you want to{'\n'}acheive?</Text>
        <Text style={styles.subtitle}>
          What you are going to select will{'\n'}effect your workout program
        </Text>

        <View style={styles.goalsContainer}>
          {goals.map((goal) => (
            <TouchableOpacity
              key={goal.id}
              style={[
                styles.goalButton,
                selectedGoal === goal.id && styles.selectedGoal
              ]}
              onPress={() => setSelectedGoal(goal.id)}
            >
              <Text style={[
                styles.goalText,
                selectedGoal === goal.id && styles.selectedGoalText
              ]}>
                {goal.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={[
            styles.nextButton,
            selectedGoal ? { backgroundColor: '#4CAF50', borderColor: '#4CAF50' } : styles.disabledButton
          ]}
          onPress={handleNext}
          disabled={!selectedGoal}
        >
          <Text style={[
            styles.nextButtonText,
            selectedGoal && { color: '#fff' }
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
    width: '66%',
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
  goalsContainer: {
    width: '100%',
    gap: 16,
  },
  goalButton: {
    width: '100%',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
  },
  selectedGoal: {
    backgroundColor: '#E8F5E9',
    borderColor: '#4CAF50',
  },
  goalText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    fontWeight: '500',
  },
  selectedGoalText: {
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
});

export default WorkoutGoalsSelection;