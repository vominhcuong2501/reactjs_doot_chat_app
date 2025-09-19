import { STATUS, TYPE_DOCUMENT } from "@/constant"

export const LIST_ATTACHED_FILES = [
    { fileName: 'design-phase-...', fileSize: '12.5 MB', fileType: TYPE_DOCUMENT.DOCUMENT },
    { fileName: 'Image-1.jpg', fileSize: '4.2 MB', fileType: TYPE_DOCUMENT.IMAGE },
    { fileName: 'Image-2.jpg', fileSize: '3.1 MB', fileType: TYPE_DOCUMENT.IMAGE },
    { fileName: 'Landing-A.zip', fileSize: '6.7 MB', fileType: TYPE_DOCUMENT.DOCUMENT }
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
        text: STATUS.ACTIVE,
        color: 'bg-green-5'
    },
    {
        text: STATUS.BUSY,
        color: 'bg-red-500'
    },
    {
        text: STATUS.OFF,
        color: 'bg-gray-1'
    }
]
