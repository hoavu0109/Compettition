import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";
import accountLogin from "../../fixtures/admin/accountLogin.json"

describe('login Admin', () => {
    let accInfo;
    let index = 0;
    beforeEach(() => {
        accInfo = accountLogin[index]
        index++
    })

    it.only('Check login Admin with valid data ' , () => {
        loginAdminObject.loginAdmin(accInfo.acct, accInfo.pas)
    })

    it('Check login Admin with invalid data  ',() => {
        loginAdminObject.loginAdmin(accInfo.acct, accInfo.pas)
    })
})