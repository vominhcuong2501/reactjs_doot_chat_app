import { DATA_ACCOUNT } from '@/constant'
import { ProfileAttachedFile, ProfileDetail, ProfileMedia, ProfileUser } from './components'
import config from './../../config/config.json'

export const Profile = () => {
    return (
        <div className='text-black-1'>
            <ProfileUser name={DATA_ACCOUNT.NAME} position={DATA_ACCOUNT.POSITION} title={config.txt_my_profile} />
            <div className='p-4 lg:p-6'>
                <ProfileDetail />
                <ProfileMedia />
                <ProfileAttachedFile />
            </div>
        </div>
    )
}
