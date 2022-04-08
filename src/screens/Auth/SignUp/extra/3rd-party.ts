/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react';
import { ScrollViewProps } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

/**
 * https://github.com/APSL/react-native-keyboard-aware-scroll-view
 */
export default function KeyboardAvoidingView(props: any): React.ReactElement {
  const defaultProps: ScrollViewProps = {
    style: { flex: 1 },
    contentContainerStyle: { flexGrow: 1 },
    bounces: false,
    bouncesZoom: false,
    alwaysBounceVertical: false,
    alwaysBounceHorizontal: false,
  };

  return React.createElement(KeyboardAwareScrollView, {
    enableOnAndroid: true,
    ...defaultProps,
    ...props,
  });
}
