/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react';
import { ScrollViewProps } from 'react-native';
import lib from 'react-native-keyboard-aware-scroll-view';
/**
 * https://github.com/APSL/react-native-keyboard-aware-scroll-view
 */
export default function KeyboardAvoidingView(props): React.ReactElement {
  const defaultProps: ScrollViewProps = {
    style: { flex: 1 },
    contentContainerStyle: { flexGrow: 1 },
    bounces: false,
    bouncesZoom: false,
    alwaysBounceVertical: false,
    alwaysBounceHorizontal: false,
  };

  return React.createElement(lib.KeyboardAwareScrollView, {
    enableOnAndroid: true,
    ...defaultProps,
    ...props,
  });
}
