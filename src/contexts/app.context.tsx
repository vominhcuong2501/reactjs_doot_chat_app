import { STORAGE, UNDEFINED } from '@/constant'
import { ContactProps } from '@/types'
import { createContext, useCallback, useState } from 'react'

interface AppContextInterface {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    userData: ContactProps
    updateUserData: (value: { id?: number; name?: string; avatar?: string }) => void
}

const initialAppContext: AppContextInterface = {
    isOpen: false,
    setIsOpen: () => null,
    userData: {
        id: 0,
        name: '',
        avatar: ''
    },
    updateUserData: () => null
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialAppContext.isOpen)

    const [userData, setUserData] = useState<ContactProps>(() => {
        if (typeof window !== UNDEFINED) {
            const stored = localStorage.getItem(STORAGE.USER)
            if (stored) {
                try {
                    return JSON.parse(stored)
                } catch (e) {
                    console.error('Error parsing user data from localStorage:', e)
                }
            }
        }
        return { id: 0, name: '', avatar: '' }
    })

    const updateUserData = useCallback((value: { id?: number; name?: string; avatar?: string }) => {
        setUserData((prev) => {
            const newUser = { ...prev, ...value }
            localStorage.setItem(STORAGE.USER, JSON.stringify(newUser))
            return newUser
        })
    }, [])

    return (
        <AppContext.Provider
            value={{
                isOpen,
                setIsOpen,
                userData,
                updateUserData
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
