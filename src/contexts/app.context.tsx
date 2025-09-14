import { createContext, useState } from 'react'

interface AppContextInterface {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

const initialAppContext: AppContextInterface = {
    isOpen: false,
    setIsOpen: () => null
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialAppContext.isOpen)

    return (
        <AppContext.Provider
            value={{
                isOpen,
                setIsOpen
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
