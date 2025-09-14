import { FormChangePassword } from './components/form-change-password'

export const ChangePassword = () => {
    return (
        <div className='max-w-[1392px] ml-auto bg-white 2xl:min-h-[832px] rounded-2xl mt-2 p-4 xl:p-6 '>
            <div className='max-w-[434px] mx-auto pb-5 2xl:py-[130px]'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <h1 className='text-20 lg:text-26 font-medium text-black-1'>Change Password</h1>
                    <img
                        src='/images/change-password/img-user-change-password.png'
                        width={80}
                        height={80}
                        loading='lazy'
                        alt='Kathryn Swarey'
                        title='Kathryn Swarey'
                        className='mt-2 2xl:mt-12 w-[60px] h-[60px] lg:w-20 lg:h-20'
                    />
                    <p className='text-15 font-medium text-black-1 lg:mt-3'>Kathryn Swarey</p>
                </div>
                <FormChangePassword />
            </div>
            <p className='flex items-center gap-1 justify-center text-15 text-gray-1'>
                © 2021 Doot. Crafted with
                <img
                    src='/images/change-password/icon-heart.png'
                    width={15}
                    height={15}
                    loading='lazy'
                    alt='Kathryn Swarey'
                    title='Kathryn Swarey'
                />
                by Themesbrand
            </p>
        </div>
    )
}
