import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppearanceProvider } from "react-native-appearance";
import { default as theme } from "./assets/style/custom-theme.json"; // <-- Import app theme
import { appMappings, appThemes } from "./assets/style/app-theming";
import Constants from "expo-constants";

import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import useCachedResources from "./src/hooks/useCachedResources";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import useColorScheme from "./src/hooks/useColorScheme";
import { AppIconsPack } from "./src/components/app/app-icons-pack";
import * as Notifications from "expo-notifications";
import { AppStorage } from "./src/services/app-storage.service";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useFonts } from "expo-font";
import { Platform } from "react-native";
import {
  AppLoading,
  LoadFontsTask,
} from "./src/components/app/app-loading.component";
import { AppNavigator } from "./src/navigation/navigation.component";
import React, { useEffect, useRef, useState } from "react";
import { Theming } from "./src/services/theme.service";
import { Provider } from "react-redux";
import store from "./src/redux/store";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const loadingTasks: Task[] = [
  () =>
    LoadFontsTask({
      "opensans-regular": require("./assets/fonts/opensans-regular.ttf"),
      "roboto-regular": require("./assets/fonts/roboto-regular.ttf"),
    }),
  () =>
    AppStorage.getMapping(defaultConfig.mapping).then((result) => [
      "mapping",
      result,
    ]),
  () =>
    AppStorage.getTheme(defaultConfig.theme).then((result) => [
      "theme",
      result,
    ]),
];

const defaultConfig: { mapping: Mapping; theme: Theme } = {
  mapping: "eva",
  theme: "light",
};

export const client = new ApolloClient({
  uri: "https://ytask.digitalcopilote.re/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

function App({ mapping, theme }) {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [mappingContext, currentMapping] = Theming.useMapping(
    appMappings,
    mapping
  );
  const [themeContext, currentTheme] = Theming.useTheming(
    appThemes,
    mapping,
    theme
  );

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
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
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default (): React.ReactElement => {
  const [loaded] = useFonts({
    "opensans-regular": require("./assets/fonts/opensans-regular.ttf"),
    "roboto-regular": require("./assets/fonts/roboto-regular.ttf"),
  });
  return (
    <AppLoading
      tasks={loadingTasks}
      initialConfig={defaultConfig}
      // placeholder={Splash}
    >
      {(props) => <App {...props} />}
    </AppLoading>
  );
};

export async function schedulePushNotification(content: string) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Hey welbome back here ! 📬",
      body: content,
      data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
