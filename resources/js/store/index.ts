import create from 'zustand';

const useToastStore = create((set) => ({
  showToast: false,  // Menyimpan status apakah toast aktif
  message: '',       // Pesan toast
  setToast: () => set({ showToast: true }),  // Menampilkan toast
  hideToast: () => set({ showToast: false, message: '' })    // Menyembunyikan toast
}));