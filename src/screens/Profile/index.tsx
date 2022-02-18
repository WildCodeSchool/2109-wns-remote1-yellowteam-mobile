/* eslint-disable no-confusing-arrow */
/* eslint-disable global-require */
import { Button, Card } from '@ui-kitten/components';
import React from 'react';
import {
  AsyncStorage,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
          height: '70%',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          overflow: 'hidden',
          bottom: 0,
          zIndex: 10,
          position: 'absolute',
          width: '100%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <View style={{ width: '100%', padding: 30 }}>
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
          style={{ width: '100%' }}
          size="tiny"
          onPress={() => {
            AsyncStorage.setItem('x-authorization', '').catch((err) =>
              console.log(err),
            );
            dispatchLogout();
          }}
        >
          Disconect
        </Button>
        <ScrollView
          style={{
            zIndex: 10,
            width: '100%',
            backgroundColor: 'white',
          }}
        >
          <Card style={{ marginVertical: 2, zIndex: 5, width: '100%' }}>
            <Text style={{ width: '100%' }}>Change personnal informations</Text>
          </Card>
          <Card style={{ marginVertical: 2 }}>
            <Text>Change Password</Text>
          </Card>
          <Card style={{ marginVertical: 2 }}>
            <Text>Support</Text>
          </Card>
          <Card style={{ marginVertical: 2 }}>
            <Text>Change personnal informations</Text>
          </Card>
          <Card style={{ marginVertical: 2 }}>
            <Text>Change Password</Text>
          </Card>
          <Card style={{ marginVertical: 2 }}>
            <Text>Support</Text>
          </Card>
          <Card style={{ marginVertical: 2 }}>
            <Text>Change personnal informations</Text>
          </Card>
          <Card style={{ marginVertical: 2 }}>
            <Text>Change Password</Text>
          </Card>
          <Card style={{ marginVertical: 2 }}>
            <Text>Support</Text>
          </Card>
          <Card style={{ marginVertical: 2 }}>
            <Text>Change personnal informations</Text>
          </Card>
          <Card style={{ marginVertical: 2 }}>
            <Text>Change Password</Text>
          </Card>
          <Card style={{ marginVertical: 2 }}>
            <Text>Support</Text>
          </Card>
        </ScrollView>
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
