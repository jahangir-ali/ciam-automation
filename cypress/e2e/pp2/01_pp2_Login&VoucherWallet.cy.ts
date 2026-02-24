const locales = ['en' ];  
// 'es', 'pt' ,'fr'
locales.forEach((locale) => {

  describe(`registration spec - ${locale}`, () => {

    beforeEach(() => {
      cy.visit(`https://preprod2.test.easyjet.com/${locale}/`);
      cy.window().clearCookies();
      cy.viewport(1280, 1080);
    });

    it('should confirm correct url', () => {
      cy.url().should('eq', `https://preprod2.test.easyjet.com/${locale}/`);
    });

    it('should accept the confirmation on popup modal', () => {
      cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
      .click();
    });

    it('should trigger "Login to Voucher Wallet"', () => {
      cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
        .click();

      cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button')
        .click();

      cy.get('#\\34 22a73e2-dc73-44f0-a458-d92da49b8502')
        .type('jahangir.ali@easyjet.com');

      cy.get('#\\36 838ac1e-0be0-4b4e-b676-5cd0c04fe41e')
        .type('Testing1234567890');

      cy.get('#KEEP_ME_SIGNED_IN_CHECKED_ID')
        .click();

      cy.get('.account-modal__cta')
        .click();

      cy.get('[data-testid="dropdown-menu-button"] > span')
        .should('exist')
        .click();

      cy.get('[data-testid="dropdown-menu-link"]')
        .eq(6)      
        .click();

    it('should confirm correct url', () => {
      cy.url().should('include', '/my-account/voucher-wallet?');
      
    });    

    

    });

      it('should click View Bookings', () => {
      cy.get('[data-testid="dropdown-menu-link"]')
        .eq(0)      
        .click();

      cy.url().should('include', '/my-bookings?');
      
    });   

  });

});