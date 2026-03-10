const languages = ['en', 'it'];

describe('prod Sign In Tests', () => {

  languages.forEach((lang) => {

    it(`SignIn Login - ${lang.toUpperCase()}`, () => {

      cy.visit(`https://www.easyjet.com/${lang}`);

      cy.window().clearCookies();
      cy.viewport(1280, 1080);

      cy.get('#ensAcceptAll').click();

        cy.get(':nth-child(3) > .header-top-bar__item > p')
      //cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button')
        .click();

      cy.get('#\\34 22a73e2-dc73-44f0-a458-d92da49b8502')
        .type('akuma.ali+10a@gmail.com');

      cy.get('#\\36 838ac1e-0be0-4b4e-b676-5cd0c04fe41e')
        .type('Testing1234567890');

      cy.get('#KEEP_ME_SIGNED_IN_CHECKED_ID')
        .click();

      cy.get('.account-modal__cta')
        .click();

      // language-specific assertions can go here
    });
  });
});