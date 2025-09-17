import { InputSearch } from '@/components'
import { useState } from 'react'
import { ChatListByType } from './components/chat-list-by-type'
import { LIST_CHATS } from '@/mockup'
import { CHANNEL_CHAT, CHATS_PAGE, DIRECT_CHAT, FAVOURITE_CHAT } from '@/constant'
import { AddNewChat } from '@/components/add-new-chat'

export const Chats = () => {
    const [keySearch, setKeySearch] = useState('')

    return (
        <>
            <div className='p-4 lg:p-6 sticky top-0 bg-white dark:bg-black-3 z-[3]'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-21 font-medium text-black-1 dark:text-gray-3 capitalize'>{CHATS_PAGE}</h1>
                    <AddNewChat />
                </div>
                <InputSearch className='relative mt-[19px] rounded overflow-hidden' setKeySearch={setKeySearch} />
            </div>
            <div className='flex flex-col gap-8 lg:gap-[53px] pb-4 lg:pb-6 mt-1 lg:mt-4'>
                <ChatListByType
                    title='Favourites'
                    listChat={LIST_CHATS}
                    keySearch={keySearch}
                    typeChat={FAVOURITE_CHAT}
                />
                <ChatListByType
                    title='Direct Messages'
                    listChat={LIST_CHATS}
                    keySearch={keySearch}
                    typeChat={DIRECT_CHAT}
                    add
                />
                <ChatListByType
                    title='Channels'
                    listChat={LIST_CHATS}
                    keySearch={keySearch}
                    typeChat={CHANNEL_CHAT}
                    add
                />
            </div>
        </>
    )
}
