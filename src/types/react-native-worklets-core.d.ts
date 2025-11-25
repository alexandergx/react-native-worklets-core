// src/types/react-native-worklets-core.d.ts

declare module 'react-native-worklets-core' {
  // Minimal shared value
  export interface ISharedValue<T> {
    value: T;
    addListener(listener: () => void): () => void;
  }

  // Minimal context
  export interface IWorkletContext {
    name: string;
    addDecorator<T>(name: string, obj: T): void;
  }

  // This matches the 0.2.x API you’re actually calling
  export interface IWorkletNativeApi {
    createContext(name: string): IWorkletContext;

    createSharedValue<T>(value: T): ISharedValue<T>;

    createRunInContextFn<C extends object, T, A extends any[]>(
      fn: (this: C, ...args: A) => T,
      context?: IWorkletContext
    ): (...args: A) => Promise<T>;

    createRunInJsFn<C extends object, T, A extends any[]>(
      fn: (this: C, ...args: A) => T
    ): (...args: A) => Promise<T>;

    defaultContext: IWorkletContext;
    currentContext?: IWorkletContext;
  }

  export const Worklets: IWorkletNativeApi;

  // If you use these hooks, you can flesh them out later
  export function useSharedValue<T>(initial: T): ISharedValue<T>;
  export function useWorklet<T extends (...args: any[]) => any>(
    fn: T,
    deps?: React.DependencyList
  ): T;
}
