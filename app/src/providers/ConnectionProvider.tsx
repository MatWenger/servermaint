import {
  createContext,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

import { websocket } from "../api/api";

type ConnectionStatus = "connecting" | "connected" | "disconnected";

type ConnectionContextValue = {
  state: {
    status: ConnectionStatus;
    connection: WebSocket | null;
  };
  actions: {
    setConnectionStatus: Dispatch<SetStateAction<ConnectionStatus>>;
  };
};

export const ConnectionContext = createContext<
  ConnectionContextValue | undefined
>(undefined);

export function ConnectionProvider({ children }: { children: ReactNode }) {
  const [connectionStatus, setConnectionStatus] =
    useState<ConnectionStatus>("disconnected");

  const socket = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(websocket);
    socket.current = ws;

    ws.onopen = () => {
      console.log("connected");
    };

    ws.onclose = () => {
      console.log("closed");
    };

    ws.onmessage = (event) => {
      console.log(event);
    };

    return () => {
      ws.onmessage = null;
      ws.close();
    };
  }, []);

  return (
    <ConnectionContext.Provider
      value={{
        state: { status: connectionStatus },
        actions: { setConnectionStatus },
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
}
