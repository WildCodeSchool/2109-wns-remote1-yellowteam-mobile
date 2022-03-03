import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { Spinner } from '@ui-kitten/components';

const DateDisplay = ({ selectedDay }) => {
  if (!selectedDay || !selectedDay.item)
    return <Spinner style={styles.container} />;

  const today =
    selectedDay.item.day.split(' ')[0].charAt(0).toUpperCase() +
    selectedDay.item.day.split(' ')[0].slice(1);

  return (
    <View style={styles.container}>
      <Text style={styles.textDay}>{selectedDay.item.day.split(' ')[1]}</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.textDate}>
          {selectedDay.item.day.split(' ')[1]}{' '}
          {selectedDay.item.day.split(' ')[2]}
        </Text>
        <Text style={styles.textToday}>{today}</Text>
      </View>
    </View>
  );
};

export default DateDisplay;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  textDay: {
    fontSize: 140,
    color: '#DADADA',
  },
  textDate: {
    fontSize: 20,
    color: '#6D6D6D',
  },
  textToday: {
    fontSize: 40,
    color: 'black',
  },
  dateContainer: {
    position: 'absolute',
    left: 10,
    top: '30%',
  },
});
