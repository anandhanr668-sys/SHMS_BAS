import { create } from "zustand";
import { settingsService } from "../services/settingsService";

const useSettingsStore = create((set) => ({
  settings: null,
  loading: false,
  error: null,
  saving: false,

  fetchSettings: async () => {
    set({ loading: true, error: null });
    try {
      const data = await settingsService.getSettings();
      set({ settings: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  updateSettings: async (payload) => {
    set({ saving: true });
    try {
      const updated = await settingsService.updateSettings(payload);
      set({ settings: updated, saving: false });
    } catch (err) {
      set({ error: err.message, saving: false });
    }
  },

  clearError: () => set({ error: null })
}));

export default useSettingsStore;
