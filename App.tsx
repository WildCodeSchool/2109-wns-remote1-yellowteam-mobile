/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable global-require */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppearanceProvider } from 'react-native-appearance';
import { Platform } from 'react-native';
import * as eva from '@eva-design/eva';
import Constants from 'expo-constants';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as Notifications from 'expo-notifications';
import { ApolloProvider } from '@apollo/client';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import Theme from './assets/style/app-theme.json'; // <-- Import app theme
import { appMappings, appThemes } from './assets/style/app-theming';
import useCachedResources from './src/hooks/useCachedResources';
import { AppIconsPack } from './src/components/app/app-icons-pack';
import AppStorage from './src/services/app-storage.service';
import {
  AppLoading,
  LoadFontsTask,
  Task,
} from './src/components/app/app-loading.component';
import AppNavigator from './src/navigation/navigation.component';
import { Mapping, Theming } from './src/services/theme.service';
import store from './src/redux/store';
import { client } from './src/services/apollo-client';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
const loadingTasks: Task[] = [
  () =>
    LoadFontsTask({
      'opensans-regular': require('./assets/fonts/opensans-regular.ttf'),
      'roboto-regular': require('./assets/fonts/roboto-regular.ttf'),
    }),
  () =>
    AppStorage.getMapping(defaultConfig.mapping).then((result) => [
      'mapping',
      result,
    ]),
  () =>
    AppStorage.getTheme(defaultConfig.theme).then((result) => [
      'theme',
      result,
    ]),
];

const defaultConfig: { mapping: Mapping; theme: string } = {
  mapping: 'eva',
  theme: 'light',
};

function App({ mapping, theme }: { mapping: Mapping; theme: Theme }) {
  const [, setExpoPushToken] = useState('');
  const [, setNotification] = useState<Notifications.Notification | false>(
    false,
  );
  const notificationListener = useRef<any>(null);
  const responseListener = useRef<any>(null);
  const isLoadingComplete = useCachedResources();

  const [mappingContext] = Theming.useMapping(appMappings, mapping);
  const [themeContext] = Theming.useTheming(appThemes, mapping, theme);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token as string),
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    schedulePushNotification("C'est ok ca marche !");
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current,
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  if (!isLoadingComplete) return null;

  return (
    <ApolloProvider client={client}>
      <AppearanceProvider>
        <IconRegistry icons={[EvaIconsPack, AppIconsPack]} />
        <Provider store={store}>
          <ApplicationProvider {...eva} theme={{ ...eva.light, ...Theme }}>
            <Theming.MappingContext.Provider value={mappingContext}>
              <Theming.ThemeContext.Provider value={themeContext}>
                <SafeAreaProvider>
                  <AppNavigator />
                </SafeAreaProvider>
              </Theming.ThemeContext.Provider>
            </Theming.MappingContext.Provider>
          </ApplicationProvider>
        </Provider>
      </AppearanceProvider>
    </ApolloProvider>
  );
}

export default function Loader(): React.ReactElement {
  return (
    <AppLoading tasks={loadingTasks} initialConfig={defaultConfig}>
      {(props) => <App {...props} />}
    </AppLoading>
  );
}

export async function schedulePushNotification(content: string) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Hey welbome back here ! 📬',
      body: content,
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

const registerForPushNotificationsAsync = async (): Promise<
  string | undefined
> => {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
};
