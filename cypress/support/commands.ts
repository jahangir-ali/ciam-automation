/// <reference types="cypress" />

import { get } from "cypress/types/lodash";

const withinAirline = (callback: () => void) => {
    cy.get("[variant=airline]").shadow().within(callback);
};

const withinHoliday = (callback: () => void) => {
    cy.get("[variant=holiday]").shadow().within(callback);
};

const withinHolidayBooking = (callback: () => void) => {
    cy.get("[variant=holiday-booking]").shadow().within(callback);
};

const withinAirlineEarlyLogin = (callback: () => void) => {
    cy.get("[variant=airline-early-login]").shadow().within(callback);
};

const withinHolidayInFunnel = (callback: () => void) => {
    cy.get("[variant=holiday-in-funnel]").shadow().within(callback);
};

const withinHolidayOutFunnel = (callback: () => void) => {
    cy.get("[variant=holiday-out-funnel]").shadow().within(callback);
};


/* COMMANDS */

Cypress.Commands.add('fillEmailAddress', () => {
    withinAirline(() => {
        cy.get("#email").type('jahangir.ali@easyjet.com');

    });
})

Cypress.Commands.add('fillConfirmEmailAddress', () => {
    withinAirline(() => {
        cy.get("#confirmEmail").type('jahangir.ali@easyjet.com');

    });
})

Cypress.Commands.add('fillEmailPassword', () => {
    withinAirline(() => {
        cy.get("#email").type('jahangir.ali@easyjet.com');
        cy.get("#password").type('Testing1234567890');

    });
})

Cypress.Commands.add('fillIncorrectPassword', () => {
    withinAirline(() => {
        cy.get("#email").type('jahangir.ali@easyjet.com');
        cy.get("#password").type('Testing12345');

    });
})

Cypress.Commands.add('fillInvalidPassword', () => {
    withinAirline(() => {
        //cy.get("#email").type('jahangir.ali@easyjet.com');
        cy.get("#password").type('%TGB^YHN5tgb6yhn');

    });
})

Cypress.Commands.add('fillConfirmEmailPassword', () => {
    withinAirline(() => {
        //cy.get("#email").type('jahangir.ali@easyjet.com');
        //cy.get("#password").type('Password123!');   
        cy.get("#confirmPassword").type('Password123!')

    });
})

Cypress.Commands.add('fillKeepMeSignedIn', () => {
    withinAirline(() => {
        cy.get('#keepMeSignedIn').click();

    });
})


Cypress.Commands.add('clickSubmit', () => {
    withinHolidayBooking(() => {
        cy.get('button[type="submit"]').click();

    })
});

Cypress.Commands.add('fillRegistrationForm', () => {
    withinAirline(() => {
        cy.get('#title').click();
        cy.get('#title-option-0').click();
        cy.get("#firstName").type("John");
        cy.get("#lastName").type("Smith");
        cy.get("#address").type("99 Park St");
        cy.get("#addressContinued").type("Apt 2");
        cy.get("#city").type("London");
        cy.get("#postcode").type("W1K 7HA");
        cy.get("#country").type("United Kingdom");
        cy.get('#country-option-0').click();
        cy.get("#mobilePhoneNumber").type("7979429732");
        cy.get('.button.button--primary.airline-form__submit-button').click();
    });
});

Cypress.Commands.add('clickSubmitForgottenPassword', () => {
    withinAirline(() => {
        cy.get('button[type="submit"]').click();
    })
});

Cypress.Commands.add('clickCancel', () => {
    withinHoliday(() => {
        cy.get('[aria-label="Cancel"]').click();
    })
});

Cypress.Commands.add('fillHolidayLoginEmail', ()=> {
    withinHolidayBooking(() => {
        cy.get('#email').type('jahangir.ali@easyjet.com');
    })
});

Cypress.Commands.add('clickCancelHoliday', () => {
    withinHoliday(() => {
        cy.get('[aria-label="Cancel"]').click();
    })
});

Cypress.Commands.add('clickConfirmHoliday', () => {
    withinHoliday(() => {
        cy.get('[aria-label="Confirm"]').click();
    })
});


Cypress.Commands.add('fillEarlyEmail', () => {
    withinAirlineEarlyLogin(() => {
        cy.get('#email')
        .type('jahangir.ali@easyjet.com');
    })
});

Cypress.Commands.add('fillEarlyPassword', () => {
    withinAirlineEarlyLogin(() => {
        cy.get('#password')
        .type('Testing1234567890');
    })
});

Cypress.Commands.add('clickEarlySignIn', () => {
    withinAirlineEarlyLogin(() => {
        cy.get('[aria-label="Sign in"]')
        .click();
    })
});

Cypress.Commands.add('clickEarlyKeepMeSignedIn', () => {
    withinAirlineEarlyLogin(() => {
        cy.get('#keepMeSignedIn')
        .click();
    })
});


Cypress.Commands.add('clickHolidayInFunnelCancel', () => {
    withinHolidayInFunnel(() => {
        cy.get('[aria-label="Cancel"]')
        .click();
    })
});

Cypress.Commands.add('clickHolidayInFunnelSubmit', () => {
    withinHolidayInFunnel(() => {
        cy.get('[aria-label="Confirm"]')
        .click();
    })
});

Cypress.Commands.add('clickHolidayOutFunnelCancel', () => {
    withinHolidayOutFunnel(() => {
        cy.get('[aria-label="Cancel"]')
        .click();
    })
});

Cypress.Commands.add('fillHolidayOutFunnelEmail', () => {
    withinHolidayOutFunnel(() => {
        cy.get('#email')
        .type('jahangir.ali@easyjet.com');
    })
});