import commonAdmin from "../../locator/admin/commonAdmin";
import businessListTab from "../../locator/admin/businessListTab";
import businessListObject from "./businessList/businessListObject";
class CommonAdminObject{
    authorityManagement(){
        return  cy.get(commonAdmin.menuHeader).wait(1000).eq(0).trigger('mouseover')
    }
    competitionArea(){
        return  cy.get(commonAdmin.menuHeader).eq(1).trigger('mouseover')
    }
    awarDataManagement(){
        cy.get(commonAdmin.awarDataManagement).eq(3).click({force: true})
    }

    authorityManagement(){
        return  cy.get(commonAdmin.menuHeader).eq(0).trigger('mouseover').click({force:true})
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
    logoutIcon(){
        return cy.get(commonAdmin.logoutIcon).trigger('mouseover')
    }
    logoutBtn(){
        return cy.get(commonAdmin.logoutBtn).eq(1).click()
    }
    emailSearch(){
        return cy.get(commonAdmin.emailSearch)
    }
    searchFunction(search_value){
        cy.wait(500)
        commonAdminObject.emailSearch().clear().type(search_value,{force: true} )
        commonAdminObject.searchBtn().click()
        cy.wait(1000)
    }
    logoutFunction(){
        this.logoutIcon()
        this.logoutBtn()
    }

}
const  commonAdminObject= new CommonAdminObject();
export  default commonAdminObject;