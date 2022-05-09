/* eslint-disable no-console */
import {
  ApolloClient,
  ApolloLink,
  applyNextFetchPolicy,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from '@apollo/client/link/ws';
import * as SecureStore from 'expo-secure-store';

import { getMainDefinition } from '@apollo/client/utilities';
import appConfig from '../../app.config';

const serverUrl =
  process.env.REACT_APP_SERVER_URL || 'http://192.168.1.13.:4000/graphql';

const webSocketUrl =
  process.env.REACT_APP_WEBSOCKET_URL || 'ws://localhost:4000/websocket';

let tokenSession = 'token';
console.log(appConfig.extra.serverUrl);
const setSession = async (): Promise<void> => {
  const token = await SecureStore.getItemAsync('token');
  tokenSession = token || 'token';
};

setSession();

const httpLink = createHttpLink({
  uri: appConfig.extra.serverUrl,
  headers: {
    'platform-auth-user-agent': 'mobile-platform',
    authorization: tokenSession,
  },
});

const wsLink = new WebSocketLink(
  new SubscriptionClient(webSocketUrl, {
    connectionCallback: (params) => {
      console.log('websocket params', params);
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

    if (authHeader) {
      SecureStore.setItemAsync('token', authHeader);
    }

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
