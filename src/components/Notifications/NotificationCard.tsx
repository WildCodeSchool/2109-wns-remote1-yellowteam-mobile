import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  GetSelfNotificationsQuery,
  Notification,
} from '../../generated/graphql';
import StatusIndicator from './Status.indicator';

interface IProps {
  notification: GetSelfNotificationsQuery['user']['notifications'][number];
}

const NoficationCard = ({ notification }: IProps) => {
  const bgColor = (status: string) => {
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

  return (
    <View
      style={{
        ...styles.card,
        shadowColor: bgColor(notification.status),
      }}
    >
      <StatusIndicator status={notification.status} />
      <Text style={styles.title}>{notification.title}</Text>
      <Text style={styles.content}>{notification.content}</Text>
    </View>
  );
};

export default NoficationCard;

const styles = StyleSheet.create({
  content: {
    fontFamily: 'poppins-regular',
    fontWeight: '100',
    color: 'gray',
    fontSize: 10,
  },
  card: {
    position: 'relative',
    zIndex: 5,
    padding: 10,
    backgroundColor: 'white',
    width: '98%',
    marginLeft: 4,
    borderRadius: 5,
    marginVertical: 7,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: { fontWeight: '900' },
});
