import companyEntryManagementTab from "../../../locator/admin/companyEntryManagementTab";
class CompanyEntryManagementObject{
    companyEntryManagement(){
        return cy.get(companyEntryManagementTab.companyEntryManagement).eq(2)
    }
}
const  companyEntryManagementObject = new CompanyEntryManagementObject();
export default companyEntryManagementObject