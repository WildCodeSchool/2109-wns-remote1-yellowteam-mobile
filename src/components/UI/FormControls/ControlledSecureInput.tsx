import { Input } from '@ui-kitten/components';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleSheet } from 'react-native';

type Props = {
  passwordVisible: boolean;
  control: Control;
  name: string;
  placeholder: string;
};

export default function ControlledSecureInput({
  passwordVisible,
  control,
  placeholder,
  name,
}: Props) {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          secureTextEntry={!passwordVisible}
          onChangeText={(v) => onChange(v)}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          size="large"
          style={styles.input}
          textStyle={{ color: '#878787' }}
        />
      )}
      name={name}
      rules={{ required: true }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 3,
    backgroundColor: 'white',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#878787',
  },
});
