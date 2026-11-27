// api.ts
export const api = "/api";

const wsUrl = new URL("/ws", window.location.href);
wsUrl.protocol = window.location.protocol === "https:" ? "wss:" : "ws:";

export const websocket = wsUrl.toString();
