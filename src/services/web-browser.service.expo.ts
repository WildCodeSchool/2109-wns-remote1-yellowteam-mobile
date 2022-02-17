import * as WebBrowser from 'expo-web-browser';

export class WebBrowserService {
  static openBrowserAsync = (
    url: string,
  ): Promise<WebBrowser.WebBrowserResult> => WebBrowser.openBrowserAsync(url);
}
