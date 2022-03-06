import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Spinner } from '@ui-kitten/components';

export default function FullWidthSpinner() {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner />
    </View>
  );
}

const styles = StyleSheet.create({});
