import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from 'react-navigation';

interface ISigngleNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

type IUser = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  roles: string[];
};

type UserState = {
  user: IUser;
  isAuth: boolean;
};
