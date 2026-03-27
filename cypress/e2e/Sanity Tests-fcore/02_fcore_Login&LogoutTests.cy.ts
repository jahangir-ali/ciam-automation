const locales = ['en'];  
//languages en, fr, de, it, es, nl, pl, ca, cs, da, el, hu, pl, il

locales.forEach((locale) => {

  describe(`registration spec - ${locale}`, () => {

    beforeEach(() => {
      cy.visit(`https://fcore.test.easyjet.com/${locale}/`);
      cy.window().clearCookies();
      cy.viewport(1280, 1080);
    });

    it('should confirm correct url', () => {
      cy.url().should('eq', `https://fcore.test.easyjet.com/${locale}/`);
    });

    it('should accept the confirmation on popup modal', () => {
      cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll');
    });

    it('should trigger "Login to My Account"', () => {
      cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
        .click();

      cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label')
        .click();

      cy.get('#\\34 22a73e2-dc73-44f0-a458-d92da49b8502')
        .type('akuma.ali@gmail.com');

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
        .filter(':contains("My Account")')
        .click();
    });

    it(`Should Login & Logout of account - ${locale}`, () => {
      cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
        .click();

      cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label')
        .click();

      cy.get('#\\34 22a73e2-dc73-44f0-a458-d92da49b8502')
        .type('akuma.ali@gmail.com');

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
        .filter(':contains("Sign Out")')
        .click();
    });

  });

});


