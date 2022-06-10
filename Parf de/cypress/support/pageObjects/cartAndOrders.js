import {variables} from "./variables";

export class CartFunctions {
    cartIsOpen() {
        cy.title().should('eq', variables.cartPageTitle)
    }

    increaseProductNumber() {
        cy.get('.ui-spinner ui-widget ui-widget-content ui-corner-all')
            .find('.qty-input-control qty-input-control-up ui-spinner-button ui-spinner-up ui-button ui-widget ui-state-default ui-button-text-only')
            .click()
    }

    decreaseProductNumber() {
        cy.get('.ui-spinner ui-widget ui-widget-content ui-corner-all')
            .find('.qty-input-control qty-input-control-down ui-spinner-button ui-spinner-down ui-button ui-widget ui-state-default ui-button-text-only')
            .click()
    }

    deleteProductFromCart() {
        cy.contains('Entfernen').first().click()
    }

    productIsInCart(product) {
        cy.get('[class="product-item-name"]')
            .should('contain', product)
    }


    productQtyInCart(number) {
        cy.get('.field.qty')
            .find('input')
            .should('have.attr', 'aria-valuenow', number)
    }

    productQtyInCartIcon(qty) {
       cy.get('[data-block="minicart"]')
           .find('[class="counter-number"]')
           .should('contain.text', qty)
    }

    addWomenProb() {
        cy.contains('für Damen').click()
        cy.wait(1000)
    }

    womenProbAdded() {
        cy.get('#probe-row-desktop')
            .find('[class="free-label"]')
            .should('exist')
            .and('contain.text', 'GRATIS für Sie')
    }

    addMenProb() {
        cy.contains('für Herren').click()
        cy.wait(1000)
    }

    menProbAdded() {
        cy.get('#probe-row-desktop')
            .find('[class="free-label"]')
            .should('exist')
            .and('contain.text', 'GRATIS für Ihn')
    }

    deleteProb() {
        cy.get('#probe-row-desktop').contains('Entfernen').click()
        cy.get('#probe-row-desktop')
            .find('[class="free-label"]')
            .should('not.exist')
    }

    giftWrap() {
        cy.get('[class="action-pack-as-gift"]')
            .find('input')
            .click()
        cy.get('[class="action-pack-as-gift"]')
            .find('input')
            .should('have.attr', 'checked', 'checked')
        cy.get('#greeting-wrapper').should('exist')
        cy.wait(1000)
    }

    greetingCardExist() {
        cy.contains('Hinzufügen').click()
        cy.wait(1000)
        cy.get('#greeting-card').should('exist').and('contain.text', 'Ihre persönliche Grußkarte')
    }

    rbuttonsInGreetingCardForm() {
        cy.contains('Vielen Dank').click()
        cy.contains('Grußkarten Grußkarte - Weihnachten').click()
        cy.contains('Für Dich').click()
        cy.contains('Herzlichen Glückwunsch').click()
    }

    fillInGreetingForm() {
        cy.get('[name="gcardrecipient"]').type(variables.unregisteredName)
        cy.get('#greeting-card-text').type('Greeting text')
        cy.get('[name="gcardsender"]').type(variables.validName)
    }

    buttonsInGreetingFormExists() {
        cy.get('[class="col2"]')
            .find('[class="button button-cancel"]')
            .should('exist')
            .and('contain.text', 'Abbrechen')
        cy.get('[class="button button-submit"]')
            .should('exist')
            .and('contain.text', 'Speichern')
    }

    submitGreetinfForm() {
        cy.get('[class="button button-submit"]')
            .click()
        cy.wait(1000)
    }

    typeVoucherNumber(voucherBumber){
        cy.get('#gift-card-number')
            .type(voucherBumber)  //set voucher number in variables ()
    }

    typeVoucherPin(voucherPin) {
        cy.get('#gift-card-pin')
            .type(voucherPin) //set voucher pin on variables
    }

    addVoucherButton() {
        cy.get('#add-easy-cash-gift-card').click()
    }

    canselVoucher() {
        cy.get('[class="action action-delete giftcard-delete-action"]').contains('Entfernen').click()
    }

    voucherApplied(voucherNumber) {
        cy.get('[class="giftcard-numbers"]')
            .should('exist')
            .and('contain.text', voucherNumber)
    }
    voucherWasCanceled(voucherNumber) {
        cy.get('[class="giftcard-numbers"]')
            .should('not.exist')
    }

    typeCouponCode(couponCode){
        cy.get('#coupon_code').type(couponCode) //set coupon code in variables
    }

    addCouponButton() {
        cy.get('#dummy-gutscheincode-button').click()
        cy.get('[class="totals"]').should('exist') // checking if discount field appears in cart summary
    }

    cancelCoupon() {
        cy.get('#dummy-gutscheincode-button').click()
    }

    // addProductToWishList() { // BUG!!! There is no button to add product to wishlist
    //     cy.get
    // }

    outOfCartButton() {
        cy.get('.checkout methods items checkout-methods-items').find('.action continue').click()
        //add checking that main page is open (from another pageobject)
    }

    sumPriceWasLoaded() {
        cy.get('[class="grand totals"]').should('exist')
        cy.get('[class="totals shipping excl"]').should('exist')
        cy.get('[class="totals sub"]').should('exist')
    }

    sumPriceIs(sumPriceInKlarna) {
        cy.get('[class="grand totals"]').find('[class="price"]').should('contain', sumPriceInKlarna)
    }

    // sumPriseIsNull() {
    //     cy.get('[class="grand totals"]').should('exist').and('contain.text', '0,00')
    // }

    paidDelivery() {
        cy.get('[class="totals shipping excl"]')
            .find('[class="price"]')
            .should('exist')
            .and('contain.text', '3,95 €')
    }

    freeDelivery() {
        cy.get('[class="totals shipping excl"]')
            .find('[class="price"]')
            .should('exist')
            .and('contain.text', '0 €')
    }

    kasseButtonInCarte() {
        cy.get('[data-role="proceed-to-checkout"]').click()
    }

    kasseToCheckout() {
        cy.get('#custom-to-checkout').click({force : true})
    }

    kassePageOpen() {
        cy.title().should('contain', 'Kasse')
    }

    kassePopUpAppears() {
        cy.get('#modal-address-shipping')
            .should('exist')
    }

    chooseNewPostage() {
        cy.contains('Neue Lieferadresse oder DHL-Packstation').click()
    }

    chooseStandartAddress() {
        cy.get('[class="address-type liefer-adresse"]').find('label').first().click()
    }

    orderCreated() {
        cy.get('.checkout-success').should('exist')
        cy.get('#trustedshopsBannerThankYou').should('exist')
    }

    cartFromInfoBlock() {
        cy.contains('Zum Warenkorb').click()
        cy.wait(1000)
    }

    backToShoppingButton() {
        cy.contains('Weiter einkaufen').click()
    }

    cartMessage(text) {
        cy.get('[data-ui-id="message-success"]').should("exist").and('contain', 'Sie haben den Gutscheincode '+'"'+text+'"'+' verwendet.')
    }


}

export const cartAndOrders = new CartFunctions();