import { create } from "zustand";

type State = {
  isOpen: boolean;
};

type Actions = {
  setIsOpen: (value: boolean) => void;
};

export const useMenuStore = create<State & Actions>((set) => ({
  isOpen: false,
  setIsOpen: (newState: boolean) => set(() => ({ isOpen: newState })),
}));
