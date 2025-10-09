describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://uat2.tc-nonprod.easyjet.com/ciam/website/index.html");
    cy.window().clearCookies();
    cy.viewport(1280, 1920)
    cy.get("#registration-form").click();
  })
  it('should trigger "Registration Validation Error"', () => {
    cy.fillEmailPassword();
    cy.fillConfirmEmailPassword();
    cy.fillRegistrationForm();

    cy.get('#registration-form-validation-error')
      .should('be.checked');

  })


  it('should trigger "common/ easily guessable password"', () => {
    cy.fillInvalidCommonPassword();
    cy.clickRegisterNowButton();

    cy.get('#registration-form-validation-error')
      .should('be.checked');
  })

  it('should display MFA Text', () => {
    cy.verifyMFAText();
  })

  it('should display MFA authenticate title', () => {
    cy.verifyMFAauthenticateTitle();
  })

  

})


