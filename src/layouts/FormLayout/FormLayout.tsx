import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

export default function FormLayout() {
    useEffect(() => {
        document.body.classList.add('bg-green-1')
        return () => {
            document.body.classList.remove('bg-green-1')
        }
    }, [])

    return (
        <div className='h-full relative px-4 pb-10 lg:pb-[134px] flex flex-col items-center justify-center lg:justify-start lg:items-start'>
            <div className='pt-5 lg:pl-12 lg:pt-12 max-w-[500px] w-full'>
                <div className='flex items-center gap-4'>
                    <img src='/images/change-password/icon-logo.svg' alt='Doot' title='Doot' width={26} height={26} />
                    <p className='text-[26px] font-semibold text-white'>Doot</p>
                </div>
                <p className='text-white-5 text-16 lg:mt-3'>Responsive Bootstrap 5 Chat App</p>
            </div>
            <div className='max-w-[1920px] mx-auto lg:pr-6 relative w-full'>
                <div className='max-w-[500px] 2xl:max-w-[1392px] mx-auto 2xl:ml-auto 2xl:mr-0 bg-white 2xl:min-h-[832px] rounded-md lg:rounded-2xl mt-4 px-4 pb-14 pt-5 flex flex-col items-center justify-center w-full relative'>
                    <Outlet />
                    <p className='flex items-center gap-1 justify-center text-12 sm:text-15 text-gray-1 absolute bottom-4 2xl:bottom-6 left-1/2 -translate-x-1/2 w-full flex-wrap'>
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

                <img
                    src='/images/change-password/img-bg-change-password.png'
                    alt='Doot'
                    title='Doot'
                    width={760}
                    height={541}
                    className='absolute bottom-0 left-0 hidden lg:block lg:max-w-[500px] 2xl:max-w-[760px] z-[1]'
                />
            </div>
        </div>
    )
}
