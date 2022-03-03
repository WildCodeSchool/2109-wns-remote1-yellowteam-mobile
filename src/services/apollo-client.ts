/* eslint-disable no-console */
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
const { REACT_APP_SERVER_URL } = process.env;

console.log(REACT_APP_SERVER_URL);

const httpLink = createHttpLink({
  uri: 'http://192.168.1.26:4000/graphql',
  headers: {
    'platform-auth-user-agent': 'mobile-platform',
  },
});

const wsLink = new WebSocketLink(
  new SubscriptionClient('ws://192.168.1.26:4000/subscriptions', {
    connectionCallback: (params) => {
      console.log(params);
    },
  }),
);
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const afterwareLink = new ApolloLink(async (operation, forward) => {
  const token = (await AsyncStorage.getItem('x-authorization')) || null;
  console.log('ici token', token);
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
  link: ApolloLink.from([afterwareLink.concat(httpLink), splitLink]),
  credentials: 'include',
  headers: {
    'platform-auth-user-agent': 'mobile-platform',
  },
  cache: new InMemoryCache(),
});

export default client;
