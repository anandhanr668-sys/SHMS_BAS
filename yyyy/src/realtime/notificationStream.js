import { socket } from "./socketClient";

const messages = [
  { message: "Emergency patient arrived", type: "error", icon: "alert-circle" },
  { message: "Vitals pending for ICU-02", type: "warning", icon: "heart" },
  { message: "New lab report available", type: "info", icon: "file-text" },
  { message: "Bed ICU-01 is now available", type: "success", icon: "bed" },
  { message: "Prescription updated", type: "success", icon: "pill" },
  { message: "Lab results ready for Patient P-23", type: "info", icon: "file-text" },
];

let notificationInterval = null;
const notificationQueue = [];

export const startNotificationStream = (callback) => {
  socket.connect();

  socket.on("notification", (data) => {
    notificationQueue.push(data);
    if (callback) callback(data);
  });

  notificationInterval = setInterval(() => {
    const selected = messages[Math.floor(Math.random() * messages.length)];

    const notification = {
      id: `NOTIF-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      message: selected.message,
      type: selected.type,
      icon: selected.icon,
      timestamp: Date.now(),
      priority: selected.type === "error" ? "high" : selected.type === "warning" ? "medium" : "low",
    };

    notificationQueue.push(notification);
    socket.emit("notification", notification);
  }, 8000);
};

export const stopNotificationStream = () => {
  if (notificationInterval) {
    clearInterval(notificationInterval);
    notificationInterval = null;
  }
  socket.disconnect();
};

export const getNotificationQueue = () => notificationQueue;
