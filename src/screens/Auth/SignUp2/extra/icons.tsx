import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export function EmailIcon(style: ImageStyle): IconElement {
  return <Icon {...style} name="email" />;
}

export function EyeIcon(style: ImageStyle): IconElement {
  return <Icon {...style} name="eye" />;
}

export function EyeOffIcon(style: ImageStyle): IconElement {
  return <Icon {...style} name="eye-off" />;
}

export function PersonIcon(style: ImageStyle): IconElement {
  return <Icon {...style} name="person" />;
}

export function PlusIcon(style: 'ImageStyle'): IconElement {
  return <Icon {...style} name="plus" />;
}
