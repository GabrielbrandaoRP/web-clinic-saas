import { create } from 'zustand';

const useStore = create((set) => ({
  // Estado
  count: 0,
  // Ações
  increment: () => set((state: { count: number; }) => ({ count: state.count + 1 })),
}));

export default useStore;
