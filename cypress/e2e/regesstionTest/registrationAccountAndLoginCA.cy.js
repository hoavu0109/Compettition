import registrationAccountObject
    from "../../support/pageObjectModel/pageObject/competition/registraionAccount/regitrationAccountObject";
import registrationAcct from "../../fixtures/competition/registrationAcctData/registrationAcct.json"
import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";
import accountLogin from "../../fixtures/admin/accountLogin.json"
import businessListObject from "../../support/pageObjectModel/pageObject/admin/businessList/businessListObject";
import competitionAreaObject
    from "../../support/pageObjectModel/pageObject/admin/competitionArea/competitionAreaObject";
describe('Check registration account follow', () => {
    let index = 0;
    let regisAcct;
    let accInfo;
    beforeEach(() => {
        cy.visit('http://competition.tcsa-local.site/login')
        //map data input for each test
        regisAcct = registrationAcct[index]
        accInfo = accountLogin[index]
        index++;
    })
    it('input value into regitration account', () => {
        registrationAccountObject.registrationAccFunction(regisAcct.AbbreviationPart1, regisAcct.AbbreviationPart2, regisAcct.LegalEntity, regisAcct.CorporateName,
            regisAcct.ManagingDirector1, regisAcct.ManagingDirector2, regisAcct.AddressPostCode1, regisAcct.Address1, regisAcct.AddressPostCode2, regisAcct.Address2,
            regisAcct.ContactDivision, regisAcct.Designation, regisAcct.ContactPerson1, regisAcct.ContactPerson2, regisAcct.Phone, regisAcct.MailingAddress1, regisAcct.MailingAddress2,
            regisAcct.yearIncorporated, regisAcct.Stock, regisAcct.capitalization2, regisAcct.chairmanOfTheBoard1, regisAcct.chairmanOfTheBoar2,
            regisAcct.generalManagerName1, regisAcct.generalManagerName2, regisAcct.employeeDistributionMale, regisAcct.employeeDistributionFemale,
            regisAcct.fullTimeEmployees, regisAcct.partTimeEmployees, regisAcct.employeesWithDisabilities, regisAcct.organizationOfficialWebsite,
            regisAcct.corporateCSRWebsite1, regisAcct.taiwanCorporateWebsite, regisAcct.corporateCSRWebsite2, regisAcct.companyDescriptionChina,
            regisAcct.companyDescriptionEnglish, regisAcct.revenueGovernmentBudgetRevenues, regisAcct.globalRevenueGlobal, regisAcct.enterpriseIncomeTax,
            regisAcct.taiwanMarketValueMarket, regisAcct.EPSValueEPS, regisAcct.foreignOwnershipRatioPercent, regisAcct.annualCSRReportTitlesChinese,
            regisAcct.annualCSRReportTitlesEnglish, regisAcct.supplementaryExplanationRevenue, regisAcct.currentYearFirstSeasonEPSFirst,
            regisAcct.currentYearSecondSeasonEPSSeason, regisAcct.affiliatedEntityName, regisAcct.affiliatedEntityEditor)

        registrationAccountObject.enterEmail().invoke('val').then((email)=>{
            cy.log("email----------",email)
            registrationAccountObject.completeBtn().click()

            // Go to admin system to check the new acct of the company
            cy.visit('http://admin.tcsa-local.site/')
            loginAdminObject.loginAdmin(accInfo.acct, accInfo.pas)
            competitionAreaObject.competitionArea().trigger('mouseover')

            businessListObject.businessTab().click({force:true})
            businessListObject.searchFunction(email)
        })


    })

})