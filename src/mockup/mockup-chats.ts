import { TYPE_CHAT, TYPE_DOCUMENT } from "@/constant";

export const LIST_CHATS = [
    {
        id: 1,
        name: 'Bella Cote',
        avatar: '/images/chats/img-bella-cote.png',
        active: true,
        message: 18,
        typeChat: TYPE_CHAT.FAVORITE
    },
    {
        id: 2,
        name: 'Steven Jury',
        avatar: '/images/chats/img-steven-jury.png',
        active: true,
        message: 0,
        typeChat: [TYPE_CHAT.FAVORITE, TYPE_CHAT.DIRECT]
    },
    {
        id: 3,
        name: 'James Pinard',
        avatar: '',
        active: true,
        message: 0,
        typeChat: TYPE_CHAT.FAVORITE
    },
    {
        id: 4,
        name: 'Alissa Richards',
        avatar: '/images/chats/img-alissa-richards.png',
        active: true,
        message: 18,
        typeChat: TYPE_CHAT.FAVORITE
    },
    {
        id: 5,
        name: 'Nicholas Staten',
        avatar: '/images/chats/img-nicholas-staten.png',
        active: true,
        message: 0,
        typeChat: TYPE_CHAT.DIRECT
    },
    {
        id: 6,
        name: 'Kathryn Swarey',
        avatar: '/images/chats/img-kathryn-swarey.png',
        active: true,
        message: 8,
        typeChat: TYPE_CHAT.DIRECT
    },
    {
        id: 7,
        name: 'Robert Ledonne',
        avatar: '/images/chats/img-robert-ledonne.png',
        active: true,
        message: 0,
        typeChat: TYPE_CHAT.DIRECT
    },
    {
        id: 8,
        name: 'Jessica Lewis',
        avatar: '',
        active: true,
        message: 0,
        typeChat: TYPE_CHAT.DIRECT
    },
    {
        id: 9,
        name: 'John Foss',
        avatar: '/images/chats/img-john-foss.png',
        active: true,
        message: 5,
        typeChat: TYPE_CHAT.DIRECT
    },
    {
        id: 10,
        name: 'Gloria Underhill',
        avatar: '/images/chats/img-gloria-underhill.png',
        active: true,
        message: 0,
        typeChat: TYPE_CHAT.DIRECT
    },
    {
        id: 11,
        name: 'Landing Design',
        avatar: TYPE_DOCUMENT.OTHER,
        active: false,
        message: 12,
        typeChat: TYPE_CHAT.CHANNEL
    },
    {
        id: 12,
        name: 'Design Phase 2',
        avatar: TYPE_DOCUMENT.OTHER,
        active: false,
        message: 0,
        typeChat: TYPE_CHAT.CHANNEL
    },
    {
        id: 13,
        name: 'Brand Suggestion',
        avatar: TYPE_DOCUMENT.OTHER,
        active: false,
        message: 85,
        typeChat: TYPE_CHAT.CHANNEL
    },
    {
        id: 14,
        name: 'Reporting',
        avatar: TYPE_DOCUMENT.OTHER,
        active: false,
        message: 0,
        typeChat: TYPE_CHAT.CHANNEL
    }
]
