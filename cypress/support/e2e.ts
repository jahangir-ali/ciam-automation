// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
    fillEmailAddress(): Chainable<any>;
    fillConfirmEmailAddress(): Chainable<any>;
    fillRegistrationForm(): Chainable<any>;
    fillIncorrectPassword(): Chainable<any>;
    fillInvalidPassword(): Chainable<any>;
    fillEmailPassword(): Chainable<any>;
    fillConfirmEmailPassword():Chainable<any>;
    fillKeepMeSignedIn(): Chainable<any>;
    clickSubmit(): Chainable<any>;
    clickSubmitForgottenPassword(): Chainable<any>;
    clickCancel(): Chainable<any>;
    fillHolidayLoginEmail(): Chainable<any>;
    clickCancelHoliday(): Chainable<any>;
    clickConfirmHoliday(): Chainable<any>;
    fillEarlyEmail(): Chainable<any>;
    fillEarlyPassword(): Chainable<any>;
    clickEarlySignIn(): Chainable<any>;
    clickEarlyKeepMeSignedIn(): Chainable<any>;
    clickHolidayInFunnelCancel(): Chainable<any>
    clickHolidayInFunnelSubmit(): Chainable<any>
    clickHolidayOutFunnelCancel(): Chainable<any>
    }
  }
}