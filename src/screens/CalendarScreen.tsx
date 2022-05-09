import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import DateDisplay from '../components/calendar/DateDisplay';
import DateSlider from '../components/calendar/DateSlider';
import TasksView from '../components/calendar/Tasks/TasksView';
import { DateTime } from 'luxon';

export interface ISelectedDate {
  item: {
    day: string;
    isoDay: DateTime;
  };
  index: number;
  isViewable: boolean;
}

export default function CalendarScreen() {
  const [selectedDay, setSelectedDay] = useState<ISelectedDate>();
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
