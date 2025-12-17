import { contains } from "cypress/types/jquery";
import { keys } from "cypress/types/lodash";

describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://www.easyjet.com/en/register");
    cy.window().clearCookies();
    cy.viewport(1280, 1080)
    //cy.get('#ensCloseBanner').click()
 
  })

  it('should confirm correct url', () => {
    cy.url().should('eq', 'https://www.easyjet.com/en/register')

  })

/*
  it('should accept the confirmation on popup modal', () => {
    //cy.on('window:confirm', () => true)
    cy.get('#ensCloseBanner').click()
    //cy.get('cy.get('').should('exist')
  })
    

  it('should fill registration form', () => {
       //cy.get('#ensCloseBanner').click()
    cy.fillRegistrationForm()
  })
*/

  it('should click forgotten password', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label').click();
    cy.get('form').find('> :nth-child(5) > a').click()
    cy.contains("Please enter the email address you've used when you created your easyJet account. We will then email you a link to reset your password.").should('be.visible');


  })

    it('should click send reset email', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label').click();
    cy.get('form').find('> :nth-child(5) > a').click()
    
    cy.get('#email', { includeShadowDom: true}).click()
    .type('jahangir.ali@easyjet.com')
    cy.press(Cypress.Keyboard.Keys.TAB);
    
    cy.get('#confirmEmail', { includeShadowDom: true})
    .type('jahangir.ali@easyjet.com');
    cy.press(Cypress.Keyboard.Keys.TAB)
    

    //cy.get('button.btn.btn--primary.btn--lg[type="submit"]', { includeShadowDom: true})
    //.type('{enter}');
    //.click({ force: true });
cy.get('button.btn.btn--primary.btn--lg[type="submit"]')
  .focus()
  .type('{enter}', { force: true });

 })

})


