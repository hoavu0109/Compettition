class BusinessListTab{
    businessTab = '.ant-menu-item.ant-menu-item-only-child'
    emailSearch ='input[placeholder="Enter Uniform number, Company title, email, etc."]'
    searchAndClearBtn ='.items-center .ant-btn.css-10gg4to.ant-btn-default'
    rowOfData ='.ant-table-row.ant-table-row-level-0'

    //Edit Participated Company
    reviewStatusDroplist ="#editStatusFormBasic_status"
    reviewStatusOptions=".ant-select-item-option-content"
    saveReviewBtn = 'button[form="editStatusForm"]'

    //change password
    password ='input[placeholder="Enter Password"]'
    passwordConfirmation ='input[placeholder="Enter Password Confirmation"]'
    confirmChangePasswordBtn ='button[form="resetPasswordForm"]'
}
const  businessListTab = new BusinessListTab();
export  default businessListTab;