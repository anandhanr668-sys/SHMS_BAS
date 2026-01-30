import { create } from "zustand";

const useRealtimeStore = create((set) => ({
  bedUpdates: [],
  notifications: [],

  addBedUpdate: (update) =>
    set((state) => ({
      bedUpdates: [...state.bedUpdates, update]
    })),

  addNotification: (notification) =>
    set((state) => ({
      notifications: [...state.notifications, notification]
    }))
}));

export default useRealtimeStore;
