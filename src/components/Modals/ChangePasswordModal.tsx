/* eslint-disable object-curly-newline */
import { Button, Card, Input, Modal } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { StyleSheet, Text } from 'react-native';
import { useChangeSelfPasswordMutation } from '../../generated/graphql';
import useReduxUserState from '../../hooks/useUserState';
import ControlledSecureInput from '../UI/ControlledSecureInput';

interface IProps {
  visible: boolean;
  setChangePassword: (value: boolean) => void;
}

export default function ChangePasswordModal({
  visible,
  setChangePassword,
}: IProps) {
  const [passwordVisible] = useState<boolean>(false);

  const { handleSubmit, control, resetField } = useForm();
  const { user, dispatchLogout } = useReduxUserState();

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
      onCompleted: () => setChangePassword(false),
    });
  };

  return (
    <Modal
      onBackdropPress={() => setChangePassword(false)}
      style={{ width: '80%' }}
      backdropStyle={styles.backdrop}
      visible={visible}
    >
      <Card style={{ width: '100%' }} disabled>
        <Text>Change your password here ⚠️</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              secureTextEntry={!passwordVisible}
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
              secureTextEntry={!passwordVisible}
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
              secureTextEntry={!passwordVisible}
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

        <ControlledSecureInput
          control={control}
          name="confirmpassword"
          placeholder="Confirm Password"
          passwordVisible={passwordVisible}
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
            setChangePassword(false);
            resetField('oldpassword');
            resetField('newpassword');
            resetField('confirmpassword');
          }}
        >
          ANNULER
        </Button>
      </Card>
    </Modal>
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
