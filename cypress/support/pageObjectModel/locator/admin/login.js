class Login {
    accountInput = '#account'
    passwordInput = '#password'
    codeVerify ='.text-xl.cursor-default'
    enterVerificationCode = '.ant-input.css-1fpjgd5.verification-code-input'
    loginBtn ='button[type="submit"]'
    languageModeEng ='.flex.items-center .cursor-pointer.hidden-div'
    languageModeTaiwan ='.flex.items-center .cursor-pointer.highlight-div'
    getVerifyCode ='.text-xl.cursor-default'
    messageSuccessLogin ='.ant-notification-notice-message'
    messageCloseIcon = '.ant-notification-notice-close-x'
    messageSuccessLoginText ='Successful Login'
}
const login = new Login();
export default login;