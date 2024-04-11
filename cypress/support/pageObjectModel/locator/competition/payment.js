class Payment{
    paymentTab = '.col-span-2'
    paymentDetailScreen = '.ant-modal-content'

    // create payment order
    addPaymentBtn = '.items-center button[type="button"]'
    allAwardCheckBox ='//input[@class =\'ant-checkbox-input\'and @type="checkbox"]'
    awardEnableCheckbox ='//input[@class =\'ant-checkbox-input\'and @type="checkbox" and not(@disabled)]'
    paymentMethodDroplist ='.ant-select-selector'
    uploadRemittanceMethodOption ='.ant-select-item.ant-select-item-option'
    onlinePaymentMethodOption = '.ant-select-item.ant-select-item-option'
    uniformNumbers = '#basic_uniform_number'
    inputPaymentFile ='#basic_uploadPaymentFile'
    uploadPaymentFileBtn = '.ant-upload button[type="button"]'
    waitUploadFileSuccess ='button[title="Download file"]'
    submitAddPaymentRequest ='.items-center button[type="submit"]'
    cancelAddPaymentRequest ='.items-center button[type="button"]' //index 2
    messageSuccessAddPaymentOrder ='.ant-notification-notice-icon-success'

    // create refund order
    submitRefundRequestBtn ='.items-center button[type="button"]'
    type2Note = '#basic_note'



}
const payment = new Payment();
export  default payment;