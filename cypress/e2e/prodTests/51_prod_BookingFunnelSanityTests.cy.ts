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

/* it('should display email field error', () => {
  cy.get('#ensCloseBanner').click() 

   
  cy.fillEmailField();
  //cy.get('#email')
    //.type('test.com')

    cy.press(Cypress.Keyboard.Keys.TAB)

    cy.get('.field-error__content-message')
    .should('exist')
    .and('be.visible')

  })
*/

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
    cy.get('#ensAcceptAll')
    .click()
    
    cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label')
    .click();
    
    cy.get('form')
    .find('> :nth-child(5) > a')
    .click()
    
    cy.contains("Please enter the email address you've used when you created your easyJet account. We will then email you a link to reset your password.")
    .should('be.visible');


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
    cy.get('#ensAcceptAll').click()
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
    cy.get('#ensAcceptAll').click()
    cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label').click();

    //switches to FindBooking tab
    cy.get('#react-tabs-4').click();

    cy.get('#FIND_BOOKING_CHECKBOX_DATA_ID')
    .check()
    .should('be.checked');

  })

  it('should attempt to login with expired booking', () => {
    cy.get('#ensAcceptAll').click()
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
    cy.get('#ensAcceptAll').click()
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

it('should open and close sign in modal', () => {
    cy.get('#ensAcceptAll').click()
    cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label').click();
    
    cy.get('.account-modals__close-icon')
    .click();

    cy.get('.main-menu-list > .header-main-menu__logo > img')
    .click()

    cy.get('#ensAcceptAll')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/en')

  })

  it('should open Manage Bookings Sign In modal', () => {
    cy.get('#ensAcceptAll').click()
    cy.get(':nth-child(2) > .header-top-bar__item > p')
    .click()

  })


it('should click Show Flights button', () => {
  
  cy.visit("https://www.easyjet.com/en");

  cy.get('#ensAcceptAll').click()
   
  cy.get('[data-testid="to"]')
    .type('EDI{enter}')

    cy.get('[data-testid="airport-label"]')
  .click()

cy.get('[data-testid="when"]')
.click()

  cy.get('[data-testid="30-1-2026"]')
  .click()

  cy.get('.SearchPod_buttonInnerContent__KMLdD')
  .click()

//Step 2 - Pick Flights
cy.wait(5000)

cy.get('[data-cy="lowestFareLabel"] > .PromoInfo_promoInfo__zqn_h > .PromoInfo_promoLabel__Rw0Ly')
.click()

cy.get('[data-cy="basket-continue-button"]')
.click()


//bundles page 
cy.get('[data-cy="bundle-layout__Light"] > .BundleLayout_a11CtaButton__hTzir')
.click()

cy.url()
.should('eq', 'https://www.easyjet.com/en/buy/flights?isOneWay=on')

//passenger-details page
cy.get('#title-dropdown-adult-1')
.select(1)

cy.url()
.should('eq', 'https://www.easyjet.com/en/buy/passenger-details')

cy.get('#firstname-textbox-adult-1')
.type('Joe{enter}')

cy.get('#lastname-textbox-adult-1')
.type('Bloggs{enter}')

cy.get('#age-dropdown-adult-1')
.select(1)

cy.get('.funnel-basket-transition-section > .button-container > .rounded-corners')
.click()

//seats page
cy.url()
.should('eq', 'https://www.easyjet.com/en/buy/seats')

cy.get('.button-container > .ej-link-button')
.click()

//cabin-bags page
cy.url()
.should('eq', 'https://www.easyjet.com/en/buy/cabin-bags/')

cy.get('[data-testid="basket-cta__skip-button"]')
.click()

//bags page
//cy.get('.ej-button rounded-corners continue-button disabled-basket ng-hide')
cy.url()
.should('eq','https://www.easyjet.com/en/buy/bags')

cy.get('.button-container > .ej-link-button')
.click()

//car-rental
cy.url()
.should('eq', 'https://www.easyjet.com/en/buy/car-rental')

cy.get('.button-container > .ej-link-button')
.click()
//cy.get('.button-container > .ej-link-button')

//add-ons
//cy.get('.Button_button__JnZ4E Button_plainLarge__qP8GH')
cy.url()
.should('eq', 'https://www.easyjet.com/en/buy/add-ons/')

cy.get('[data-testid="basket-cta__skip-button"]')
. click()

//checkout
cy.url()
.should('eq', 'https://www.easyjet.com/en/buy/checkout')


cy.get('#fullpage-sign-in-email')
.should('be.visible')

cy.get('#fullpage-sign-in-email')
.should('be.visible')

cy.get('#fullpage-signin-login')
.should('be.visible')

cy.get('.forgotten-password-link')
.should('be.visible')

cy.get('#fullpage-keep-me-signed-in-checkbox')
.should('be.visible')

cy.get('#sign-up-button')
.should('be.visible')

cy.get('#sign-up-button')
.click()

})


})














