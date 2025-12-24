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

 it.only('should display email field error', () => {
  cy.get('#ensCloseBanner').click() 
   
  cy.get('#email')
    .type('test.com')

    cy.press(Cypress.Keyboard.Keys.TAB)

    cy.get('.field-error__content-message')
    .should('exist')
    .and('be.visible')

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
/*
    it('should click send reset email', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label').click();
    cy.get('form').find('> :nth-child(5) > a').click()
    
    cy.get('#email', { includeShadowDom: true}).click()
    .type('jahangir.ali@easyjet.com')
    cy.press(Cypress.Keyboard.Keys.TAB);
    
    cy.get('#confirmEmail', { includeShadowDom: true})
    .type('jahangir.ali@easyjet.com');
    
    cy.get('#confirmEmail', { includeShadowDom: true})
    .type('{enter}', { force: true })
  
    cy.get('.modal__content > .btn').click();
   

 })
*/

 it('should verify Find Booking errors are displayed', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label').click();
        
    //switches to FindBooking tab
    cy.get('#react-tabs-4').click();

    cy.get('#react-tabs-5 > form > .btn').click();

    cy.get(':nth-child(2) > .field-error > .field-error__message')
    .should('have.text', 'Please enter the surname of one of your passengers')

    cy.get(':nth-child(3) > .field-error > .field-error__message')
    .should('have.text', 'Please enter a valid booking reference to find your booking') 

    cy.get('.inline-error__message')
    .should('have.text', 'You must confirm that you have permission to manage this booking to proceed') 

 })

it('should tick the check box in Find Booking', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label').click();

    //switches to FindBooking tab
    cy.get('#react-tabs-4').click();

    cy.get('#FIND_BOOKING_CHECKBOX_DATA_ID')
    .check()
    .should('be.checked');

  })

  it('should attempt to login with expired booking', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label').click();

    //switches to FindBooking tab
    cy.get('#react-tabs-4')
    .click();

    cy.get('#e06e8463-b891-4fd6-af95-a5fd3d881b3f')
   .click() 
    //Inserts Surname
    .type('WPS');

    //Inserts booking reference
    cy.get('#028aaaf0-fa09-45db-ab06-21a55646609c')
    .type('kb6hb23')

    cy.get('#FIND_BOOKING_CHECKBOX_DATA_ID')
    .check()
    .should('be.checked');

    //Clicks Find Booking button
    cy.get('#react-tabs-5 > form > .btn')
    .click();
    
  })


 it('should attempt to login with incorrect password', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label').click();

    //email
    cy.get('#422a73e2-dc73-44f0-a458-d92da49b8502')
    .type('jahangir.ali@easyjet.com')

    //pswd
    cy.get('#6838ac1e-0be0-4b4e-b676-5cd0c04fe41e')
    .type('Testing123456789')

    //clicksubmit
    cy.get('#react-tabs-7 > form > .btn')
    .click();
})

it('should login successfully', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label').click();
     
})

})


