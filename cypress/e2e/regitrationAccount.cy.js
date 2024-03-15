describe('Check registration account follow',()=>{
    beforeEach(()=>{
        cy.visit('https://competition.azure-uat.senecaesg.com/login')
    })
    it.only('click sign up',()=>{
        cy.get('button[type="button"]').eq(1).click()
    // Input and verify data into registration screen
        cy.get('.ant-space-item').contains('Register')
        cy.get('#basic').should('exist')
        cy.get('.title.text-base.font-normal').eq(0).contains('Registration certificate')
        cy.get('.ant-upload button').click();


    })
})