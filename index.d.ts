type IUser = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  role: string[];
};

type UserState = {
  user: IUser;
  isAuth: boolean;
};
