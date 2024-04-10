class BusinessListTab{
    businessTab = '.ant-menu-item.ant-menu-item-only-child'
    emailSearch ='.ant-input.css-1fpjgd5.w-full.h-10'
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