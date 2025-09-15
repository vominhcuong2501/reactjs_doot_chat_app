interface Props {
    children?: React.ReactNode
}
export default function FormLayout({ children }: Props) {
    return (
        <div className='bg-green-1 h-[100dvh] lg:min-h-screen lg:h-full'>
            <div className='max-w-[1920px] mx-auto py-4 px-4 lg:pl-12 lg:pt-12 lg:pr-6 relative'>
                <div className=''>
                    <div className='flex items-center gap-4'>
                        <img
                            src='/images/change-password/icon-logo.svg'
                            alt='Doot'
                            title='Doot'
                            width={26}
                            height={26}
                        />
                        <p className='text-[26px] font-semibold text-white'>Doot</p>
                    </div>
                    <p className='text-white-5 text-16 lg:mt-3'>Responsive Bootstrap 5 Chat App</p>
                </div>
                <div className='max-w-[500px] 3xl:max-w-[1392px] mx-auto lg:ml-auto bg-white 2xl:min-h-[832px] rounded-md lg:rounded-2xl mt-4 p-4 xl:p-6'>
                    {children}
                    <p className='flex items-center gap-1 justify-center text-15 text-gray-1  relative z-[2]'>
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
