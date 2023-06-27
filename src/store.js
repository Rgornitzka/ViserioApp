import {create} from 'zustand'
import abilities from './config/Abilities';

const useStore = create(set => ({
  abilities,
  duration: 60 * 10,
  sidebarIcons: [],
  selectedIcons: [],
  addIcon: (icon) => set(state => ({ sidebarIcons: [...state.sidebarIcons, icon] })),
}))

export default useStore;
