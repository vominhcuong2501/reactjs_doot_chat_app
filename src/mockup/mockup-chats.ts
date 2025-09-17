import { CHANNEL_CHAT, DIRECT_CHAT, FAVOURITE_CHAT, OTHER_TYPE } from '@/constant'

export const LIST_CHATS = [
    {
        id: 1,
        name: 'Bella Cote',
        avatar: '/images/chats/img-bella-cote.png',
        active: true,
        message: 18,
        typeChat: FAVOURITE_CHAT
    },
    {
        id: 2,
        name: 'Steven Jury',
        avatar: '/images/chats/img-steven-jury.png',
        active: true,
        message: 0,
        typeChat: [FAVOURITE_CHAT, DIRECT_CHAT]
    },
    {
        id: 3,
        name: 'James Pinard',
        avatar: '',
        active: true,
        message: 0,
        typeChat: FAVOURITE_CHAT
    },
    {
        id: 4,
        name: 'Alissa Richards',
        avatar: '/images/chats/img-alissa-richards.png',
        active: true,
        message: 18,
        typeChat: FAVOURITE_CHAT
    },
    {
        id: 5,
        name: 'Nicholas Staten',
        avatar: '/images/chats/img-nicholas-staten.png',
        active: true,
        message: 0,
        typeChat: DIRECT_CHAT
    },
    {
        id: 6,
        name: 'Kathryn Swarey',
        avatar: '/images/chats/img-kathryn-swarey.png',
        active: true,
        message: 8,
        typeChat: DIRECT_CHAT
    },
    {
        id: 7,
        name: 'Robert Ledonne',
        avatar: '/images/chats/img-robert-ledonne.png',
        active: true,
        message: 0,
        typeChat: DIRECT_CHAT
    },
    {
        id: 8,
        name: 'Jessica Lewis',
        avatar: '',
        active: true,
        message: 0,
        typeChat: DIRECT_CHAT
    },
    {
        id: 9,
        name: 'John Foss',
        avatar: '/images/chats/img-john-foss.png',
        active: true,
        message: 5,
        typeChat: DIRECT_CHAT
    },
    {
        id: 10,
        name: 'Gloria Underhill',
        avatar: '/images/chats/img-gloria-underhill.png',
        active: true,
        message: 0,
        typeChat: DIRECT_CHAT
    },
    {
        id: 11,
        name: 'Landing Design',
        avatar: OTHER_TYPE,
        active: false,
        message: 12,
        typeChat: CHANNEL_CHAT
    },
    {
        id: 12,
        name: 'Design Phase 2',
        avatar: OTHER_TYPE,
        active: false,
        message: 0,
        typeChat: CHANNEL_CHAT
    },
    {
        id: 13,
        name: 'Brand Suggestion',
        avatar: OTHER_TYPE,
        active: false,
        message: 85,
        typeChat: CHANNEL_CHAT
    },
    {
        id: 14,
        name: 'Reporting',
        avatar: OTHER_TYPE,
        active: false,
        message: 0,
        typeChat: CHANNEL_CHAT
    }
]
