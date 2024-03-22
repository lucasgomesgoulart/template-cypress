describe('Fluxo',()=>{
    it('Cadastro beneficiário',()=>{
        cy.LoginOutCaptcha()
        cy.cadastro()
    })
})