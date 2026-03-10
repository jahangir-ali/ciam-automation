
const languages = [
  { name: 'CA',    id: 'fc844c50-5b00-4b48-9c53-f3442d019590', path: 'ca' },
  { name: 'CH-FR', id: '8e7713e6-7963-48a7-9654-51f282776255', path: 'ch-fr' },
  { name: 'CH-DE', id: '52f30ab3-d867-4b2b-a5e9-58653d503053', path: 'ch-de' },
  { name: 'CS',    id: '89a24311-5adb-4ce4-90e4-2fddd02089f9', path: 'cs' },
  { name: 'DA',    id: '74b774bf-e7bc-45b5-9d88-a59dd730b5e8', path: 'da' },
  { name: 'DE',    id: 'd231cba1-e449-4355-89a1-b04a030a19ef', path: 'de' },
  { name: 'EL',    id: '2f61e504-6945-467e-b7d4-691985407979', path: 'el' },
  { name: 'ES',    id: '242d8a63-987d-4866-addc-2be1cdb6d892', path: 'es' },
  { name: 'FR',    id: '622bbfab-817c-456d-854f-907f132f8d8a', path: 'fr' },
  { name: 'HU',    id: 'a87efbd1-2a78-4c4f-b829-10fca1a181db', path: 'hu' },
  { name: 'IL',    id: '0d52ac9e-63fa-4c8b-b851-079248f00f08', path: 'il' },
  { name: 'IT',    id: '71f5fea6-4915-4864-8178-5169cc5848ce', path: 'it' },
  { name: 'NL',    id: '75e22c82-912d-4c7f-9594-c161626f133a', path: 'nl' },
  { name: 'PL',    id: '5f9a1100-2de9-4780-b512-c70a57ea9266', path: 'pl' },
  { name: 'PT',    id: '19c95416-285b-49d7-ba61-50d1dfbcef3b', path: 'pt' },
  { name: 'TR',    id: '2c57b060-4ab3-4a90-a9c2-8035886471df', path: 'tr' },
];

describe('prod Sign In Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.easyjet.com/en/');
    cy.window().clearCookies();
    cy.viewport(1280, 1080);
  });

  it('should confirm correct url', () => {
    cy.url().should('eq', 'https://www.easyjet.com/en/');
  });

  it('should accept the confirmation on popup modal', () => {
    cy.get('#ensAcceptAll').click();
  });

  // LANGUAGE SANITY TESTS IN ALPHABETICAL ORDER
  languages.forEach(({ name, id, path }) => {
    it(`should confirm ${name} language url`, () => {
      cy.get('#ensAcceptAll').click();

      cy.get('.language-selector, .language-selector__button > p')
        .first()
        .click();

      cy.get(`[for="${id}"]`).click();

      cy.get('.language-modal__apply-cta').click();

      cy.url().should('eq', `https://www.easyjet.com/${path}`);
    });
  });
});









