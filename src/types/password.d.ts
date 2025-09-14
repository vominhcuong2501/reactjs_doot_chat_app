export type DataFormChangePassword = {
    new_password: string
    current_password: string
    confirm_password: string
    gReCaptchaToken?: string
}
