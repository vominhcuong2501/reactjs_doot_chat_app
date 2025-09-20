import { ToggleItem } from '@/components/toggle-item'
import { ProfileUser } from '../profile/components'
import { DATA_ACCOUNT, IMAGE_LAZY } from '@/constant'
import config from './../../config/config.json'

export const Settings = () => {
    return (
        <div className='text-black-1'>
            <ProfileUser title={config.txt_settings} displayStatus />
            <ToggleItem title={config.txt_personal_info} icon='/images/profile/bxs-user.svg'>
                <div className='flex flex-col gap-4 lg:gap-6 p-4 lg:p-5'>
                    <div className='flex items-start justify-between'>
                        <div className='flex-1'>
                            <p className='text-15 text-gray-1 dark:text-gray-4'>{config.txt_name}</p>
                            <p className='text-15 text-black-1 font-medium dark:text-gray-3'>{DATA_ACCOUNT.NAME}</p>
                        </div>
                        <img
                            src='/images/profile/icon-edit.svg'
                            alt={config.txt_edit}
                            title={config.txt_edit}
                            width={31}
                            height={29}
                            loading={IMAGE_LAZY}
                            className='cursor-pointer'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-15 text-gray-1 dark:text-gray-4'>{config.txt_email}</p>
                        <a
                            href={`mailto:${DATA_ACCOUNT.EMAIL}`}
                            target='_blank'
                            title={DATA_ACCOUNT.EMAIL}
                            className='text-15 text-black-1 font-medium dark:text-gray-3 hover:text-green-1 transition-all duration-200'
                        >
                            {DATA_ACCOUNT.EMAIL}
                        </a>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-15 text-gray-1 dark:text-gray-4'>{config.txt_location}</p>
                        <p className='text-15 text-black-1 font-medium dark:text-gray-3'>{DATA_ACCOUNT.LOCATION}</p>
                    </div>
                </div>
            </ToggleItem>
            <ToggleItem title={config.txt_themes} icon='/images/profile/bxs-adjust-alt.svg'></ToggleItem>
            <ToggleItem title={config.txt_privacy} icon='/images/profile/bxs-lock.svg'></ToggleItem>
            <ToggleItem title={config.txt_security} icon='/images/profile/bxs-check-shield.svg'></ToggleItem>
            <ToggleItem title={config.txt_help} icon='/images/profile/bxs-help-circle.svg'></ToggleItem>
        </div>
    )
}
