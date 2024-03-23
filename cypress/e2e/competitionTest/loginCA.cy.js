import loginCAObject from "../../support/pageObjectModel/pageObject/competition/loginCAObject";
import {baseUrl_CA} from "../../../cypress.config";

describe('login CA function',()=>{
    // before(()=>{
    // })
    it.only('login CA function ',()=>{
        loginCAObject.loginCAFunction('88809912','Admin123')
    })
})