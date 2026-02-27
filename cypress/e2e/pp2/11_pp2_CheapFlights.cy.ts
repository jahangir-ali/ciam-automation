describe('cheap flights', () => {
  beforeEach(() => {
    cy.visit("https://preprod2.test.easyjet.com/en/cheap-flights");
    cy.window().clearCookies();
    cy.viewport(1280, 1080)
    
  })

  it('should confirm correct url', () => {
    cy.url().should('eq', 'https://preprod2.test.easyjet.com/en/cheap-flights')



  })


  it('should accept the confirmation on popup modal', () => {
    cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
    .click();
  })

 
  it('should login to Cheap Flights', () => {
      cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
        .click();

      cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button')
        .click();

      cy.get('#\\34 22a73e2-dc73-44f0-a458-d92da49b8502')
        .type('jahangir.ali@easyjet.com');

      cy.get('#\\36 838ac1e-0be0-4b4e-b676-5cd0c04fe41e')
        .type('Testing123456789');
 
      cy.get('#react-tabs-7 > form > .btn')
      .click();

   })

})


