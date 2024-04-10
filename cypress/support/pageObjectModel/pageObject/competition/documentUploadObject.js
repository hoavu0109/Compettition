import documentUpload from "../../locator/competition/documentUpload";

const authorizationDocumentFileData = '../fixtures/competition/uploadDocumentData/validUploadFile/power_of_attorney.docx'

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
        return cy.get(documentUpload.UploadFileBtn).eq(0).click()
    }

    registrationDocument_UploadFileBtn() {
        return cy.get(documentUpload.UploadFileBtn).eq(1).click()
    }

    authorizationDocumentSampleUpload() {
        return cy.get(documentUpload.authorizationDocumentSampleUpload)
    }

    registrationDocumentSampleUpload() {
        return cy.get(documentUpload.registrationDocumentSampleUpload)
    }

    saveAsDraffBtnUploadDocument() {
        return cy.get(documentUpload.saveAsDraffBtnUploadDocument).click()
    }

    submitBtn() {
        return cy.get(documentUpload.submitBtn).click()
    }

    messageSuccessSubmit() {
        return cy.get(documentUpload.messageSuccessSubmit)
    }
    documentUploadSaveAsDraffFunction() {
        documentUploadObject.documentUploadTab()
        documentUploadObject.authorizationDocument_UploadFileBtn().then(() => {
            const authorizationDocumentInput = documentUploadObject.authorizationDocumentSampleUpload();
            authorizationDocumentInput.attachFile(authorizationDocumentFileData)
        }).then(() => {
            documentUploadObject.registrationDocument_UploadFileBtn().then(() => {
                const registrationDocumentInput = documentUploadObject.registrationDocumentSampleUpload();
                registrationDocumentInput.attachFile(authorizationDocumentFileData)
            })
        }).then(() => {
            documentUploadObject.saveAsDraffBtnUploadDocument()
        })

    }

    documentUploadFunction() {
        documentUploadObject.documentUploadTab()
        documentUploadObject.authorizationDocument_UploadFileBtn().then(() => {
            const authorizationDocumentInput = documentUploadObject.authorizationDocumentSampleUpload();
            authorizationDocumentInput.attachFile(authorizationDocumentFileData)
        }).then(() => {
            documentUploadObject.registrationDocument_UploadFileBtn().then(() => {
                const registrationDocumentInput = documentUploadObject.registrationDocumentSampleUpload();
                registrationDocumentInput.attachFile(authorizationDocumentFileData)
            })
        }).then(() => {
            documentUploadObject.submitBtn()
        })

    }
}

const documentUploadObject = new DocumentUploadObject();
export default documentUploadObject;