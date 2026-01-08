describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://uat2.tc-nonprod.easyjet.com/ciam/website/index.html");
    cy.window().clearCookies();
    cy.get("#registration-form").click();
  })
  it('should trigger "Registration Validation Error"', () => {
    cy.fillEmailPassword();
    cy.fillConfirmEmailPassword();
    cy.fillRegistrationForm();
    
    cy.get('#registration-form-validation-error')
    .should('be.checked');

  })

})

