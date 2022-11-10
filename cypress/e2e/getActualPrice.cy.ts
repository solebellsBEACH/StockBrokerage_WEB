describe('Testando a getActualPrice', () => {
    it('Visitando home', () => {
      cy.visit('http://localhost:3000/')
    })
    it('Preenchendo campos', () => {
      //Pegando campos de Login
  
      cy.get('#cypress-GetActualPriceContent-INPUT').type('coca');
      cy.get('#cypress-GetActualPriceContent-SEARCH-BUTTON').click();
      cy.get('[type="radio"]').first().check({force: true})
      cy.get('#cypress-GetActualPriceContent-BUSCAR-ATUAL').click();
    //   cy.get('#cypress-GetActualPriceContent-FECHAR-MODAL').click();
    ;
    });
  })
  
  