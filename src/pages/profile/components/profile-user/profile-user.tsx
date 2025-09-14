export const ProfileUser = () => {
    return (
        <div className='pb-4 md:pb-[26px] border-b border-gray-5 dark:border-black-2'>
            <div className='relative z-[1]'>
                <img
                    src='/images/profile/bg-profile.jpg'
                    alt='Background'
                    title='Background'
                    width={300}
                    height={160}
                    className='w-full max-h-[160px] object-cover object-center'
                    loading='lazy'
                />
                <div className='flex items-center justify-between gap-5 absolute top-[15px] left-4 right-4'>
                    <h1 className='text-18 font-medium text-white'>My Profile</h1>
                    <img
                        src='/images/profile/bx-dots-vertical-rounded.svg'
                        alt='Icon'
                        title='Icon'
                        width={22}
                        height={22}
                        className='cursor-pointer'
                        loading='lazy'
                    />
                </div>
            </div>
            <div className='-mt-10 relative z-[2] text-center flex flex-col items-center justify-center'>
                <img
                    src='/images/profile/img-avatar-user.png'
                    alt='Avatar'
                    title='Avatar'
                    width={80}
                    height={80}
                    className='max-w-[80px] w-full rounded-full'
                    loading='lazy'
                />
                <h2 className='text-16 font-medium dark:text-gray-3 mt-[15px]'>Adam Zampa</h2>
                <p className='text-14 text-gray-1 dark:text-gray-4 mt-[5px]'>Front end Developer</p>
            </div>
        </div>
    )
}
