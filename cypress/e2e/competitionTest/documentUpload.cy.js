import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";
import documentUploadObject from "../../support/pageObjectModel/pageObject/competition/documentUploadObject";
describe('Check Upload Document Tab',()=>{
    beforeEach(()=>{
        loginCAObject.loginCAFunction('42026051','42026051')
    })
    it('check save as draft Document Upload',()=>{
        // documentUploadObject.documentUploadSaveAsDraffFunction();
    })
    it('check submit Document Upload',()=>{
        documentUploadObject.documentUploadFunction();
    })
})