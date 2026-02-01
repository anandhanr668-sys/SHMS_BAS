import { create } from "zustand";
import socket from "../realtime/socketClient";

const useNotificationStore = create((set) => ({
  notifications: [],
  unreadCount: 0,

  initRealtime: () => {
    socket.on("notify", (message) => {
      set((state) => ({
        notifications: [message, ...state.notifications],
        unreadCount: state.unreadCount + 1
      }));
    });
  },

  markAllRead: () =>
    set({
      unreadCount: 0
    }),

  clearAll: () =>
    set({
      notifications: [],
      unreadCount: 0
    })
}));

export default useNotificationStore;
