describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://fcore.test.easyjet.com/ciam/components/website/index.html");
    cy.window().clearCookies();
    cy.get("#registration-form").click();
  })
  it('should trigger "Reset Password Generic Error"', () => {
    

    cy.get('#reset-password-default')
      .click()

    cy.get('#reset-password-generic-error')
      .should('be.checked');

  })

})

