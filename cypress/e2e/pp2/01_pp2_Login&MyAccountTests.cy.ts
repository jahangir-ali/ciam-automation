const locales = ['ca',  ]; // 'es', 'pt', 'fr'

locales.forEach((locale) => {

  describe(`registration spec - ${locale}`, () => {

    beforeEach(() => {
      cy.visit(`https://preprod2.test.easyjet.com/${locale}/`);
      cy.window().clearCookies();
      cy.viewport(1280, 1080);
    });

    it('should confirm correct base url', () => {
      cy.url().should('eq', `https://preprod2.test.easyjet.com/${locale}/`);
    });

    it('should "Login to My Account" and go to personal details', () => {
      // Accept cookies
      cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
        .click();

      // Open sign in modal
      cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button')
        .click();

      // Enter credentials
      cy.get('#\\34 22a73e2-dc73-44f0-a458-d92da49b8502')
        .type('jahangir.ali@easyjet.com');

      cy.get('#\\36 838ac1e-0be0-4b4e-b676-5cd0c04fe41e')
        .type('Testing1234567890');

      cy.get('#KEEP_ME_SIGNED_IN_CHECKED_ID')
        .click();

      // Submit login
      cy.get('.account-modal__cta')
        .click();

      // Open account dropdown
      cy.get('[data-testid="dropdown-menu-button"] > span')
        .should('exist')
        .click();

      // Click "My Account" (second item)
      cy.get('[data-testid="dropdown-menu-link"]')
        .eq(1)
        .click();

      // Accept cookies again if banner reappears
      cy.get('body').then(($body) => {
        if ($body.find('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll').length) {
          cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll').click();
        }
      });

      // Go to personal details tile
      cy.get('[href="/en/my-account/personal-details"] > .desktop-tile__header-cointainer > div > .desktop-tile__header')
        .click();
    });

    it('should show correct url and email address on personal details', () => {
      // Repeat or reuse the same navigation (in real code, extract to a custom command)
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
        .eq(1)
        .click();

      cy.get('body').then(($body) => {
        if ($body.find('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll').length) {
          cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll').click();
        }
      });

      cy.get('[href="/en/my-account/personal-details"] > .desktop-tile__header-cointainer > div > .desktop-tile__header')
        .click();

      // Assertions
      cy.url().should('eq', `https://preprod2.test.easyjet.com/${locale}/my-account/personal-details`);

     // cy.get(':nth-child(2) > [data-testid="details-item__value"]')
       // .should('have.value', 'jahangir.ali@easyjet.com');
    });

  });

});