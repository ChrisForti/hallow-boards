import { create } from "zustand";
import type { BoardConfiguration } from "../../../types/surfboard";
import { DEFAULT_BOARD } from "../../../types/surfboard";

interface BoardStore {
  config: BoardConfiguration;
  setConfig: (config: BoardConfiguration) => void;
  updateDimensions: (
    dimensions: Partial<BoardConfiguration["dimensions"]>
  ) => void;
  resetToDefault: () => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
  config: DEFAULT_BOARD,

  setConfig: (config) => set({ config }),

  updateDimensions: (dimensions) =>
    set((state) => ({
      config: {
        ...state.config,
        dimensions: {
          ...state.config.dimensions,
          ...dimensions,
        },
      },
    })),

  resetToDefault: () => set({ config: DEFAULT_BOARD }),
}));
