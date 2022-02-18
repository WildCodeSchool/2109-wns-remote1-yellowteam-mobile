import * as WebBrowser from 'expo-web-browser';

export default class WebBrowserService {
  static openBrowserAsync = (
    url: string,
  ): Promise<WebBrowser.WebBrowserResult> => WebBrowser.openBrowserAsync(url);
}
