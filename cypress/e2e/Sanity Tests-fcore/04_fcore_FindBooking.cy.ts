const languages = ['en'];
// , 'es', 'pt',

function runForgottenPasswordFlow(lang) {
  cy.visit(`https://fcore.test.easyjet.com/${lang}`);
  cy.clearCookies();
  cy.viewport(1280, 1080);

  cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll').click();

  cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button')
    .click();

  //cy.get('form > :nth-child(5) > a').click();

  cy.get('#react-tabs-0')
  .click();

    cy.get('#e06e8463-b891-4fd6-af95-a5fd3d881b3f')
   // cy.get('[input id="e06e8463-b891-4fd6-af95-a5fd3d881b3f]"')
    .type('test')

    cy.press(Cypress.Keyboard.Keys.TAB)
  
   //cy.get('[value name="028aaaf0-fa09-45db-ab06-21a55646609c"]')
    .type('EL1234567');  

    cy.get('#FIND_BOOKING_CHECKBOX_DATA_ID')
    .click();  

    cy.get('.account-modal__cta')
    .click();

}

describe('registration spec', () => {

  languages.forEach((lang) => {
    it(`should send Forgotten Password email (${lang})`, () => {
      runForgottenPasswordFlow(lang);
    });
  });

});








