describe('mfa tests', () => {
  beforeEach(() => {
    cy.visit("https://uat2.tc-nonprod.easyjet.com/en/register");
    cy.window().clearCookies();
    cy.viewport(1280, 1080)
    //cy.get('#ensCloseBanner').click()
    cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
    .click()
  
  })


  it('should check MFA exists in IT', () => {
    cy.visit('https://uat2.tc-nonprod.easyjet.com/it/register')
    cy.url()
    .should('eq', 'https://uat2.tc-nonprod.easyjet.com/it/register')
    
    cy.get('[data-testid="information-modal"]')
    .should('be.visible'); 

  })


})


