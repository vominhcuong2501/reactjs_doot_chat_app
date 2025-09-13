import { Suspense } from 'react'
import './App.css'
import { ButtonTheme } from './components/button-theme/button-theme'
import useRouteElements from './route'

function App() {
    const routeElements = useRouteElements()

    return (
        <Suspense fallback={<div />}>
            {routeElements}
            <ButtonTheme />
        </Suspense>
    )
}

export default App
