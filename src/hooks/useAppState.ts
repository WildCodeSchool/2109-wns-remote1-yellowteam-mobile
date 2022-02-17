import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../redux/actions';
import { RootState } from '../redux/reducer';

const useReduxAppState = () => {
  const { isMenu } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const toggleIsMenuState = () => dispatch(toggleMenu());
  return { isMenu, toggleIsMenuState };
};
export default useReduxAppState;
