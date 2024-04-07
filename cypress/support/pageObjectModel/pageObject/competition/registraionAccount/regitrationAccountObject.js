import registrationAccount from "../../../locator/competition/regitrationAccount";
import loginAdminObject from "../../admin/loginAdmin/loginAdminObject";
import businessListObject from "../../admin/businessList/businessListObject";
import {baseUrl_CA} from "../../../../../../cypress.config";

const organizationLogoFile = '../fixtures/competition/registrationAcctData/organizationLogoImage.jpg';
const registrationCertificateFile = '../fixtures/competition/registrationAcctData/registrationCertificate.pdf'
const randomNumbers = Cypress._.random(0, 99);
const corporateCodeRandom = Cypress._.random(0, 99999999);

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
    revenueGovernmentBudgetDroplist() {
        return cy.get(registrationAccount.revenueGovernmentBudgetDroplist)
    }

    NTDCurrencyRevenueGovernmentBudget() {
        return registrationAccountObject.NTDcurrencyOptions().eq(1)
    }

    USDCurrencyRevenueGovernmentBudget() {
        return registrationAccountObject.USDcurrencyOptions().eq(1)
    }

    revenueGovernmentBudgetRevenues() {
        return cy.get(registrationAccount.revenueGovernmentBudgetRevenues)
    }

    globalRevenueDroplist() {
        return cy.get(registrationAccount.globalRevenueDroplist)
    }

    NTDCurrencyGlobalRevenue() {
        return registrationAccountObject.NTDcurrencyOptions().eq(2)
    }

    USDCurrencyGlobalRevenue() {
        return registrationAccountObject.USDCurrencyCapitalization1().eq(2)
    }

    globalRevenueGlobal() {
        return cy.get(registrationAccount.globalRevenueGlobal)
    }

    enterpriseIncomeTaxDroplist() {
        return cy.get(registrationAccount.enterpriseIncomeTaxDroplist)
    }

    NTDCurrencyEnterpriseIncomeTax() {
        return registrationAccountObject.NTDcurrencyOptions().eq(3)
    }

    USDCurrencyEnterpriseIncomeTax() {
        return registrationAccountObject.USDcurrencyOptions().eq(3)
    }

    enterpriseIncomeTax() {
        return cy.get(registrationAccount.enterpriseIncomeTax)
    }

    taiwanMarketValueDroplist() {
        return cy.get(registrationAccount.taiwanMarketValueDroplist)
    }

    NTDCurrencyTaiwanMarketValue() {
        return registrationAccountObject.NTDcurrencyOptions().eq(4)
    }

    USDCurrencyTaiwanMarketValue() {
        return registrationAccountObject.USDcurrencyOptions().eq(4)
    }

    taiwanMarketValueMarket() {
        return cy.get(registrationAccount.taiwanMarketValueMarket)
    }

    EPSValueDroplist() {
        return cy.get(registrationAccount.EPSValueDroplist)
    }

    NTDCurrencyEPSValue() {
        return registrationAccountObject.NTDcurrencyOptions().eq(5)
    }

    USDCurrencyEPSValue() {
        return registrationAccountObject.USDcurrencyOptions().eq(5)
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
        registrationAccountObject.revenueGovernmentBudgetDroplist().click()
        registrationAccountObject.NTDCurrencyRevenueGovernmentBudget().click({force: true})
        registrationAccountObject.revenueGovernmentBudgetRevenues().type(regisAcct.revenueGovernmentBudgetRevenues)
        registrationAccountObject.globalRevenueDroplist().click()
        registrationAccountObject.NTDCurrencyGlobalRevenue().click({force: true})
        registrationAccountObject.globalRevenueGlobal().type(regisAcct.globalRevenueGlobal)
        registrationAccountObject.enterpriseIncomeTaxDroplist().click()
        registrationAccountObject.NTDCurrencyEnterpriseIncomeTax().click({force: true})
        registrationAccountObject.enterpriseIncomeTax().type(regisAcct.enterpriseIncomeTax)
        registrationAccountObject.taiwanMarketValueDroplist().click()
        registrationAccountObject.NTDCurrencyTaiwanMarketValue().click({force: true})
        registrationAccountObject.taiwanMarketValueMarket().type(regisAcct.taiwanMarketValueMarket)
        registrationAccountObject.EPSValueDroplist().click()
        registrationAccountObject.NTDCurrencyEPSValue().click({force: true})
        registrationAccountObject.EPSValueEPS().type(regisAcct.EPSValueEPS)
        registrationAccountObject.foreignOwnershipRatioPercent().type(regisAcct.foreignOwnershipRatioPercent)
        registrationAccountObject.annualCSRReportTitlesChinese().type(regisAcct.annualCSRReportTitlesChinese)
        registrationAccountObject.annualCSRReportTitlesEnglish().type(regisAcct.annualCSRReportTitlesEnglish)
        registrationAccountObject.supplementaryExplanationRevenue().type(regisAcct.supplementaryExplanationRevenue)
        // registrationAccountObject.currentYearFirstSeasonEPSDroplist().click()
        // registrationAccountObject.NTDCurrencyCurrentYearFirstSeasonEPS().click({force: true})
        // registrationAccountObject.currentYearFirstSeasonEPSFirst().type(currentYearFirstSeasonEPSFirst)
        // registrationAccountObject.currentYearSecondSeasonEPSDroplist().click()
        // registrationAccountObject.NTDCurrencyCurrentYearSecondSeasonEPS().click({force: true})
        // registrationAccountObject.currentYearSecondSeasonEPSSeason().type(currentYearSecondSeasonEPSSeason)
        registrationAccountObject.affiliatedEntityCheckBox().click()
        registrationAccountObject.affiliatedEntityName().type(regisAcct.affiliatedEntityName)
        registrationAccountObject.affiliatedEntityEditor().type(regisAcct.affiliatedEntityEditor)
        registrationAccountObject.arrowViewIconUnitFinancials().click()

        registrationAccountObject.iAgreeCheckbox().eq(1).click({multiple: true})
        // registrationAccountObject.completeBtn().click()

    }

}

const registrationAccountObject = new RegitrationAccountObject();
export default registrationAccountObject;