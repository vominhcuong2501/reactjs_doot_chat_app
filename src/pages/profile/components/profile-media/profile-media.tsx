import { LIST_IMAGES } from '@/mockup'
import { useState } from 'react'

const LIMITS = 2

export const ProfileMedia = () => {
    const [isToggleMedia, setIsToggleMedia] = useState(false)

    return (
        <div className='py-4 lg:py-6 border-t border-b border-gray-5 dark:border-black-2'>
            <div className='flex items-center justify-between gap-5'>
                <p className='text-11 font-medium text-gray-1 dark:text-gray-4'>Media</p>
                <p
                    className='text-12 text-green-1 cursor-pointer hover:underline'
                    onClick={() => {
                        setIsToggleMedia(!isToggleMedia)
                    }}
                >
                    {isToggleMedia ? 'Show Less' : 'Show All'}
                </p>
            </div>
            <div className='grid grid-cols-3 items-center gap-2 md:gap-3 mt-3'>
                {LIST_IMAGES?.map((item, index) => {
                    if (isToggleMedia ? index < LIST_IMAGES?.length : index <= LIMITS) {
                        return (
                            <div className='relative rounded h-full' key={`${item}-${index}`}>
                                <img
                                    src={item}
                                    width={148}
                                    height={99}
                                    alt='Image'
                                    title='Image'
                                    loading='lazy'
                                    className='w-full md:w-[76px] md:h-[76px] object-cover object-center rounded'
                                />

                                {!isToggleMedia && LIMITS === index && (
                                    <p className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-15 text-white bg-white-4 rounded'>
                                        + {LIST_IMAGES?.length}
                                    </p>
                                )}
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}
