import * as React from 'react';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

interface ISignOut {
  color: string;
}

const DeleteIcon = ({ color }: ISignOut): JSX.Element => (
  <Svg width="15" height="15" viewBox="0 0 15 15" fill={color}>
    <Rect width="15" height="15" fill="white" />
    <Circle cx="7.5" cy="7.5" r="5.625" fill="#4E4F54" />
    <Path
      d="M10 5L5 10"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
    />
    <Path
      d="M5 5L10 10"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
    />
  </Svg>
);

export default DeleteIcon;
