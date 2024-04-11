import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";
import documentUploadObject from "../../support/pageObjectModel/pageObject/competition/documentUploadObject";
describe('Check Upload Document Tab',()=>{
    beforeEach(()=>{
        loginCAObject.loginCAFunction('92055559','92055559')
    })
    it('check save as draft Document Upload',()=>{
        documentUploadObject.documentUploadSaveAsDraffFunction();
    })
    it('check submit success Document Upload',()=>{
        documentUploadObject.documentUploadFunction();
    })
})