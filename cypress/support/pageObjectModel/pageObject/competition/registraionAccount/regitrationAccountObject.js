import registrationAccount from "../../../locator/competition/regitrationAccount";

class RegitrationAccountObject {
    // header and common
    registerHeaderText() {
        return cy.get(registrationAccount.registerHeaderText)
    }

    basicInformationForm() {
        return cy.get(registrationAccount.basicInformationForm)
    }
    arrowViewIcons(){
        return cy.get(registrationAccount.arrowViewIcon)
    }
    currencyOptions(){
        return cy.get(registrationAccount.currencyOptions)
    }
    //Basic Information droplist
    listTextBase() {
        return cy.get(registrationAccount.listTextBase)
    }

    uploadFileBtnBasicInfo() {
        return cy.get(registrationAccount.uploadFileBtn).eq(0)
    }
    businessRegistrationCertificate(){
        return cy.get(registrationAccount.businessRegistrationCertificate)
    }
    enterAbbreviationParticipating1() {
        return cy.get(registrationAccount.enterAbbreviationParticipating1)
    }

    enterAbbreviationParticipating2() {
        return cy.get(registrationAccount.enterAbbreviationParticipating2)
    }

    enterLegalEntity() {
        return cy.get(registrationAccount.enterLegalEntity)
    }

    enterCorporateName() {
        return cy.get(registrationAccount.enterCorporateName)
    }

    enterCorporateCode() {
        return cy.get(registrationAccount.enterCorporateCode)
    }

    enterManagingDirector1() {
        return cy.get(registrationAccount.enterManagingDirector1)
    }

    enterManagingDirector2() {
        return cy.get(registrationAccount.enterManagingDirector2)
    }

    enterAddressPostCode1() {
        return cy.get(registrationAccount.enterAddressPostCode1)
    }

    enterAddress1() {
        return cy.get(registrationAccount.enterAddress1)
    }

    enterAddressPostCode2() {
        return cy.get(registrationAccount.enterAddressPostCode2)
    }

    enterAddress2() {
        return cy.get(registrationAccount.enterAddress2)
    }
    arrowViewIconBasicInfo(){
        return  registrationAccountObject.arrowViewIcons().eq(0)
    }

    //Contact Person
    enterContactDivision() {
        return cy.get(registrationAccount.enterContactDivision)
    }

    enterDesignation() {
        return cy.get(registrationAccount.enterDesignation)
    }

    enterContactPerson1() {
        return cy.get(registrationAccount.enterContactPerson1)
    }

    enterContactPerson2() {
        return cy.get(registrationAccount.enterContactPerson2)
    }

    enterPhone() {
        return cy.get(registrationAccount.enterPhone)
    }

    enterFax() {
        return cy.get(registrationAccount.enterFax)
    }

    enterMailingAddress1() {
        return cy.get(registrationAccount.enterMailingAddress1)
    }

    enterMailingAddress2() {
        return cy.get(registrationAccount.enterMailingAddress2)
    }

    enterEmail() {
        return cy.get(registrationAccount.enterEmail)
    }

    enterCopyEmail1() {
        return cy.get(registrationAccount.enterCopyEmail1)
    }

    enterCopyEmail2() {
        return cy.get(registrationAccount.enterCopyEmail2)
    }
    arrowViewIconContactPerson(){
       return  registrationAccountObject.arrowViewIcons().eq(1)
    }

    //Unit Information
    orgImageFileInput(){
        return cy.get(registrationAccount.orgImageFileInput)
    }
    uploadFileBtnUnitInfo() {
        return cy.get(registrationAccount.uploadFileBtn).eq(1)
    }
    radioEntityNationalityTaiwan() {
        return cy.get(registrationAccount.radioEntityNationalityTaiwan).eq(0)
    }

    radioEntityNationalityForeign() {
        return cy.get(registrationAccount.radioEntityNationalityForeign).eq(0)
    }

    radioEntityNationalityForeignOptions() {
        return cy.get(registrationAccount.radioEntityNationalityForeignOptions)
    }
    radioEntityNationalityForeignOptionsValue() {
        return cy.get(registrationAccount.radioEntityNationalityForeignOptionsValue)
    }

    radioWhetherPublishReportYes() {
        return cy.get(registrationAccount.radioWhetherPublishReportYes)
    }

    radioWhetherPublishReportNo() {
        return cy.get(registrationAccount.radioWhetherPublishReportNo)
    }

    yearIncorporated() {
        return cy.get(registrationAccount.yearIncorporated)
    }

    listingSituation_ListedPublicly() {
        return cy.get(registrationAccount.listingSituation_ListedPublicly)
    }

    listingSituation_OTC() {
        return cy.get(registrationAccount.listingSituation_OTC)
    }

    listingSituation_NotListed() {
        return cy.get(registrationAccount.listingSituation_NotListed)
    }

    enterStock() {
        return cy.get(registrationAccount.enterStock)
    }

    organizationType() {
        return cy.get(registrationAccount.organizationType)
    }

    sizeOfOperation() {
        return cy.get(registrationAccount.sizeOfOperation)
    }

    industry() {
        return cy.get(registrationAccount.industry)
    }

    GRICategory() {
        return cy.get(registrationAccount.GRICategory)
    }
    selectItemOptions(){
        return cy.get(registrationAccount.selectItemOptions)
    }
    selectOrganizationType(){
        return registrationAccountObject.selectItemOptions().eq(0)
    }
    selectSizeOfOperation(){
        return registrationAccountObject.selectItemOptions().eq(7)
    }
    selectIndustry(){
        return registrationAccountObject.selectItemOptions().eq(15)
    }
    selectGRICategory(){
        return registrationAccountObject.selectItemOptions().eq(24)
    }
    capitalization1() {
        return cy.get(registrationAccount.capitalization1)
    }
    capitalization2() {
        return cy.get(registrationAccount.capitalization2)
    }

    chairmanOfTheBoard1() {
        return cy.get(registrationAccount.chairmanOfTheBoard1)
    }

    chairmanOfTheBoar2() {
        return cy.get(registrationAccount.chairmanOfTheBoar2)
    }

    generalManagerName1() {
        return cy.get(registrationAccount.generalManagerName1)
    }

    generalManagerName2() {
        return cy.get(registrationAccount.generalManagerName2)
    }

    employeeDistributionMale() {
        return cy.get(registrationAccount.employeeDistributionMale)
    }

    employeeDistributionFemale() {
        return cy.get(registrationAccount.employeeDistributionFemale)
    }

    fullTimeEmployees() {
        return cy.get(registrationAccount.fullTimeEmployees)
    }

    partTimeEmployees() {
        return cy.get(registrationAccount.partTimeEmployees)
    }

    employeesWithDisabilities() {
        return cy.get(registrationAccount.employeesWithDisabilities)
    }

    organizationOfficialWebsite() {
        return cy.get(registrationAccount.organizationOfficialWebsite)
    }

    corporateCSRWebsite1() {
        return cy.get(registrationAccount.corporateCSRWebsite1)
    }

    taiwanCorporateWebsite() {
        return cy.get(registrationAccount.taiwanCorporateWebsite)
    }

    corporateCSRWebsite2() {
        return cy.get(registrationAccount.corporateCSRWebsite2)
    }

    companyDescriptionChina() {
        return cy.get(registrationAccount.companyDescriptionChina)
    }

    companyDescriptionEnglish() {
        return cy.get(registrationAccount.companyDescriptionEnglish)
    }
    arrowViewIconUnitInfo(){
        return  registrationAccountObject.arrowViewIcons().eq(2)
    }

    //Unit Financials
    revenueGovernmentBudgetDroplist() {
        return cy.get(registrationAccount.revenueGovernmentBudgetDroplist)
    }
    NTDCurrencyRevenueGovernmentBudget(){
        return registrationAccountObject.currencyOptions().eq(0)
    }
    USDCurrencyRevenueGovernmentBudget(){
        return registrationAccountObject.currencyOptions().eq(1)
    }
    revenueGovernmentBudgetRevenues() {
        return cy.get(registrationAccount.revenueGovernmentBudgetRevenues)
    }

    globalRevenueDroplist() {
        return cy.get(registrationAccount.globalRevenueDroplist)
    }
    NTDCurrencyGlobalRevenue(){
        return registrationAccountObject.currencyOptions().eq(2)
    }
    USDCurrencyGlobalRevenue(){
        return registrationAccountObject.currencyOptions().eq(3)
    }
    globalRevenueGlobal() {
        return cy.get(registrationAccount.globalRevenueGlobal)
    }

    enterpriseIncomeTaxDroplist() {
        return cy.get(registrationAccount.enterpriseIncomeTaxDroplist)
    }
    NTDCurrencyEnterpriseIncomeTax(){
        return registrationAccountObject.currencyOptions().eq(4)
    }
    USDCurrencyEnterpriseIncomeTax(){
        return registrationAccountObject.currencyOptions().eq(5)
    }
    enterpriseIncomeTax() {
        return cy.get(registrationAccount.enterpriseIncomeTax)
    }

    taiwanMarketValueDroplist() {
        return cy.get(registrationAccount.taiwanMarketValueDroplist)
    }
    NTDCurrencyTaiwanMarketValue(){
        return registrationAccountObject.currencyOptions().eq(6)
    }
    USDCurrencyTaiwanMarketValue(){
        return registrationAccountObject.currencyOptions().eq(7)
    }

    taiwanMarketValueMarket() {
        return cy.get(registrationAccount.taiwanMarketValueMarket)
    }

    EPSValueDroplist() {
        return cy.get(registrationAccount.EPSValueDroplist)
    }
    NTDCurrencyEPSValue(){
        return registrationAccountObject.currencyOptions().eq(8)
    }
    USDCurrencyEPSValue(){
        return registrationAccountObject.currencyOptions().eq(9)
    }

    EPSValueEPS() {
        return cy.get(registrationAccount.EPSValueEPS)
    }

    foreignOwnershipRatioPercent() {
        return cy.get(registrationAccount.foreignOwnershipRatioPercent)
    }

    annualCSRReportTitlesChinese() {
        return cy.get(registrationAccount.annualCSRReportTitlesChinese)
    }

    annualCSRReportTitlesEnglish() {
        return cy.get(registrationAccount.annualCSRReportTitlesEnglish)
    }

    supplementaryExplanationRevenue() {
        return cy.get(registrationAccount.supplementaryExplanationRevenue)
    }

    currentYearFirstSeasonEPSDroplist() {
        return cy.get(registrationAccount.currentYearFirstSeasonEPSDroplist)
    }
    NTDCurrencyCurrentYearFirstSeasonEPS(){
        return registrationAccountObject.currencyOptions().eq(10)
    }
    USDCurrencyCurrentEYearFirstSeasonEPS(){
        return registrationAccountObject.currencyOptions().eq(11)
    }
    currentYearFirstSeasonEPSFirst() {
        return cy.get(registrationAccount.currentYearFirstSeasonEPSFirst)
    }

    currentYearSecondSeasonEPSDroplist() {
        return cy.get(registrationAccount.currentYearSecondSeasonEPSDroplist)
    }
    NTDCurrencyCurrentYearSecondSeasonEPS(){
        return registrationAccountObject.currencyOptions().eq(12)
    }
    USDCurrencyCurrentYearSecondSeasonEPS(){
        return registrationAccountObject.currencyOptions().eq(13)
    }
    currentYearSecondSeasonEPSSeason() {
        return cy.get(registrationAccount.currentYearSecondSeasonEPSSeason)
    }

    radioTaiwan() {
        return cy.get(registrationAccount.radioEntityNationalityTaiwan).eq(1)
    }

    radioForeign() {
        return cy.get(registrationAccount.radioEntityNationalityForeign).eq(1)
    }

    iAgreeCheckbox() {
        return cy.get(registrationAccount.iAgreeCheckbox)
    }

    completeBtn() {
        return cy.get(registrationAccount.completeBtn)
    }
    arrowViewIconUnitFinancials(){
        return  registrationAccountObject.arrowViewIcons().eq(0)
    }

}

const registrationAccountObject = new RegitrationAccountObject();
export default registrationAccountObject;