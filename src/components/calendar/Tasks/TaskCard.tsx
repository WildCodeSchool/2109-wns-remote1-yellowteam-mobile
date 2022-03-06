import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Card } from '@ui-kitten/components';
import { DateTime } from 'luxon';
import StatusIndicator from '../../Notifications/Status.indicator';

export default function TaskCard({ item }) {
  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    if (
      DateTime.fromISO(item.end_date) <= DateTime.local().plus({ days: 7 }) &&
      DateTime.fromISO(item.end_date) >= DateTime.local()
    ) {
      setIsAlert(true);
    }
  }, []);

  return (
    <Card
      style={{
        overflow: 'visible',
        position: 'relative',
        marginVertical: 4,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <Text>{item.title}</Text>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{ fontWeight: 'normal', color: 'gray', fontSize: 10 }}
      >
        {item?.description}
      </Text>
      <Text>
        End :
        {DateTime.fromISO(item?.end_date).toLocaleString(DateTime.DATE_HUGE)}
      </Text>
      <StatusIndicator isAlert={isAlert} status={item.status_task} />
    </Card>
  );
}

const styles = StyleSheet.create({});
