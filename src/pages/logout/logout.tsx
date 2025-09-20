import { Button } from '@/components'
import { IMAGE_LAZY, LOGO, PAGE_KEYWORD } from '@/constant'
import { useNavigate } from 'react-router-dom'
import config from './../../config/config.json'

export const Logout = () => {
    const navigate = useNavigate()

    return (
        <div className='max-w-[434px] mx-auto w-full relative z-[2] xl:min-h-[540px]'>
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-20 lg:text-26 font-medium text-black-1'>{config.txt_change_password}</h1>
                <img
                    src='/images/change-password/icon-logout.png'
                    width={96}
                    height={96}
                    loading={IMAGE_LAZY}
                    alt={config.txt_you_are_logged_out}
                    title={config.txt_you_are_logged_out}
                    className='mt-20 2xl:mt-[107px] w-[60px] h-[60px] lg:w-[96px] lg:h-[96px]'
                />
                <h2 className='text-18 font-medium text-black-1 mt-[30px]'>{config.txt_you_are_logged_out}</h2>
                <p className='text-15 text-gray-1 mt-2.5'>
                    {config.txt_thank_you_for_using} <span className='text-black-1 font-medium'>{LOGO.NAME}</span>
                </p>
                <Button
                    onClick={() => navigate(PAGE_KEYWORD.PROFILE)}
                    className='text-white text-15 rounded h-10 border border-green-6 bg-green-6 transition-all duration-200 hover:bg-white hover:text-green-6 text-center cursor-pointer mt-6 max-w-[435px] w-full'
                >
                    {config.txt_sign_in}
                </Button>
            </div>
        </div>
    )
}
