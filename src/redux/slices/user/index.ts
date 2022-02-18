import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
  user: {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    role: [],
    avatar: '',
  },
  isAuth: false,
};

const appSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState['user']>) => ({
      ...state,
      isAuth: true,
      user: action.payload,
    }),
    logout: () => initialState,
  },
});

export const { login, logout } = appSlice.actions;

export default appSlice.reducer;
