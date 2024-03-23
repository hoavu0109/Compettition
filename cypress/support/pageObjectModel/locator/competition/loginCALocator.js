
class LoginCALocator {
    // 88809912/Admin123
    accountInput = '#account'
    passwordInput = '#password'
    codeVerify = '.text-xl.cursor-default'
    enterVerificationCode = 'input[placeholder="Enter Verification Code"]'
    loginBtn = 'button[type="submit"]'
    signUpBtn = 'button[type="button"]'
}
const loginCALocator = new LoginCALocator();
export default loginCALocator;