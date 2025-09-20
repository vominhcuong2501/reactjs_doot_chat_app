import { InputSearch } from '@/components'
import { useState } from 'react'
import { ListContact } from './components/list-contact'
import { AddNewChat } from '@/components/add-new-chat'
import config from './../../config/config.json'

export const Contacts = () => {
    const [keySearch, setKeySearch] = useState('')

    return (
        <>
            <div className='p-4 lg:p-6 sticky top-0 bg-white dark:bg-black-3 z-[3]'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-21 font-medium text-black-1 dark:text-gray-3 capitalize'>
                        {config.txt_contacts}
                    </h1>
                    <AddNewChat />
                </div>
                <InputSearch className='relative mt-[19px] rounded overflow-hidden' setKeySearch={setKeySearch} />
            </div>

            <ListContact keySearch={keySearch} />
        </>
    )
}
