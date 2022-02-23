import { Input } from '@ui-kitten/components';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleSheet } from 'react-native';

type Props = {
  control: Control;
  name: string;
  placeholder: string;
};

export default function ControlledInput({ control, placeholder, name }: Props) {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          onChangeText={(v) => onChange(v)}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          size="large"
          textStyle={{ color: '#878787' }}
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
    marginVertical: 5,
    backgroundColor: 'white',
    borderColor: '#878787',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
});
