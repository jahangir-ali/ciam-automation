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

  it('should display MFA Text', () => {
    cy.verifyMFAText();
  })

  it.only('should display MFA authenticate title', () => {
    cy.verifyMFAauthenticateTitle();
  })

  

})


