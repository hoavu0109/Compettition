class CompanyEntryManagementTab{
    // element at list company screen
    companyEntryManagement = '.ant-menu-item.ant-menu-item-only-child > span'
    queryDroplists ='.ant-select-selection-overflow'
    queryCountry ='#rc_select_13'
    pendingStatus = '.ant-select-item.ant-select-item-option[title="Pending"]'
    reviewingStatus = '.ant-select-item.ant-select-item-option[title="Reviewing"]'
    approvedStatus = '.ant-select-item.ant-select-item-option[title="Approved"]'
    rejectedStatus = '.ant-select-item.ant-select-item-option[title="Rejected"]'
    idCompany = '.overflow-hidden.whitespace-nowrap.overflow-ellipsis.px-2'

    // edit screen element - status information
    registrationStatusDroplist ='#editStatusFormBasic_status'
    registration_PendingStatus = '.ant-select-item.ant-select-item-option[title="Pending"]'
    registration_ReviewingStatus = '.ant-select-item.ant-select-item-option[title="Reviewing"]'
    registration_ApprovedStatus = '.ant-select-item.ant-select-item-option[title="Approved"]'
    registration_RejectedStatus = '.ant-select-item.ant-select-item-option[title="Rejected"]'
    paper_PendingStatus = '.ant-select-item-option[title="Pending"]'
    paper_ReviewingStatus = '.ant-select-item-option[title="Reviewing"]'
    paper_ApprovedStatus = '.ant-select-item-option[title="Approved"]'
    paper_RejectedStatus = '.ant-select-item-option[title="Rejected"]'
    saveEditStatusBtn = 'button[form="editStatusForm"]'
    administratorNote ='editStatusFormBasic_admin_note'

    rowOfData ='.ant-table-row.ant-table-row-level-0'
    //Approve Pregistration award Company
    reviewStatusDroplist ="#editStatusFormBasic_status"
    reviewStatusOptions=".ant-select-item-option-content"
    saveReviewBtn = 'button[form="editStatusForm"]'
    messageSuccessApprovedAwardRegistration ='.ant-notification-notice-message'
    messageSuccessApprovedAwardRegistrationText ='Successful'



}
const companyEntryManagementTab = new CompanyEntryManagementTab();
export default companyEntryManagementTab;