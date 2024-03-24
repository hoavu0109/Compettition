class CompanyEntryManagementTab{
    companyEntryManagement = '.ant-menu-item.ant-menu-item-only-child'
    queryDroplists ='.ant-select-selection-overflow'
    queryCountry ='#rc_select_13'
    pendingStatus = '.ant-select-item.ant-select-item-option[title="Pending"]'
    reviewingStatus = '.ant-select-item.ant-select-item-option[title="Reviewing"]'
    approvedStatus = '.ant-select-item.ant-select-item-option[title="Approved"]'
    rejectedStatus = '.ant-select-item.ant-select-item-option[title="Rejected"]'
    idCompany = '.overflow-hidden.whitespace-nowrap.overflow-ellipsis.px-2'



}
const companyEntryManagementTab = new CompanyEntryManagementTab();
export default companyEntryManagementTab;