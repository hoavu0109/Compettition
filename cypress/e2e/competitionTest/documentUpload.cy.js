import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";
import documentUploadObject from "../../support/pageObjectModel/pageObject/competition/documentUploadObject";
import exportRegisAcctData from "../../fixtures/competition/registrationAcctData/exportRegisAcctData.json"
describe('Check Upload Document Tab',()=>{
    beforeEach(()=>{
        loginCAObject.loginCAFunction(exportRegisAcctData.corporateCode,exportRegisAcctData.corporateCode)
    })
    it('check save as draft Document Upload',()=>{
        documentUploadObject.documentUploadSaveAsDraffFunction();
    })
    it('check submit success Document Upload',()=>{
        documentUploadObject.documentUploadFunction();
    })
})