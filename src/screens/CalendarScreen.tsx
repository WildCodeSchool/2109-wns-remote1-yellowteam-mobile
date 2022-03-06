import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import DateDisplay from '../components/calendar/DateDisplay';
import DateSlider from '../components/calendar/DateSlider';
import TasksView from '../components/calendar/Tasks/TasksView';

export default function CalendarScreen() {
  const [selectedDay, setSelectedDay] = useState<Date>();

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
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
});
