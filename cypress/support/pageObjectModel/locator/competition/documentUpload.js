class DocumentUpload {
    documentUploadTab = '.col-span-2'
    authorizationDocumentSampleDownload ='#authorization-document-sample > a'
    registrationDocumentSampleDownload = '#registration-document-sample\\  > a'
    UploadFileBtn = '.ant-upload.ant-upload-select .ant-btn'
    authorizationDocumentSampleUpload ='#formDocUploadBasic_authorization-document'
    registrationDocumentSampleUpload = '#formDocUploadBasic_registration-document'
    waitUploadFileSuccess ='button[title="Download file"]'
    saveAsDraffBtnUploadDocument = '.items-center.mt-8 >button[type="button"]'
    submitBtn = '.items-center.mt-8 >button[type="submit"]'
    messageSuccess = '.ant-notification-notice-icon-success'
    confirmOKBtn = '.ant-modal-confirm-btns>button'


}
const  documentUpload = new DocumentUpload();
export default documentUpload;