import adminManagement from "../../locator/admin/adminManagement";
import commonAdminObject from "./commonAdminObject";

const random = Cypress._.random(0, 999)

class AdminManagementObject {
    administratorManagementTab() {
        cy.get(adminManagement.administratorManagementTab).eq(1).click()
    }

    addNewAdminBtn() {
        return cy.get(adminManagement.addNewAdminBtn).click()
    }

    adminGroupDroplist() {
        return cy.get(adminManagement.adminGroupDroplist).click()
    }

    adminGroupOptionsCA() {
        return cy.get(adminManagement.adminGroupOptions).eq(0).click()
    }

    adminGroupOptionsVA() {
        return cy.get(adminManagement.adminGroupOptions).eq(1).click()
    }

    adminGroupOptionsWA() {
        return cy.get(adminManagement.adminGroupOptions).eq(2).click()
    }

    accountInput() {
        return cy.get(adminManagement.accountInput).type('AutoUser' + random, {force: true})
    }

    emailInput() {
        return cy.get(adminManagement.emailInput).type('AutoUser' + random + '@yopmail.com', {force: true})
    }

    nameInput() {
        return cy.get(adminManagement.nameInput).type('AutoUser' + random, {force: true})
    }

    passwordInput() {
        return cy.get(adminManagement.passwordInput).type('Admin123')
    }

    confirmPasswordInput() {
        return cy.get(adminManagement.confirmPasswordInput).type('Admin123')
    }

    saveBtn() {
        return cy.get(adminManagement.saveBtn).click()
    }

    messageSuccess() {
        return cy.get(adminManagement.messageSuccess).contains(adminManagement.messageSuccessText)
    }

    iconBtn() {
        return cy.get(adminManagement.iconBtn)
    }

    editIconBtn() {
        return this.iconBtn().eq(0).click()
    }

    deleteIconBtn() {
        return this.iconBtn().eq(1).click()
    }

    changePasswordIconBtn() {
        return this.iconBtn().eq(2).click()
    }

    resetPassword() {
        return cy.get(adminManagement.resetPassword).type('Admin123')
    }

    resetPasswordConfirm() {
        return cy.get(adminManagement.resetPasswordConfirm).type('Admin123')
    }

    resetSaveBtn() {
        return cy.get(adminManagement.resetSaveBtn).click()
    }

    editAdminGroup() {
        return cy.get(adminManagement.editAdminGroup).click()
    }

    unSelectWA() {
        return this.editAdminGroup().eq(1).click()
    }

    editName() {
        return cy.get(adminManagement.editName).clear().type('EditAutoUser')
    }

    editSaveBtn() {
        return cy.get(adminManagement.editSaveBtn).click()
    }

    confirmDeleteBtn() {
        return cy.get(adminManagement.confirmDeleteBtn).eq(0).click()
    }

    createAdminAcctFunction() {
        commonAdminObject.authorityManagement()
        this.administratorManagementTab()
        this.addNewAdminBtn()
        this.adminGroupDroplist()
        this.adminGroupOptionsCA()
        this.adminGroupOptionsVA()
        this.adminGroupOptionsWA()
        this.accountInput()
        this.emailInput()
        this.nameInput()
        this.passwordInput()
        this.confirmPasswordInput()
        this.saveBtn().then(() => {
            this.messageSuccess()
        })
    }

    searchAdminUserFunction(searchValue) {
        commonAdminObject.authorityManagement()
        this.administratorManagementTab()
        commonAdminObject.searchFunction(searchValue)
        commonAdminObject.rowsData().then((data) => {
            expect(data.length).to.be.gte(1)
        })
    }

    changePasswordFunction() {
        this.changePasswordIconBtn()
        this.resetPassword()
        this.resetPasswordConfirm()
        this.resetSaveBtn().then(() => {
            this.messageSuccess()
        })
    }

    editAdminAcctFunction() {
        this.editIconBtn()
        // this.unSelectWA()
        this.editName()
        this.editSaveBtn().then(() => {
            this.messageSuccess()
        })
    }

    deleteAdminAcct() {
        this.deleteIconBtn()
        this.confirmDeleteBtn().then(() => {
            this.messageSuccess()
        })
    }

}

const adminManagementObject = new AdminManagementObject()
export default adminManagementObject;