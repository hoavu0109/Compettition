
class LoginCALocator {
    // 88809912/Admin123
    accountInput = '#account'
    passwordInput = '#password'
    codeVerify = '.text-xl.cursor-default'
    enterVerificationCode = '.ant-input.css-1fpjgd5.verification-code-input'
    loginBtn = 'button[type="submit"]'
    messageLoginCASuccess ='.ant-notification-notice-message'
    messageSuccessCloseIcon ='.ant-notification-notice-close'
    signUpBtn = 'button[type="button"]'
}
const loginCALocator = new LoginCALocator();
export default loginCALocator;