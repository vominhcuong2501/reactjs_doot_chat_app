import { ACTIVE_STATUS, BUSY_STATUS, DOCUMENT_TYPE, IMAGE_TYPE, OFF_STATUS } from '@/constant'

export const LIST_ATTACHED_FILES = [
    { fileName: 'design-phase-...', fileSize: '12.5 MB', fileType: DOCUMENT_TYPE },
    { fileName: 'Image-1.jpg', fileSize: '4.2 MB', fileType: IMAGE_TYPE },
    { fileName: 'Image-2.jpg', fileSize: '3.1 MB', fileType: IMAGE_TYPE },
    { fileName: 'Landing-A.zip', fileSize: '6.7 MB', fileType: DOCUMENT_TYPE }
]

export const LIST_IMAGES = [
    '/images/media/img-mouse.jpg',
    '/images/media/img-cow.jpg',
    '/images/media/img-tiger.jpg',
    '/images/media/img-rabbit.jpg',
    '/images/media/img-dragon.jpg',
    '/images/media/img-snake.jpg',
    '/images/media/img-horse.jpg',
    '/images/media/img-sheep.jpg',
    '/images/media/img-monkey.jpg',
    '/images/media/img-chicken.jpg',
    '/images/media/img-dog.jpg',
    '/images/media/img-pig.jpg'
]

export const LIST_STATUS = [
    {
        text: ACTIVE_STATUS,
        color: 'bg-green-5'
    },
    {
        text: BUSY_STATUS,
        color: 'bg-red-500'
    },
    {
        text: OFF_STATUS,
        color: 'bg-gray-1'
    }
]
