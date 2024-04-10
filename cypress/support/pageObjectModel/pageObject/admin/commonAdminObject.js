import commonAdmin from "../../locator/admin/commonAdmin";
import businessListTab from "../../locator/admin/businessListTab";
import businessListObject from "./businessList/businessListObject";
class CommonAdminObject{
    authorityManagement(){
        return  cy.get(commonAdmin.menuHeader).wait(1000).eq(0).trigger('mouseover')
    }
    competitionArea(){
        return  cy.get(commonAdmin.menuHeader).wait(500).eq(1).trigger('mouseover')
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
    emailSearch(){
        return cy.get(commonAdmin.emailSearch)
    }
    searchFunction(search_value){
        cy.wait(500)
        commonAdminObject.emailSearch().type(search_value,{force: true} )
        commonAdminObject.searchBtn().click()
        cy.wait(1000)
    }

}
const  commonAdminObject= new CommonAdminObject();
export  default commonAdminObject;