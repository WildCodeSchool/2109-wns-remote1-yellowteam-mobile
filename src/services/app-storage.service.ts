/* eslint-disable import/no-cycle */
import { LogBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Mapping, Theme } from './theme.service';

const MAPPING_KEY = 'mapping';
const THEME_KEY = 'theme';

export default class AppStorage {
  static getMapping = (fallback?: Mapping): Promise<Mapping> =>
    AsyncStorage.getItem(MAPPING_KEY).then(
      (mapping: Mapping) => mapping || fallback,
    );

  static getTheme = (fallback?: string): Promise<string | null | undefined> =>
    AsyncStorage.getItem(THEME_KEY).then(
      (theme: string | null) => theme || fallback,
    );

  static setMapping = (mapping: Mapping): Promise<void> =>
    AsyncStorage.setItem(MAPPING_KEY, mapping);

  static getToken = (fallback: string): Promise<void | string> =>
    AsyncStorage.getItem('Authorization').then(
      (header: string | null) => header || fallback,
    );

  static setTheme = (theme: Theme): Promise<void> =>
    AsyncStorage.setItem(THEME_KEY, theme);
}

/**
 * In a Bare React Native project you should use
 * https://github.com/react-native-community/async-storage
 *
 * However, Expo runs AsyncStorage exported from react-native.
 * Just to save application bundle size, we still using this one.
 */
LogBox.ignoreLogs(['AsyncStorage has been extracted']);
