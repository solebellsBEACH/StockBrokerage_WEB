describe('Testando a getHistoryPrice', () => {
    it('Visitando home', () => {
      cy.visit('http://localhost:3000/')
    })
    it('Preenchendo campos', () => {
      //Pegando campos de Login
  
      cy.get('#cypress-GetHistoryPrice-INPUT').type('coca');
      cy.get('#cypress-GetHistoryPrice-SEARCH-BUTTON').click();
      cy.get('[type="radio"]').first().check({force: true})
      cy.get('#cypress-GetHistoryPrice-MODE-BUTTON0').click();
      cy.get('#cypress-GetHistoryPrice-CLOSE-BUTTON').wait(2000).click();
      cy.get('#cypress-GetHistoryPrice-MODE-BUTTON1').click();
      cy.get('#cypress-GetHistoryPrice-CLOSE-BUTTON').wait(2000).click();
      cy.get('#cypress-GetHistoryPrice-MODE-BUTTON2').click();
      cy.get('#cypress-GetHistoryPrice-CLOSE-BUTTON').wait(2000).click();
    //   cy.get('#cypress-GetActualPriceContent-FECHAR-MODAL').click();
    ;
    });
  })
  
  