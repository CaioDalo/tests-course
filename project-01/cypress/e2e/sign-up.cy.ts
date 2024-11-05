describe('Sign up page tests', () => {
  it('Should go to login when click on "Já tem cadastro? Clique aqui', () => {
    cy.visit('/sign-up')
    cy.contains('Já tem cadastro? Clique aqui').click()
    cy.contains('Login')
  })

  it('Should the button have 10px of margin top', () => {
    cy.visit('/sign-up')

    cy.get('div').find('button').should('have.css', 'marginTop').and('match', /10px/)
  })
})