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
        />
      )}
      name={name}
      rules={{ required: true }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 7,
  },
});
