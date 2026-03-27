describe('registration spec', () => {
  beforeEach(() => {
    cy.visit("https://fcore.test.easyjet.com/en/register");
    cy.window().clearCookies();
    cy.viewport(1280, 1080)
    cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll').click()
  })

  it('should confirm correct url', () => {
    cy.url().should('eq', 'https://fcore.test.easyjet.com/en/register')



  })


  it('should accept the confirmation on popup modal', () => {
    cy.get('#ensNotifyBannerInner > .ensButtons > #ensAcceptAll')
  })



 it('should create a new account', () => {
    
    cy.fillRegistrationForm()

})

  it('should confirm International dialling code', () => {
    
    cy.clickIntDiallingCode()

})

it.only('should check all fields for validations', () =>{

  cy.clickAirlineSubmit()

  cy.get('data-testid="error-message"]')
  .should('be.visible')

})


})


