import { create } from 'zustand';

interface SelectedBlockIdStore {
  selectedBlockId: number | null;
  setSelectedBlockId: (blockId: number | null) => void;
}

export const useSelectedBlockIdStore = create<SelectedBlockIdStore>((set) => ({
  selectedBlockId: null,
  setSelectedBlockId: (blockId) => set({ selectedBlockId: blockId }),
}));
