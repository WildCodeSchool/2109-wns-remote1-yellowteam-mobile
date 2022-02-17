import { AsyncStorage, YellowBox } from 'react-native';
import { Mapping, Theme } from './theme.service';

const MAPPING_KEY = 'mapping';
const THEME_KEY = 'theme';

export class AppStorage {
  static getMapping = (fallback?: Mapping): Promise<Mapping> => AsyncStorage.getItem(MAPPING_KEY).then((mapping: Mapping) => mapping || fallback);

  static getTheme = (fallback?: Theme): Promise<Theme> => AsyncStorage.getItem(THEME_KEY).then((theme: Theme) => theme || fallback);

  static setMapping = (mapping: Mapping): Promise<void> => AsyncStorage.setItem(MAPPING_KEY, mapping);

  static setTheme = (theme: Theme): Promise<void> => AsyncStorage.setItem(THEME_KEY, theme);
}

/**
 * In a Bare React Native project you should use
 * https://github.com/react-native-community/async-storage
 *
 * However, Expo runs AsyncStorage exported from react-native.
 * Just to save application bundle size, we still using this one.
 */
YellowBox.ignoreWarnings(['AsyncStorage has been extracted']);
