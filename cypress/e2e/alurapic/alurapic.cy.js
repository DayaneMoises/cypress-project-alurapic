describe('Login e registro de usuário alurapic', () =>{
    
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/')
    })

    it('Verificar mensagens de validação', () =>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('Verificar mensagem de email inválido', () =>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('Test');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('Verificar mensagem de senha com menos de 8 caracteres', () =>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('Verificar mensagem de nome de usíario maiúsculo', () =>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('TEST');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('Verificar login de usuário válido', () =>{
        cy.login('flarvio', '123')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('Verificar login de usuário inválido', () =>{
        cy.login('dayane', 1234)
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

    const usuarios = require ('../../fixtures/usuarios.json')
    usuarios.forEach(usuario => {

        it.only(`Registrar novo usuario ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
    });
    //Cypress.Commands.add('registra', (email, fullName, userName, password) => {
        
})