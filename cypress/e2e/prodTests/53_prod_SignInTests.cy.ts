import { contains } from "cypress/types/jquery";
import { keys } from "cypress/types/lodash";

describe('prod Sign In Tests', () => {
  beforeEach(() => {
    cy.visit("https://www.easyjet.com/en/register");
    cy.window().clearCookies();
    cy.viewport(1280, 1080)
    //cy.get('#ensCloseBanner').click()
 
  })

  it('should confirm correct url', () => {
    cy.url().should('eq', 'https://www.easyjet.com/en/register')

  })

it('should display email field error', () => {
  cy.get('#ensAcceptAll').click() 

  cy.wait(400)

  //cy.fillEmailField();
  cy.get('.sign-in-button__label')
    //.type('test.com')

  cy.press(Cypress.Keyboard.Keys.TAB)
/*
  cy.get('.field-error__content-message')
    .should('exist')
    .and('be.visible')
*/
  })


it('SignIn Invalid Login', () => {
  cy.get('#ensAcceptAll').click()
  cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button')
  .click() 


})


})