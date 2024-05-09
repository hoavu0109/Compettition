import registrationAccount from "../../../locator/competition/regitrationAccount";
import loginAdminObject from "../../admin/loginAdmin/loginAdminObject";
import businessListObject from "../../admin/businessList/businessListObject";
import {baseUrl_CA} from "../../../../../../cypress.config";

const organizationLogoFile = '../fixtures/competition/registrationAcctData/organizationLogoImage.jpg';
const organizationLogoFileAIType = '../fixtures/competition/registrationAcctData/organizationLogoImage.ai';
const registrationCertificateFile = '../fixtures/competition/registrationAcctData/registrationCertificate.pdf'
const randomNumbers = Cypress._.random(0, 99999);
const corporateCodeRandom = Cypress._.random(0, 99999999);
let regisAcctData = {
    corporateCode: ''
}

class RegitrationAccountObject {
    // header and common
    signUpBtn() {
        return cy.get(registrationAccount.signUpBtn).eq(1)
    }

    registerHeader() {
        return cy.get(registrationAccount.registerHeader)
    }
    englishMode(){
        return registrationAccountObject.registerHeader().eq(0)
    }

    basicInformationForm() {
        return cy.get(registrationAccount.basicInformationForm)
    }

    arrowViewIcons() {
        return cy.get(registrationAccount.arrowViewIcon)
    }

    NTDcurrencyOptions() {
        return cy.get(registrationAccount.NTDcurrencyOptions)
    }

    USDcurrencyOptions() {
        return cy.get(registrationAccount.USDcurrencyOptions)
    }

    //Basic Information droplist
    listTextBase() {
        return cy.get(registrationAccount.listTextBase)
    }

    registrationCertificateFieldTitle() {
        return registrationAccountObject.listTextBase().eq(0)
    }

    uploadFileBtnBasicInfo() {
        return cy.get(registrationAccount.uploadFileBtn).eq(0)
    }

    businessRegistrationCertificate() {
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

    arrowViewIconBasicInfo() {
        return registrationAccountObject.arrowViewIcons().eq(0)
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

    enterPhoneCountry() {
        return cy.get(registrationAccount.enterPhoneCountry)
    }
    enterPhoneNumber() {
        return cy.get(registrationAccount.enterPhoneNumber)
    }
    enterPhoneExtension() {
        return cy.get(registrationAccount.enterPhoneExtension)
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

    arrowViewIconContactPerson() {
        return registrationAccountObject.arrowViewIcons().eq(1)
    }

    //Unit Information
    orgImageFileInput() {
        return cy.get(registrationAccount.orgImageFileInput)
    }
    orgImageFileInputAIType() {
        return cy.get(registrationAccount.orgImageFileInputAIType)
    }

    uploadFileBtnUnitInfo() {
        return cy.get(registrationAccount.uploadFileBtn).eq(1)
    }
    uploadFileBtnUnitInfoAIType() {
        return cy.get(registrationAccount.uploadFileBtn).eq(2)
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
    headquartersEstablishmentYear() {
        return cy.get(registrationAccount.headquartersEstablishmentYear)
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

    organizationType_Companies() {
        return cy.get(registrationAccount.organizationType_Companies)
    }

    organizationType_Universities() {
        return cy.get(registrationAccount.organizationType_Universities)
    }

    organizationType_GovernmentAgencies() {
        return cy.get(registrationAccount.organizationType_GovernmentAgencies)
    }

    organizationType_Hospitals() {
        return cy.get(registrationAccount.organizationType_Hospitals)
    }

    organizationType_NGOs() {
        return cy.get(registrationAccount.organizationType_NGOs)
    }

    organizationType_Others() {
        return cy.get(registrationAccount.organizationType_Others)
    }

    sizeOfOperation() {
        return cy.get(registrationAccount.sizeOfOperation)
    }

    SizeOfOperation_LargeEnterprise() {
        return cy.get(registrationAccount.SizeOfOperation_LargeEnterprise)
    }

    sizeOfOperation_SmallAndMedium() {
        return cy.get(registrationAccount.sizeOfOperation_SmallAndMedium)
    }

    sizeOfOperation_MultinationalEnterprise() {
        return cy.get(registrationAccount.sizeOfOperation_MultinationalEnterprise)
    }
    mainMethodsOfOperating(){
        return cy.get(registrationAccount.mainMethodsOfOperating)
    }

    industry() {
        return cy.get(registrationAccount.industry)
    }

    industry_Agriculture() {
        return cy.get(registrationAccount.industry_Agriculture)
    }

    industry_MiningAndEarth() {
        return cy.get(registrationAccount.industry_MiningAndEarth)
    }

    industry_TraditionalManufacturing() {
        return cy.get(registrationAccount.industry_TraditionalManufacturing)
    }

    industry_ElectronicComponentManufacturing() {
        return cy.get(registrationAccount.industry_ElectronicComponentManufacturing)
    }

    industry_Computer() {
        return cy.get(registrationAccount.industry_Computer)
    }

    industry_ElectricityAndGas() {
        return cy.get(registrationAccount.industry_ElectricityAndGas)
    }

    industry_WaterSupply() {
        return cy.get(registrationAccount.industry_WaterSupply)
    }

    industry_ConstructionIndustry() {
        return cy.get(registrationAccount.industry_ConstructionIndustry)
    }

    industry_WholesaleAndRetail() {
        return cy.get(registrationAccount.industry_WholesaleAndRetail)
    }

    industry_TransportationAndWarehouse() {
        return cy.get(registrationAccount.industry_TransportationAndWarehouse)
    }

    GRICategory() {
        return cy.get(registrationAccount.GRICategory)
    }

    GRICategory_Agriculture() {
        return cy.get(registrationAccount.GRICategory_Agriculture)
    }

    GRICategory_Automotive() {
        return cy.get(registrationAccount.GRICategory_Automotive)
    }

    GRICategory_Aviation() {
        return cy.get(registrationAccount.GRICategory_Aviation)
    }

    GRICategory_Chemicals() {
        return cy.get(registrationAccount.GRICategory_Chemicals)
    }

    GRICategory_CommercialServices() {
        return cy.get(registrationAccount.GRICategory_CommercialServices)
    }

    GRICategory_Computers() {
        return cy.get(registrationAccount.GRICategory_Computers)
    }

    GRICategory_Conglomerates() {
        return cy.get(registrationAccount.GRICategory_Conglomerates)
    }

    GRICategory_Construction() {
        return cy.get(registrationAccount.GRICategory_Construction)
    }

    GRICategory_ConstructionMaterials() {
        return cy.get(registrationAccount.GRICategory_ConstructionMaterials)
    }

    GRICategory_ConsumerDurables() {
        return cy.get(registrationAccount.GRICategory_ConsumerDurables)
    }

    capitalization1() {
        return cy.get(registrationAccount.capitalization1)
    }

    NTDCurrencyCapitalization1() {
        return registrationAccountObject.NTDcurrencyOptions().eq(0)
    }

    USDCurrencyCapitalization1() {
        return registrationAccountObject.USDcurrencyOptions().eq(0)
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

    arrowViewIconUnitInfo() {
        return registrationAccountObject.arrowViewIcons().eq(2)
    }

    //Unit Financials
    yearBtn1(){
        cy.get(registrationAccount.yearBtn).eq(0).click()
    }
    yearBtn2(){
        cy.get(registrationAccount.yearBtn).eq(1).click()
    }
    yearBtn3(){
        cy.get(registrationAccount.yearBtn).eq(2).click()
    }
    yearBtn4(){
        cy.get(registrationAccount.yearBtn).eq(3).click()
    }
    yearBtn5(){
        cy.get(registrationAccount.yearBtn).eq(4).click()
    }
    revenueGovernmentBudgetDroplist1() {
        return cy.get(registrationAccount.revenueGovernmentBudgetDroplist1)
    }

    NTDCurrencyRevenueGovernmentBudget() {
        return registrationAccountObject.NTDcurrencyOptions().eq(1)
    }

    USDCurrencyRevenueGovernmentBudget() {
        return registrationAccountObject.USDcurrencyOptions().eq(1)
    }

    revenueGovernmentBudgetRevenues1() {
        return cy.get(registrationAccount.revenueGovernmentBudgetRevenues1)
    }

    globalRevenueDroplist1() {
        return cy.get(registrationAccount.globalRevenueDroplist1)
    }

    NTDCurrencyGlobalRevenue() {
        return registrationAccountObject.NTDcurrencyOptions().eq(2)
    }

    USDCurrencyGlobalRevenue() {
        return registrationAccountObject.USDCurrencyCapitalization1().eq(2)
    }

    globalRevenueGlobal1() {
        return cy.get(registrationAccount.globalRevenueGlobal1)
    }

    enterpriseIncomeTaxDroplist1() {
        return cy.get(registrationAccount.enterpriseIncomeTaxDroplist1)
    }

    NTDCurrencyEnterpriseIncomeTax() {
        return registrationAccountObject.NTDcurrencyOptions().eq(3)
    }

    USDCurrencyEnterpriseIncomeTax() {
        return registrationAccountObject.USDcurrencyOptions().eq(3)
    }

    enterpriseIncomeTax1() {
        return cy.get(registrationAccount.enterpriseIncomeTax1)
    }

    taiwanMarketValueDroplist1() {
        return cy.get(registrationAccount.taiwanMarketValueDroplist1)
    }

    NTDCurrencyTaiwanMarketValue() {
        return registrationAccountObject.NTDcurrencyOptions().eq(4)
    }

    USDCurrencyTaiwanMarketValue() {
        return registrationAccountObject.USDcurrencyOptions().eq(4)
    }

    taiwanMarketValueMarket1() {
        return cy.get(registrationAccount.taiwanMarketValueMarket1)
    }

    EPSValueDroplist1() {
        return cy.get(registrationAccount.EPSValueDroplist1)
    }

    NTDCurrencyEPSValue() {
        return registrationAccountObject.NTDcurrencyOptions().eq(5)
    }

    USDCurrencyEPSValue() {
        return registrationAccountObject.USDcurrencyOptions().eq(5)
    }

    EPSValueEPS1() {
        return cy.get(registrationAccount.EPSValueEPS1)
    }

    foreignOwnershipRatioPercent1() {
        return cy.get(registrationAccount.foreignOwnershipRatioPercent1)
    }

    annualCSRReportTitlesChinese1() {
        return cy.get(registrationAccount.annualCSRReportTitlesChinese1)
    }

    annualCSRReportTitlesEnglish1() {
        return cy.get(registrationAccount.annualCSRReportTitlesEnglish1)
    }
    //year 2
    revenueGovernmentBudgetDroplist2()
    {
        return cy.get(registrationAccount.revenueGovernmentBudgetDroplist2)
    }
    revenueGovernmentBudgetRevenues2()
    {
        return cy.get(registrationAccount.revenueGovernmentBudgetRevenues2)
    }
    NTDCurrencyRevenueGovernmentBudget2() {
        return registrationAccountObject.NTDcurrencyOptions().eq(6)
    }

    globalRevenueDroplist2()
    {
        return cy.get(registrationAccount.globalRevenueDroplist2)
    }
    NTDCurrencyGlobalRevenue2() {
        return registrationAccountObject.NTDcurrencyOptions().eq(7)
    }
    USDCurrencyGlobalRevenue2()
    {
        return registrationAccountObject.USDCurrencyCapitalization2().eq(7)
    }
    globalRevenueGlobal2()
    {
        return cy.get(registrationAccount.globalRevenueGlobal2)
    }

    enterpriseIncomeTaxDroplist2()
    {
        return cy.get(registrationAccount.enterpriseIncomeTaxDroplist2)
    }
    NTDCurrencyEnterpriseIncomeTax2() {
        return registrationAccountObject.NTDcurrencyOptions().eq(8)
    }
    enterpriseIncomeTax2()
    {
        return cy.get(registrationAccount.enterpriseIncomeTax2)
    }

    taiwanMarketValueDroplist2()
    {
        return cy.get(registrationAccount.taiwanMarketValueDroplist2)
    }
    NTDCurrencyTaiwanMarketValue2() {
        return registrationAccountObject.NTDcurrencyOptions().eq(9)
    }
    taiwanMarketValueMarket2() {
        return cy.get(registrationAccount.taiwanMarketValueMarket2)
    }

    EPSValueDroplist2() {
        return cy.get(registrationAccount.EPSValueDroplist2)
    }
    NTDCurrencyEPSValue2() {
        return registrationAccountObject.NTDcurrencyOptions().eq(10)
    }
    EPSValueEPS2() {
        return cy.get(registrationAccount.EPSValueEPS2)
    }

    foreignOwnershipRatioPercent2() {
        return cy.get(registrationAccount.foreignOwnershipRatioPercent2)
    }
    annualCSRReportTitlesChinese2() {
        return cy.get(registrationAccount.annualCSRReportTitlesChinese2)
    }

    annualCSRReportTitlesEnglish2() {
        return cy.get(registrationAccount.annualCSRReportTitlesEnglish2)
    }
    //year 3
    revenueGovernmentBudgetDroplist3()
    {
        return cy.get(registrationAccount.revenueGovernmentBudgetDroplist3)
    }
    revenueGovernmentBudgetRevenues3()
    {
        return cy.get(registrationAccount.revenueGovernmentBudgetRevenues3)
    }
    NTDCurrencyRevenueGovernmentBudget3() {
        return registrationAccountObject.NTDcurrencyOptions().eq(11)
    }

    globalRevenueDroplist3()
    {
        return cy.get(registrationAccount.globalRevenueDroplist3)
    }
    NTDCurrencyGlobalRevenue3() {
        return registrationAccountObject.NTDcurrencyOptions().eq(12)
    }
    USDCurrencyGlobalRevenue3()
    {
        return registrationAccountObject.USDCurrencyCapitalization3().eq(12)
    }
    globalRevenueGlobal3()
    {
        return cy.get(registrationAccount.globalRevenueGlobal3)
    }

    enterpriseIncomeTaxDroplist3()
    {
        return cy.get(registrationAccount.enterpriseIncomeTaxDroplist3)
    }
    NTDCurrencyEnterpriseIncomeTax3() {
        return registrationAccountObject.NTDcurrencyOptions().eq(13)
    }
    enterpriseIncomeTax3()
    {
        return cy.get(registrationAccount.enterpriseIncomeTax3)
    }

    taiwanMarketValueDroplist3()
    {
        return cy.get(registrationAccount.taiwanMarketValueDroplist3)
    }
    NTDCurrencyTaiwanMarketValue3() {
        return registrationAccountObject.NTDcurrencyOptions().eq(14)
    }
    taiwanMarketValueMarket3() {
        return cy.get(registrationAccount.taiwanMarketValueMarket3)
    }

    EPSValueDroplist3() {
        return cy.get(registrationAccount.EPSValueDroplist3)
    }
    NTDCurrencyEPSValue3() {
        return registrationAccountObject.NTDcurrencyOptions().eq(15)
    }
    EPSValueEPS3() {
        return cy.get(registrationAccount.EPSValueEPS3)
    }

    foreignOwnershipRatioPercent3() {
        return cy.get(registrationAccount.foreignOwnershipRatioPercent3)
    }
    annualCSRReportTitlesChinese3() {
        return cy.get(registrationAccount.annualCSRReportTitlesChinese3)
    }

    annualCSRReportTitlesEnglish3() {
        return cy.get(registrationAccount.annualCSRReportTitlesEnglish3)
    }
    //year 4
    revenueGovernmentBudgetDroplist4()
    {
        return cy.get(registrationAccount.revenueGovernmentBudgetDroplist4)
    }
    revenueGovernmentBudgetRevenues4()
    {
        return cy.get(registrationAccount.revenueGovernmentBudgetRevenues4)
    }
    NTDCurrencyRevenueGovernmentBudget4() {
        return registrationAccountObject.NTDcurrencyOptions().eq(16)
    }

    globalRevenueDroplist4()
    {
        return cy.get(registrationAccount.globalRevenueDroplist4)
    }
    NTDCurrencyGlobalRevenue4() {
        return registrationAccountObject.NTDcurrencyOptions().eq(17)
    }
    USDCurrencyGlobalRevenue4()
    {
        return registrationAccountObject.USDCurrencyCapitalization4().eq(17)
    }
    globalRevenueGlobal4()
    {
        return cy.get(registrationAccount.globalRevenueGlobal4)
    }

    enterpriseIncomeTaxDroplist4()
    {
        return cy.get(registrationAccount.enterpriseIncomeTaxDroplist4)
    }
    NTDCurrencyEnterpriseIncomeTax4() {
        return registrationAccountObject.NTDcurrencyOptions().eq(18)
    }
    enterpriseIncomeTax4()
    {
        return cy.get(registrationAccount.enterpriseIncomeTax4)
    }

    taiwanMarketValueDroplist4()
    {
        return cy.get(registrationAccount.taiwanMarketValueDroplist4)
    }
    NTDCurrencyTaiwanMarketValue4() {
        return registrationAccountObject.NTDcurrencyOptions().eq(19)
    }
    taiwanMarketValueMarket4() {
        return cy.get(registrationAccount.taiwanMarketValueMarket4)
    }

    EPSValueDroplist4() {
        return cy.get(registrationAccount.EPSValueDroplist4)
    }
    NTDCurrencyEPSValue4() {
        return registrationAccountObject.NTDcurrencyOptions().eq(20)
    }
    EPSValueEPS4() {
        return cy.get(registrationAccount.EPSValueEPS4)
    }

    foreignOwnershipRatioPercent4() {
        return cy.get(registrationAccount.foreignOwnershipRatioPercent4)
    }
    annualCSRReportTitlesChinese4() {
        return cy.get(registrationAccount.annualCSRReportTitlesChinese4)
    }

    annualCSRReportTitlesEnglish4() {
        return cy.get(registrationAccount.annualCSRReportTitlesEnglish4)
    }
    //year 5
    revenueGovernmentBudgetDroplist5()
    {
        return cy.get(registrationAccount.revenueGovernmentBudgetDroplist5)
    }
    revenueGovernmentBudgetRevenues5()
    {
        return cy.get(registrationAccount.revenueGovernmentBudgetRevenues5)
    }
    NTDCurrencyRevenueGovernmentBudget5() {
        return registrationAccountObject.NTDcurrencyOptions().eq(21)
    }

    globalRevenueDroplist5()
    {
        return cy.get(registrationAccount.globalRevenueDroplist5)
    }
    NTDCurrencyGlobalRevenue5() {
        return registrationAccountObject.NTDcurrencyOptions().eq(22)
    }
    USDCurrencyGlobalRevenue5()
    {
        return registrationAccountObject.USDCurrencyCapitalization5().eq(22)
    }
    globalRevenueGlobal5()
    {
        return cy.get(registrationAccount.globalRevenueGlobal5)
    }

    enterpriseIncomeTaxDroplist5()
    {
        return cy.get(registrationAccount.enterpriseIncomeTaxDroplist5)
    }
    NTDCurrencyEnterpriseIncomeTax5() {
        return registrationAccountObject.NTDcurrencyOptions().eq(23)
    }
    enterpriseIncomeTax5()
    {
        return cy.get(registrationAccount.enterpriseIncomeTax5)
    }

    taiwanMarketValueDroplist5()
    {
        return cy.get(registrationAccount.taiwanMarketValueDroplist5)
    }
    NTDCurrencyTaiwanMarketValue5() {
        return registrationAccountObject.NTDcurrencyOptions().eq(24)
    }
    taiwanMarketValueMarket5() {
        return cy.get(registrationAccount.taiwanMarketValueMarket5)
    }

    EPSValueDroplist5() {
        return cy.get(registrationAccount.EPSValueDroplist5)
    }
    NTDCurrencyEPSValue5() {
        return registrationAccountObject.NTDcurrencyOptions().eq(25)
    }
    EPSValueEPS5() {
        return cy.get(registrationAccount.EPSValueEPS5)
    }

    foreignOwnershipRatioPercent5() {
        return cy.get(registrationAccount.foreignOwnershipRatioPercent5)
    }
    annualCSRReportTitlesChinese5() {
        return cy.get(registrationAccount.annualCSRReportTitlesChinese5)
    }

    annualCSRReportTitlesEnglish5() {
        return cy.get(registrationAccount.annualCSRReportTitlesEnglish5)
    }

    supplementaryExplanationRevenue() {
        return cy.get(registrationAccount.supplementaryExplanationRevenue)
    }

    currentYearFirstSeasonEPSDroplist() {
        return cy.get(registrationAccount.currentYearFirstSeasonEPSDroplist)
    }

    NTDCurrencyCurrentYearFirstSeasonEPS() {
        return registrationAccountObject.NTDcurrencyOptions().eq(5)
    }

    USDCurrencyCurrentEYearFirstSeasonEPS() {
        return registrationAccountObject.USDcurrencyOptions().eq(5)
    }

    currentYearFirstSeasonEPSFirst() {
        return cy.get(registrationAccount.currentYearFirstSeasonEPSFirst)
    }

    currentYearSecondSeasonEPSDroplist() {
        return cy.get(registrationAccount.currentYearSecondSeasonEPSDroplist)
    }

    NTDCurrencyCurrentYearSecondSeasonEPS() {
        return registrationAccountObject.NTDcurrencyOptions().eq(5)
    }

    USDCurrencyCurrentYearSecondSeasonEPS() {
        return registrationAccountObject.USDcurrencyOptions().eq(5)
    }

    currentYearSecondSeasonEPSSeason() {
        return cy.get(registrationAccount.currentYearSecondSeasonEPSSeason)
    }

    iAgreeCheckbox() {
        return cy.get(registrationAccount.iAgreeCheckbox)
    }
    affiliatedEntityCheckBox(){
        return cy.get(registrationAccount.affiliatedEntityCheckBox)
    }

    affiliatedEntityName() {
        return cy.get(registrationAccount.affiliatedEntityName)
    }

    affiliatedEntityEditor() {
        return cy.get(registrationAccount.affiliatedEntityEditor)
    }

    completeBtn() {
        return cy.get(registrationAccount.completeBtn)
    }

    arrowViewIconUnitFinancials() {
        return registrationAccountObject.arrowViewIcons().eq(0)
    }
    messageSuccess(){
        return cy.get(registrationAccount.messageSuccess).should('be.visible').invoke('text').then((message)=>{
            expect(message).eq(registrationAccount.textMessageRegisSuccess)
        })
    }

    registrationAccFunction(regisAcct) {
        cy.visit(baseUrl_CA)
        registrationAccountObject.englishMode().click()
        registrationAccountObject.signUpBtn().click()

        // Input and verify data into registration screen
        registrationAccountObject.registerHeader().contains(registrationAccount.registerHeaderText)
        registrationAccountObject.basicInformationForm().should('exist')

        //Basic Information
        registrationAccountObject.registrationCertificateFieldTitle().contains(registrationAccount.registrationCertificate)
        registrationAccountObject.uploadFileBtnBasicInfo().click().then(() => {
            const registrationCertificateInput = registrationAccountObject.businessRegistrationCertificate()
            registrationCertificateInput.attachFile(registrationCertificateFile)
        })
        registrationAccountObject.enterAbbreviationParticipating1().type(regisAcct.AbbreviationPart1)
        registrationAccountObject.enterAbbreviationParticipating2().type(regisAcct.AbbreviationPart2)
        registrationAccountObject.enterLegalEntity().type(regisAcct.LegalEntity)
        registrationAccountObject.enterCorporateName().type(regisAcct.CorporateName)
        registrationAccountObject.enterCorporateCode().type(corporateCodeRandom)
        registrationAccountObject.enterManagingDirector1().type(regisAcct.ManagingDirector1)
        // registrationAccountObject.enterManagingDirector2().type(ManagingDirector2)
        registrationAccountObject.enterAddressPostCode1().type(regisAcct.AddressPostCode1)
        registrationAccountObject.enterAddress1().type(regisAcct.Address1)
        registrationAccountObject.enterAddressPostCode2().type(regisAcct.AddressPostCode2)
        // registrationAccountObject.enterAddress2().type(Address2)
        registrationAccountObject.arrowViewIconBasicInfo().click()

        //contact person
        registrationAccountObject.enterContactDivision().type(regisAcct.ContactDivision)
        registrationAccountObject.enterDesignation().type(regisAcct.Designation)
        registrationAccountObject.enterContactPerson1().type(regisAcct.ContactPerson1)
        registrationAccountObject.enterContactPerson2().type(regisAcct.ContactPerson2)
        registrationAccountObject.enterPhoneCountry().type(regisAcct.PhoneCountry)
        registrationAccountObject.enterPhoneNumber().type(regisAcct.PhoneNumber)
        registrationAccountObject.enterPhoneExtension().type(regisAcct.PhonExtension)

        // registrationAccountObject.enterFax().type('(02)1234-5678')
        registrationAccountObject.enterMailingAddress1().type(regisAcct.MailingAddress1)
        registrationAccountObject.enterMailingAddress2().type(regisAcct.MailingAddress2)
        registrationAccountObject.enterEmail().type('AutomationTest' + randomNumbers + '@yopmail.com')
        registrationAccountObject.enterCopyEmail1().type('AutomationTest' + randomNumbers + '@yopmail.com')
        registrationAccountObject.enterCopyEmail2().type('AutomationTest' + randomNumbers + '@yopmail.com')
        registrationAccountObject.arrowViewIconContactPerson().click()

        //Unit Information
        registrationAccountObject.uploadFileBtnUnitInfo().click().then(() => {
            const orgUploadFileInput = registrationAccountObject.orgImageFileInput();
            orgUploadFileInput.attachFile(organizationLogoFile)
            cy.wait(1000)
        })
        registrationAccountObject.uploadFileBtnUnitInfoAIType().click().then(() => {
            const orgUploadFileInput = registrationAccountObject.orgImageFileInputAIType();
            orgUploadFileInput.attachFile(organizationLogoFileAIType)
        })
        registrationAccountObject.radioEntityNationalityTaiwan().click()
        registrationAccountObject.radioEntityNationalityForeign().click()
        registrationAccountObject.radioEntityNationalityForeignOptions().click()
        registrationAccountObject.radioEntityNationalityForeignOptions().click()
        registrationAccountObject.radioEntityNationalityForeignOptionsValue().eq(1).click()
        registrationAccountObject.radioWhetherPublishReportYes().click()
        registrationAccountObject.radioWhetherPublishReportNo().click()
        registrationAccountObject.yearIncorporated().type(regisAcct.yearIncorporated)
        registrationAccountObject.headquartersEstablishmentYear().type(regisAcct.EstablishmentYear)
        registrationAccountObject.listingSituation_ListedPublicly().click()
        registrationAccountObject.listingSituation_OTC().click()
        registrationAccountObject.listingSituation_NotListed().click()
        registrationAccountObject.enterStock().type(regisAcct.Stock)
        registrationAccountObject.organizationType().click().then(() => {
            registrationAccountObject.organizationType_Companies().click({force: true})
        })

        // registrationAccountObject.sizeOfOperation().click().then(() => {
        //     registrationAccountObject.sizeOfOperation_SmallAndMedium().click({force: true})
        //
        // })
        registrationAccountObject.mainMethodsOfOperating().click()
        registrationAccountObject.industry().click().then(() => {
            registrationAccountObject.industry_Agriculture().click({force: true})
        })

        registrationAccountObject.GRICategory().click().then(() => {
            registrationAccountObject.GRICategory_Automotive().click({force: true})
        })
        registrationAccountObject.capitalization1().click()
        registrationAccountObject.NTDCurrencyCapitalization1().click({force: true})
        registrationAccountObject.capitalization2().type(regisAcct.capitalization2)
        registrationAccountObject.chairmanOfTheBoard1().type(regisAcct.chairmanOfTheBoard1)
        registrationAccountObject.chairmanOfTheBoar2().type(regisAcct.chairmanOfTheBoar2)
        registrationAccountObject.generalManagerName1().type(regisAcct.generalManagerName1)
        registrationAccountObject.generalManagerName2().type(regisAcct.generalManagerName2)
        registrationAccountObject.employeeDistributionMale().type(regisAcct.employeeDistributionMale)
        registrationAccountObject.employeeDistributionFemale().type(regisAcct.employeeDistributionFemale)
        registrationAccountObject.fullTimeEmployees().type(regisAcct.fullTimeEmployees)
        registrationAccountObject.partTimeEmployees().type(regisAcct.partTimeEmployees)
        registrationAccountObject.employeesWithDisabilities().type(regisAcct.employeesWithDisabilities)
        registrationAccountObject.organizationOfficialWebsite().type(regisAcct.organizationOfficialWebsite)
        registrationAccountObject.corporateCSRWebsite1().type(regisAcct.corporateCSRWebsite1)
        registrationAccountObject.taiwanCorporateWebsite().type(regisAcct.taiwanCorporateWebsite)
        registrationAccountObject.corporateCSRWebsite2().type(regisAcct.corporateCSRWebsite2)
        registrationAccountObject.companyDescriptionChina().type(regisAcct.companyDescriptionChina)
        registrationAccountObject.companyDescriptionEnglish().type(regisAcct.companyDescriptionEnglish)
        registrationAccountObject.arrowViewIconUnitInfo().click()

        //Unit Financials
        // registrationAccountObject.revenueGovernmentBudgetDroplist1().click()
        registrationAccountObject.NTDCurrencyRevenueGovernmentBudget().click({force: true})
        registrationAccountObject.revenueGovernmentBudgetRevenues1().type(regisAcct.revenueGovernmentBudgetRevenues)
        registrationAccountObject.globalRevenueDroplist1().click()
        registrationAccountObject.NTDCurrencyGlobalRevenue().click({force: true})
        registrationAccountObject.globalRevenueGlobal1().type(regisAcct.globalRevenueGlobal)
        registrationAccountObject.enterpriseIncomeTaxDroplist1().click()
        registrationAccountObject.NTDCurrencyEnterpriseIncomeTax().click({force: true})
        registrationAccountObject.enterpriseIncomeTax1().type(regisAcct.enterpriseIncomeTax)
        registrationAccountObject.taiwanMarketValueDroplist1().click()
        registrationAccountObject.NTDCurrencyTaiwanMarketValue().click({force: true})
        registrationAccountObject.taiwanMarketValueMarket1().type(regisAcct.taiwanMarketValueMarket)
        registrationAccountObject.EPSValueDroplist1().click()
        registrationAccountObject.NTDCurrencyEPSValue().click({force: true})
        registrationAccountObject.EPSValueEPS1().type(regisAcct.EPSValueEPS)
        registrationAccountObject.foreignOwnershipRatioPercent1().type(regisAcct.foreignOwnershipRatioPercent)
        registrationAccountObject.annualCSRReportTitlesChinese1().type(regisAcct.annualCSRReportTitlesChinese)
        registrationAccountObject.annualCSRReportTitlesEnglish1().type(regisAcct.annualCSRReportTitlesEnglish)
        //year 2
        // registrationAccountObject.yearBtn2()
        // registrationAccountObject.revenueGovernmentBudgetDroplist2().click()
        registrationAccountObject.NTDCurrencyRevenueGovernmentBudget2().click({force: true})
        registrationAccountObject.revenueGovernmentBudgetRevenues2().type(regisAcct.revenueGovernmentBudgetRevenues)
        registrationAccountObject.globalRevenueDroplist2().click()
        registrationAccountObject.NTDCurrencyGlobalRevenue2().click({force: true})
        registrationAccountObject.globalRevenueGlobal2().type(regisAcct.globalRevenueGlobal)
        registrationAccountObject.enterpriseIncomeTaxDroplist2().click()
        registrationAccountObject.NTDCurrencyEnterpriseIncomeTax2().click({force: true})
        registrationAccountObject.enterpriseIncomeTax2().type(regisAcct.enterpriseIncomeTax)
        registrationAccountObject.taiwanMarketValueDroplist2().click()
        registrationAccountObject.NTDCurrencyTaiwanMarketValue2().click({force: true})
        registrationAccountObject.taiwanMarketValueMarket2().type(regisAcct.taiwanMarketValueMarket)
        registrationAccountObject.EPSValueDroplist2().click()
        registrationAccountObject.NTDCurrencyEPSValue2().click({force: true})
        registrationAccountObject.EPSValueEPS2().type(regisAcct.EPSValueEPS)
        registrationAccountObject.foreignOwnershipRatioPercent2().type(regisAcct.foreignOwnershipRatioPercent)
        registrationAccountObject.annualCSRReportTitlesChinese2().type(regisAcct.annualCSRReportTitlesChinese)
        registrationAccountObject.annualCSRReportTitlesEnglish2().type(regisAcct.annualCSRReportTitlesEnglish)
        //year 3
        // registrationAccountObject.yearBtn3()
        // registrationAccountObject.revenueGovernmentBudgetDroplist3().click()
        registrationAccountObject.NTDCurrencyRevenueGovernmentBudget3().click({force: true})
        registrationAccountObject.revenueGovernmentBudgetRevenues3().type(regisAcct.revenueGovernmentBudgetRevenues)
        registrationAccountObject.globalRevenueDroplist3().click()
        registrationAccountObject.NTDCurrencyGlobalRevenue3().click({force: true})
        registrationAccountObject.globalRevenueGlobal3().type(regisAcct.globalRevenueGlobal)
        registrationAccountObject.enterpriseIncomeTaxDroplist3().click()
        registrationAccountObject.NTDCurrencyEnterpriseIncomeTax3().click({force: true})
        registrationAccountObject.enterpriseIncomeTax3().type(regisAcct.enterpriseIncomeTax)
        registrationAccountObject.taiwanMarketValueDroplist3().click()
        registrationAccountObject.NTDCurrencyTaiwanMarketValue3().click({force: true})
        registrationAccountObject.taiwanMarketValueMarket3().type(regisAcct.taiwanMarketValueMarket)
        registrationAccountObject.EPSValueDroplist3().click()
        registrationAccountObject.NTDCurrencyEPSValue3().click({force: true})
        registrationAccountObject.EPSValueEPS3().type(regisAcct.EPSValueEPS)
        registrationAccountObject.foreignOwnershipRatioPercent3().type(regisAcct.foreignOwnershipRatioPercent)
        registrationAccountObject.annualCSRReportTitlesChinese3().type(regisAcct.annualCSRReportTitlesChinese)
        registrationAccountObject.annualCSRReportTitlesEnglish3().type(regisAcct.annualCSRReportTitlesEnglish)
        // year 4
        // registrationAccountObject.yearBtn4()
        // registrationAccountObject.revenueGovernmentBudgetDroplist4().click()
        registrationAccountObject.NTDCurrencyRevenueGovernmentBudget4().click({force: true})
        registrationAccountObject.revenueGovernmentBudgetRevenues4().type(regisAcct.revenueGovernmentBudgetRevenues)
        registrationAccountObject.globalRevenueDroplist4().click()
        registrationAccountObject.NTDCurrencyGlobalRevenue4().click({force: true})
        registrationAccountObject.globalRevenueGlobal4().type(regisAcct.globalRevenueGlobal)
        registrationAccountObject.enterpriseIncomeTaxDroplist4().click()
        registrationAccountObject.NTDCurrencyEnterpriseIncomeTax4().click({force: true})
        registrationAccountObject.enterpriseIncomeTax4().type(regisAcct.enterpriseIncomeTax)
        registrationAccountObject.taiwanMarketValueDroplist4().click()
        registrationAccountObject.NTDCurrencyTaiwanMarketValue4().click({force: true})
        registrationAccountObject.taiwanMarketValueMarket4().type(regisAcct.taiwanMarketValueMarket)
        registrationAccountObject.EPSValueDroplist4().click()
        registrationAccountObject.NTDCurrencyEPSValue4().click({force: true})
        registrationAccountObject.EPSValueEPS4().type(regisAcct.EPSValueEPS)
        registrationAccountObject.foreignOwnershipRatioPercent4().type(regisAcct.foreignOwnershipRatioPercent)
        registrationAccountObject.annualCSRReportTitlesChinese4().type(regisAcct.annualCSRReportTitlesChinese)
        registrationAccountObject.annualCSRReportTitlesEnglish4().type(regisAcct.annualCSRReportTitlesEnglish)
        //year 5
        // registrationAccountObject.yearBtn5()
        // registrationAccountObject.revenueGovernmentBudgetDroplist5().click()
        registrationAccountObject.NTDCurrencyRevenueGovernmentBudget5().click({force: true})
        registrationAccountObject.revenueGovernmentBudgetRevenues5().type(regisAcct.revenueGovernmentBudgetRevenues)
        registrationAccountObject.globalRevenueDroplist5().click()
        registrationAccountObject.NTDCurrencyGlobalRevenue5().click({force: true})
        registrationAccountObject.globalRevenueGlobal5().type(regisAcct.globalRevenueGlobal)
        registrationAccountObject.enterpriseIncomeTaxDroplist5().click()
        registrationAccountObject.NTDCurrencyEnterpriseIncomeTax5().click({force: true})
        registrationAccountObject.enterpriseIncomeTax5().type(regisAcct.enterpriseIncomeTax)
        registrationAccountObject.taiwanMarketValueDroplist5().click()
        registrationAccountObject.NTDCurrencyTaiwanMarketValue5().click({force: true})
        registrationAccountObject.taiwanMarketValueMarket5().type(regisAcct.taiwanMarketValueMarket)
        registrationAccountObject.EPSValueDroplist5().click()
        registrationAccountObject.NTDCurrencyEPSValue5().click({force: true})
        registrationAccountObject.EPSValueEPS5().type(regisAcct.EPSValueEPS)
        registrationAccountObject.foreignOwnershipRatioPercent5().type(regisAcct.foreignOwnershipRatioPercent)
        registrationAccountObject.annualCSRReportTitlesChinese5().type(regisAcct.annualCSRReportTitlesChinese)
        registrationAccountObject.annualCSRReportTitlesEnglish5().type(regisAcct.annualCSRReportTitlesEnglish)

        registrationAccountObject.supplementaryExplanationRevenue().type(regisAcct.supplementaryExplanationRevenue)
        registrationAccountObject.affiliatedEntityCheckBox().click()
        registrationAccountObject.affiliatedEntityName().type(regisAcct.affiliatedEntityName)
        registrationAccountObject.affiliatedEntityEditor().type(regisAcct.affiliatedEntityEditor)
        registrationAccountObject.arrowViewIconUnitFinancials().click()

        registrationAccountObject.iAgreeCheckbox().eq(1).click({multiple: true})
        regisAcctData ={
            corporateCode: corporateCodeRandom
        }
        cy.writeFile('cypress/fixtures/competition/registrationAcctData/exportRegisAcctData.json', regisAcctData)
        // registrationAccountObject.completeBtn().click().then(()=>{
        //     registrationAccountObject. messageSuccess()
        // })


    }

}

const registrationAccountObject = new RegitrationAccountObject();
export default registrationAccountObject;