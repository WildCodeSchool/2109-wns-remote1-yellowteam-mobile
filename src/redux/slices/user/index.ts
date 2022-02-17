/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../../../index';

const initialState: UserState = {
  user: {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    roles: [],
    avatar: '',
  },
  isAuth: false,
};

const appSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState['user']>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: () => initialState,
  },
});

export const { login, logout } = appSlice.actions;

export default appSlice.reducer;
