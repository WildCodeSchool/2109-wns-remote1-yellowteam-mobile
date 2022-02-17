import { Linking, Platform } from 'react-native';
import SafariView from 'react-native-safari-view';

export class WebBrowserService {
  static openBrowserAsync = (url: string): Promise<any> => {
    if (Platform.OS === 'ios') {
      return WebBrowserService.openInAppUrl(url).catch(() => WebBrowserService.openUrl(url));
    }
    return WebBrowserService.openUrl(url);
  };

  private static openInAppUrl = (url: string): Promise<any> => SafariView.isAvailable().then(() => SafariView.show({ url }));

  private static openUrl = (url: string): Promise<any> => Linking.openURL(url);
}
