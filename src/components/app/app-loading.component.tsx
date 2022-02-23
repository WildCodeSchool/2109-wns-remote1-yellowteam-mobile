/* eslint-disable global-require */
/* eslint-disable object-curly-newline */
/* eslint-disable prefer-destructuring */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import * as Font from 'expo-font';

type TaskResult = [string, any];
export type Task = () => Promise<TaskResult | null>;

export interface ApplicationLoaderProps {
  tasks?: Task[];
  initialConfig?: Record<string, any>;
  placeholder?: (props: { loading: boolean }) => React.ReactElement;
  children: (config: any) => React.ReactElement;
}

export const LoadFontsTask = async (fonts: {
  [key: string]: number;
}): Promise<TaskResult | null> => {
  const message: string = [
    'There is no need to use this task in Bare RN Project.',
    'Use `react-native.config.js  ',
    'Documentation: https://github.com/react-native-community/cli/blob/master/docs/configuration.md',
  ].join('\n');
  const customFonts = {
    'poppins-regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
  };
  const customFOnts = await Font.loadAsync(customFonts);
  console.warn(message);
  console.warn(customFOnts);

  return Promise.resolve(null);
};

export const LoadAssetsTask = (
  assets: number[],
): Promise<TaskResult | null> => {
  const message: string = [
    'There is no need to use this task in Bare RN Project.',
    'Use `react-native.config.js',
    'Documentation: https://github.com/react-native-community/cli/blob/master/docs/configuration.md',
  ].join('\n');

  console.warn(message);

  return Promise.resolve(null);
};

/**
 * Loads application configuration and returns content of the application when done.
 *
 * @property {Task[]} tasks - Array of tasks to prepare application before it's loaded.
 * A single task should return a Promise with value and a by which this value is accessible.
 *
 * @property {any} fallback - Fallback configuration that is used as default application configuration.
 * May be useful at first run.
 *
 * @property {(props: { loaded: boolean }) => React.ReactElement} placeholder - Element to render
 * while application is loading.
 *
 * @property {(result: any) => React.ReactElement} children - Should return Application component
 */
export function AppLoading(props: ApplicationLoaderProps): React.ReactElement {
  const [loading, setLoading] = React.useState<boolean>(true);
  const { initialConfig, placeholder, tasks, children } = props || {};

  const onTasksFinish = (): void => {
    setLoading(false);
  };

  React.useEffect(() => {
    if (loading) {
      startTasks()
        .then(onTasksFinish)
        .catch((er) => console.log(er));
    }
  }, [loading]);

  const saveTaskResult = (result: [string, any] | null): void => {
    if (result && initialConfig) {
      initialConfig[result[0]] = result[1];
    }
  };

  const createRunnableTask = (task: Task): Promise<void> =>
    task().then(saveTaskResult);

  const startTasks = async (): Promise<any> => {
    if (tasks) {
      return Promise.all(tasks.map(createRunnableTask));
    }
    return Promise.resolve();
  };

  return (
    <>
      {!loading && children(initialConfig)}
      {placeholder && placeholder({ loading })}
    </>
  );
}
