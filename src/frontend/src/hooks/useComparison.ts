import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { CollegeRecord } from "../types/college";

interface ComparisonState {
  selected: CollegeRecord[];
  add: (college: CollegeRecord) => void;
  remove: (id: string) => void;
  clear: () => void;
  isSelected: (id: string) => boolean;
}

export const useComparison = create<ComparisonState>()(
  persist(
    (set, get) => ({
      selected: [],
      add: (college) => {
        const { selected } = get();
        if (selected.length >= 3 || selected.some((c) => c.id === college.id))
          return;
        set({ selected: [...selected, college] });
      },
      remove: (id) => {
        set({ selected: get().selected.filter((c) => c.id !== id) });
      },
      clear: () => set({ selected: [] }),
      isSelected: (id) => get().selected.some((c) => c.id === id),
    }),
    {
      name: "campusfind-comparison",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
