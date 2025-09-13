import { useParams } from 'react-router-dom'

export const Message = () => {
    const params = useParams()

    return <div className='dark:bg-black-3 h-screen dark:text-white'>{params?.id}</div>
}
