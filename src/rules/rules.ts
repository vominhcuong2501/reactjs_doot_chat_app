import * as yup from 'yup'

export const changePasswordSchema = () =>
    yup.object({
        current_password: yup
            .string()
            .trim()
            .required('Please enter current password!')
            .min(6, 'Format password invalid!')
            .max(20, 'Format password invalid!')
            .matches(
                /^[^\sáàảãạăắằẳẵặâấầẩẩậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+$/,
                'Format password invalid!'
            )
            .label('Current Password'),
        new_password: yup
            .string()
            .trim()
            .required('Please enter new password')
            .min(6, 'Format password invalid!')
            .max(20, 'Format password invalid!')
            .matches(
                /^[^\sáàảãạăắằẳẵặâấầẩẩậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ]+$/,
                'Format password invalid!'
            )
            .label('New Password'),
        confirm_password: yup
            .string()
            .trim()
            .required('Please enter connfirm password')
            .min(6, 'Format password invalid!')
            .max(20, 'Format password invalid!')
            .oneOf([yup.ref('new_password')], 'Confirm password not match!')
            .label('Confirm Password')
    })
