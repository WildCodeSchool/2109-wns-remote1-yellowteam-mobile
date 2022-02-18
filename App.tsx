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
import Constants from 'expo-constants';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as Notifications from 'expo-notifications';
import { useFonts } from 'expo-font';
import { ApolloProvider } from '@apollo/client';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
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
    shouldSetBadge: false,
  }),
});

const loadingTasks: Task[] = [
  // () =>
  //   LoadFontsTask({
  //     'opensans-regular': require('./assets/fonts/opensans-regular.ttf'),
  //     'roboto-regular': require('./assets/fonts/roboto-regular.ttf'),
  //   }),
  // () =>
  //   AppStorage.getMapping(defaultConfig.mapping).then((result) => [
  //     'mapping',
  //     result,
  //   ]),
  // () =>
  //   AppStorage.getTheme(defaultConfig.theme).then((result) => [
  //     'theme',
  //     result,
  //   ]),
];

const defaultConfig: { mapping: Mapping; theme: string } = {
  mapping: 'eva',
  theme: 'light',
};

function App({ mapping, theme }) {
  const [, setExpoPushToken] = useState('');
  const [, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const isLoadingComplete = useCachedResources();
  // const data = async () =>
  //   axios
  //     .get('http://192.168.1.12:5000/')
  //     .then((r) => console.log(r.data))
  //     .catch((r) => console.warn('error', r));
  // console.log(data());
  const [mappingContext, currentMapping] = Theming.useMapping(
    appMappings,
    mapping,
  );
  const [themeContext, currentTheme] = Theming.useTheming(
    appThemes,
    mapping,
    theme,
  );

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token),
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
      <IconRegistry icons={[EvaIconsPack, AppIconsPack]} />
      <AppearanceProvider>
        <Provider store={store}>
          <ApplicationProvider {...currentMapping} theme={currentTheme}>
            <Theming.MappingContext.Provider value={mappingContext}>
              <Theming.ThemeContext.Provider value={themeContext}>
                <SafeAreaProvider>
                  {/* <StatusBar /> */}
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
  useFonts({
    'opensans-regular': require('./assets/fonts/opensans-regular.ttf'),
    'roboto-regular': require('./assets/fonts/roboto-regular.ttf'),
  });
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
