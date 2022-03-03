import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import DateDisplay from '../components/calendar/DateDisplay';
import DateSlider from '../components/calendar/DateSlider';
import TasksView from '../components/calendar/Tasks/TasksView';

export default function CalendarScreen() {
  const [selectedDay, setSelectedDay] = useState();

  return (
    <View style={styles.container}>
      <DateDisplay selectedDay={selectedDay} />
      <DateSlider setSelectedDay={setSelectedDay} selectedDay={selectedDay} />
      <TasksView selectedDay={selectedDay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
});
