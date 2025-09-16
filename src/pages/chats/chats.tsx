import { InputSearch } from '@/components'
import { useState } from 'react'
import { ChatListByType } from './components/chat-list-by-type'
import { LIST_CHATS } from '@/mockup'
import { CHATS } from '@/constant'

export const Chats = () => {
    const [keySearch, setKeySearch] = useState('')

    return (
        <>
            <div className='p-4 lg:p-6 sticky top-0 bg-white dark:bg-black-3 z-[3]'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-21 font-medium text-black-1 dark:text-gray-3 capitalize'>{CHATS}</h1>
                    <img
                        src='/images/chats/icon-plus.svg'
                        alt='Search'
                        title='Saerch'
                        width={31}
                        height={30}
                        loading='lazy'
                        className='cursor-pointer'
                    />
                </div>
                <InputSearch className='relative mt-[19px] rounded overflow-hidden' setKeySearch={setKeySearch} />
            </div>
            <div className='flex flex-col gap-8 lg:gap-[53px] pb-4 lg:pb-6 mt-1 lg:mt-4'>
                <ChatListByType title='Favourites' listChat={LIST_CHATS} keySearch={keySearch} typeChat='favourite' />
                <ChatListByType
                    title='DIRECT MESSAGES'
                    listChat={LIST_CHATS}
                    keySearch={keySearch}
                    typeChat='direct'
                    add
                />
                <ChatListByType title='Channels' listChat={LIST_CHATS} keySearch={keySearch} typeChat='channel' add />
            </div>
        </>
    )
}
