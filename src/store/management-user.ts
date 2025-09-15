import { ContactProps } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserProps {
    userData: ContactProps
    updateUserData: (value: { id?: number, name?: string, avatar?: string }) => void
}

export const useDataUser = create<UserProps>()(
    persist(
        (set) => ({
            userData: { id: 0, name: '', avatar: '' },
            updateUserData: (value) =>
                set((state) => ({ userData: { ...state.userData, ...value } })),

        }),
        {
            name: 'user-data'
        }
    )
)
