import type { Context as ReactContext, Provider as ReactProvider } from 'react';
import {
  createContext as createContextReact,
  useContext as useContextReact,
} from 'react';

interface ICreateContextOptions {
  name: string;
}

type TCreateContextReturn<T> = [ReactProvider<T>, () => T, ReactContext<T>];

/**
 * Generic but mostly for Form (react-hook-form with shadcn only) - Not yet expanded
 * This is the one I am using on some of my project, not very generic yet.
 */
export default function createContext<ContextType>(
  options: ICreateContextOptions,
) {
  const { name } = options;
  const Context = createContextReact<ContextType | undefined>(undefined);

  Context.displayName = name;

  function useContext() {
    const context = useContextReact(Context);

    if (!context) {
      const error = new Error(`Your hook must be used within ${name} Provider`);

      error.name = 'ContextError';
      Error.captureStackTrace?.(error, useContext);

      throw error;
    }

    return context;
  }

  return [
    Context.Provider,
    useContext,
    Context,
  ] as TCreateContextReturn<ContextType>;
}
