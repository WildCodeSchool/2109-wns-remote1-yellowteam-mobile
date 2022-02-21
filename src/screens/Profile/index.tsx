/* eslint-disable no-confusing-arrow */
/* eslint-disable global-require */
import {
  Button,
  Card,
  Input,
  Layout,
  Modal,
  ViewPager,
} from '@ui-kitten/components';
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
import {
  useChangeSelfPasswordMutation,
  useGetSelfTasksQuery,
} from '../../generated/graphql';
import PagerView from 'react-native-pager-view';

import useReduxUserState from '../../hooks/useUserState';
import PersonnalInformations from '../../components/Profile/PersonnalInformations';
import ChangePasswordModal from '../../components/Modals/ChangePasswordModal';

export default function ProfileScreen() {
  const { user, dispatchLogout } = useReduxUserState();
  const [changePassword, setChangePassword] = useState<boolean>(false);
  const { handleSubmit, control, resetField } = useForm();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const avatarLink = () =>
    user.avatar
      ? { uri: user.avatar }
      : require('../../../assets/images/profilepictureplaceholder.jpeg');

  const [mutate, { data }] = useChangeSelfPasswordMutation();

  const onSubmit = async (formData: FieldValues) => {
    await mutate({
      variables: {
        data: {
          userId: user.id,
          oldpassword: formData.oldpassword,
          newPassword: formData.newpassword,
        },
      },
      onCompleted: () => setChangePassord(false),
    });
  };
  const { data: tasks } = useGetSelfTasksQuery({
    variables: {
      where: {
        id: user.id ? user.id : '',
      },
    },
  });
  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', zIndex: 5, top: -130 }}>
        <ImageBackground
          resizeMode="contain"
          style={styles.image}
          source={avatarLink()}
        />
      </View>
      <View
        style={{
          height: '72%',
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
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 11,
          },
          shadowOpacity: 0.57,
          shadowRadius: 15.19,
          elevation: 23,
        }}
      >
        <ChangePasswordModal
          visible={changePassword}
          setChangePassword={setChangePassword}
        />

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

        <Card style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
          <Card style={{ width: 50, height: 50, backgroundColor: 'orange' }}>
            <Text style={{ color: 'white', width: '100%', height: '100%' }}>
              {tasks?.user.tasks.length}
            </Text>
          </Card>
        </Card>

        <ViewPager
          swipeEnabled
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
          style={{
            zIndex: 10,
            width: '100%',
            backgroundColor: 'white',
          }}
        >
          <Layout level="2" style={styles.tab}>
            <Card style={{ marginVertical: 2, zIndex: 5, width: '100%' }}>
              <Text
                onPress={() => setSelectedIndex(1)}
                style={{ width: '100%' }}
              >
                Change personnal informations
              </Text>
            </Card>
            <Card style={{ marginVertical: 2 }}>
              <Text onPress={() => setChangePassword(true)}>
                Change Password
              </Text>
            </Card>
            <Card style={{ marginVertical: 2 }}>
              <Text>Support</Text>
            </Card>
          </Layout>
          <Layout level="2" style={styles.tab}>
            <Card
              onPress={() => setSelectedIndex(1)}
              style={{ marginVertical: 2, zIndex: 5, width: '100%' }}
            >
              <Text style={{ width: '100%' }}>
                Change personnal informations
              </Text>
            </Card>
            <Card style={{ marginVertical: 2 }}>
              <Text onPress={() => setChangePassword(true)}>
                Change Password
              </Text>
            </Card>
            <Card style={{ marginVertical: 2 }}>
              <Text>Support</Text>
            </Card>
          </Layout>
          <Layout level="2" style={styles.tab}>
            <Card
              onPress={() => setSelectedIndex(1)}
              style={{ marginVertical: 2, zIndex: 5, width: '100%' }}
            >
              <Text style={{ width: '100%' }}>
                Change personnal informations
              </Text>
            </Card>
            <Card style={{ marginVertical: 2 }}>
              <Text onPress={() => setChangePassword(true)}>
                Change Password
              </Text>
            </Card>
            <Card style={{ marginVertical: 2 }}>
              <Text>Support</Text>
            </Card>
            <Card
              onPress={() => {
                AsyncStorage.setItem('x-authorization', '').catch((err) =>
                  console.log(err),
                );
                dispatchLogout();
              }}
              style={{ marginVertical: 2, backgroundColor: 'gray' }}
            >
              <Text>disconnect</Text>
            </Card>
          </Layout>
          <PersonnalInformations setSelectedIndex={setSelectedIndex} />
          <Layout level="2" style={styles.tab}>
            <Card style={{ marginVertical: 2, zIndex: 5, width: '100%' }}>
              <Text style={{ width: '100%' }}>
                Change personnal informations
              </Text>
            </Card>
            <Card style={{ marginVertical: 2 }}>
              <Text onPress={() => setChangePassword(true)}>
                Change Password
              </Text>
            </Card>
            {/* <Card style={{ marginVertical: 2 }}>
              <Text>Support</Text>
            </Card> */}
          </Layout>
        </ViewPager>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
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
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
