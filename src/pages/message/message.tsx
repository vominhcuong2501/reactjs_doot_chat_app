import { useDataUser } from '@/store'
import { MessageDetail, MessageFooter, MessageHeader } from './components'

export const Message = () => {
    const { userData } = useDataUser()
    return (
        <>
            {userData?.id ? (
                <div className='flex-1 bg-[url(/images/message/bg-message-light.jpg)] dark:bg-[url(/images/message/bg-message-dark.jpg)] bg-center bg-cover bg-no-repeat'>
                    <MessageHeader />
                    <MessageDetail />
                    <MessageFooter />
                </div>
            ) : (
                <div className='flex-1 bg-[url(/images/message/bg-message-light.jpg)] dark:bg-[url(/images/message/bg-message-dark.jpg)] bg-center bg-cover bg-no-repeat h-screen'></div>
            )}
        </>
    )
}
