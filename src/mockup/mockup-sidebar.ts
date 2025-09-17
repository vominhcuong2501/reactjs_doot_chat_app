import {
    BOOKMARK_PAGE,
    CALLS_PAGE,
    CHANGE_PASSWORD_PAGE,
    CHATS_PAGE,
    CONTACTS_PAGE,
    PROFILE_PAGE,
    SETTINGS_PAGE
} from '../constant/keywork'

export const SIDEBAR = [
    { name: PROFILE_PAGE, key: '', icon: '/images/sidebar/bx-user-circle.png' },
    {
        name: CHATS_PAGE,
        key: CHATS_PAGE,
        icon: '/images/sidebar/bx-conversation.png'
    },
    {
        name: CONTACTS_PAGE,
        key: CONTACTS_PAGE,
        icon: '/images/sidebar/bxs-user-detail.png'
    },
    {
        name: CALLS_PAGE,
        key: CALLS_PAGE,
        icon: '/images/sidebar/bx-phone-call.png'
    },
    {
        name: BOOKMARK_PAGE,
        key: BOOKMARK_PAGE,
        icon: '/images/sidebar/bx-bookmarks.png'
    },
    {
        name: SETTINGS_PAGE,
        key: SETTINGS_PAGE,
        icon: '/images/sidebar/bx-settings.png'
    },
    {
        name: CHANGE_PASSWORD_PAGE,
        key: CHANGE_PASSWORD_PAGE,
        icon: '/images/profile/bxs-lock.svg'
    }
]
