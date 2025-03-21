import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const MealsPerDaySelection = ({ navigation }) => {
  const [selectedMeals, setSelectedMeals] = useState(null);

  const handleNext = () => {
    if (selectedMeals) {
      navigation.navigate('Home', { meals: selectedMeals });
    }
  };

  const mealOptions = [
    { 
      id: 1, 
      title: '5 meals per day',
      subtitle: 'Breakfast, Lunch, Dinner and 2 snakes',
      emoji: '🍳🥪🍖🍎🥕'
    },
    { 
      id: 2, 
      title: '4 meals per day',
      subtitle: 'Breakfast, Lunch, Dinner and snakes',
      emoji: '🍳🥪🍖🥕'
    },
    { 
      id: 3, 
      title: '3 meals per day',
      subtitle: 'Breakfast, Lunch, Dinner',
      emoji: '🍳🥪🍖'
    },
    { 
      id: 4, 
      title: '2 meals per day',
      subtitle: 'Breakfast or Dinner with Lunch',
      emoji: '🍳🥪'
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressBar}>
        <View style={styles.progress} />
      </View>

      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.title}>How many meals do{'\n'}you have per day?</Text>
          <Text style={styles.subtitle}>
            Your answer helps us tailor a{'\n'}workout plan that fits your lifestyle.
          </Text>

          <View style={styles.mealsContainer}>
            {mealOptions.map((meal) => (
              <TouchableOpacity
                key={meal.id}
                style={[
                  styles.mealButton,
                  selectedMeals === meal.id && styles.selectedMeal
                ]}
                onPress={() => setSelectedMeals(meal.id)}
              >
                <View style={styles.mealContent}>
                  <Text style={styles.mealEmoji}>{meal.emoji}</Text>
                  <Text style={[
                    styles.mealTitle,
                    selectedMeals === meal.id && styles.selectedMealText
                  ]}>
                    {meal.title}
                  </Text>
                  <Text style={styles.mealSubtitle}>{meal.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={[
          styles.nextButton,
          selectedMeals ? { backgroundColor: '#4CAF50', borderColor: '#4CAF50' } : styles.disabledButton
        ]}
        onPress={handleNext}
        disabled={!selectedMeals}
      >
        <Text style={[
          styles.nextButtonText,
          selectedMeals && { color: '#fff' }
        ]}>Next</Text>
      </TouchableOpacity>
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
    width: '50%',
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
  mealsContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 20,
  },
  mealButton: {
    width: '100%',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
  },
  mealContent: {
    alignItems: 'center',
  },
  mealEmoji: {
    fontSize: 18,
    letterSpacing: 4,
    marginBottom: 8,
  },
  mealTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    marginBottom: 4,
  },
  mealSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  selectedMeal: {
    backgroundColor: '#E8F5E9',
    borderColor: '#4CAF50',
  },
  selectedMealText: {
    color: '#4CAF50',
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // Add padding for the next button
  },
  content: {
    padding: 20,
  },
  mealsContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 20,
  },
});

export default MealsPerDaySelection;