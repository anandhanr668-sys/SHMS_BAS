import { io } from "socket.io-client";

// In real deployment, use env variable
const SOCKET_URL = "http://localhost:4000";

const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  autoConnect: true
});

socket.on("connect", () => {
  console.log("✅ Realtime connected:", socket.id);
});

socket.on("disconnect", () => {
  console.log("❌ Realtime disconnected");
});

export default socket;
