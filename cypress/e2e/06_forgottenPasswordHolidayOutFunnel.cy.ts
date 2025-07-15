describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://uat2.tc-nonprod.easyjet.com/ciam/website/index.html");
    cy.window().clearCookies();
    cy.get("#forgotten-password-holiday-out-funnel").click();
  })


  it('should trigger "Forgotten Password Cancel Button Click"', () => {
    
    cy.clickHolidayOutFunnelCancel();
    
    cy.get('#forgotten-password-cancel-button').should('be.checked');
    
  })

})