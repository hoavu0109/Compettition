class Login {
    accountInput = '#account'
    passwordInput = '#password'
    codeVerify ='.text-xl.cursor-default'
    enterVerificationCode = 'input[placeholder="Enter Verification Code"]'
    loginBtn ='button[type="submit"]'
    languageMode ='.flex.justify-start.items-end.pb-5>div>a'
}
const login = new Login();
export default login;