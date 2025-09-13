/* eslint-disable no-unused-vars */
import { PROFILE } from '@/constant/keywork'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SidebarData {
    keyword: string
    updateKeyword: (value: string) => void
    toggleMenu: boolean
    updateToggleMenu: (value: boolean) => void
}

export const useSidebar = create<SidebarData>()(
    persist(
        (set) => ({
            keyword: PROFILE,
            updateKeyword: (value) => set({ keyword: value }),
            toggleMenu: false,
            updateToggleMenu: (value) => set({ toggleMenu: value })
        }),
        {
            name: 'keyword-sidebar'
        }
    )
)
