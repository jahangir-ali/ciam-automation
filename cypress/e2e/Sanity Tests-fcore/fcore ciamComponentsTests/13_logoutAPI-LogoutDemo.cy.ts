describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://fcore.test.easyjet.com/ciam/components/website/index.html");
    cy.window().clearCookies();
    cy.get("#registration-form").click();
  })

  it('should trigger "Logout Success" Simple', () => {
    

    cy.get('#logout-demo')
      .click()

    cy.get('button[onclick="simpleLogout()"]')
      .click()

    cy.get('#logout-success')
      .should('be.checked');

  })

  it('should trigger "Logout Success" With Options', () => {
    

    cy.get('#logout-demo')
      .click()

    cy.get('button[onclick="logoutWithOptions()"]')
      .click()

    cy.get('#logout-success')
      .should('be.checked');

  })

 it('should trigger "Logout Error"', () => {
    

    cy.get('#logout-demo')
      .click()

    cy.get('#logout-api-url')
      .type('test')
    
    cy.get('button[onclick="logoutWithOptions()"]')
      .click()

    cy.get('#logout-error')
      .should('be.checked');

  })


})

