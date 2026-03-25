describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://uat2.tc-nonprod.easyjet.com/en/register");
    cy.window().clearCookies();
    cy.viewport(1280, 1080)
    cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll').click()
  })

  it('should confirm correct url', () => {
    cy.url().should('eq', 'https://uat2.tc-nonprod.easyjet.com/en/register')



  })


  it('should accept the confirmation on popup modal', () => {
    cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
  })

  it('should confirm International dialling code', () => {
    
    cy.clickIntDiallingCode()

})


})


