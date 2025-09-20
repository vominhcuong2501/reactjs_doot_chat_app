import { Button, Input } from '@/components'
import { changePasswordSchema } from '@/rules/rules'
import { MouseEvent, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { DataFormChangePassword } from '@/types'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSidebar } from '@/store'
import config from './../../../../config/config.json'
import { PAGE_KEYWORD } from '@/constant'

export const FormChangePassword = () => {
    const [isLoading, setIsLoading] = useState(false)

    const { updateKeyword } = useSidebar()

    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<DataFormChangePassword>({
        mode: 'all',
        defaultValues: {
            new_password: '',
            confirm_password: '',
            current_password: ''
        },
        resolver: yupResolver(changePasswordSchema()),
        shouldFocusError: false
    })

    const onSubmit = handleSubmit(async () => {
        setIsLoading(true)

        const isSuccess = setTimeout(() => {
            setIsLoading(false)

            clearInterval(isSuccess)

            navigate(`/${PAGE_KEYWORD.LOGOUT}`)
        }, 3000)
    })

    const handleFormSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        onSubmit()
    }

    return (
        <form className='mt-4 lg:mt-6 flex flex-col gap-4' noValidate>
            <Input
                type='password'
                id='current_password'
                nameLabel={config.txt_old_password}
                errorMessage={errors.current_password?.message}
                {...register('current_password')}
                required
                maxLength={20}
                minLength={6}
                autoComplete='current-password'
                placeholder={config.txt_enter_old_password}
            />
            <Input
                type='password'
                id='new_password'
                nameLabel={config.txt_new_password}
                errorMessage={errors.new_password?.message}
                {...register('new_password')}
                required
                maxLength={20}
                minLength={6}
                autoComplete='current-password'
                placeholder={config.txt_enter_new_password}
            />
            <Input
                type='password'
                id='confirm_password'
                nameLabel={config.txt_confirm_password}
                errorMessage={errors.confirm_password?.message}
                {...register('confirm_password')}
                required
                maxLength={20}
                minLength={6}
                autoComplete='confirm-password'
                placeholder={config.txt_enter_confirm_password}
            />
            <div className='grid grid-cols-2 gap-5 mt-2'>
                <Button
                    isLoading={isLoading}
                    disabled={isLoading}
                    onClick={(e) => handleFormSubmit(e)}
                    className='text-white text-15 rounded h-10 w-full border border-green-6 bg-green-6 transition-all duration-200 hover:bg-white hover:text-green-6 text-center cursor-pointer'
                >
                    {config.txt_save}
                </Button>
                <Button
                    className='text-black-6 text-15 rounded h-10 w-full bg-gray-5 border border-transparent hover:border-gray-1 transition-all duration-200 text-center cursor-pointer'
                    onClick={() => {
                        navigate('/')
                        updateKeyword('')
                    }}
                >
                    {config.txt_cancel}
                </Button>
            </div>
        </form>
    )
}
