import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/actions';
import { RootState } from '../redux/reducer';

const useReduxUserState = () => {
  const { isAuth, user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const dispatchLogin = (userPayload: IUser) => dispatch(login(userPayload));
  const dispatchLogout = () => dispatch(logout());

  return {
    isAuth,
    user,
    dispatchLogin,
    dispatchLogout,
  };
};

export default useReduxUserState;
