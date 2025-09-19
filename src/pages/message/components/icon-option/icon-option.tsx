import { useContext, useEffect, useState } from 'react'
import { AppContext } from '@/contexts/app.context'
import { UserListsContext } from '@/contexts/user.context'

type IconOptionProps = {
    menuRef: React.RefObject<HTMLDivElement | null>
    className?: string
    idDelete?: number
}

export const IconOption = ({ menuRef, className, idDelete }: IconOptionProps) => {
    const { updateUserData } = useContext(AppContext)

    const userContact = useContext(UserListsContext)

    const [isOption, setIsOption] = useState(false)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOption(false)
            }
        }
        if (isOption) document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOption])

    const handleDelete = () => {
        userContact?.deleteUser(idDelete || 0)

        updateUserData({ id: 0, name: '', avatar: '' })
    }

    return (
        <div className='relative'>
            <img
                src='/images/message/bx-dots-vertical-rounded.svg'
                alt='More'
                title='More'
                width={22}
                height={22}
                loading='lazy'
                className={`cursor-pointer icon-dark-mode ${isOption && className}`}
                onClick={() => setIsOption((v) => !v)}
            />
            {isOption && (
                <div className='absolute right-0 top-full mt-2 w-36 bg-white rounded shadow z-50'>
                    <button
                        className='block w-full text-left px-4 py-2 cursor-pointer text-black-1 dark:text-white hover:text-white hover:bg-green-1 transition-all duration-200'
                        onClick={handleDelete}
                    >
                        Delete user
                    </button>
                    <button className='block w-full text-left px-4 py-2 cursor-pointer text-black-1 dark:text-white hover:text-white hover:bg-green-1 transition-all duration-200'>
                        Show info
                    </button>
                </div>
            )}
        </div>
    )
}
