import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';

const DateOfBirthSelection = ({ navigation }) => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const [monthError, setMonthError] = useState(false);
  const [dayError, setDayError] = useState(false);

  const handleContinue = () => {
    if (month && day && year) {
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      navigation.navigate('WorkoutGoals', { dateOfBirth: date });
    }
  };

  const validateMonth = (value) => {
    const num = parseInt(value);
    if (isNaN(num)) {
      setMonthError(false);
      return value;
    }
    setMonthError(num > 12 || num < 1);
    if (num > 12) return '12';
    if (num < 1) return '1';
    return value;
  };

  const validateDay = (value) => {
    const num = parseInt(value);
    if (isNaN(num)) {
      setDayError(false);
      return value;
    }
    setDayError(num > 31 || num < 1);
    if (num > 31) return '31';
    if (num < 1) return '1';
    return value;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressBar}>
        <View style={styles.progress} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Enter your{'\n'}Date of birth</Text>
        <Text style={styles.subtitle}>
          Your age information will be updated{'\n'}on your profile page and this will displayed{'\n'}publicly on your dashboard
        </Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, monthError && styles.inputError]}
              placeholder="Month"
              value={month}
              onChangeText={(value) => setMonth(validateMonth(value))}
              keyboardType="number-pad"
              maxLength={2}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.input, dayError && styles.inputError]}
              placeholder="Day"
              value={day}
              onChangeText={(value) => setDay(validateDay(value))}
              keyboardType="number-pad"
              maxLength={2}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Year"
              value={year}
              onChangeText={setYear}
              keyboardType="number-pad"
              maxLength={4}
            />
          </View>
        </View>

        <TouchableOpacity 
          style={[styles.continueButton, !(month && day && year) && styles.disabledButton]}
          onPress={handleContinue}
          disabled={!(month && day && year)}
        >
          <Text style={styles.continueText}>Continue</Text>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
    marginBottom: 40,
  },
  inputWrapper: {
    flex: 1,
    maxWidth: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 30,  // Updated to match gender selection style
    padding: 16,      // Updated to match gender selection padding
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  inputError: {
    color: '#FF0000',
    borderColor: '#FF0000',
  },
  continueButton: {
    backgroundColor: '#4CAF50', // Updated to match gender selection color
    width: '100%',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  disabledButton: {
    backgroundColor: '#E0E0E0',
  },
  continueText: {
    color: '#fff',    // Updated to match gender selection text color
    fontSize: 16,
    fontWeight: '600',
  },
  cancelText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DateOfBirthSelection;