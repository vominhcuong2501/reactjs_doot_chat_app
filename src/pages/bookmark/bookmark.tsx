import { BOOKMARK } from '@/constant'
import { LIST_BOOKMARK } from '@/mockup'

export const Bookmark = () => {
    return (
        <>
            <h1 className='p-4 lg:p-6 text-21 font-medium text-black-1 dark:text-gray-3 sticky top-0 bg-white dark:bg-black-3 capitalize'>
                {BOOKMARK}
            </h1>
            <div className='flex flex-col pb-4 lg:pb-6'>
                {LIST_BOOKMARK?.map((file) => {
                    return (
                        <div
                            key={file?.fileName}
                            className='px-4 lg:px-6 py-3 flex items-center justify-between gap-3 cursor-pointer hover:bg-green-1 transition-all duration-200 group dark:text-gray-3 text-gray-7 text-14 border-b border-gray-5 dark:border-black-2 last:border-0 hover-white-icon'
                        >
                            <div className='flex items-center gap-4'>
                                {file.fileType === 'document' && (
                                    <img
                                        src='/images/profile/icon-file.svg'
                                        width={29}
                                        height={29}
                                        alt={file?.fileName}
                                        title={file?.fileName}
                                        loading='lazy'
                                        className='icon-hover'
                                    />
                                )}
                                {file.fileType === 'image' && (
                                    <img
                                        src='/images/profile/icon-image.svg'
                                        width={29}
                                        height={29}
                                        alt={file?.fileName}
                                        title={file?.fileName}
                                        loading='lazy'
                                        className='icon-hover'
                                    />
                                )}
                                {file.fileType === 'website' && (
                                    <img
                                        src='/images/profile/icon-pin.svg'
                                        width={29}
                                        height={29}
                                        alt={file?.fileName}
                                        title={file?.fileName}
                                        loading='lazy'
                                        className='icon-hover'
                                    />
                                )}
                                <div>
                                    <p className='text-16 capitalize group-hover:text-white font-semibold line-clamp-1'>
                                        {file?.fileName}
                                    </p>
                                    <p className='flex items-center gap-1 line-clamp-1 text-13 text-gray-1 dark:text-gray-4 group-hover:text-white'>
                                        {file?.fileSize}
                                    </p>
                                </div>
                            </div>
                            <img
                                src='/images/profile/bx-dots-horizontal-rounded.svg'
                                width={15}
                                height={15}
                                alt={file?.fileName}
                                title={file?.fileName}
                                loading='lazy'
                                className='cursor-pointer icon-hover icon-dark-mode'
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
