import companyEntryManagementTab from "../../../locator/admin/companyEntryManagementTab";
import businessListObject from "../businessList/businessListObject";
import commonAdminObject from "../commonAdminObject";

class CompanyEntryManagementObject {
    companyEntryManagement() {
        return cy.get(companyEntryManagementTab.companyEntryManagement).eq(2)
    }

    queryAward() {
        return cy.get(companyEntryManagementTab.queryDroplists).eq(0)
    }

    queryCountry() {
        return cy.get(companyEntryManagementTab.queryCountry)
    }

    queryAwardRegistrationStatus() {
        return cy.get(companyEntryManagementTab.queryDroplists).eq(1)
    }

    queryRegistrationPaperStatus() {
        return cy.get(companyEntryManagementTab.queryDroplists).eq(2)
    }

    queryPaymentStatus() {
        return cy.get(companyEntryManagementTab.queryDroplists).eq(3)
    }

    pendingStatus() {
        return cy.get(companyEntryManagementTab.pendingStatus)
    }

    reviewingStatus() {
        return cy.get(companyEntryManagementTab.reviewingStatus)
    }

    approvedStatus() {
        return cy.get(companyEntryManagementTab.approvedStatus)
    }

    rejectedStatus() {
        return cy.get(companyEntryManagementTab.rejectedStatus)
    }

    idCompanyLength() {
        return cy.get(companyEntryManagementTab.idCompany).its('length')
    }

    idCompanyValue(index_id) {
        return cy.get(companyEntryManagementTab.idCompany).eq(index_id).invoke('text')
    }
    editCompanyDataBtn(row_index){
        return commonAdminObject.rowsData(row_index).find('td>div>button').eq(0).click()
    }

    searchIdCompany(IdValue) {

    }

}

const companyEntryManagementObject = new CompanyEntryManagementObject();
export default companyEntryManagementObject