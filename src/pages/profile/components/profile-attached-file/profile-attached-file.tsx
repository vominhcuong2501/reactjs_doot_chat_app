import { IMAGE_LAZY, TYPE_DOCUMENT } from '@/constant'
import { LIST_ATTACHED_FILES } from '@/mockup'
import { Fragment } from 'react'
import config from './../../../../config/config.json'

export const ProfileAttachedFile = () => {
    return (
        <Fragment>
            <p className='mt-6 text-11 font-medium text-gray-1 dark:text-gray-4 uppercase'>
                {config.txt_attached_files}
            </p>
            <div className='flex flex-col gap-2 mt-4'>
                {LIST_ATTACHED_FILES?.map((file, index) => {
                    return (
                        <div
                            key={`${file.fileName}-${index}`}
                            className='px-3 py-2.5 border border-gray-5 dark:border-black-2 flex items-center gap-4 justify-between rounded transition-all duration-200 hover:border-green-1'
                        >
                            <div className='flex items-center gap-4'>
                                {file.fileType === TYPE_DOCUMENT.DOCUMENT && (
                                    <img
                                        src='/images/profile/icon-file.svg'
                                        width={29}
                                        height={29}
                                        alt={file?.fileName}
                                        title={file?.fileName}
                                        loading={IMAGE_LAZY}
                                    />
                                )}
                                {file.fileType === TYPE_DOCUMENT.IMAGE && (
                                    <img
                                        src='/images/profile/icon-image.svg'
                                        width={29}
                                        height={29}
                                        alt={file?.fileName}
                                        title={file?.fileName}
                                        loading={IMAGE_LAZY}
                                    />
                                )}
                                <div className='flex-1 text-gray-1 dark:text-gray-4'>
                                    <p className='text-14 font-medium'>{file?.fileName}</p>
                                    <p className='text-13'>{file?.fileSize}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <a
                                    href='/images/profile/image-1.jpg'
                                    download={file?.fileName}
                                    className='cursor-pointer'
                                >
                                    <img
                                        src='/images/profile/bxs-download.svg'
                                        width={15}
                                        height={15}
                                        alt={file?.fileName}
                                        title={file?.fileName}
                                        loading={IMAGE_LAZY}
                                        className='icon-dark-mode'
                                    />
                                </a>
                                <img
                                    src='/images/profile/bx-dots-horizontal-rounded.svg'
                                    width={15}
                                    height={15}
                                    alt={file?.fileName}
                                    title={file?.fileName}
                                    loading={IMAGE_LAZY}
                                    className='cursor-pointer icon-dark-mode'
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}
