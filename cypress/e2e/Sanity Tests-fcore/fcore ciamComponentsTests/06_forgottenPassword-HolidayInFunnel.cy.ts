describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://fcore.test.easyjet.com/ciam/components/website/index.html");
    cy.window().clearCookies();
    cy.get("#forgotten-password-holiday-in-funnel").click();
  })


  it('should trigger "Forgotten Password Cancel Button Click"', () => {
    
    cy.clickHolidayInFunnelCancel();
    
    cy.get('#forgotten-password-cancel-button').should('be.checked');
    
  })

  it('should trigger "Forgotten Password Success"', () => {
    
    cy.clickHolidayInFunnelSubmit();
    
    cy.get('#forgotten-password-success').should('be.checked');
    
  })

})