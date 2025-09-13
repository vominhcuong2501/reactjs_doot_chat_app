import { Suspense } from 'react'
import './App.css'
import useRouteElements from './route'

function App() {
    const routes = useRouteElements()
    return <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
}

export default App
