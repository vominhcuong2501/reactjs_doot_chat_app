import { useDataUser } from '@/store'
import { useDisplay } from '../use-display'
import { useNavigate } from 'react-router-dom'
import { ContactProps } from '@/types'
import { MESSAGE_PAGE, MOBILE_SCREEN } from '@/constant'

export const useClickUser = () => {
    const { updateUserData } = useDataUser()

    const isMobile = useDisplay(MOBILE_SCREEN)

    const navigate = useNavigate()

    const handleClickUser = (user: ContactProps) => {
        if (isMobile) {
            navigate(`/${MESSAGE_PAGE}/${user?.id}`)
            updateUserData(user)
        } else {
            updateUserData(user)
        }
    }

    return handleClickUser
}
