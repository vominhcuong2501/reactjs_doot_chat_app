import { useDataUser } from '@/store'
import { useDisplay } from '../use-display'
import { useNavigate } from 'react-router-dom'
import { ContactProps } from '@/types'
import { MESSAGE } from '@/constant'

export const useClickUser = () => {
    const { updateUserData } = useDataUser()

    const isMobile = useDisplay(768)

    const navigate = useNavigate()

    const handleClickUser = (user: ContactProps) => {
        if (isMobile) {
            navigate(`/${MESSAGE}/${user?.id}`)
            updateUserData(user)
        } else {
            updateUserData(user)
        }
    }

    return handleClickUser
}
