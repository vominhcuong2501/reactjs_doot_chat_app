import { ToggleItem } from '@/components/toggle-item'
import { ProfileUser } from '../profile/components'
import { SETTINGS_PAGE } from '@/constant'

export const Settings = () => {
    return (
        <div className='text-black-1'>
            <ProfileUser title={SETTINGS_PAGE} displayStatus />
            <ToggleItem title='Personal Info' icon='/images/profile/bxs-user.svg'>
                <div className='flex flex-col gap-4 lg:gap-6 p-4 lg:p-5'>
                    <div className='flex items-start justify-between'>
                        <div className='flex-1'>
                            <p className='text-15 text-gray-1 dark:text-gray-4'>Name</p>
                            <p className='text-15 text-black-1 font-medium dark:text-gray-3'>Adam Zampa</p>
                        </div>
                        <img
                            src='/images/profile/icon-edit.svg'
                            alt='Edit'
                            title='Edit'
                            width={31}
                            height={29}
                            loading='lazy'
                            className='cursor-pointer'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-15 text-gray-1 dark:text-gray-4'>Email</p>
                        <a
                            href='mailto:adc@123.com'
                            target='_blank'
                            title='adc@123.com'
                            className='text-15 text-black-1 font-medium dark:text-gray-3 hover:text-green-1 transition-all duration-200'
                        >
                            adc@123.com
                        </a>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-15 text-gray-1 dark:text-gray-4'>Location</p>
                        <p className='text-15 text-black-1 font-medium dark:text-gray-3'>California, USA</p>
                    </div>
                </div>
            </ToggleItem>
            <ToggleItem title='Themes' icon='/images/profile/bxs-adjust-alt.svg'></ToggleItem>
            <ToggleItem title='Privacy' icon='/images/profile/bxs-lock.svg'></ToggleItem>
            <ToggleItem title='Security' icon='/images/profile/bxs-check-shield.svg'></ToggleItem>
            <ToggleItem title='Help' icon='/images/profile/bxs-help-circle.svg'></ToggleItem>
        </div>
    )
}
