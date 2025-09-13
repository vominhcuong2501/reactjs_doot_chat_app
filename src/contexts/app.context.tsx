import { PROFILE } from '@/constant/keywork'
import { createContext, useState } from 'react'

interface AppContextInterface {
    keyword: string
    setKeyword: (value: string) => void
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

const initialAppContext: AppContextInterface = {
    keyword: PROFILE,
    setKeyword: () => null,
    isOpen: false,
    setIsOpen: () => null
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [keyword, setKeyword] = useState<string>(initialAppContext.keyword)
    const [isOpen, setIsOpen] = useState<boolean>(initialAppContext.isOpen)

    return (
        <AppContext.Provider
            value={{
                keyword,
                setKeyword,
                isOpen,
                setIsOpen
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
