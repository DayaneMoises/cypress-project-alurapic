describe('Login de usuário na alurapic', () =>{
    
    beforeEach(() => {
        cy.visit('/')

    //     cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login',{
    //         statusCode: 400
    //     }).as('stubPost')
    })

    it('Verificar login de usuário válido', () =>{
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        // cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible')
        
    })

    it('Verificar login de usuário inválido', () =>{
        cy.login('dayane', 1234)
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
})