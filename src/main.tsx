import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './contexts/app.context'
import { UserListsProvider } from './contexts/user.context'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <UserListsProvider>
                <AppProvider>
                    <UserListsProvider>
                        <App />
                    </UserListsProvider>
                </AppProvider>
            </UserListsProvider>
        </BrowserRouter>
    </StrictMode>
)
