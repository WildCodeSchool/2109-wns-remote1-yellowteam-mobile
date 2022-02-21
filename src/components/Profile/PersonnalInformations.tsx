import {
  Button,
  Card,
  Icon,
  Input,
  Layout,
  Spinner,
} from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  useGetProfileInformationsQuery,
  useGetSelfProfileInformationsLazyQuery,
  useGetSelfProfileInformationsQuery,
} from '../../generated/graphql';
import useReduxUserState from '../../hooks/useUserState';

type Props = {
  setSelectedIndex: (index: number) => void;
};

const StarIcon = (props) => (
  <Icon style={styles.icon} fill="#8F9BB3" name="arrow-back-outline" />
);

export default function PersonnalInformations({ setSelectedIndex }: Props) {
  const { user } = useReduxUserState();
  const { data, loading } = useGetSelfProfileInformationsQuery({
    variables: {
      where: {
        id: user.id,
      },
    },
  });

  if (loading) return <Spinner />;
  if (!data) return <Text>Can&apos;t get user informations</Text>;

  return (
    <Layout level="2" style={styles.tab}>
      <Card
        onPress={() => setSelectedIndex(0)}
        style={{
          marginVertical: 2,
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
        }}
      >
        <Text>Change personnal informations</Text>
        <StarIcon />
      </Card>
      <Card style={{ marginVertical: 2 }}>
        <Input placeholder={data?.user.email} />
      </Card>
      <Card style={{ marginVertical: 2 }}>
        <Input placeholder={data?.user.first_name} />
      </Card>
      <Card style={{ marginVertical: 2 }}>
        <Input placeholder={data?.user.last_name} />
      </Card>
      <Button status="primary">SUBMIT</Button>
    </Layout>
  );
}
const styles = StyleSheet.create({
  tab: {
    width: '100%',
  },
  icon: {
    width: 32,
    height: 32,
  },
});
