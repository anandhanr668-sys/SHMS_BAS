import socket from "./socketClient";

/**
 * Subscribe to notifications
 */
export const subscribeToNotifications = (callback) => {
  socket.on("notification", (message) => {
    console.log("🔔 Notification:", message);
    callback(message);
  });
};

/**
 * Cleanup listener
 */
export const unsubscribeFromNotifications = () => {
  socket.off("notification");
};
