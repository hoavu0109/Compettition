
class AdminManagement{
    administratorManagementTab = '.ant-menu-item.ant-menu-item-only-child'
    addNewAdminBtn ='.justify-end > button[type="button"]'
    adminGroupDroplist = '#addAdminFormBasic_adminGroup'
    adminGroupOptions = '.ant-select-item-option-content'
    accountInput = '#addAdminFormBasic_administratorAccount'
    emailInput ='#addAdminFormBasic_administratorEmail'
    nameInput = '#addAdminFormBasic_administratorName'
    passwordInput ='#addAdminFormBasic_password'
    confirmPasswordInput = '#addAdminFormBasic_confirmPassword'
    saveBtn = 'button[form="addAdminForm"]'
    messageSuccess ='.ant-notification-notice-message'
    messageSuccessText = 'Successful'

    iconBtn ='.ant-btn-icon-only'
    resetPassword ='#password'
    resetPasswordConfirm = '#confirmPassword'
    resetSaveBtn ='[form="resetPasswordForm"]'

    editAdminGroup ='.ant-select-selection-item-remove'
    editName ='#editInfoAdminFormBasic_administratorName'
    editSaveBtn ='[form="editInfoAdminForm"]'

}
const adminManagement = new AdminManagement;
export  default adminManagement












































