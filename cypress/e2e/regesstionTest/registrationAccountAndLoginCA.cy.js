import registrationAccountObject
    from "../../support/pageObjectModel/pageObject/competition/registraionAccount/regitrationAccountObject";
import registrationAcct from "../../fixtures/competition/registrationAcctData/registrationAcct.json"
import loginAdminObject from "../../support/pageObjectModel/pageObject/admin/loginAdmin/loginAdminObject";
import accountLogin from "../../fixtures/admin/accountLogin.json"
import businessListObject from "../../support/pageObjectModel/pageObject/admin/businessList/businessListObject";
import commonAdminObject from "../../support/pageObjectModel/pageObject/admin/commonAdminObject";
import {baseUrl_CA} from "../../../cypress.config";

describe('Check registration account follow', () => {
    let index = 0;
    let regisAcct;
    let accInfo;
    beforeEach(() => {
        //map data input for each test
        regisAcct = registrationAcct[index]
        accInfo = accountLogin[index]
        index++;
    })
    it('Registration acct -Fill all fields - Use new acct to login CA system', () => {

        // Step1: Fill registration acct form  at CA site
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

        //Step2: Admin submit acct regitrtion form
        registrationAccountObject.enterEmail().invoke('val').then((email) => {
            registrationAccountObject.completeBtn().click()
            // login Admin system -> go to Business list tab to find the record include email value
            loginAdminObject.loginAdmin(accInfo.acct, accInfo.pas)
            commonAdminObject.competitionArea().trigger('mouseover')
            businessListObject.businessTab().click({force: true})
            //search main email of the company registration
            businessListObject.searchFunction('cuong.nguyenmanh+99@eastgate-software.com')
            // check that the result is only one data
            businessListObject.numberOfData().should('have.lengthOf',1)
            // admin approved registration acct from company
            businessListObject.approvedRegistrationForm(0)

            //reset password for the company have acct submit by admin
            businessListObject.resetPasswordCompany('Admin123')

            // Step3: login again into CA
            businessListObject.IdData(0).then((id) => {
                loginCAObject.loginCAFunction(id,'Admin123')
            })

        })
    })
    it('Registration acct -Only fill Mandatory fields - Use new acct to login CA system',()=>{

    })
})