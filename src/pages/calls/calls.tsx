import { LIST_CALLS } from '@/constant'
import { getInitials } from '@/hooks'
import { useIdUser } from '@/store/management-user-id'

export const Calls = () => {
    const { updateUserId } = useIdUser()

    return (
        <div className='py-4 lg:py-6'>
            <h1 className='px-4 lg:px-6 text-21 font-medium text-black-1 dark:text-gray-3'>Calls</h1>
            <div className='mt-4 flex flex-col'>
                {LIST_CALLS?.map((user, index) => {
                    return (
                        <div
                            key={`${user?.id}-${index}`}
                            className='px-4 lg:px-6 py-3 flex items-center justify-between gap-3 cursor-pointer hover:bg-green-1 transition-all duration-200 group dark:text-gray-3 text-gray-7 text-14 border-b border-gray-5 dark:border-black-2 last:border-0 hover-white-icon'
                            onClick={() => user?.id && updateUserId(user?.id)}
                        >
                            <div className='flex items-center gap-2'>
                                {user?.avatar ? (
                                    <img
                                        src={user?.avatar}
                                        alt={user?.name}
                                        title={user?.name}
                                        width={29}
                                        height={29}
                                        loading='lazy'
                                        className='cursor-pointer rounded-full'
                                    />
                                ) : (
                                    <p className='w-[29px] h-[29px] rounded-full bg-pink-1 grid place-items-center text-white text-14 font-semibold'>
                                        {getInitials(user?.name)}
                                    </p>
                                )}
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
        </div>
    )
}
