import companyEntryManagementTab from "../../../locator/admin/companyEntryManagementTab";
import businessListObject from "../businessList/businessListObject";
import commonAdminObject from "../commonAdminObject";

class CompanyEntryManagementObject {
    // list company screen
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
        return commonAdminObject.rowsData(row_index).find('td>div>button')
    }

    // edit - status information
    registrationStatusDroplist() {
        return cy.get(companyEntryManagementTab.registrationStatusDroplist)
    }
    registration_PendingStatus() {
        return cy.get(companyEntryManagementTab.registration_PendingStatus).eq(1)
    }
    registration_ReviewingStatus() {
        return cy.get(companyEntryManagementTab.registration_ReviewingStatus).eq(1)
    }
    registration_ApprovedStatus() {
        return cy.get(companyEntryManagementTab.registration_ApprovedStatus).eq(1)
    }
    registration_RejectedStatus() {
        return cy.get(companyEntryManagementTab.registration_RejectedStatus).eq(1)
    }
    paper_PendingStatus() {
        return cy.get(companyEntryManagementTab.paper_PendingStatus)
    }
    paper_ReviewingStatus() {
        return cy.get(companyEntryManagementTab.paper_ReviewingStatus)
    }
    paper_ApprovedStatus() {
        return cy.get(companyEntryManagementTab.paper_ApprovedStatus)
    }
    paper_RejectedStatus() {
        return cy.get(companyEntryManagementTab.paper_RejectedStatus)
    }
    saveEditStatusBtn() {
        return cy.get(companyEntryManagementTab.saveEditStatusBtn)
    }
    administratorNote() {
        return cy.get(companyEntryManagementTab.administratorNote)
    }

    findId_EntryCompanyManagement(IdValue) {
        commonAdminObject.paginationData().then((pageElements) => {
            for (let i = 0; i < pageElements.length; i++) {
                //click page have index is i
                commonAdminObject.paginationData().eq(i).click()
                //get list data in page i
                companyEntryManagementObject.idCompanyLength().then((size) => {
                    for (let j = 0; j < size; j++) {
                        // search id Company at page i
                        companyEntryManagementObject.idCompanyValue(j).then(text => {
                            if (text == IdValue) {
                                cy.log('actual id',text)
                                cy.log('expect id',IdValue)
                                cy.log('index',j)
                                // click icon edit => click edit icon have index is j
                                companyEntryManagementObject.editCompanyDataBtn(j).click({ multiple: true,force: true })
                            }
                        })


                    }
                })

            }
        })
    }

}

const companyEntryManagementObject = new CompanyEntryManagementObject();
export default companyEntryManagementObject