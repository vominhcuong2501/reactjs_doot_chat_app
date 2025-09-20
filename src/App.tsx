import { Suspense } from 'react'
import './App.css'
import useRouteElements from './route'

function App() {
    const routes = useRouteElements()
    return <Suspense fallback={<div>...</div>}>{routes}</Suspense>
}

export default App
