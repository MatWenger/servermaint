import express from "express";
import { createServer } from "node:http";
import { WebSocketServer } from "ws";

const app = express();
const server = createServer(app);

// Express and WebSocket share the same HTTP server.
const wss = new WebSocketServer({
  server,
  path: "/ws",
});

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

wss.on("connection", (socket) => {
  console.log("WebSocket client connected");

  socket.on("error", console.error);

  socket.send(
    JSON.stringify({
      type: "connection.ready",
      payload: { message: "Connected to Server Maintainer" },
    }),
  );

  socket.on("close", () => {
    console.log("WebSocket client disconnected");
  });
});

const port = Number(process.env.APIPORT ?? 3001);

server.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
