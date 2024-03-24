import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";
import accountLogin from '../../fixtures/admin/accountLogin.json'
import commonAdminObject from "../../support/pageObjectModel/pageObject/admin/commonAdminObject";
import companyEntryManagementObject
    from "../../support/pageObjectModel/pageObject/admin/companyEntryManagement/companyEntryManagementObject";

describe("Check Entry Company Management ", () => {
    beforeEach(() => {
        loginAdminObject.loginAdmin(accountLogin[0].acct, accountLogin[0].pas)
    })
    it('check Entry Company Management', () => {
        commonAdminObject.competitionArea().click({force: true})
        companyEntryManagementObject.companyEntryManagement().click()
        companyEntryManagementObject.queryAwardRegistrationStatus().click().then(() => {
            // companyEntryManagementObject.reviewingStatus().click()
        })
        commonAdminObject.searchBtn().click()
        commonAdminObject.paginationData().then((pageElements) => {
            cy.log('tesst----', pageElements.length)
            for (let i = 0; i < pageElements.length; i++) {
                //click page have index is i
                commonAdminObject.paginationData().eq(i).click()
                //get list data in page i
                companyEntryManagementObject.idCompanyLength().then((size) => {
                    for (let j = 0; j < size; j++) {
                        cy.log(companyEntryManagementObject.idCompanyValue(j))
                        // search id Company
                        companyEntryManagementObject.idCompanyValue(j).then(text => {
                            if (text == '00000007') {
                                // click icon edit => click edit icon have index is j
                                companyEntryManagementObject.editCompanyDataBtn(j).click()
                                cy.log('test------------', text)
                            }
                        })


                    }
                })

            }
        })

    })
})