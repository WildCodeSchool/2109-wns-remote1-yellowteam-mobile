/* eslint-disable react/jsx-props-no-spreading */
import { Text, TextProps } from './Themed';

export default function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}
