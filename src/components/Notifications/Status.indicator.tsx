import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function StatusIndicator({ status }) {
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
    return 'white';
  };
  return <View style={{ ...styles.container, backgroundColor: bgColor() }} />;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    position: 'absolute',
    right: 50,
    bottom: -5,
    zIndex: 5,
    width: 80,
    height: 10,
  },
});
