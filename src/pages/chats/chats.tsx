import { InputSearch } from '@/components'
import { useState } from 'react'
import { ChatListByType } from './components/chat-list-by-type'
import { LIST_CHATS } from '@/constant'

export const Chats = () => {
    const [keySearch, setKeySearch] = useState('')

    return (
        <div className='py-4 lg:py-6'>
            <div className='px-4 lg:px-6'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-21 font-medium text-black-1 dark:text-gray-3'>Chats</h1>
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
            <div className='flex flex-col gap-8 lg:gap-[53px] mt-5 lg:mt-10'>
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
        </div>
    )
}
