import commonAdmin from "../../locator/admin/commonAdmin";
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

}
const  commonAdminObject= new CommonAdminObject();
export  default commonAdminObject;