// store/UserListsContext.tsx
import { createContext, useState, useCallback } from 'react'
import { CallsProps, ChatsProps, ContactProps } from '@/types'
import { STORAGE, UNDEFINED } from '@/constant'
import { LIST_CALLS, LIST_CHATS, LIST_CONTACTS } from '@/mockup'

interface UserLists {
    contactList: ContactProps[]
    callList: CallsProps[]
    chatList: ChatsProps[]
}

interface UserListsContextProps extends UserLists {
    deleteUser: (id: number) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserListsContext = createContext<UserListsContextProps | undefined>(undefined)

export const UserListsProvider = ({ children }: { children: React.ReactNode }) => {
    const [lists, setLists] = useState<UserLists>(() => {
        if (typeof window !== UNDEFINED) {
            const stored = localStorage.getItem(STORAGE.LIST_USER)

            if (stored) {
                try {
                    return JSON.parse(stored) as UserLists
                } catch (e) {
                    console.error('Error parsing localStorage data:', e)
                }
            }
        }
        return { contactList: LIST_CONTACTS, callList: LIST_CALLS, chatList: LIST_CHATS }
    })

    const deleteUser = useCallback((id: number) => {
        setLists((prev) => {
            const newLists = {
                contactList: prev.contactList.filter((u) => u.id !== id),
                callList: prev.callList.filter((u) => u.id !== id),
                chatList: prev.chatList.filter((u) => u.id !== id)
            }

            localStorage.setItem(STORAGE.LIST_USER, JSON.stringify(newLists))

            return newLists
        })
    }, [])

    return <UserListsContext.Provider value={{ ...lists, deleteUser }}>{children}</UserListsContext.Provider>
}
