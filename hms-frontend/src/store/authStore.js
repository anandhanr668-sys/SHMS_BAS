import { create } from "zustand";
import socket from "../realtime/socketClient";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null, // { id, name, role }
  role: null,

  // 🔐 LOGIN
  login: (userData) => {
    localStorage.setItem("auth_user", JSON.stringify(userData));

    set({
      isAuthenticated: true,
      user: userData,
      role: userData.role
    });

    // 🔥 CONNECT SOCKET AFTER LOGIN
    if (!socket.connected) {
      socket.connect();
      socket.emit("auth:join", {
        userId: userData.id,
        role: userData.role
      });
    }
  },

  // 🔓 LOGOUT
  logout: () => {
    localStorage.removeItem("auth_user");

    // 🔌 DISCONNECT SOCKET
    if (socket.connected) {
      socket.disconnect();
    }

    set({
      isAuthenticated: false,
      user: null,
      role: null
    });
  },

  // 🔁 RESTORE AUTH ON REFRESH
  hydrate: () => {
    const savedUser = localStorage.getItem("auth_user");

    if (savedUser) {
      const user = JSON.parse(savedUser);

      set({
        isAuthenticated: true,
        user,
        role: user.role
      });

      // 🔁 Reconnect socket after refresh
      if (!socket.connected) {
        socket.connect();
        socket.emit("auth:join", {
          userId: user.id,
          role: user.role
        });
      }
    }
  }
}));

export default useAuthStore;
