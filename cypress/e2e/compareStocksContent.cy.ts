describe('Testando a CompareStocks', () => {
  it('Visitando home', () => {
    cy.visit('http://localhost:3000/')
  })
  it('Preenchendo campos', () => {
    //Pegando campos de Login

    cy.get('#cypress-CompareStocksContent-INPUT').type('V');
    cy.get('li').first().click();
    cy.get('#cypress-CompareStocksContent-INPUT').type('VALE');
    cy.get('li').first().click();
    cy.get('#cypress-CompareStocksContent-INPUT').type('VAL');
    cy.get('li').first().click();
    cy.get('#cypress-CompareStocksContent-BUTTON').click();


    ;
  });
})

