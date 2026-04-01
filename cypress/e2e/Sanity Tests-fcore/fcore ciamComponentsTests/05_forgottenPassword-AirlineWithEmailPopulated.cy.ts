describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://fcore.test.easyjet.com/ciam/components/website/index.html");
    cy.window().clearCookies();
    cy.get("#forgotten-password-airline").click();
  })
  it('should trigger "Forgotten Password Success"', () => {
    cy.fillEmailAddress();
    cy.fillConfirmEmailAddress();
    cy.clickSubmitForgottenPassword();
    
    cy.get('#forgotten-password-success')
    .should('be.checked');
    
  })

  it('should trigger "Forgotten Password Validation Error"', () => {
    //cy.fillEmailAddress();
    //cy.fillConfirmEmailAddress();
    cy.clickSubmitForgottenPassword();
    
    cy.get('#forgotten-password-validation-error').should('be.checked');
    
  })
 it('should trigger "Forgotten Password Validation Error; email not matching"', () => {
    
    cy.fillEmailAddress();
    cy.fillNotMatchingEmail();
    cy.clickSubmitForgottenPassword();
    
    cy.get('#forgotten-password-validation-error').should('be.checked');
    
  })

})