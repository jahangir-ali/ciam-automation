describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://preprod2.test.easyjet.com/en");
    cy.window().clearCookies();
    cy.viewport(1280, 1080)
    cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
    .click()
  })

  it('should confirm correct url', () => {
    cy.url().should('eq', 'https://preprod2.test.easyjet.com/en')
    

  })

it('should click on Sign In', () => {
  cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
  .click()

  })

it.only('should click on Sign In and login', () => {
  cy.get('[data-testid="desktop-header-main-menu-test-id"] .sign-in-button')
  .click()

  cy.get('#\\34 22a73e2-dc73-44f0-a458-d92da49b8502')
  .type('akuma.ali+pt@gmail.com{enter}')
  

  cy.get('#6838ac1e-0be0-4b4e-b676-5cd0c04fe41e')
  .type('Testing1234567890{enter}')

  cy.get('[data-testid="dropdown-menu-button"] > span')
  .should('exist')
  .and('be.visible')

  })

  
//cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label')

/*
  it('should accept the confirmation on popup modal', () => {
    cy.on('window:confirm', () => true)
    

  })

  it('should display MFA Text', () => {
    cy.verifyMFAText();
  })

  it.only('should display MFA authenticate title', () => {
    cy.verifyMFAauthenticateTitle();
  })

  */

})


