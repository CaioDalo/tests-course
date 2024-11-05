describe('Login tests', () => {
  it('Should go to dashboard when clicking in login button', () => {
    cy.visit('/')

    cy.intercept('GET', 'http://localhost:3000/pokemon', {fixture: 'pokemon.json'})

    cy.contains('Login').click()
    cy.contains('Dashboard')
  })

  it('Should contain a pokemon called Pikachu', () => {
    cy.visit('/')

    cy.intercept('GET', 'http://localhost:3000/pokemon', {fixture: 'pokemon.json'})

    cy.contains('Login').click()
    cy.contains('Dashboard')
    cy.contains('Pikachu')
  })

  it('Should go to sign up when clicking in the sign up link text', () => {
    cy.visit('/')

    cy.contains('Não tem cadastro? Clique aqui').click()
    cy.contains('Sign Up')
  })

  it('Should the button have 10px of margin top', () => {
    cy.visit('/')

    cy.get('div').find('button').should('have.css', 'marginTop').and('match', /10px/)
  })
})