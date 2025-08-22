import { should } from "chai";

describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://uat2.tc-nonprod.easyjet.com/ciam/website/index.html");
    cy.window().clearCookies();
    cy.get("#login-default").click();
  })
  it('should trigger "Login Success"', () => {
    
    //cy.fillEmailPassword();
    cy.fillEmailPassword();
    cy.fillKeepMeSignedIn();
    cy.clickAirlineSubmit();

    cy.get("#login-form-success").should('be.checked');
  })
it('should trigger "Login Forgotten Password Link Click"', () => {

cy.clickForgottenYourDetailsLink();

cy.get('#login-form-forgotten-password-link-click').should('be.checked');

})

})

