import { getInitials, useClickUser } from '@/hooks'
import { useDataUser } from '@/store'
import { ChatsProps } from '@/types'
import { useMemo } from 'react'

const PRIORITY: Array<'favourite' | 'direct' | 'channel'> = ['favourite', 'direct', 'channel']

// Get effective type from array or single value
const getEffectiveType = (t: ChatsProps['typeChat']) => {
    const arr = Array?.isArray(t) ? t : [t]
    return PRIORITY?.find((type) => arr?.includes(type)) ?? arr[0]
}

// Props type
type Props = {
    title?: string
    add?: boolean
    listChat?: ChatsProps[]
    typeChat: 'favourite' | 'direct' | 'channel'
    keySearch?: string
}

export const ChatListByType = ({ title, add, listChat = [], typeChat, keySearch = '' }: Props) => {
    const { userData } = useDataUser()

    const handleClickUser = useClickUser()

    const keyword = keySearch?.trim()?.toLowerCase()

    // Filtered data
    const data = useMemo(
        () =>
            listChat
                ?.filter((item) => getEffectiveType(item?.typeChat) === typeChat)
                ?.filter((item) => (keyword ? item?.name?.toLowerCase()?.includes(keyword) : true)),
        [listChat, typeChat, keyword]
    )

    return (
        <div>
            <div className='flex items-center justify-between gap-5 px-4 lg:px-6'>
                <h2 className='uppercase'>{title}</h2>
                {add && (
                    <img
                        src='/images/chats/icon-plus.svg'
                        alt='Add'
                        width={31}
                        height={30}
                        loading='lazy'
                        className='cursor-pointer'
                    />
                )}
            </div>

            <div className='flex flex-col gap-1 dark:text-gray-3 text-gray-7 text-14 mt-4'>
                {data.map((chat) => {
                    const isActive = userData?.id === chat?.id
                    const isChannel = typeChat === 'channel'
                    const hasImgAvatar = !!chat?.avatar && chat?.avatar !== '#'

                    return (
                        <div
                            key={chat?.id}
                            className={`px-4 lg:px-6 py-[5px] flex items-center justify-between gap-3 cursor-pointer hover:bg-green-1 transition-all duration-200 group ${
                                isActive ? 'bg-green-1 text-white' : ''
                            }`}
                            onClick={() => handleClickUser(chat)}
                        >
                            <div className='flex items-center gap-2'>
                                {isChannel ? (
                                    <p className='w-[29px] h-[29px] rounded-full flex items-center justify-center text-black-4 text-14 font-semibold dark:bg-black-5 dark:text-white hover:text-white'>
                                        {chat?.avatar || '#'}
                                    </p>
                                ) : hasImgAvatar ? (
                                    <div className='relative'>
                                        <img
                                            src={chat?.avatar}
                                            alt={chat?.name}
                                            title={chat?.name}
                                            width={29}
                                            height={29}
                                            loading='lazy'
                                            className='cursor-pointer rounded-full'
                                        />
                                        {chat?.active && (
                                            <span className='absolute bottom-0 right-0 p-0.5 bg-white rounded-full w-2.5 h-2.5 grid place-items-center'>
                                                <span className='w-1.5 h-1.5 rounded-full bg-green-1' />
                                            </span>
                                        )}
                                    </div>
                                ) : (
                                    <div className='relative'>
                                        <p className='w-[29px] h-[29px] rounded-full bg-green-1 grid place-items-center text-white text-14 font-semibold'>
                                            {getInitials(chat?.name)}
                                        </p>
                                        {chat?.active && (
                                            <span className='absolute bottom-0 right-0 p-0.5 bg-white rounded-full w-2.5 h-2.5 grid place-items-center'>
                                                <span className='w-1.5 h-1.5 rounded-full bg-green-1' />
                                            </span>
                                        )}
                                    </div>
                                )}

                                <p
                                    className={`capitalize group-hover:text-white ${
                                        chat?.message && chat?.message > 0 ? 'font-medium' : ''
                                    }`}
                                >
                                    {chat?.name}
                                </p>
                            </div>

                            {chat?.message && chat?.message > 0 ? (
                                <p
                                    className={`rounded p-1.5 text-10 font-medium transition-all duration-200 ${
                                        isActive
                                            ? 'bg-white-3 text-white'
                                            : 'bg-gray-8 text-black-4 group-hover:bg-white-3 group-hover:text-white dark:text-gray-4 dark:bg-gray-9'
                                    }`}
                                >
                                    {chat?.message}
                                </p>
                            ) : (
                                ''
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
