import { create } from 'zustand';

interface ToastStoreProps {
  showToast: boolean;
  message: string;
  setToast: (message: string) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastStoreProps>((set) => ({
  showToast: false,
  message: '',

  // Fungsi untuk menampilkan toast dengan pesan
  setToast: (message: string) => set({ showToast: true, message }),

  // Fungsi untuk menyembunyikan toast
  hideToast: () => set({ showToast: false, message: '' }),
}));
