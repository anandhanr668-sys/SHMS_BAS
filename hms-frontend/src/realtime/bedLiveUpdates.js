import socket from "./socketClient";

/**
 * Subscribe to bed status updates
 */
export const subscribeToBedUpdates = (callback) => {
  socket.on("bed:update", (data) => {
    console.log("🛏 Bed Update:", data);
    callback(data);
  });
};

/**
 * Unsubscribe when component unmounts
 */
export const unsubscribeFromBedUpdates = () => {
  socket.off("bed:update");
};
