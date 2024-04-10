class DocumentUpload {
    documentUploadTab = '.col-span-2'
    authorizationDocumentSampleDownload ='#authorization-document-sample > a'
    registrationDocumentSampleDownload = '#registration-document-sample\\  > a'
    UploadFileBtn = '.ant-upload.ant-upload-select .ant-btn'
    authorizationDocumentSampleUpload ='#formDocUploadBasic_authorization-document'
    registrationDocumentSampleUpload = '#formDocUploadBasic_registration-document'
    saveAsDraffBtnUploadDocument = '.items-center.mt-8 >button[type="button"]'
    submitBtn = '.items-center.mt-8 >button[type="submit"]'
    messageSuccessSubmit = ''


}
const  documentUpload = new DocumentUpload();
export default documentUpload;