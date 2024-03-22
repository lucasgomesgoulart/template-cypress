import { faker } from "@faker-js/faker";
const fakerBr = require('faker-br');
const dayjs = require('dayjs')

Cypress.Commands.add('cadastro', () => {
    cy.get('nav > :nth-child(3)').click();
    cy.url().should('eq', 'http://localhost:4200/cadastros/beneficiarios');
    cy.get('.add-button').click()


    cy.get('[data-cy="select-document-type"]').select('CPF')
    //cpf
    cy.get('[data-cy="cpf-bnf"]').type(fakerBr.br.cpf())
    // cy.get(':nth-child(1) > :nth-child(2) > .textbox-input').type('123')

    //nome
    cy.get('[data-cy="name-bnf"]').type(faker.person.firstName())

    //agencia
    cy.get('[data-cy="agency-bnf"]').type(faker.finance.accountNumber())

    cy.get('[data-cy="account-number-bnf"]').type(faker.finance.accountNumber(8))

    cy.get('#mat-input-0').click()
    cy.get('#mat-option-0').click()

    cy.get('[data-cy="description-bnf"]').type(faker.lorem.sentence())

    // cy.get('span.mdc-button__label').contains('Criar Beneficiário').click();
    cy.get('[data-cy="div-btns"]').find('button').eq(1).click();

    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()

    // cy.get(':nth-child(2) > .cell-options > .wrap-options > :nth-child(2) > .mat-mdc-button-touch-target').click()
    // cy.get('.swal2-confirm').click()
    // cy.get('.swal2-confirm').click()

});
