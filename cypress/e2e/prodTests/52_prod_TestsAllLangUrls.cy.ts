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

  /*
it.only('should display email field error', () => {
  cy.get('#ensCloseBanner').click() 

  cy.wait(400)

  cy.fillEmailField();
  //cy.get('#email')
    //.type('test.com')

    cy.press(Cypress.Keyboard.Keys.TAB)

    cy.get('.field-error__content-message')
    .should('exist')
    .and('be.visible')

  })
*/


it('should accept the confirmation on popup modal', () => {
    //cy.on('window:confirm', () => true)
cy.get('#ensCloseBanner').click()
    //cy.get('cy.get('').should('exist')
  })
    
/*
it('should fill registration form', () => {
       //cy.get('#ensCloseBanner').click()
cy.fillRegistrationForm()
  })
*/

it('should click forgotten password', () => {
    cy.get('#ensCloseBanner')
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
/*
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

it('should open and close sign in modal', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('[data-testid="desktop-header-main-menu-test-id"] > .header-main-menu__right-section > .sign-in-button-wrapper > .sign-in-button > .sign-in-button__label').click();
    
    cy.get('.account-modals__close-icon')
    .click();

    cy.get('.main-menu-list > .header-main-menu__logo > img')
    .click()

    cy.get('#ensCloseBanner')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/en')

  })

  it('should open Manage Bookings Sign In modal', () => {
    cy.get('#ensCloseBanner').click()
    cy.get(':nth-child(2) > .header-top-bar__item > p')
    .click()

  })

*/

/////// LANGUAGE SANITY TESTS IN ALPHABETICAL ORDER////////////////

it('should confirm CA language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //CA
    cy.get('[for="fc844c50-5b00-4b48-9c53-f3442d019590"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/ca')
})


it('should confirm CH-FR Swiss language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //CH-FR Swiss
    cy.get('[for="8e7713e6-7963-48a7-9654-51f282776255"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/ch-fr')
})


it('should confirm CH-DE Swiss language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //CH-DE Swiss
    cy.get('[for="52f30ab3-d867-4b2b-a5e9-58653d503053"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/ch-de')
})


it('should confirm CS language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //CS
    cy.get('[for="89a24311-5adb-4ce4-90e4-2fddd02089f9"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/cs')
})


it('should confirm DA language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //DA
    cy.get('[for="74b774bf-e7bc-45b5-9d88-a59dd730b5e8"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/da')
})


it('should confirm DE language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //DE
    cy.get('[for="d231cba1-e449-4355-89a1-b04a030a19ef"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/de')
})


it('should confirm EL language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //EL
    cy.get('[for="2f61e504-6945-467e-b7d4-691985407979"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/el')
})


it('should confirm ES language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //ES
    cy.get('[for="242d8a63-987d-4866-addc-2be1cdb6d892"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/es')
})


 it('should confirm FR language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //FR
    cy.get('[for="622bbfab-817c-456d-854f-907f132f8d8a"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/fr')
})



it('should confirm HU language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //HU
    cy.get('[for="a87efbd1-2a78-4c4f-b829-10fca1a181db"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/hu')
})


it('should confirm IL language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //IL
    cy.get('[for="0d52ac9e-63fa-4c8b-b851-079248f00f08"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/il')
})


it('should confirm IT language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //IT
    cy.get('[for="71f5fea6-4915-4864-8178-5169cc5848ce"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/it')
}) 


it('should confirm NL language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //NL
    cy.get('[for="75e22c82-912d-4c7f-9594-c161626f133a"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/nl')
})



it('should confirm PL language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //PL
    cy.get('[for="5f9a1100-2de9-4780-b512-c70a57ea9266"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/pl')
})

it('should confirm PT language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //PT
    cy.get('[for="19c95416-285b-49d7-ba61-50d1dfbcef3b"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/pt')
})

it('should confirm TR language url', () => {
    cy.get('#ensCloseBanner').click()
    cy.get('.language-selector')
    .click()

    //TR
    cy.get('[for="2c57b060-4ab3-4a90-a9c2-8035886471df"]')
    .click()

    cy.get('.modal__cta-group > .btn--primary')
    .click()

    cy.url()
    .should('eq', 'https://www.easyjet.com/tr')
})



/*
/////////////////////////////////End Of Languages //////////////

it.only('should click Show Flights button', () => {
  
  cy.visit("https://www.easyjet.com/en");

  cy.get('#ensCloseBanner').click()
   
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
*/

})














