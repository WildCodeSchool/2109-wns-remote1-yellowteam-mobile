/* eslint-disable no-console */
import { AsyncStorage } from 'react-native';
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://192.168.1.12:5000/graphql',
  headers: {
    'platform-auth-user-agent': 'mobile-platform',
  },
});

const afterwareLink = new ApolloLink(async (operation, forward) => {
  const token = (await AsyncStorage.getItem('x-authorization')) || null;
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token || null,
    },
  }));
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get('x-authorization');
    AsyncStorage.setItem('x-authorization', authHeader).catch((err) =>
      console.log(err),
    );
    return response;
  });
});

export const client = new ApolloClient({
  link: ApolloLink.from([
    // place any other links before the line below
    afterwareLink.concat(httpLink),
  ]),
  credentials: 'include',
  headers: {
    'platform-auth-user-agent': 'mobile-platform',
  },
  cache: new InMemoryCache(),
});

export default client;
