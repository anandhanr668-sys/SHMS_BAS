import { io } from "socket.io-client";

// 🔁 Use env variable later (Vite style)
const SOCKET_URL = "http://localhost:4000";

const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  autoConnect: false // 🔒 VERY IMPORTANT
});

// Debug logs (safe to keep)
socket.on("connect", () => {
  console.log("✅ Realtime connected:", socket.id);
});

socket.on("disconnect", () => {
  console.log("❌ Realtime disconnected");
});

export default socket;
