import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const GenderSelection = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleNext = () => {
    if (selectedGender) {
      navigation.navigate('DateOfBirth', { gender: selectedGender });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.progressBar}>
        <View style={styles.progress} />
      </View>
      
      <Text style={styles.title}>What is your gender?</Text>
      
      <View style={styles.bottomContainer}>
        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={[styles.option, selectedGender === 'male' && styles.selectedOption]}
            onPress={() => setSelectedGender('male')}
          >
            <View style={styles.radioContainer}>
              <View style={[styles.radioButton, selectedGender === 'male' && styles.radioButtonSelected]}>
                {selectedGender === 'male' && <View style={styles.radioInner} />}
              </View>
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons 
                name="run" 
                size={24} 
                color={selectedGender === 'male' ? '#4CAF50' : '#666'} 
              />
            </View>
            <Text style={styles.optionText}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.option, selectedGender === 'female' && styles.selectedOption]}
            onPress={() => setSelectedGender('female')}
          >
            <View style={styles.radioContainer}>
              <View style={[styles.radioButton, selectedGender === 'female' && styles.radioButtonSelected]}>
                {selectedGender === 'female' && <View style={styles.radioInner} />}
              </View>
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons 
                name="run" 
                size={24} 
                color={selectedGender === 'female' ? '#4CAF50' : '#666'} 
              />
            </View>
            <Text style={styles.optionText}>Female</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.nextButton, !selectedGender && styles.disabledButton]}
            onPress={handleNext}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight || 0,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginTop: 10,
    marginHorizontal: 20,
  },
  progress: {
    width: '50%',
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 40, // Adjusted margin
    marginBottom: 20, // Added bottom margin
    color: '#333',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  optionsContainer: {
    padding: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 40,
  },
  radioContainer: {
    marginRight: 12,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: '#4CAF50',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
  },
  iconContainer: {
    width: 40,
    marginRight: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#E0E0E0',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GenderSelection;