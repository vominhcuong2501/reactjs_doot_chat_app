import { PAGE_KEYWORD, } from "@/constant";
import config from './../config/config.json'


export const SIDEBAR = [
    { name: config.txt_my_profile, key: '', icon: '/images/sidebar/bx-user-circle.png' },
    {
        name: config.txt_chats,
        key: PAGE_KEYWORD.CHATS,
        icon: '/images/sidebar/bx-conversation.png'
    },
    {
        name: config.txt_contacts,
        key: PAGE_KEYWORD.CONTACTS,
        icon: '/images/sidebar/bxs-user-detail.png'
    },
    {
        name: config.txt_calls,
        key: PAGE_KEYWORD.CALLS,
        icon: '/images/sidebar/bx-phone-call.png'
    },
    {
        name: config.txt_bookmarks,
        key: PAGE_KEYWORD.BOOKMARK,
        icon: '/images/sidebar/bx-bookmarks.png'
    },
    {
        name: config.txt_settings,
        key: PAGE_KEYWORD.SETTINGS,
        icon: '/images/sidebar/bx-settings.png'
    },
    {
        name: config.txt_change_password,
        key: PAGE_KEYWORD.CHANGE_PASSWORD,
        icon: '/images/profile/bxs-lock.svg'
    }
]
