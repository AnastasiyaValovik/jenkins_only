// ***********************************************************
// This example support/index.js is processed and
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
import {variables} from "./pageObjects/variables";
import {authorization, registration} from "./pageObjects/authorizationRegistration";
import {openPage} from "./pageObjects/pagesAndMenu";
import {cartAndOrders} from "./pageObjects/cartAndOrders";
import {account} from "./pageObjects/user_account";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


Cypress.Commands.add('getIframeBody', () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
        .get('#klarna-checkout-iframe')
        .its('0.contentDocument.body').should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then(cy.wrap)
})

Cypress.Commands.add('klarnaCheckoutForUnregisteredUser', () => {
    cy.getIframeBody().find('#billing-email').should('exist').clear().type(variables.emailValid) //.should('contain', variables.email)
    cy.getIframeBody().find('#billing-postal_code').should('exist').type(variables.postalCode) //.should('contain', variables.postalCode)
    cy.getIframeBody().find('#button-primary').should('contain', 'Weiter').click()
    cy.getIframeBody().find('#billing-title').select('Herr')
    cy.getIframeBody().find('#billing-given_name').type(variables.unregisteredName)
    cy.getIframeBody().find('#billing-family_name').type(variables.unregisteresSurName)
    cy.getIframeBody().find('#billing-street_address').type(variables.billingAdress)
    cy.getIframeBody().find('#billing-date_of_birth').type(variables.dateOfBirth)
    cy.getIframeBody().find('#button-primary').should('contain', 'Weiter').click()

    cy.getIframeBody().find('#preview').should('exist')
    cy.getIframeBody().find('#preview__link-paragraph').should('exist')
    cy.getIframeBody().find('#preview__title').should('contain', variables.unregisteredName, variables.unregisteresSurName)
    //cy.getIframeBody().find('#preview__line__0').should('contain.', variables.billingAdress, variables.postalCode, variables.city)

    cy.getIframeBody().find('#SHIPMO-container').should('exist')
    //cy.getIframeBody().find('#additional_checkbox_from_merchant__root').should('exist')

    cy.getIframeBody().find('#radio-vorkasse').click()

    cy.getIframeBody().find('button[data-cid="button.buy_button"]').click()
    cy.wait(2000)
})


Cypress.Commands.add('klarnaCheckoutForRegisteredUserWithAddress', () => {
    cy.getIframeBody().find('#billing-fieldset').should('exist')
    cy.getIframeBody().find('#billing-family_name').should('have.prop', 'defaultValue', variables.validSurnameWithSubs)
    cy.getIframeBody().find('#billing-given_name').should('have.prop', 'defaultValue', variables.validNameWithSubs)
    cy.getIframeBody().find('#billing-street_address').should('have.prop', 'defaultValue', 'Zinnowitzer Str. 59')

    //Pariser Platz 6 Theodor Tucher, 10117, Berlin
    //cy.getIframeBody().find('#SHIPMO-container').should('exist')
    //cy.getIframeBody().find('#additional_checkbox_from_merchant__root').should('exist')
    cy.getIframeBody().find('#button-primary').click()
    cy.wait(2000)
    cy.getIframeBody().find('#button-primary').click()
    cy.getIframeBody().find('#radio-vorkasse').click()

    cy.getIframeBody().find('[data-cid="button.buy_button"]').click()
})



Cypress.Commands.add('compareSumPriceMagentoKlarna', (sumPrice) => {
    cy.getIframeBody().find('#shopping-cart-item__amounts-view__1__group__0__right').should('contain.text', sumPrice)
})

Cypress.Commands.add('comparePrecesInKlarnaWithPercense', (fractionNumber) => {
    cy.get('[class="page-wrapper mf-initial"]').find('[class="block items-in-cart"]').click({force:true})
    cy.get('[class="subtotal"]').then(text => {
        let price = text.text()
        price = price.replace(/[\s,0.%€]/g, '')
        let salePrice = price - (price * fractionNumber)
        cy.getIframeBody().find('[data-cid="shopping-cart-amount"]').then(klarnaAmount => {
            let actualPrice = klarnaAmount.text()
            actualPrice = actualPrice.replace(/[,]/g, '.')
            console.log(actualPrice)
            expect(actualPrice).contains(salePrice)
        })
    })
})

// cy.get('[class="cart item mf-initial"]').then(product => {
//     let price = product.find('[class="cart-price"]').text()
//     let lastPrice = price.replace(/[\s,0.%€]/g, '')
//     let salePrice = lastPrice - (lastPrice * fractionNumber)
//     console.log(salePrice)
//     cy.get('[class="grand totals"]').find('[class="price"]').then(price => {
//         let actualPrice = price.text()
//         actualPrice = actualPrice.replace(/[,]/g, '.')
//         console.log(actualPrice)
//         expect(actualPrice).contains(+salePrice)
//     })
// })

Cypress.Commands.add('userWillTurn16Tomorrow', () => {

    let today = new Date();
    let userNot16yet = (today.getDate()+1)+'.'+(today.getMonth()+1)+'.'+(today.getFullYear()-16)
    console.log(userNot16yet);
    cy.get('#form-validate')
        .find('#dob')
        .type(userNot16yet)
})


Cypress.Commands.add('dynamicEmail', () => {
    let today = new Date();
    let timeForEmail = today.getDate()+today.getTime()
    let dynamicEmail = timeForEmail+"@gd6.com";
    console.log(dynamicEmail);
    cy.get('[id="email_address"]')
        .click({force: true})
        .type(dynamicEmail)
        .should('have.value', dynamicEmail)
})

Cypress.Commands.add('dynamicHouseNumber', () => {
    let today = new Date();
    let houseNumber = today.getSeconds()
    console.log(houseNumber)
    cy.get('input#street_2').type(houseNumber)
})

Cypress.Commands.add('dynamicEmailForChangingDataForm', () => {
    let today = new Date();
    let timeForEmail = today.getDate()+today.getTime()
    let dynamicEmail = timeForEmail+"@gd6.com";
    console.log(dynamicEmail);
    cy.get('[id="email"]')
        .clear()
        .click({force: true})
        .type(dynamicEmail)
        .should('have.value', dynamicEmail)
})


Cypress.Commands.add('deleteAllProducts', () => {
    // if(cy.contains('Artikel entfernen')) {
    //     cy.contains('Artikel entfernen').click()
    // }
    // else {}


})

// Cypress.Commands.add('getDynamicEmail', () => {
//         cy.get('[class="field email required"]').then(emailField => {
//             let getEmail = emailField.find('#email').text()
//             console.log(getEmail)
//             cy.wrap(getEmail).as('previousEmail')
//
//
//
//         })
//
//     cy.get('#email').invoke('val').as('previousEmail')
// })

Cypress.Commands.add('goToCheckOut', () => {
    cartAndOrders.kasseButtonInCarte()
    cartAndOrders.kassePopUpAppears()
    cartAndOrders.chooseNewPostage()
    cartAndOrders.kasseToCheckout()
    cartAndOrders.kassePageOpen()
})

Cypress.Commands.add('SignIn', (email, password) => {
    authorization.authorizationPage()
    authorization.authFormExist()
    authorization.typeEmail(email)
    authorization.typePassword(password)
    authorization.confirmAuthorization()
})

Cypress.Commands.add('registration', () => {
    openPage.registrationPage()
    registration.chooseHerrGender()
    registration.typeName('Helen')
    registration.typeSurname('Zimmer')
    cy.dynamicEmail()
    registration.typePassword(variables.validPassword)
    registration.repeatPassword(variables.validPassword)
    registration.acceptPrivacyPolicy()
    registration.clickToRegistration()
    cy.wait(2000)
    cy.get('[class="header links"]').find('[class="my-account-link"]').should('exist')
})

Cypress.Commands.add('getProductByParams', (min, max) => {
    cy.visit('fortesting/product/filter', {qs: {minPrice: min, maxPrice: max}})
})




Cypress.Commands.add('preiceSortedDown', () => {
    cy.get('[class="item product product-item"]').each(($li, index) => {

        if (index < 19) {
            let price1 = $li.find('[class="price"]').text()
            price1 = price1.replace(/[\s%€]/g, '')
            price1 = price1.replace('.', '')
            price1 = price1.replace(',', '.')
            console.log(price1)

            let price2 = $li.next().find('[class="price"]').text()
            price2 = price2.replace(/[\s%€]/g, '')
            price2 = price2.replace('.', '')
            price2 = price2.replace(',', '.')
            console.log(price2)

            cy.wrap(+price2).should('not.be.gt', +price1)
        }
        else return false
    })
})

Cypress.Commands.add('preiceSortedUp', () => {

    cy.get('[class="item product product-item"]').each(($li, index) => {

    if (index < 19) {
        let price1 = $li.find('[class="price"]').text()
        price1 = price1.replace(/[\s%€]/g, '')
        price1 = price1.replace(',', '.')
        console.log(price1)

        let price2 = $li.next().find('[class="price"]').text()
        price2 = price2.replace(/[\s%€]/g, '')
        price2 = price2.replace(',', '.')
        console.log(price2)

        cy.wrap(+price1).should('not.be.gt', +price2)
    }
    else return false
    })
})


Cypress.Commands.add('deleteAllProductsFromWL', () => {
        cy.get( '[class="column main mf-initial"]' ).then( $mainContainer => {
            let isVisible = $mainContainer.find( '[data-role="remove"]').is( ':visible' );
            if ( isVisible ) {
                cy.get('[data-role="remove"]').first().click();
                cy.wait(1500)
                cy.deleteAllProductsFromWL();
            }
            else cy.visit('/wishlist/')
        } );
})

Cypress.Commands.add('deleteAllProductsFromCart', () => {
    cy.get('#maincontent').then( $mainContainer => {
        let exist = $mainContainer.find('[class="action action-delete "]').is( ':visible' );
        if ( exist ) {
            cy.get('[class="action action-delete "]').first().click();
            cy.wait(1000)
            cy.deleteAllProductsFromCart();
        }
        else cy.visit('/checkout/cart/')
    } );
})

Cypress.Commands.add('subtractPercentCouponFromPrice', (fractionNumber) => {
    cy.get('[class="cart item mf-initial"]').then(product => {
        let price = product.find('[class="cart-price"]').text().replace(',', '.')
        let lastPrice = price.replace(/[\s,0%€]/g, '')
        let salePrice = lastPrice - (lastPrice * fractionNumber)
        cy.get('[class="grand totals"]').find('[class="price"]').then(price => {
            let actualPrice = price.text()
            actualPrice = actualPrice.replace(/[,]/g, '.')
            console.log(actualPrice)
            expect(actualPrice).contains(+salePrice)
        })
    })
})



Cypress.Commands.add('checkSale', () => {
    if (cy.get('.old-price')) {
        return cy.reload();
    }
    else if (cy.get('.product-sidebar-container')) {
        cy.reload();
    }
    else return false;
})
