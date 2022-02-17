/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { AppLoading as ExpoAppLoading, SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

type TaskResult = [string, unknown];
type Task = () => Promise<TaskResult | null>;

export interface ApplicationLoaderProps {
  tasks?: Task[];
  initialConfig?: Record<string, unknown>;
  placeholder?: (props: { loading: boolean }) => React.ReactElement;
  children: (config: unknown) => React.ReactElement;
}

export const LoadFontsTask = (fonts: {
  [key: string]: number;
}): Promise<TaskResult | null> => Font.loadAsync(fonts).then(() => null);

export const LoadAssetsTask = (
  assets: number[],
): Promise<TaskResult | null> => {
  const tasks: Promise<Asset>[] = assets.map(
    (source: number): Promise<Asset> => Asset.fromModule(source).downloadAsync(),
  );

  return Promise.all(tasks).then(() => null);
};

/*
 * Prevent splash screen from hiding since it is controllable by AppLoading component.
 */
SplashScreen.preventAutoHide();

/**
 * Loads application configuration and returns content of the application when done.
 *
 * @property {Task[]} tasks - Array of tasks to prepare application before it's loaded.
 * A single task should return a Promise with value and a by which this value is accessible.
 *
 * @property {any} fallback - Fallback configuration that is used as default
 * May be useful at first run.
 *
 * @property {(props: { loaded: boolean }) => React.ReactElement} placeholder - Element to render
 * while application is loading.
 *
 * @property {(result: any) => React.ReactElement} children - Should return Application component
 */
export function AppLoading(props: ApplicationLoaderProps): React.ReactElement {
  const [loading, setLoading] = React.useState<boolean>(true);
  const { tasks, children, placeholder } = props;
  const { initialConfig: loadingResult } = props || {};

  const onTasksFinish = (): void => {
    setLoading(false);
    SplashScreen.hide();
  };

  const saveTaskResult = (result: [string, unknown] | null): void => {
    if (result) {
      loadingResult[result[0]] = result[1];
    }
  };

  const createRunnableTask = (task: Task): Promise<void> => task().then(saveTaskResult);

  const startTasks = (): Promise<unknown> => {
    if (tasks) {
      return Promise.all(tasks.map(createRunnableTask));
    }
    return Promise.resolve();
  };

  const renderLoadingElement = (): React.ReactElement => (
    <ExpoAppLoading
      startAsync={startTasks}
      onFinish={onTasksFinish}
      autoHideSplash={false}
    />
  );

  return (
    <>
      {loading ? renderLoadingElement() : children(loadingResult)}
      {placeholder && placeholder({ loading })}
    </>
  );
}
