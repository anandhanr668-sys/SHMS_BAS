import { create } from "zustand";

const useUIStore = create((set) => ({
  loading: false,
  modalOpen: false,
  toast: null,

  showLoader: () => set({ loading: true }),
  hideLoader: () => set({ loading: false }),

  openModal: () => set({ modalOpen: true }),
  closeModal: () => set({ modalOpen: false }),

  showToast: (message, type = "success") =>
    set({ toast: { message, type } }),

  clearToast: () => set({ toast: null })
}));

export default useUIStore;
