/* eslint-disable react/no-unstable-nested-components */
import { Card, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

type Props = {
  tasksDatas: {
    complete: number;
    total: number;
  };
};

function TextPie({ percent }: { percent: string }) {
  return (
    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{`${percent} %`}</Text>
  );
}

export default function Pie({ tasksDatas }: Props) {
  const data = [{ value: tasksDatas.total }, { value: tasksDatas.complete }];
  const percentage = tasksDatas.complete / tasksDatas.total;

  return (
    <Card style={styles.container}>
      <View style={styles.card}>
        <PieChart
          textSize={12}
          centerLabelComponent={() => (
            <TextPie percent={(percentage * 100).toFixed(0)} />
          )}
          showText
          innerRadius={30}
          radius={40}
          textColor="black"
          donut
          data={data}
        />
        <View>
          <Text style={styles.textCard}>
            {`${tasksDatas.complete} tasks complete`}
          </Text>
          <Text style={styles.textCard}>
            {`${tasksDatas.total} tasks todo / in progress`}
          </Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  textCard: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
