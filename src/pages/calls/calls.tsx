import { ImageAvatar } from '@/components'
import { PAGE_KEYWORD } from '@/constant'
import { UserListsContext } from '@/contexts/user.context'
import { useClickUser } from '@/hooks/use-click-user'
import { CallsProps } from '@/types'
import { useContext } from 'react'

export const Calls = () => {
    const handleClickUser = useClickUser()

    const { callList } = useContext(UserListsContext) ?? {}

    return (
        <>
            <h1 className='p-4 lg:p-6 text-21 font-medium text-black-1 dark:text-gray-3 sticky top-0 bg-white dark:bg-black-3 z-[3] capitalize'>
                {PAGE_KEYWORD.CALLS}
            </h1>
            <div className='flex flex-col pb-4 lg:pb-6'>
                {callList?.map((user: CallsProps, index: number) => {
                    return (
                        <div
                            key={`${user?.id}-${index}`}
                            className='px-4 lg:px-6 py-3 flex items-center justify-between gap-3 cursor-pointer hover:bg-green-1 transition-all duration-200 group dark:text-gray-3 text-gray-7 text-14 border-b border-gray-5 dark:border-black-2 last:border-0 hover-white-icon'
                            onClick={() => handleClickUser(user)}
                        >
                            <div className='flex items-center gap-2'>
                                <ImageAvatar
                                    source={user?.avatar}
                                    width={29}
                                    height={29}
                                    alt={user?.name}
                                    className='rounded-full'
                                    isShowAvatar={false}
                                />
                                <div>
                                    <p className='capitalize group-hover:text-white font-medium'>{user?.name}</p>
                                    <p className='flex items-center gap-1 line-clamp-1 text-12 text-gray-1 dark:text-gray-4 group-hover:text-white'>
                                        {user?.isCalled ? (
                                            <img
                                                src='/images/calls/arrow-left-down-fill.svg'
                                                alt='Icon'
                                                title='Icon'
                                                width={12}
                                                height={12}
                                                loading='lazy'
                                            />
                                        ) : (
                                            <img
                                                src='/images/calls/arrow-right-up-fill.svg'
                                                alt='Icon'
                                                title='Icon'
                                                width={12}
                                                height={12}
                                                loading='lazy'
                                            />
                                        )}
                                        {user?.day}
                                    </p>
                                </div>
                            </div>
                            <p className='text-12 text-gray-1 dark:text-gray-4 group-hover:text-white'>{user?.time}</p>
                            {user?.isVideo ? (
                                <img
                                    src='/images/calls/bx-video.svg'
                                    alt='Video'
                                    title='Video'
                                    width={20}
                                    height={20}
                                    loading='lazy'
                                    className='icon-hover'
                                />
                            ) : (
                                <img
                                    src='/images/calls/bxs-phone-call.svg'
                                    alt='Call'
                                    title='Call'
                                    width={20}
                                    height={20}
                                    loading='lazy'
                                    className='icon-hover'
                                />
                            )}
                        </div>
                    )
                })}
            </div>
        </>
    )
}
