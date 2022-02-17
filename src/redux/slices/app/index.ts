/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type AppState = {
  isMenu: boolean;
};

const initialState: AppState = {
  isMenu: false,
};

const appSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    toggleMenu: (state) => ({
      ...state,
      isMenu: !state.isMenu,
    }),
  },
});

export const { toggleMenu } = appSlice.actions;

export default appSlice.reducer;
