import { LIST_CONTACTS } from '@/constant'
import { getInitials, groupUsersByFirstLetter, normalizeName, useClickUser } from '@/hooks'
import { useDataUser } from '@/store'
import { useMemo } from 'react'

export const ListContact = ({ keySearch }: { keySearch?: string }) => {
    const { userData } = useDataUser()

    const handleClickUser = useClickUser()

    const keyword = normalizeName(keySearch)

    const filtered = useMemo(() => {
        if (!keyword) return LIST_CONTACTS
        return LIST_CONTACTS.filter((key) => {
            const nameNorm = normalizeName(key?.name)
            const initials = getInitials(key?.name).toLowerCase()
            return nameNorm.includes(keyword) || initials.includes(keyword)
        })
    }, [keyword])

    const listContact = useMemo(() => groupUsersByFirstLetter(filtered), [filtered])

    return (
        <div className='mt-6 lg:mt-[47px] flex flex-col gap-5 lg:gap-[30px]'>
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
                                            className='flex items-center gap-2'
                                            onClick={() => contact?.id && handleClickUser(contact)}
                                        >
                                            {contact?.avatar ? (
                                                <img
                                                    src={contact?.avatar}
                                                    alt={contact?.name}
                                                    title={contact?.name}
                                                    width={29}
                                                    height={29}
                                                    loading='lazy'
                                                    className='cursor-pointer rounded-full'
                                                />
                                            ) : (
                                                <p className='w-[29px] h-[29px] rounded-full bg-green-1 grid place-items-center text-white text-14 font-semibold'>
                                                    {getInitials(contact?.name)}
                                                </p>
                                            )}
                                            <p className='capitalize group-hover:text-white font-medium'>
                                                {contact?.name}
                                            </p>
                                        </div>
                                        <img
                                            src='/images/chats/bx-dots-vertical-rounded.svg'
                                            alt='Icon'
                                            title='Icon'
                                            width={15}
                                            height={15}
                                            loading='lazy'
                                            className='cursor-pointer icon-hover icon-dark-mode'
                                        />
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
