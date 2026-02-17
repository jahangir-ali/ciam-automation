import { should } from "chai";

describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://uat2.tc-nonprod.easyjet.com/ciam/website/index.html");
    cy.window().clearCookies();
    cy.get("#early-login").click();
  })

  it('should trigger field validation', () => {
        
    cy.clickEarlySignIn();

   // cy.get('#keepMeSignedIn')
   // .should('not.be.checked');

    //cy.get('[data-testid="error-message"]')
    //.should('contain', 'Password');
  })



  it('should trigger "Login Success"', () => {
    
    cy.fillEarlyEmail();
    cy.fillEarlyPassword();
    cy.clickEarlySignIn();
    cy.clickEarlyKeepMeSignedIn();

   // cy.get('#keepMeSignedIn')
   // .should('be.checked');
    
    cy.get("#login-form-success")
    .should('be.checked');
  })
})


