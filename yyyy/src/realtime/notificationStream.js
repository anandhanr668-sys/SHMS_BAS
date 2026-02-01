import { socket } from "./socketClient";

const messages = [
  "🚨 Emergency patient arrived",
  "🩺 Vitals pending for ICU-02",
  "📄 New lab report available",
  "🛏 Bed ICU-01 is now available",
  "💊 Prescription updated",
];

export const startNotificationStream = () => {
  setInterval(() => {
    const message =
      messages[Math.floor(Math.random() * messages.length)];

    socket.emit("notification", {
      message,
      time: new Date().toLocaleTimeString(),
    });
  }, 5000);
};

