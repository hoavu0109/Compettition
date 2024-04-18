import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";
import adminManagementObject from "../../support/pageObjectModel/pageObject/admin/adminManagementObject";
import commonAdminObject from "../../support/pageObjectModel/pageObject/admin/commonAdminObject";

describe('Test Admin management', () => {
    before(() => {
        loginAdminObject.loginAdmin('hoa.vu', 'Admin123')
    })
    context('Check happy case: create, delete, edit, change pass', () => {

        it('Create Admin acct - full permission', () => {
            adminManagementObject.createAdminAcctFunction()
        })
        it('Change password Admin acct ', () => {
            adminManagementObject.searchAdminUserFunction('AutoUser')
            commonAdminObject.rowOfData(0).then((acctElement) => {
                cy.get(acctElement).find('td').eq(0).invoke('text').then((acctValue) => {
                    adminManagementObject.searchAdminUserFunction(acctValue)
                    adminManagementObject.changePasswordFunction()
                })
            })
        })
        it.only('Edit Admin acct ', () => {
            adminManagementObject.searchAdminUserFunction('AutoUser')
            commonAdminObject.rowOfData(0).then((acctElement) => {
                cy.get(acctElement).find('td').eq(0).invoke('text').then((acctValue) => {
                    adminManagementObject.searchAdminUserFunction(acctValue)
                    adminManagementObject.editAdminAcctFunction()
                })
            })
        })
        it('Use new acct Admin to login Admin site ', () => {

        })
        it('Verify all permission of Admin acct at Admin site', () => {

        })
        it('Delete Admin acct ', () => {

        })
    })
})