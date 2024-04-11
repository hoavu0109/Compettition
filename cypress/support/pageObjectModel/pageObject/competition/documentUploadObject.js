import documentUpload from "../../locator/competition/documentUpload";

const authorizationDocumentFileData = '../fixtures/competition/uploadDocumentData/validUploadFile/self-evaluation-form.pdf'

class DocumentUploadObject {
    documentUploadTab() {
        return cy.get(documentUpload.documentUploadTab).eq(3).click()
    }

    authorizationDocumentSampleDownload() {
        return cy.get(documentUpload.authorizationDocumentSampleDownload).click()
    }

    registrationDocumentSampleDownload() {
        return cy.get(documentUpload.registrationDocumentSampleDownload).click()
    }

    authorizationDocument_UploadFileBtn() {
        return cy.get(documentUpload.UploadFileBtn).eq(0).click({force: true})
    }

    registrationDocument_UploadFileBtn() {
        return cy.get(documentUpload.UploadFileBtn).eq(1).click({force: true})
    }

    authorizationDocumentSampleUpload() {
        return cy.get(documentUpload.authorizationDocumentSampleUpload)
    }

    registrationDocumentSampleUpload() {
        return cy.get(documentUpload.registrationDocumentSampleUpload)
    }
    waitUploadFileSuccessFile1(){
        return cy.get(documentUpload.waitUploadFileSuccess).eq(0).should('be.visible')
    }
    waitUploadFileSuccessFile2(){
        return cy.get(documentUpload.waitUploadFileSuccess).eq(1).should('be.visible')
    }

    saveAsDraffBtnUploadDocument() {
        return cy.get(documentUpload.saveAsDraffBtnUploadDocument).click()
    }


    submitBtn() {
        return cy.get(documentUpload.submitBtn).click()
    }

    messageSuccess() {
        return cy.get(documentUpload.messageSuccess).should('be.visible')
    }
    confirmOKBtn(){
        return cy.get(documentUpload.confirmOKBtn).eq(1).click()
    }
    documentUploadSaveAsDraffFunction() {
        documentUploadObject.documentUploadTab()
        documentUploadObject.authorizationDocument_UploadFileBtn().then(() => {
            const authorizationDocumentInput = documentUploadObject.authorizationDocumentSampleUpload();
            authorizationDocumentInput.attachFile(authorizationDocumentFileData)
            cy.wait(1000)
            documentUploadObject.waitUploadFileSuccessFile1()
        })
        documentUploadObject.registrationDocument_UploadFileBtn()
        const registrationDocumentInput = documentUploadObject.registrationDocumentSampleUpload();
        registrationDocumentInput.attachFile(authorizationDocumentFileData).then(()=>{
            cy.wait(1000)
            documentUploadObject.waitUploadFileSuccessFile2()
        })
        documentUploadObject.saveAsDraffBtnUploadDocument().then(()=>{
            documentUploadObject.messageSuccess()
        })
    }

    documentUploadFunction() {
        documentUploadObject.documentUploadTab()
        documentUploadObject.authorizationDocument_UploadFileBtn().then(() => {
            const authorizationDocumentInput = documentUploadObject.authorizationDocumentSampleUpload();
            authorizationDocumentInput.attachFile(authorizationDocumentFileData)
            cy.wait(1000)
            documentUploadObject.waitUploadFileSuccessFile1()
        })
        documentUploadObject.registrationDocument_UploadFileBtn()
        const registrationDocumentInput = documentUploadObject.registrationDocumentSampleUpload();
        registrationDocumentInput.attachFile(authorizationDocumentFileData).then(()=>{
            cy.wait(1000)
            documentUploadObject.waitUploadFileSuccessFile2()
        })
        documentUploadObject.submitBtn().then(()=>{
            documentUploadObject.confirmOKBtn().then(()=>{
                documentUploadObject.messageSuccess()
            })
        })
    }
}

const documentUploadObject = new DocumentUploadObject();
export default documentUploadObject;