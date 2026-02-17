import { should } from "chai";

describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://preprod2.test.easyjet.com/en/");
    cy.window().clearCookies();
    cy.viewport(1280, 1080)
     cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
    .click()
  })

it('should send Forgotten Password email', () => {
    cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button')
    .click();

    cy.get('form > :nth-child(5) > a')
    .click();

  cy.get('.shadow-root-trap')
  .shadow()
  .find('#email')
  .type('jahangir.ali@easyjet.com')

   cy.get('.shadow-root-trap')
  .shadow()
  .find('#confirmEmail')
  .type('jahangir.ali@easyjet.com');

  cy.get('.shadow-root-trap')
  .shadow()
  .find('button[type="submit"]')
  .click();

  cy.get('.shadow-root-trap')
  .shadow()
  cy.get('.account-modal__cta')
  .click();


  
  })

})