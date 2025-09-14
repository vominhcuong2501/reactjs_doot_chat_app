import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserIdProps {
    userId: number | null
    updateUserId: (value: number) => void
}

export const useIdUser = create<UserIdProps>()(
    persist(
        (set) => ({
            userId: null,
            updateUserId: (value) => set({ userId: value })
        }),
        {
            name: 'id-user'
        }
    )
)
