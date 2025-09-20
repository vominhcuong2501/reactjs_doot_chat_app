import { DATA_ACCOUNT, IMAGE_LAZY } from '@/constant'
import { FormChangePassword } from './components/form-change-password'
import config from './../../config/config.json'

export const ChangePassword = () => {
    return (
        <div className='max-w-[434px] mx-auto w-full relative z-[2] lg:min-h-[540px]'>
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-20 lg:text-26 font-medium text-black-1'>{config.txt_change_password}</h1>
                <img
                    src='/images/change-password/img-user-change-password.png'
                    width={80}
                    height={80}
                    loading={IMAGE_LAZY}
                    alt={DATA_ACCOUNT.NAME}
                    title={DATA_ACCOUNT.NAME}
                    className='mt-2 2xl:mt-12 w-[60px] h-[60px] lg:w-20 lg:h-20'
                />
                <p className='text-15 font-medium text-black-1 lg:mt-3'>{DATA_ACCOUNT.NAME}</p>
            </div>
            <FormChangePassword />
        </div>
    )
}
