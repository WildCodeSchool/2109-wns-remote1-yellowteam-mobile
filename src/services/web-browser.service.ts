/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Linking, Platform } from 'react-native';
import SafariView from 'react-native-safari-view';

export default class WebBrowserService {
  static openBrowserAsync = async (url: string): Promise<unknown> => {
    if (Platform.OS === 'ios') {
      return WebBrowserService.openInAppUrl(url).catch(() =>
        WebBrowserService.openUrl(url));
    }
    return WebBrowserService.openUrl(url);
  };

  private static openInAppUrl = (url: string): Promise<unknown> =>
    SafariView.isAvailable().then(() => SafariView.show({ url }));

  private static openUrl = (url: string): Promise<unknown> =>
    Linking.openURL(url);
}
