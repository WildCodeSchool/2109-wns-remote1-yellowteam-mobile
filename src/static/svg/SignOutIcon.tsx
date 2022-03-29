import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ISignOut {
  color: string;
}

const SignOutIcon = ({ color }: ISignOut): JSX.Element => (
  <Svg width="29" height="30" viewBox="0 0 29 30" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.36948 3.45154L15.8868 2.38724C19.1219 1.85892 20.7395 1.59476 21.7967 2.49326C22.8538 3.39176 22.8538 5.03077 22.8538 8.3088V13.9995H15.2629L18.8349 9.35948L17.2501 8.13948L12.4387 14.3895L11.9692 14.9995L12.4387 15.6095L17.2501 21.8595L18.8349 20.6395L15.2629 15.9995H22.8538V21.6902C22.8538 24.9682 22.8538 26.6072 21.7967 27.5057C20.7395 28.4042 19.1219 28.1401 15.8868 27.6117L9.36948 26.5474C7.76737 26.2858 6.96631 26.155 6.49024 25.5949C6.01416 25.0347 6.01416 24.2231 6.01416 22.5997V7.39925C6.01416 5.77592 6.01416 4.96425 6.49024 4.40412C6.96631 3.84399 7.76737 3.71318 9.36948 3.45154Z"
      fill={color}
    />
  </Svg>
);

export default SignOutIcon;