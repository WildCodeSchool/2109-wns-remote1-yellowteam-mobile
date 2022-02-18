/* eslint-disable react/jsx-props-no-spreading */
import { Text, TextProps } from './Themed';

export default function MonoText(props: TextProps) {
  const { style } = props;
  return <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />;
}
