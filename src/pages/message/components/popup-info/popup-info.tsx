import { Button, ImageAvatar, Input } from '@/components'
import { CloseIcon } from '@/components/icons/close-icon'
import { AppContext } from '@/contexts/app.context'
import { UserListsContext } from '@/contexts/user.context'
import { useContext, useState } from 'react'

export const PopupInfo = ({
    handleClose,
    isEdit = false,
    nameUser,
    handleCloseOption
}: {
    handleClose?: () => void
    isEdit?: boolean
    nameUser?: string
    handleCloseOption?: () => void
}) => {
    const { userData, updateUserData } = useContext(AppContext)

    const contextUser = useContext(UserListsContext)

    const [inputValue, setInputValue] = useState(nameUser || '')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (inputValue.trim()) {
            updateUserData({ name: inputValue })

            if (userData?.id !== undefined) {
                contextUser?.updateUser(userData.id, { name: inputValue })
            }
        }
        if (handleClose && handleCloseOption) {
            handleClose()
            handleCloseOption()
        }
    }

    return (
        <div className='max-w-[343px] w-full bg-white text-center rounded-xl overflow-hidden pb-6'>
            <CloseIcon
                className='absolute top-4 right-4 cursor-pointer z-[6] border border-white p-1 rounded-full fill-white w-6 h-6 hover:border-green-1 hover:bg-green-1 transition-all duration-200'
                onClick={handleClose}
            />
            <div className='relative z-[5]'>
                <img
                    src='/images/profile/bg-profile.jpg'
                    alt='Background'
                    title='Background'
                    width={300}
                    height={160}
                    className='w-full max-h-[160px] object-cover object-center'
                    loading='lazy'
                />
            </div>
            <div className='-mt-10 relative z-[6] text-center flex flex-col items-center justify-center'>
                <ImageAvatar
                    source={userData?.avatar}
                    width={80}
                    height={80}
                    alt={userData?.name}
                    className='rounded-full'
                    classNameTextAvatar='w-20 h-20 text-24'
                />
                {isEdit ? (
                    <form onSubmit={handleSubmit} className='flex items-center w-full px-4 gap-1 mt-2'>
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            type='text'
                            name='username'
                            className='flex-1'
                            classNameInput='text-black-1 dark:text-gray-4 text-14 rounded-md border border-gray-6 p-2'
                        />
                        <Button type='submit'>
                            <img
                                src='/images/message/bx-sent.svg'
                                alt='Submit'
                                title='Submit'
                                width={43}
                                height={43}
                                loading='lazy'
                                className='cursor-pointer w-7 h-7 lg:w-10 lg:h-10 rounded'
                            />
                        </Button>
                    </form>
                ) : (
                    <h2 className='text-16 font-medium dark:text-gray-3 mt-[15px]'>{userData?.name}</h2>
                )}
            </div>
            <div className='flex flex-col gap-3 lg:gap-[18px] text-black-1 dark:text-gray-4 mt-6 px-4'>
                <p className='flex items-center gap-[15px] text-15'>
                    <img
                        src='/images/profile/bx-user.svg'
                        width={15}
                        height={15}
                        alt={userData?.name}
                        title={userData?.name}
                        loading='lazy'
                        className='icon-dark-mode'
                    />
                    {userData?.name}
                </p>
                <a
                    href='mailto:adc@123.com'
                    target='_blank'
                    title='adc@123.com'
                    className='flex items-center gap-[15px] text-15 transition-al duration-200 hover:text-green-1'
                >
                    <img
                        src='/images/profile/bx-message-rounded-dots.svg'
                        width={15}
                        height={15}
                        alt='adc@123.com'
                        title='adc@123.com'
                        loading='lazy'
                        className='icon-dark-mode'
                    />
                    adc@123.com
                </a>
                <p className='flex items-center gap-[15px] text-15'>
                    <img
                        src='/images/profile/bx-location-plus.svg'
                        width={15}
                        height={15}
                        alt='California, USA'
                        title='California, USA'
                        loading='lazy'
                        className='icon-dark-mode'
                    />
                    California, USA
                </p>
            </div>
        </div>
    )
}
