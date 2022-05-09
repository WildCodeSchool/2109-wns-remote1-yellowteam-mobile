import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

function DateCard({ item, index, selectedDay }) {
  return (
    <View key={index} style={styles.dateCard}>
      <Text
        style={
          (styles.text,
          { color: selectedDay.index === index ? 'orange' : 'gray' })
        }
      >
        {item.day.split(' ')[0]}
      </Text>
      <Text
        style={{
          color: selectedDay.index === index ? 'orange' : 'gray',
          ...styles.textNumber,
        }}
      >
        {item.day.split(' ')[1]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 10,
    fontSize: 15,
  },
  textNumber: { marginVertical: 20, fontSize: 20 },
  dateCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default DateCard;
