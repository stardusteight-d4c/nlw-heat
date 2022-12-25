import express from "express";
import "dotenv/config";
import http from "http";
import cors from "cors";

import { Server } from "socket.io";
import { router } from "./routes";

const app = express();

app.use(cors());

const serveHttp = http.createServer(app);
const io = new Server(serveHttp, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`Usuário conectado no socket: ${socket.id}`);
});

app.use(express.json());

app.use(router);

export { serveHttp, io };
