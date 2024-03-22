import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";
import accountLogin from "../../fixtures/admin/accountLogin.json"
import businessListObject from "../../support/pageObjectModel/pageObject/admin/businessList/businessListObject";

describe('Check Business List',()=>{
   beforeEach(()=>{
       cy.visit('http://admin.tcsa-local.site')
       loginAdminObject.loginAdmin(accountLogin[0].acct,accountLogin[0].pas)
   })
    it.only('check display all data',()=>{
        //verify data

        // // admin aproved registrion acct from company
        // businessListObject.editCompanyDataBtn(0).click()
        // cy.wait(1000)
        // businessListObject.reviewStatusDroplist().click( {force: true})
        // businessListObject.reviewStatus_Approved().click( {force: true})
        // businessListObject.saveReviewBtn().click()
        //
        // //reset password
        // businessListObject.changePasswordCompanyDataBtn(0).click()
        // businessListObject.password().type('Admin123')
        // businessListObject.passwordConfirmation().type('Admin123')
        // businessListObject.confirmChangePasswordBtn().click()

        // login again into CA
        businessListObject.IdData(0).then((id)=>{
            cy.log('id',id)
            // update function login from CA


        })
    })
})
