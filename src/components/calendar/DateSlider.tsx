import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { ScrollView } from 'react-native-gesture-handler';
import DateCard from './dateCard';
import { Spinner } from '@ui-kitten/components';

const Drange = new Array(30).fill('').map((item, index) => ({
  day: DateTime.local()
    .plus({ days: index })
    .toLocaleString(DateTime.DATE_HUGE),
}));

const DateSlider = ({ selectedDay, setSelectedDay }) => {
  const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
  const date = DateTime.fromISO(selectedDate.toISOString());
  const [itemsInView, setItemsInView] = useState([]);
  const [dateRange, setDateRange] = useState<{ day: string }[]>([]);

  useEffect(() => {
    setDateRange(Drange);
    setSelectedDay(Drange[3]);
  }, []);

  const onViewRef = React.useRef((viewableItems) => {
    setItemsInView(viewableItems.viewableItems);
    setSelectedDay(viewableItems.viewableItems[3]);
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 100 });

  if (!dateRange.length || !selectedDay) return <Spinner />;
  return (
    <FlatList
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfigRef.current}
      keyExtractor={(item, index) => index.toString()}
      style={styles.container}
      data={dateRange}
      renderItem={({ item, index }) => (
        <DateCard selectedDay={selectedDay} index={index} item={item} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: '100%',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
    fontSize: 15,
  },
  textNumber: { color: 'gray', marginVertical: 10, fontSize: 20 },
  dateCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
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

export default DateSlider;
