/* eslint-disable no-console */
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from '@apollo/client/link/ws';
import * as SecureStore from 'expo-secure-store';

import { getMainDefinition } from '@apollo/client/utilities';

const serverUrl =
  process.env.REACT_APP_SERVER_URL || 'http://192.168.1.26:4000/graphql';

const webSocketUrl =
  process.env.REACT_APP_WEBSOCKET_URL || 'ws://localhost:4000/websocket';

let tokenSession = '';

const setSession = async (): Promise<void> => {
  const token = await SecureStore.getItemAsync('token');
  tokenSession = token;
};

setSession();

const httpLink = createHttpLink({
  uri: serverUrl,
  headers: {
    'platform-auth-user-agent': 'mobile-platform',
    authorization: tokenSession,
  },
});

const wsLink = new WebSocketLink(
  new SubscriptionClient(webSocketUrl, {
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

const afterwareLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      authorization: tokenSession,
    },
  }));
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get('authorization');

    SecureStore.setItemAsync('token', authHeader);

    const token = setSession();

    return response;
  });
});

export const client = new ApolloClient({
  link: afterwareLink.concat(splitLink),
  credentials: 'include',
  headers: {
    'platform-auth-user-agent': 'mobile-platform',
  },
  cache: new InMemoryCache(),
});

export default client;
