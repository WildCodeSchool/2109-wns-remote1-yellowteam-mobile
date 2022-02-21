/* eslint-disable no-confusing-arrow */
/* eslint-disable global-require */
import { Button, Card, Input, Modal } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import {
  AsyncStorage,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import useReduxUserState from '../../hooks/useUserState';

export default function ProfileScreen() {
  const { user, dispatchLogout } = useReduxUserState();
  const [changePassword, setChangePassord] = useState<boolean>(false);
  const { handleSubmit, register, control, resetField } = useForm();

  const avatarLink = () =>
    user.avatar
      ? { uri: user.avatar }
      : require('../../../assets/images/profilepictureplaceholder.jpeg');

  const handleChangePassword = () => {
    setChangePassord(true);
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

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
          height: '80%',
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
        <Modal
          style={{ width: '80%' }}
          backdropStyle={styles.backdrop}
          visible={changePassword}
        >
          <Card style={{ width: '100%' }} disabled>
            <Text>Change your password here ⚠️</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={(v) => onChange(v)}
                  placeholder="Old Password"
                  value={value}
                  onBlur={onBlur}
                  size="large"
                  style={styles.input}
                />
              )}
              name="oldpassword"
              rules={{ required: true }}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={(v) => onChange(v)}
                  placeholder="New Password"
                  value={value}
                  onBlur={onBlur}
                  size="large"
                  style={styles.input}
                />
              )}
              name="newpassword"
              rules={{ required: true }}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onChangeText={(v) => onChange(v)}
                  placeholder="Confiorm Password"
                  value={value}
                  onBlur={onBlur}
                  size="large"
                  style={styles.input}
                />
              )}
              name="confirmpassword"
              rules={{ required: true }}
            />

            <Button
              style={styles.button}
              status="primary"
              onPress={handleSubmit(onSubmit)}
            >
              CONFIRMER
            </Button>
            <Button
              style={styles.button}
              status="danger"
              onPress={() => {
                setChangePassord(false);
                resetField('oldpassword');
                resetField('newpassword');
                resetField('confirmpassword');
              }}
            >
              ANNULER
            </Button>
          </Card>
        </Modal>

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
            <Text onPress={handleChangePassword}>Change Password</Text>
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
  button: { marginVertical: 5 },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    marginVertical: 7,
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
