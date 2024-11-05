describe('Dashboard tests', () => {
  it("Should have a list with 10 pokemons", () => {
    cy.visit('/dashboard')

    cy.intercept("GET", 'http://localhost:3000/pokemon', {fixture: 'pokemon.json'})

    cy.get('li').should('have.length', 10)
    cy.contains('Pikachu')
    cy.contains('Charmander')
    cy.contains('Rotom')
  })

  it("Should have open a page with pokemon detail", () => {
    cy.visit('/dashboard')

    cy.intercept("GET", 'http://localhost:3000/pokemon', {fixture: 'pokemon.json'})

    cy.intercept("GET", 'http://localhost:3000/pokemon/1', {fixture: 'pokemon-detail.json'})

    cy.contains('Mewtwo').click()
    cy.contains('Voltar')
  })

  it("Should go back to dashboard when clicking in the back button", () => {
    cy.visit('/dashboard')

    cy.intercept("GET", 'http://localhost:3000/pokemon', {fixture: 'pokemon.json'})

    cy.intercept("GET", 'http://localhost:3000/pokemon/1', {fixture: 'pokemon-detail.json'})

    cy.contains('Mewtwo').click()
    cy.contains('Voltar').click()
    cy.get('li').should('have.length', 10)
  })

  it('Should have grid display', () => {
    cy.visit('/dashboard')

    cy.get('div').find('ul').should('have.css', 'display').and('match', /grid/)
  })

  it("Should have a list with 10 pokemons with LIs", () => {
    cy.visit('/dashboard')

    cy.intercept("GET", 'http://localhost:3000/pokemon', {fixture: 'pokemon.json'})

    cy.get('div').find('li').should($li => {
      expect($li).to.have.length(10)

      const pikachu = $li[0]

      expect(pikachu.textContent).contains('Pikachu')
    })
  })
})