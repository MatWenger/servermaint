import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type ConnectionStatus = "connecting" | "connected" | "disconnected";

type ConnectionContextValue = {
  state: {
    connection: ConnectionStatus;
  };
  actions: {
    setConnection: Dispatch<SetStateAction<ConnectionStatus>>;
  };
};

export const ConnectionContext = createContext<
  ConnectionContextValue | undefined
>(undefined);

export function ConnectionProvider({ children }: { children: ReactNode }) {
  const [connection, setConnection] =
    useState<ConnectionStatus>("disconnected");

  return (
    <ConnectionContext.Provider
      value={{
        state: { connection },
        actions: { setConnection },
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
}
