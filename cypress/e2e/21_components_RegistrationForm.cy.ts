describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://uat2.tc-nonprod.easyjet.com/ciam/components/website/index.html?");
    cy.window().clearCookies();
    cy.viewport(1280, 1080)
    
  })

  it('should confirm correct url', () => {
    cy.url().should('eq', 'https://uat2.tc-nonprod.easyjet.com/ciam/components/website/index.html?')
    

  })


  it('should accept the confirmation on popup modal', () => {
    cy.on('window:confirm', () => true)
    

  })

it('should display MFA authenticate title', () => {
    
    cy.get('#registration-form')
    .click()

cy.verifyMFAauthenticateTitle();

    cy.get('#component-airline > h3')
    .should('be.visible')
    .contains('Registration Form Component')

  })

  it('should display MFA Text', () => {
    
    cy.get('#registration-form')
    .click()
    
    cy.verifyMFAText();

  })

  

  

})


