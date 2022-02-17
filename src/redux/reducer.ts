import { combineReducers } from 'redux';
import user from './slices/user';
import app from './slices/app';

const rootReducer = combineReducers({
  user,
  app,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
