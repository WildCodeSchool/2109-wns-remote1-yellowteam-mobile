/* eslint-disable no-confusing-arrow */
/* eslint-disable global-require */
import { Button } from '@ui-kitten/components';
import React from 'react';
import {
  AsyncStorage,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import useReduxUserState from '../../hooks/useUserState';

export default function ProfileScreen() {
  const { user, dispatchLogout } = useReduxUserState();

  const avatarLink = () =>
    user.avatar
      ? { uri: user.avatar }
      : require('../../../assets/images/profilepictureplaceholder.jpeg');

  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', zIndex: 5 }}>
        <ImageBackground
          resizeMode="stretch"
          style={styles.image}
          source={avatarLink()}
        />
      </View>
      <View
        style={{
          height: '60%',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          padding: 30,
          bottom: 0,
          zIndex: 10,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        <View>
          <View
            style={{ display: 'flex', flexDirection: 'row', width: '100%' }}
          >
            <Text style={{ marginHorizontal: 2, fontWeight: 'bold' }}>
              {user.first_name}
            </Text>
            <Text style={{ marginHorizontal: 2, fontWeight: 'bold' }}>
              {user.last_name}
            </Text>
          </View>
          <Text
            style={{ marginHorizontal: 2, fontWeight: '300', color: 'gray' }}
          >
            {user.email}
          </Text>
        </View>
        <Button
          onPress={() => {
            AsyncStorage.setItem('x-authorization', '').catch((err) =>
              console.log(err),
            );
            dispatchLogout();
          }}
        >
          Disconect
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 500,
    height: 500,
  },
  pie: {
    width: '50%',
  },
  textCard: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  card: {
    marginVertical: 4,
    width: '100%',
    display: 'flex',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
