import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '@/contexts/app.context'
import { UserListsContext } from '@/contexts/user.context'
import { PopupInfo } from '../popup-info'
import { Modal } from '@/components'
import { IMAGE_LAZY } from '@/constant'
import { ContactProps } from '@/types'
import config from './../../../../config/config.json'

type IconOptionProps = {
    className?: string
    infoUser?: ContactProps
}

export const IconOption = ({ className, infoUser }: IconOptionProps) => {
    const { updateUserData } = useContext(AppContext)

    const userContact = useContext(UserListsContext)

    const [isOption, setIsOption] = useState(false)

    const [isOpen, setIsOpen] = useState(false)

    const menuRef = useRef<HTMLDivElement>(null)

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
        if (!infoUser?.id) return

        userContact?.deleteUser(infoUser?.id)

        updateUserData({ id: 0, name: '', avatar: '' })

        setIsOption(false)
    }

    const handleEdit = () => {
        setIsOption(false)

        setIsOpen(true)
    }

    return (
        <div className='relative' ref={menuRef}>
            <img
                src='/images/message/bx-dots-vertical-rounded.svg'
                alt='More'
                title='More'
                width={22}
                height={22}
                loading={IMAGE_LAZY}
                className={`cursor-pointer icon-dark-mode ${isOption && className}`}
                onClick={() => setIsOption((v) => !v)}
            />

            {isOption && (
                <div className='absolute right-0 top-full mt-2 w-36 bg-white rounded shadow z-[2]'>
                    <button
                        className='block w-full text-left px-4 py-2 cursor-pointer text-black-1 hover:text-white hover:bg-green-1 transition-all duration-200'
                        onClick={handleDelete}
                    >
                        {config.txt_delete_user}
                    </button>
                    <button
                        className='block w-full text-left px-4 py-2 cursor-pointer text-black-1 hover:text-white hover:bg-green-1 transition-all duration-200'
                        onClick={handleEdit}
                    >
                        {config.txt_edit_name}
                    </button>
                </div>
            )}

            <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} isIconClose={false}>
                <PopupInfo
                    handleClose={() => setIsOpen(false)}
                    isEdit
                    infoUser={infoUser}
                    handleCloseOption={() => setIsOption(false)}
                />
            </Modal>
        </div>
    )
}
