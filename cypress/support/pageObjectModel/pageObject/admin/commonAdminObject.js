import commonAdmin from "../../locator/admin/commonAdmin";
import businessListTab from "../../locator/admin/businessListTab";
class CommonAdminObject{
    authorityManagement(){
        return  cy.get(commonAdmin.menuHeader).wait(1000).eq(0).trigger('mouseover')
    }
    competitionArea(){
        return  cy.get(commonAdmin.menuHeader).wait(1000).eq(1).trigger('mouseover')
    }
    monitoring(){
        return  cy.get(commonAdmin.menuHeader).wait(1000).eq(1).trigger('mouseover')
    }
    searchBtn(){
        return cy.get(commonAdmin.searchAndClearBtn).eq(0)
    }
    clearBtn(){
        return cy.get(commonAdmin.searchAndClearBtn).eq(1)
    }
    rowOfData(row_index){
        return cy.get(commonAdmin.rowOfData).eq(row_index)
    }
    rowsData(){
        return cy.get(commonAdmin.rowOfData)
    }
    paginationData(){
        return cy.get(commonAdmin.paginationData)
    }

}
const  commonAdminObject= new CommonAdminObject();
export  default commonAdminObject;