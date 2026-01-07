describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://preprod2.test.easyjet.com/en/register");
    cy.window().clearCookies();
    cy.viewport(1280, 1080)
    
  })

  it('should confirm correct url', () => {
    cy.url().should('eq', 'https://preprod2.test.easyjet.com/en/register')
    

  })


  it('should accept the confirmation on popup modal', () => {
    cy.on('window:confirm', () => true)
    

  })

  it.only('should display MFA Text', () => {
    cy.verifyMFAText();

    cy.get('.info-box')
    .should('contain', 'When you register for an account, Multi-Factor (MFA) will be automatically enabled')
  })

  it('should display MFA authenticate title', () => {
    cy.verifyMFAauthenticateTitle();
  })

  

})


