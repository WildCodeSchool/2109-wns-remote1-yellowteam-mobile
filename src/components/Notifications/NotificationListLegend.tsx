import { Text, View } from 'react-native';
import React from 'react';

export default function NotificationListLegend() {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          color: 'white',
          padding: 3,
          width: '33.3%',
          textAlign: 'center',
          backgroundColor: 'orange',
        }}
      >
        Read
      </Text>
      <Text
        style={{
          color: 'white',
          padding: 3,
          width: '33.3%',
          textAlign: 'center',
          backgroundColor: 'blue',
        }}
      >
        Unread
      </Text>
      <Text
        style={{
          color: 'white',
          padding: 3,
          width: '33.3%',
          textAlign: 'center',
          backgroundColor: 'red',
        }}
      >
        Alert
      </Text>
    </View>
  );
}
