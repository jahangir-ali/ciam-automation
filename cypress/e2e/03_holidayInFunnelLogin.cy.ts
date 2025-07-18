describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://uat2.tc-nonprod.easyjet.com/ciam/website/index.html");
    cy.window().clearCookies();
    cy.get("#holiday-booking-flow-login").click();
  })


  it('should trigger "login Continue Without Sign In"', () => {
    
      cy.fillHolidayLoginEmail();

      cy.clickHolidayInFunnelLoginContinue().click();
    
    
  })

})