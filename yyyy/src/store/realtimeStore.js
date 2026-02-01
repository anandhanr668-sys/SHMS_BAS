import { create } from "zustand";

export const useRealtimeStore = create((set) => ({
  bedUpdates: [],
  notifications: [],

  addBedUpdate: (update) =>
    set((state) => ({
      bedUpdates: [update, ...state.bedUpdates].slice(0, 10),
    })),

  addNotification: (notification) =>
    set((state) => ({
      notifications: [notification, ...state.notifications].slice(0, 10),
    })),
}));

