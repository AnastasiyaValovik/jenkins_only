import { variables } from "../pageObjects/variables.js"


export class MainLinks {

    markenPage () {
        cy.contains('Marken').click()
    }

    duftePage () {
        cy.contains('Düfte').click()
    }

    pflegePage() {
        cy.contains('Pflege').click()
    }

    makeupPage() {
        cy.contains('Make-up').click()
    }

    haarePage() {
        cy.contains('Haare').click()
    }

    beautyFoodPage() {
        cy.contains('Beauty Food').click()
    }

    salePage() {
        cy.contains('Sale').click()
    }

    gutscheinPage() {
        cy.contains('Gutschein').click()
    }

    kosmetickPage() {
        cy.contains('Kosmetik').click()
    }

    cartPageFromMenu() {
        cy.get('[class="action cart-logo"]').click()
    }

    cartFromInfoBlock() {
        cy.contains('Zum Warenkorb').click()
    }    

    authorizationPage () {
        cy.get('.authorization21')
    }

    registrationPage() {
        cy.contains('Zur Registrierung').click({force: true})
    }

    firstProductInSearch() {
        cy.get('.product-item-link').click()
    }

    productFromCategory(){
        cy.contains('Tom Ford Noir E.d.P. Nat. Spray').click()
    }

}
export const openPage = new MainLinks()




export class ClickButton {

    acceptCookies() {
        cy.get('.uc-banner-content').find('#uc-btn-accept-banner').click()
    }

    searchForProduct() {
        cy.get('#search').type(variables.productFromSearchBox)
    }

    searchButton() {
        cy.get('[class="action search"]').click()
    }

    addToCart() {
        cy.get('#product-addtocart-button').click()
    }

    backToShoppingButton() {
        cy.contains('Weiter einkaufen').click()
    }

    deleteProductFromCart() {
        cy.contains('Entfernen').click()
    }

    kasseButtonInCarte() {
        cy.get('[data-role="proceed-to-checkout"]').click()
    }

     chooseNewPostage() {
        cy.contains('Neue Lieferadresse oder DHL-Packstation').click()
    }

    kasseToCheckout() {
        cy.get('#custom-to-checkout').click()
    }

    signOut() {
        cy.get('[class="authorization-link"]').find('[class="authorization21"]').click()
    }

    typeEmail() {
        cy.get('#email')
        .type(variables.email)
        .should('have.value', variables.email);
    }

    typePassword() {
        cy.get('#pass')
        .type(variables.password)
        .should('have.value', variables.password);
    }

}
export const clickButton = new ClickButton()



export class CheckingMethods {
    
    cartIsEmpty() {
        cy.get('[class="content"]')
          .should('contain', 'Es befinden sich keine Artikel im Warenkorb.')
    }

    cartIsOpen() {
        cy.title().should('contain', variables.cartPageTitle)
    }

    mainPageOpen() {
        cy.title().should('eq', variables.mainPageTitle)
    }

    markenPageOpen() {
        cy.title().should('eq', variables.markenPageTitle)
    }

    duftePageOpen() {
        cy.title().should('eq', variables.duftePageTitle)
    }

    pflegePageOpen() {
        cy.title().should('eq', variables.pflegePageTitle)
    }

    makeupPageOpen() {
        cy.title().should('eq', variables.makeupPageTitle)
    }

    haarePageOpen() {
        cy.title().should('eq', variables.haarePageTitle)
    }

    beautyFoodPageOpen() {
        cy.title().should('eq', variables.beautyFoodPageTitle)
    }

    salePageOpen() {
        cy.title().should('eq', variables.salePageTitle)
    }

    gutscheinPageOpen() {
        cy.title().should('eq', variables.gutscheinPageTitle)
    }

    searchResultsOpen() {
        cy.title().should('include', variables.searchResultsTitle)
    }

    productFromSearchOpen() {
        cy.title().should('include', variables.productFromSearchBox)
    }

    productFromCategoryOpen() {
        cy.title().should('include', variables.productFromCategory)
    }
   
    addToCartInfoBlockOpen() {
        cy.get('.add-to-cart-info-block').should('exist')
    }

    productInCart() {
        cy.get('[class="product-item-name"]').should('contain', variables.productFromCategory)
    }

    kassePopUpAppears() {
        cy.get('#modal-address-shipping')
        .should('exist')
    }

    kassePageOpen() {
        cy.title().should('contain', 'Kasse')
    }
}
export const checkThat = new CheckingMethods()