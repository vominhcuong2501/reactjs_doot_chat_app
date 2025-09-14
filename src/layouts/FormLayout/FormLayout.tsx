interface Props {
    children?: React.ReactNode
}
export default function FormLayout({ children }: Props) {
    return (
        <div className='bg-green-1'>
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

                {children}
                <img
                    src='/images/change-password/img-bg-change-password.png'
                    alt='Doot'
                    title='Doot'
                    width={760}
                    height={541}
                    className='absolute bottom-0 left-0 hidden lg:block xl:max-w-[500px] 2xl:max-w-[760px] z-[1]'
                />
            </div>
        </div>
    )
}
