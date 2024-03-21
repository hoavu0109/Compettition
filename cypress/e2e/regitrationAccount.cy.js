import registrationAccountObject
    from "../support/pageObjectModel/pageObject/competition/registraionAccount/regitrationAccountObject";

const organizationLogoFile = '../fixtures/competition/registrationAcctData/organizationLogoImage.jpg';
const registrationCertificateFile = '../fixtures/competition/registrationAcctData/registrationCertificate.pdf'
const randomNumbers =  Cypress._.random(0, 99);
describe('Check registration account follow', () => {
    beforeEach(() => {
        cy.visit('http://competition.tcsa-local.site/login')
    })
    it.only('input value into regitration account', () => {
        cy.get('button[type="button"]').eq(1).click()
        // Input and verify data into registration screen
        registrationAccountObject.registerHeaderText().contains('Member Registration')
        registrationAccountObject.basicInformationForm().should('exist')

        //Basic Information
        registrationAccountObject.listTextBase().eq(0).contains('Registration certificate')
        registrationAccountObject.uploadFileBtnBasicInfo().click().then(() => {
            const registrationCertificateInput = registrationAccountObject.businessRegistrationCertificate()
            registrationCertificateInput.attachFile(registrationCertificateFile)
        })
        registrationAccountObject.enterAbbreviationParticipating1().type('全家便利商店')
        registrationAccountObject.enterAbbreviationParticipating2().type('FamilyMart')
        registrationAccountObject.enterAbbreviationParticipating2().type('FamilyMart')
        registrationAccountObject.enterLegalEntity().type('全家便利商店股份有限公司')
        registrationAccountObject.enterCorporateName().type('Taiwan FamilyMart Co. Ltd.')
        registrationAccountObject.enterCorporateCode().type('12345678')
        registrationAccountObject.enterManagingDirector1().type('全家便利商店')
        registrationAccountObject.enterManagingDirector2().type('全家便利商店')
        registrationAccountObject.enterAddressPostCode1().type('10446')
        registrationAccountObject.enterAddress1().type('10446')
        registrationAccountObject.enterAddressPostCode2().type('10446')
        registrationAccountObject.enterAddress2().type('10446')
        registrationAccountObject.arrowViewIconBasicInfo().click()
        //contact person
        registrationAccountObject.enterContactDivision().type('公共事務暨品牌溝通室')
        registrationAccountObject.enterDesignation().type('品牌溝通課經理')
        registrationAccountObject.enterContactPerson1().type('謝宜臻')
        registrationAccountObject.enterContactPerson2().type('Kira Hsieh')
        registrationAccountObject.enterPhone().type('(02)1234-5678#123')
        registrationAccountObject.enterFax().type('(02)1234-5678')
        registrationAccountObject.enterMailingAddress1().type('10446')
        registrationAccountObject.enterMailingAddress2().type('臺北市中山區中山北路2段61號7樓')
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
        registrationAccountObject.yearIncorporated().type('1988')
        registrationAccountObject.listingSituation_ListedPublicly().click()
        registrationAccountObject.listingSituation_OTC().click()
        registrationAccountObject.listingSituation_NotListed().click()
        registrationAccountObject.enterStock().type('5903')
        registrationAccountObject.organizationType().click().then(() => {
            registrationAccountObject.organizationType_Companies().click({force: true})
        })

        registrationAccountObject.sizeOfOperation().click().then(() => {
            registrationAccountObject.sizeOfOperation_SmallAndMedium().click({force: true})

        })
        registrationAccountObject.industry().click().then(() => {
            registrationAccountObject.industry_Agriculture().click({force: true})
        })

        registrationAccountObject.GRICategory().click().then(() => {
            registrationAccountObject.GRICategory_Automotive().click({force: true})
        })
        registrationAccountObject.capitalization1().click()
        registrationAccountObject.NTDCurrencyCapitalization1().click({force: true})
        registrationAccountObject.capitalization2().type('22.322')
        registrationAccountObject.chairmanOfTheBoard1().type('葉榮廷')
        registrationAccountObject.chairmanOfTheBoar2().type('Jung Ting Yeh')
        registrationAccountObject.generalManagerName1().type('薛東都')
        registrationAccountObject.generalManagerName2().type('Tung Tu Hsueh')
        registrationAccountObject.employeeDistributionMale().type('2481')
        registrationAccountObject.employeeDistributionFemale().type('2374')
        registrationAccountObject.fullTimeEmployees().type('2952')
        registrationAccountObject.partTimeEmployees().type('1903')
        registrationAccountObject.employeesWithDisabilities().type('71')
        registrationAccountObject.organizationOfficialWebsite().type('.com')
        registrationAccountObject.corporateCSRWebsite1().type('.com')
        registrationAccountObject.taiwanCorporateWebsite().type('.com')
        registrationAccountObject.corporateCSRWebsite2().type('.com')
        registrationAccountObject.companyDescriptionChina().type('全家便利商店秉全家便利商店秉全家便利商店秉')
        registrationAccountObject.companyDescriptionEnglish().type('Based on our business philosophy of putting our customers')
        registrationAccountObject.arrowViewIconUnitInfo().click()
        //Unit Financials
        registrationAccountObject.revenueGovernmentBudgetDroplist().click()
        registrationAccountObject.NTDCurrencyRevenueGovernmentBudget().click({force: true})
        registrationAccountObject.revenueGovernmentBudgetRevenues().type('74')

        registrationAccountObject.globalRevenueDroplist().click()
        registrationAccountObject.NTDCurrencyGlobalRevenue().click({force: true})
        registrationAccountObject.globalRevenueGlobal().type('222')
        registrationAccountObject.enterpriseIncomeTaxDroplist().click()
        registrationAccountObject.NTDCurrencyEnterpriseIncomeTax().click({force: true})
        registrationAccountObject.enterpriseIncomeTax().type('135')
        registrationAccountObject.taiwanMarketValueDroplist().click()
        registrationAccountObject.NTDCurrencyTaiwanMarketValue().click({force: true})
        registrationAccountObject.taiwanMarketValueMarket().type('222')
        registrationAccountObject.EPSValueDroplist().click()
        registrationAccountObject.NTDCurrencyEPSValue().click({force: true})
        registrationAccountObject.EPSValueEPS().type('8.3')
        registrationAccountObject.foreignOwnershipRatioPercent().type('50')
        registrationAccountObject.annualCSRReportTitlesChinese().type('全家便利商店2019年企業社會責任報告書')
        registrationAccountObject.annualCSRReportTitlesEnglish().type('無')
        registrationAccountObject.supplementaryExplanationRevenue().type('無 無 無')
        registrationAccountObject.currentYearFirstSeasonEPSDroplist().click()
        registrationAccountObject.NTDCurrencyCurrentYearFirstSeasonEPS().click({force: true})
        registrationAccountObject.currentYearFirstSeasonEPSFirst().type('1.43')
        registrationAccountObject.currentYearSecondSeasonEPSDroplist().click()
        registrationAccountObject.NTDCurrencyCurrentYearSecondSeasonEPS().click({force: true})
        registrationAccountObject.currentYearSecondSeasonEPSSeason().type('0')
        registrationAccountObject.iAgreeCheckbox().eq(1).click({multiple: true})
        // registrationAccountObject.affiliatedEntityName().type('Group Name Test')
        // registrationAccountObject.affiliatedEntityEditor().type('Group Editor Test')
        registrationAccountObject.completeBtn().click()
        // registrationAccountObject.arrowViewIconUnitFinancials().click()

    })
})