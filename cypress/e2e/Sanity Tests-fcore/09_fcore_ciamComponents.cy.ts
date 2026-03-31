describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://fcore.test.easyjet.com/ciam/components/website/index.html");
    
    cy.window().clearCookies();
    cy.viewport(1280, 1080)
   
  })

  it('should confirm correct url', () => {
    cy.url().should('eq', 'https://fcore.test.easyjet.com/ciam/components/website/index.html')



  })

  /*

  it('should accept the confirmation on popup modal', () => {
    cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
  })

*/



})


