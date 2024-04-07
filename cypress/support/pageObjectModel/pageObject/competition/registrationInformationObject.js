import registrationInformation from "../../locator/competition/registrationInformation";

class RegistrationInformationObject {
    registrationInformationTab() {
        return cy.get(registrationInformation.registrationInformationTab).eq(2).click()
    }

    question1_RegulatoryCompliance_No() {
        return cy.xpath(registrationInformation.question1_RegulatoryCompliance).eq(0).click()
    }

    question1_RegulatoryCompliance_Yes() {
        cy.xpath(registrationInformation.question1_RegulatoryCompliance).eq(1).click()
        cy.get(registrationInformation.question1_YesInput).clear().type('Regulatory Compliance Yes 請依照報')
    }

    question2_CSRAwards() {
        cy.xpath(registrationInformation.question2_CSRAwards).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
        cy.get(registrationInformation.question2_CSRAwardsOtherInput).clear().type('CSR獲獎或認證情')
    }

    question3_ManagementTools() {
        cy.xpath(registrationInformation.question3_ManagementTools).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
        cy.get(registrationInformation.question3_ManagementToolsOtherInput).clear().type('管理工具導入')
    }

    question4_ChiefDepartment() {
        cy.xpath(registrationInformation.question4_ChiefDepartment).eq(0).click()
    }

    question4_ChiefDepartmentOtherInput() {
        cy.xpath(registrationInformation.question4_ChiefDepartment).eq(9).click()
        cy.get(registrationInformation.question4_ChiefDepartmentOtherInput).clear().type('q4: Chief Department of CSR')
    }

    question5_ProfessionalStaffInput() {
        cy.get(registrationInformation.question5_ProfessionalStaffInput).clear().type('Hannah Vu')
    }

    question6_NumberOfEmployeesInput() {
        cy.get(registrationInformation.question6_NumberOfEmployeesInput).clear().type('6')
    }

    question7_ProjectOrProgram() {
        cy.get(registrationInformation.question7_ProjectOrProgram).clear().type('Project or Program')
    }

    question8_HaveYouEstablished_No() {
        cy.get(registrationInformation.question8_HaveYouEstablished).eq(0).click()
    }

    question8_HaveYouEstablished_Yes() {
        cy.get(registrationInformation.question8_HaveYouEstablished).eq(1).click()
    }

    question9_TitleOfTop() {
        cy.get(registrationInformation.question9_TitleOfTop).clear().type('Title of Top Executive who CSR')
    }

    question10_WhichAreYour() {
        cy.xpath(registrationInformation.question10_WhichAreYour).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
        cy.get(registrationInformation.question10_WhichAreYourOtherInput).clear().type('q10: Chief Department of CSR')
    }

    question11_WhatWereThe() {
        cy.xpath(registrationInformation.question11_WhatWereThe).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
        cy.get(registrationInformation.question11_WhatWereTheOtherInput).clear().type('q11: Chief Department of CSR')
    }

    question12_GivenYourExisting() {
        cy.xpath(registrationInformation.question12_GivenYourExisting).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
        cy.get(registrationInformation.question12_GivenYourExistingOtherInput).clear().type('Given your existing circumstances')
    }

    question13_ChallengesAndDifficulties() {
        cy.xpath(registrationInformation.question13_ChallengesAndDifficulties).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
        cy.get(registrationInformation.question13_ChallengesAndDifficultiesOtherInput).clear().type('What are the challenges and difficulties')
    }

    question14_FollowingFactors() {
        cy.xpath(registrationInformation.question14_FollowingFactors).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
        cy.get(registrationInformation.question14_FollowingFactorsOtherInput).clear().type('Which of the following factors')
    }

    question15_KeyOpportunities() {
        cy.xpath(registrationInformation.question15_KeyOpportunities).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
        cy.get(registrationInformation.question15_KeyOpportunitiesOtherInput).clear().type('What are the key opportunities your firm enjoys ')
    }

    question16_TheSource() {
        cy.xpath(registrationInformation.question16_TheSource).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
        cy.get(registrationInformation.question16_TheSourceOtherInput).clear().type('The source of your firms largest risk arises ')
    }

    question17_MostImportantCSR() {
        cy.get(registrationInformation.question17_MostImportantCSR).eq(0).click()
    }

    question18_FirmColleagues() {
        cy.get(registrationInformation.question18_FirmColleagues).eq(0).click()
    }

    question19_ReasonsForYourCompany() {
        cy.xpath(registrationInformation.question19_ReasonsForYourCompany).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
        cy.get(registrationInformation.question19_ReasonsForYourCompanyOtherInput).clear().type('Reasons for your company to participate in TCSA')
    }

    question20_DegreeOfCorrelation() {
        cy.get(registrationInformation.question20_DegreeOfCorrelation).eq(0).click()
    }

    question21_YourFirmBoard() {
        cy.xpath(registrationInformation.question21_YourFirmBoard).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
    }

    question22_AnnualBudget() {
        cy.get(registrationInformation.question22_AnnualBudget).eq(0).click()
    }

    question23_CompanyAnnualBudget() {
        cy.get(registrationInformation.question23_CompanyAnnualBudget).eq(0).click()
    }

    question24_DescribeTheCommunity() {
        cy.get(registrationInformation.question24_DescribeTheCommunity).eq(0).click()
    }

    question25_CompanyUnderstanding() {
        cy.xpath(registrationInformation.question25_CompanyUnderstanding).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
        cy.get(registrationInformation.question25_CompanyUnderstandingOtherInput).clear().type('What is your company\'s understanding')
    }

    question26_MainChallengesOtherInput() {
        cy.xpath(registrationInformation.question26_MainChallenges).eq(8).click()
        cy.get(registrationInformation.question26_MainChallengesOtherInput).clear().type('What are the main challenges and difficulties')
    }

    question27_OrganizationKey() {
        cy.xpath(registrationInformation.question27_OrganizationKey).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
        cy.get(registrationInformation.question27_OrganizationKeyOtherInput).clear().type('Who are the organizations key partners')
    }

    question28_CurrentCorporate() {
        cy.xpath(registrationInformation.question28_CurrentCorporate).then((checkboxs) => {
            for (let i = 0; i < 8; i++) { // select max 8 checkbox
                cy.get(checkboxs[i]).click()
            }
        })
        // cy.get(registrationInformation.question28_CurrentCorporateOtherInput).clear().type('In the current corporate sustainable development ')
    }

    question29_ItemsApply() {
        cy.xpath(registrationInformation.question29_ItemsApply).then((checkboxs) => {
            for (let i = 0; i < checkboxs.length; i++) {
                cy.get(checkboxs[i]).click()
            }
        })
        cy.get(registrationInformation.question29_ItemsApplyOtherInput).clear().type('Which of the following items apply')
    }

    checkbox1() {
        cy.xpath(registrationInformation.checkbox1).click()
    }

    checkbox2() {
        cy.xpath(registrationInformation.checkbox2).click()
    }

    saveAsDraftBtn() {
        cy.get(registrationInformation.saveAsDraftBtn).eq(2).click()
    }

    submitBtn() {
        cy.get(registrationInformation.submitBtn).click()
    }
    OKConfirmBtn(){
        cy.get(registrationInformation.OKConfirmBtn).eq(3).click()
    }
    registrationInformationSaveDraftFunction(){
        registrationInformationObject.registrationInformationTab()

        registrationInformationObject.question1_RegulatoryCompliance_Yes()
        registrationInformationObject.question2_CSRAwards()
        registrationInformationObject.question3_ManagementTools()

        registrationInformationObject.question4_ChiefDepartmentOtherInput()
        registrationInformationObject.question5_ProfessionalStaffInput()
        registrationInformationObject.question6_NumberOfEmployeesInput()
        registrationInformationObject.question7_ProjectOrProgram()
        registrationInformationObject.question8_HaveYouEstablished_No()
        registrationInformationObject.question9_TitleOfTop()
        registrationInformationObject.question10_WhichAreYour()
        registrationInformationObject.question11_WhatWereThe()
        registrationInformationObject.question12_GivenYourExisting()
        registrationInformationObject.question13_ChallengesAndDifficulties()
        registrationInformationObject.question14_FollowingFactors()
        registrationInformationObject.question15_KeyOpportunities()
        registrationInformationObject.question16_TheSource()
        registrationInformationObject.question17_MostImportantCSR()
        registrationInformationObject.question18_FirmColleagues()
        registrationInformationObject.question19_ReasonsForYourCompany()
        registrationInformationObject.question20_DegreeOfCorrelation()
        registrationInformationObject.question21_YourFirmBoard()
        registrationInformationObject.question22_AnnualBudget()
        registrationInformationObject.question23_CompanyAnnualBudget()
        registrationInformationObject.question24_DescribeTheCommunity()
        registrationInformationObject.question25_CompanyUnderstanding()
        registrationInformationObject.question26_MainChallengesOtherInput()
        registrationInformationObject.question27_OrganizationKey()
        registrationInformationObject.question28_CurrentCorporate()
        registrationInformationObject.question29_ItemsApply()
        registrationInformationObject.checkbox1()
        registrationInformationObject.checkbox2()
        registrationInformationObject.saveAsDraftBtn()
    }

    registrationInformationSubmitFunction(){
        registrationInformationObject.registrationInformationTab()

        registrationInformationObject.question1_RegulatoryCompliance_Yes()
        registrationInformationObject.question2_CSRAwards()
        registrationInformationObject.question3_ManagementTools()

        registrationInformationObject.question4_ChiefDepartmentOtherInput()
        registrationInformationObject.question5_ProfessionalStaffInput()
        registrationInformationObject.question6_NumberOfEmployeesInput()
        registrationInformationObject.question7_ProjectOrProgram()
        registrationInformationObject.question8_HaveYouEstablished_No()
        registrationInformationObject.question9_TitleOfTop()
        registrationInformationObject.question10_WhichAreYour()
        registrationInformationObject.question11_WhatWereThe()
        registrationInformationObject.question12_GivenYourExisting()
        registrationInformationObject.question13_ChallengesAndDifficulties()
        registrationInformationObject.question14_FollowingFactors()
        registrationInformationObject.question15_KeyOpportunities()
        registrationInformationObject.question16_TheSource()
        registrationInformationObject.question17_MostImportantCSR()
        registrationInformationObject.question18_FirmColleagues()
        registrationInformationObject.question19_ReasonsForYourCompany()
        registrationInformationObject.question20_DegreeOfCorrelation()
        registrationInformationObject.question21_YourFirmBoard()
        registrationInformationObject.question22_AnnualBudget()
        registrationInformationObject.question23_CompanyAnnualBudget()
        registrationInformationObject.question24_DescribeTheCommunity()
        registrationInformationObject.question25_CompanyUnderstanding()
        registrationInformationObject.question26_MainChallengesOtherInput()
        registrationInformationObject.question27_OrganizationKey()
        registrationInformationObject.question28_CurrentCorporate()
        registrationInformationObject.question29_ItemsApply()
        registrationInformationObject.checkbox1()
        registrationInformationObject.checkbox2()
        registrationInformationObject.submitBtn()
        registrationInformationObject.OKConfirmBtn()
    }


}

const registrationInformationObject = new RegistrationInformationObject();
export default registrationInformationObject;