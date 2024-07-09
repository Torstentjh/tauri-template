import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

interface State {
    darkMode: boolean;
}

interface Action {
    setDarkMode: (darkMode: State['darkMode']) => void;
}

export const useGlobalStore = create<State & Action>()(
    devtools(persist(
        (set) => {
            return {
                darkMode: false,
                setDarkMode: (darkMode: State['darkMode']) => set({
                    darkMode
                }),
            }
        },
        {
            name: 'globalStore',
            storage: createJSONStorage(() => localStorage)
        }
    ),
        { name: 'globalStore' }
    )
)