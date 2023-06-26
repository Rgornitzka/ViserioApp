import {create} from 'zustand'
import abilities from './config/Abilities';

const useStore = create(set => ({
  abilities,
  sidebarIcons: [],
  addIcon: (icon) => set(state => ({ sidebarIcons: [...state.sidebarIcons, icon] })),
}))

export default useStore;
