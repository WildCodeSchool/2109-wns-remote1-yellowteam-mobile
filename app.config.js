import 'dotenv/config';

export default {
  name: 'CoolApp',
  version: '1.0.0',
  extra: {
    serverUrl: process.env.REACT_APP_SERVER_URL,
  },
};
