class RegistrationAccount {
    signUpBtn = 'button[type="button"]'
    registerHeader = '.ant-space-item'
    basicInformationForm = '#basic'
    groupRegistrationAcctName = '.ant-collapse-header-text'
    arrowViewIcon = '.anticon.anticon-right.ant-collapse-arrow'
    NTDcurrencyOptions = '.ant-select-item.ant-select-item-option[title="NTD"]'
    USDcurrencyOptions = '.ant-select-item.ant-select-item-option[title="USD"]'

    listTextBase = '.title.text-base.font-normal'
    uploadFileBtn = '.ant-upload button'
    businessRegistrationCertificate = '#basic_businessRegistrationCertificate'
    enterAbbreviationParticipating1 = '#basic_participatingUnitChineseName'
    enterAbbreviationParticipating2 = '#basic_participatingUnitEnglishName'
    enterLegalEntity = '#basic_legalEntity'
    enterCorporateName = '#basic_corporateNameAbbr'
    enterCorporateCode = '#basic_corporateCode'
    enterManagingDirector1 = '#basic_chineseName'
    enterManagingDirector2 = '#basic_englishName'
    enterAddressPostCode1 = '#basic_addressFormInput1'
    enterAddress1 = '#basic_addressFormInput2'
    enterAddressPostCode2 = '#basic_addressEnglishFormInput1'
    enterAddress2 = '#basic_addressEnglishFormInput2'

    enterContactDivision = '#basic_contactDivision'
    enterDesignation = '#basic_designation'
    enterContactPerson1 = '#basic_contactPersonChineseName'
    enterContactPerson2 = '#basic_contactPersonEnglishName'
    enterPhone = '#basic_contactPersonPhone'
    enterFax = '#basic_contactPersonFax'
    enterMailingAddress1 = '#basic_mailingAddressInput1'
    enterMailingAddress2 = '#basic_mailingAddressInput2'
    enterEmail = '#basic_contactPersonEmail'
    enterCopyEmail1 = '#basic_copyEmailDefault>input'
    enterCopyEmail2 = '#basic_copyEmail_0_email>input'

    orgImageFileInput = '#basic_orgImageFile'
    radioEntityNationalityTaiwan = '.ant-radio-input[value ="TAIWAN"]'
    radioEntityNationalityForeign = '.ant-radio-input[value ="FOREIGN"]'
    radioEntityNationalityForeignOptions = '#basic_corNationality'
    radioEntityNationalityForeignOptionsValue = '.ant-select-item-option-content'
    radioWhetherPublishReportYes = '.ant-radio-input[value="true"]'
    radioWhetherPublishReportNo = '.ant-radio-input[value="false"]'
    yearIncorporated = '#basic_yearIncorporated'
    listingSituation_ListedPublicly = '.ant-radio-input[value="listedPublicly"]'
    listingSituation_OTC = '.ant-radio-input[value="OTC"]'
    listingSituation_NotListed = '.ant-radio-input[value="notListed"]'
    enterStock = '#basic_stock'
    organizationType = '#basic_orgType'
    organizationType_Companies = '.ant-select-item.ant-select-item-option[title="Companies"]'
    organizationType_Universities = '.ant-select-item.ant-select-item-option[title="Universities"]'
    organizationType_GovernmentAgencies = '.ant-select-item.ant-select-item-option[title="Government Agencies"]'
    organizationType_Hospitals = '.ant-select-item.ant-select-item-option[title="Hospitals"]'
    organizationType_NGOs = '.ant-select-item.ant-select-item-option[title="NGOs"]'
    organizationType_Others = '.ant-select-item.ant-select-item-option[title="Others"]'
    sizeOfOperation = '#basic_sizeOfOperation'
    SizeOfOperation_LargeEnterprise = '.ant-select-item.ant-select-item-option[title="Large Enterprise"]'
    sizeOfOperation_SmallAndMedium = '.ant-select-item.ant-select-item-option[title="Small and Medium Enterprise"]'
    sizeOfOperation_MultinationalEnterprise = '.ant-select-item.ant-select-item-option[title="Multinational Enterprise"]'
    industry = '#basic_industry'
    industry_Agriculture = '.ant-select-item.ant-select-item-option[title="Agriculture, forestry, fishery, animal husbandry"]'
    industry_MiningAndEarth = '.ant-select-item.ant-select-item-option[title="Mining and earth and stone extraction industry"]'
    industry_TraditionalManufacturing = '.ant-select-item.ant-select-item-option[title="Traditional manufacturing"]'
    industry_ElectronicComponentManufacturing = '.ant-select-item.ant-select-item-option[title="Electronic component manufacturing"]'
    industry_Computer = '.ant-select-item.ant-select-item-option[title="Computer, electronic products and optical products manufacturing industry"]'
    industry_ElectricityAndGas = '.ant-select-item.ant-select-item-option[title="Electricity and gas supply industry"]'
    industry_WaterSupply = '.ant-select-item.ant-select-item-option[title="Water supply and pollution control industry"]'
    industry_ConstructionIndustry = '.ant-select-item.ant-select-item-option[title="Construction industry"]'
    industry_WholesaleAndRetail = '.ant-select-item.ant-select-item-option[title="Wholesale and retail trade"]'
    industry_TransportationAndWarehouse = '.ant-select-item.ant-select-item-option[title="Transportation and warehouse industry"]'
    GRICategory = '#basic_gRICategory'
    GRICategory_Agriculture = '.ant-select-item.ant-select-item-option[title="Agriculture"]'
    GRICategory_Automotive = '.ant-select-item.ant-select-item-option[title="Automotive"]'
    GRICategory_Aviation = '.ant-select-item.ant-select-item-option[title="Aviation"]'
    GRICategory_Chemicals = '.ant-select-item.ant-select-item-option[title="Chemicals"]'
    GRICategory_CommercialServices = '.ant-select-item.ant-select-item-option[title="Commercial Services"]'
    GRICategory_Computers = '.ant-select-item.ant-select-item-option[title="Computers"]'
    GRICategory_Conglomerates = '.ant-select-item.ant-select-item-option[title="Conglomerates"]'
    GRICategory_Construction = '.ant-select-item.ant-select-item-option[title="Construction"]'
    GRICategory_ConstructionMaterials = '.ant-select-item.ant-select-item-option[title="Construction Materials"]'
    GRICategory_ConsumerDurables = '.ant-select-item.ant-select-item-option[title="Consumer Durables"]'
    capitalization1 = '#basic_capitalizationFormInput1'
    capitalization2 = '#basic_capitalizationFormInput2'
    chairmanOfTheBoard1 = '#basic_chairmanOfTheBoardFormChineseName'
    chairmanOfTheBoar2 = '#basic_chairmanOfTheBoardFormEnglishName'
    generalManagerName1 = '#basic_generalManagerNameFormChineseName'
    generalManagerName2 = '#basic_generalManagerNameFormEnglishName'
    employeeDistributionMale = '#basic_employeeDistributionFormMale'
    employeeDistributionFemale = '#basic_employeeDistributionFormFemale'
    fullTimeEmployees = '#basic_fullTimeEmployees'
    partTimeEmployees = '#basic_partTimeEmployees'
    employeesWithDisabilities = '#basic_employeesDisabilities'
    organizationOfficialWebsite = '#basic_orgOfficialWebsite'
    corporateCSRWebsite1 = '#basic_corporateCSRWebsite'
    taiwanCorporateWebsite = '#basic_taiwanCorporateWebsiteEnglish'
    corporateCSRWebsite2 = '#basic_corporateWebsiteEnglish'
    companyDescriptionChina = '#basic_companyDescriptionChinese'
    companyDescriptionEnglish = '#basic_companyDescriptionEnglish'

    revenueGovernmentBudgetDroplist = '#basic_revenues_y2032_revenueOrGovernmentBudgetFormInput1'
    revenueGovernmentBudgetRevenues = '#basic_revenues_y2032_revenueOrGovernmentBudgetFormInput2'
    globalRevenueDroplist = '#basic_revenues_y2032_globalRevenueFormInput1'
    globalRevenueGlobal = '#basic_revenues_y2032_globalRevenueFormInput2'
    enterpriseIncomeTaxDroplist = '#basic_revenues_y2032_enterpriseIncomeTaxFormInput1'
    enterpriseIncomeTax = '#basic_revenues_y2032_enterpriseIncomeTaxFormInput2'
    taiwanMarketValueDroplist = '#basic_revenues_y2032_taiwanMarketValueFormInput1'
    taiwanMarketValueMarket = '#basic_revenues_y2032_taiwanMarketValueFormInput2'
    EPSValueDroplist = '#basic_revenues_y2032_epsValueFormInput1'
    EPSValueEPS = '#basic_revenues_y2032_epsValueFormInput2'
    foreignOwnershipRatioPercent = '#basic_revenues_y2032_foreignOwnershipRatio'
    annualCSRReportTitlesChinese = '#basic_revenues_y2032_annualCSRReportTitleChinese'
    annualCSRReportTitlesEnglish = '#basic_revenues_y2032_annualCSRReportTitleEnglish'
    supplementaryExplanationRevenue = '#basic_supplementary'
    currentYearFirstSeasonEPSDroplist = '#basic_currentYearFirstSeasonEPSFormInput1'
    currentYearFirstSeasonEPSFirst = '#basic_currentYearFirstSeasonEPSFormInput2'
    currentYearSecondSeasonEPSDroplist = '#basic_currentYearSecondSeasonEPSFormInput1'
    currentYearSecondSeasonEPSSeason = '#basic_currentYearSecondSeasonEPSFormInput2'
    affiliatedEntityName = '#basic_affiliated_entity_name'
    affiliatedEntityEditor = '#basic_affiliated_entity_editor'
    iAgreeCheckbox = '.ant-checkbox-input[type="checkbox"]'
    completeBtn = 'button[type="submit"]'

    registerHeaderText = 'Member Registration'
    basicInformation = 'Basic Information'
    registrationCertificate = 'Registration certificate'
    abbreviationOfTheParticipatingUnit = 'Abbreviation of the participating unit (used for award promotion, mainly within 6 characters)'
    legalEntity = 'Legal Entity'
    theFullEnglishTitle = 'The Full English Title Of The Participating Unit'
    corporateCode = 'Corporate Code'
    managingDirector = 'Managing Director'
    address = 'Address'
    addressEnglish = 'Address (English)'
    contactPersonGroup = 'Contact Person'
    contactDivision = 'Contact Division'
    designation = 'Designation'
    contactPerson = 'Contact Person'
    phone = 'Phone'
    mailingAddress = 'Mailing Address'
    email = 'Email'
    copyEmail = 'Copy Email'
    unitInformation = 'Unit Information'
    organizationLogo = 'Organization’s “LOGO Image File”'
    entityNationality = 'Entity Nationality'
    yearIncorporat = 'Year Incorporated'
    listingSituationInTaiwan = 'Listing Situation in Taiwan'
    stock = 'Stock'
    organizationTyp = 'Organization Type'
    sizeOfOpera = 'Size of Operation'
    industr = 'Industry'
    GRICate = 'GRI Category'
}

const registrationAccount = new RegistrationAccount();
export default registrationAccount;