import { create } from 'zustand';

interface HoveredBlockIdStore {
  hoveredBlockId: number | null;
  setHoveredBlockId: (blockId: number | null) => void;
}

export const useHoveredBlockIdStore = create<HoveredBlockIdStore>((set) => ({
  hoveredBlockId: null,
  setHoveredBlockId: (blockId) => set({ hoveredBlockId: blockId }),
}));
