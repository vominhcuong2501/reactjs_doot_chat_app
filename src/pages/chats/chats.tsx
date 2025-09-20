import { InputSearch } from '@/components'
import { useContext, useState } from 'react'
import { ChatListByType } from './components/chat-list-by-type'
import { AddNewChat } from '@/components/add-new-chat'
import { UserListsContext } from '@/contexts/user.context'
import { TYPE_CHAT } from '@/constant'
import config from './../../config/config.json'

export const Chats = () => {
    const [keySearch, setKeySearch] = useState('')

    const { chatList } = useContext(UserListsContext) ?? {}

    return (
        <>
            <div className='p-4 lg:p-6 sticky top-0 bg-white dark:bg-black-3 z-[3]'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-21 font-medium text-black-1 dark:text-gray-3 capitalize'>{config.txt_chats}</h1>
                    <AddNewChat />
                </div>
                <InputSearch className='relative mt-[19px] rounded overflow-hidden' setKeySearch={setKeySearch} />
            </div>
            <div className='flex flex-col gap-8 lg:gap-[53px] pb-4 lg:pb-6 mt-1 lg:mt-4'>
                <ChatListByType
                    title={config.txt_favorites}
                    listChat={chatList}
                    keySearch={keySearch}
                    typeChat={TYPE_CHAT?.FAVORITE}
                />
                <ChatListByType
                    title={config.txt_direct_messages}
                    listChat={chatList}
                    keySearch={keySearch}
                    typeChat={TYPE_CHAT?.DIRECT}
                    add
                />
                <ChatListByType
                    title={config.txt_channels}
                    listChat={chatList}
                    keySearch={keySearch}
                    typeChat={TYPE_CHAT?.CHANNEL}
                    add
                />
            </div>
        </>
    )
}
