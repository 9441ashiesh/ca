import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenderSelection from './GenderSelection';
import DateOfBirthSelection from './DateOfBirthSelection';
import WorkoutGoalsSelection from './WorkoutGoalsSelection';
import WorkoutFrequencySelection from './WorkoutFrequencySelection';
import MealsPerDaySelection from './MealsPerDaySelection';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Gender" component={GenderSelection} />
        <Stack.Screen name="DateOfBirth" component={DateOfBirthSelection} />
        <Stack.Screen name="WorkoutGoals" component={WorkoutGoalsSelection} />
        <Stack.Screen name="WorkoutFrequencySelection" component={WorkoutFrequencySelection} />
        <Stack.Screen name="MealsPerDay" component={MealsPerDaySelection} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;