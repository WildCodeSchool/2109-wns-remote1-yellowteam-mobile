/* eslint-disable react-hooks/exhaustive-deps */
import { StyleSheet, FlatList } from 'react-native';
import {
  Dispatch,
  Ref,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { DateTime } from 'luxon';
import { Spinner } from '@ui-kitten/components';
import DateCard from './dateCard';
import { ISelectedDate } from '../../screens/CalendarScreen';

const Drange = new Array(100).fill('').map((item, index) => ({
  day: DateTime.local()
    .plus({ days: index })
    .toLocaleString(DateTime.DATE_HUGE),
  isoDay: DateTime.local().plus({ days: index }),
}));

interface IProps {
  selectedDay: ISelectedDate;
  setSelectedDay: Dispatch<SetStateAction<ISelectedDate>>;
}

function DateSlider({ selectedDay, setSelectedDay }: IProps): JSX.Element {
  const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
  const date = DateTime.fromISO(selectedDate.toISOString());
  const [itemsInView, setItemsInView] = useState([]);
  const [dateRange, setDateRange] = useState<{ day: string }[]>([]);

  useEffect(() => {
    setDateRange(Drange);
    setSelectedDay({ item: Drange[0], index: 0, isViewable: true });
  }, []);

  const onViewRef = useRef((viewableItems) => {
    setItemsInView(viewableItems.viewableItems);
    setSelectedDay(viewableItems.viewableItems[0]);
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 100 });

  if (!dateRange.length || !selectedDay) return <Spinner />;
  return (
    <FlatList
      horizontal
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
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: '100%',
    flexShrink: 1,
    flexGrow: 1,
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
