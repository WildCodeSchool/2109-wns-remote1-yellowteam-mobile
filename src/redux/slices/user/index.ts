/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

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
    login: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: () => initialState,
  },
});

export const { login, logout } = appSlice.actions;

export default appSlice.reducer;
