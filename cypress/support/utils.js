Cypress.Commands.add('LoginOutCaptcha', () => {
    cy.visit('/')
    cy.request({
        method: 'POST',
        url: 'https://rcapiv2.duepay.com.br/account/user/login',
        body: {
            "username": "09008581922",
            "document": "45122558000188",
            "password": "556677",
            "rememberMe": true
        }
    }).then((response) => {
        // cy.log(response.body.accessToken)
        localStorage.setItem('token', response.body.accessToken)
        cy.visit('http://localhost:4200/dashboard')
    })
})