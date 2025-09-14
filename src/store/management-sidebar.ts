import { PROFILE } from '@/constant/keywork'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SidebarData {
    keyword: string
    updateKeyword: (value: string) => void
}

export const useSidebar = create<SidebarData>()(
    persist(
        (set) => ({
            keyword: PROFILE,
            updateKeyword: (value) => set({ keyword: value })
        }),
        {
            name: 'keyword-sidebar'
        }
    )
)
