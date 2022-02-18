/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export default function EmailIcon(style: ImageStyle): IconElement {
  return <Icon {...style} name="email" />;
}
