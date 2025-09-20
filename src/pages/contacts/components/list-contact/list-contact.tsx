import { ImageAvatar } from '@/components'
import { AppContext } from '@/contexts/app.context'
import { UserListsContext } from '@/contexts/user.context'
import { getInitials, groupUsersByFirstLetter, normalizeName, useClickUser } from '@/hooks'
import { IconOption } from '@/pages/message/components'
import { ContactProps } from '@/types'
import { useContext, useMemo } from 'react'

export const ListContact = ({
    keySearch,
    isShowDot = true,
    handleClose
}: {
    keySearch?: string
    isShowDot?: boolean
    handleClose?: () => void
}) => {
    const { userData } = useContext(AppContext)

    const { contactList } = useContext(UserListsContext) ?? {}

    const handleClickUser = useClickUser()

    const handleClick = (contact: ContactProps) => {
        handleClickUser(contact)

        if (handleClose) handleClose()
    }

    const keyword = normalizeName(keySearch)

    const filtered = useMemo(() => {
        if (!keyword) return contactList

        return contactList?.filter((key: ContactProps) => {
            const nameNorm = normalizeName(key?.name)

            const initials = getInitials(key?.name).toLowerCase()

            return nameNorm.includes(keyword) || initials.includes(keyword)
        })
    }, [keyword, contactList, userData.name])

    const listContact = useMemo(() => filtered && groupUsersByFirstLetter(filtered), [filtered])

    return (
        <div className='pb-4 lg:pb-6 flex flex-col gap-5 lg:gap-[30px]'>
            {listContact?.map((item) => {
                return (
                    <div key={item?.letter}>
                        <h2 className='uppercase text-12 font-medium text-green-1 relative before:content-[""] before:absolute before:w-[85%] before:h-[1px] before:bg-gray-5 before:top-1/2 before:-translate-y-1/2 before:right-0 px-4 lg:px-6 dark:before:bg-black-2'>
                            {item?.letter}
                        </h2>

                        <div className='flex flex-col gap-1 dark:text-gray-3 text-gray-7 text-14 mt-4'>
                            {item?.listUser?.map((contact) => {
                                const isActive = userData?.id === contact?.id

                                return (
                                    <div
                                        key={contact?.id}
                                        className={`px-4 lg:px-6 py-[5px] flex items-center justify-between gap-3 cursor-pointer hover:bg-green-1 transition-all duration-200 group hover-white-icon ${
                                            isActive ? 'bg-green-1 text-white' : ''
                                        }`}
                                    >
                                        <div
                                            className='flex items-center gap-2 flex-1'
                                            onClick={() => contact?.id && handleClick(contact)}
                                        >
                                            <ImageAvatar
                                                source={contact?.avatar}
                                                width={29}
                                                height={29}
                                                alt={contact?.name}
                                                isStatus
                                                isShowAvatar={false}
                                                className='rounded-full'
                                            />
                                            <p className='capitalize group-hover:text-white font-medium flex-1'>
                                                {contact?.name}
                                            </p>
                                        </div>
                                        {isShowDot && (
                                            <IconOption
                                                className='icon-hover'
                                                infoUser={contact}
                                            />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
