import { create } from 'zustand';
import abilities from './config/Abilities';

const useStore = create((set) => ({
  abilities,
  duration: 60 * 10,
  selectedIcons: [],
  currentTime: 0,
  addIcon: (icon) => 
    set((state) => ({ 
      selectedIcons: [...state.selectedIcons, { ...icon, time: state.currentTime }],
    })),
  setCurrentTime: (time) =>
    set(() => ({
      currentTime: time,
    })),
}));

export default useStore;
