describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://uat2.tc-nonprod.easyjet.com/ciam/website/index.html");
    cy.window().clearCookies();
    cy.get("#holiday-booking-flow-login").click();
  })

 /*
  it('should trigger "login Continue Without Sign In"', () => {
    
      cy.fillHolidayLoginEmail();

      cy.clickHolidayInFunnelLoginContinue().click();
    cy.get('#continueWithoutSignIn-[object Object]')
    .should('exist');
    
  })

  */
 it('should trigger "Login Continue without Sign In"', () => {
    
      cy.fillHolidayLoginNoAccountEmail();

      cy.clickHolidayInFunnelLoginContinue()
      
      
      

      cy.get('#login-form-email-not-found')
      .should('be.checked');
    
  })
})