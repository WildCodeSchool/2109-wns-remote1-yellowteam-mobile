import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function StatusIndicator({ status, isAlert }) {
  console.log('alert', isAlert);

  const bgColor = () => {
    if (status === 'READ') {
      return '#F69826';
    }
    if (status === 'UNREAD') {
      return '#9093DF';
    }
    if (status === 'ALERT') {
      return '#FF3A3A';
    }
    if (status === 'IN_PROGRESS') {
      return '#9093DF';
    }
    if (status === 'FIHISHED') {
      return '#F69826';
    }
    if (status === 'NOT_STARTED') {
      return '#FF3A3A';
    }
    return 'white';
  };
  return (
    <View style={{ ...styles.container, backgroundColor: bgColor() }}>
      <Text
        style={{
          color: 'white',
          position: 'absolute',
          top: 0,
          fontSize: 6,
          fontWeight: 'bold',
        }}
      >
        {isAlert && 'Time Alert !'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    right: 50,
    overflow: 'visible',
    bottom: -5,
    zIndex: 5,
    width: 80,
    height: 10,
  },
});
