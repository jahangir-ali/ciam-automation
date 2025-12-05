describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://www.easyjet.com/en/register");
    cy.window().clearCookies();
    cy.viewport(1280, 1080)
    
  })

  it('should confirm correct url', () => {
    cy.url().should('eq', 'https://www.easyjet.com/en/register')
    

  })


  it('should accept the confirmation on popup modal', () => {
    //cy.on('window:confirm', () => true)
    cy.get('#ensCloseBanner').click()
    //cy.get('cy.get('').should('exist')

  })
/*
  it('should display MFA Text', () => {
    cy.verifyMFAText();
  })

  it('should display MFA authenticate title', () => {
    cy.verifyMFAauthenticateTitle();
  })

 */ 

})


