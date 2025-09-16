import { BOOKMARK, CALLS, CHANGE_PASSWORD, CHATS, CONTACTS, PROFILE, SETTINGS } from '../constant/keywork'

export const SIDEBAR = [
    { name: PROFILE, key: '', icon: '/images/sidebar/bx-user-circle.png' },
    {
        name: CHATS,
        key: CHATS,
        icon: '/images/sidebar/bx-conversation.png'
    },
    {
        name: CONTACTS,
        key: CONTACTS,
        icon: '/images/sidebar/bxs-user-detail.png'
    },
    {
        name: CALLS,
        key: CALLS,
        icon: '/images/sidebar/bx-phone-call.png'
    },
    {
        name: BOOKMARK,
        key: BOOKMARK,
        icon: '/images/sidebar/bx-bookmarks.png'
    },
    {
        name: SETTINGS,
        key: SETTINGS,
        icon: '/images/sidebar/bx-settings.png'
    },
    {
        name: CHANGE_PASSWORD,
        key: CHANGE_PASSWORD,
        icon: '/images/profile/bxs-lock.svg'
    }
]
