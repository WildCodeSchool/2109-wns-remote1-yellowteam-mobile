import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

interface ISwitch {
  color: string;
}

const SwitchIcon = ({ color }: ISwitch): JSX.Element => (
  <Svg width="32" height="18" viewBox="0 0 32 18" fill="none">
    <Path
      d="M0 9C0 4.02944 4.02944 0 9 0H23C27.9706 0 32 4.02944 32 9V9C32 13.9706 27.9706 18 23 18H9C4.02944 18 0 13.9706 0 9V9Z"
      fill={color}
    />
    <Rect
      x="1.28003"
      y="1.28571"
      width="15.36"
      height="15.4286"
      rx="7.68"
      fill="white"
    />
  </Svg>
);

export default SwitchIcon;
