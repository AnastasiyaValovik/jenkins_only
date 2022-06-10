import cli from "cucumber/lib/cli"
import { variables } from "../pageObjects/variables.js"


export class MainLinks {

    markenPage () {
        cy.contains('Marken').click()
        cy.title().should('eq', variables.markenPageTitle)
    }

    duftePage () {
        cy.contains('Düfte').click()
        cy.title().should('eq', variables.duftePageTitle)
    }

    pflegePage() {
        cy.contains('Pflege').click()
        cy.title().should('eq', variables.pflegePageTitle)
    }

    makeupPage() {
        cy.contains('Make-up').click()
        cy.title().should('eq', variables.makeupPageTitle)
    }

    haarePage() {
        cy.contains('Haare').click()
        cy.title().should('eq', variables.haarePageTitle)
    }

    beautyFoodPage() {
        cy.contains('Beauty Food').click()
        cy.title().should('eq', variables.beautyFoodPageTitle)
    }

    salePage() {
        cy.contains('Sale').click()
        cy.title().should('eq', variables.salePageTitle)
    }

    gutscheinPage() {
        cy.contains('Gutschein').click()
        cy.title().should('eq', variables.gutscheinPageTitle)
    }

    cartPageFromMenu() {
        cy.get('[class="action cart-logo"]').click()
        cy.title().should('contain', variables.cartPageTitle)
    }

    cartFromInfoBlock() {
        cy.contains('Zum Warenkorb').click()
        cy.title().should('contain', variables.cartPageTitle)
    }    

    authorizationPage () {
        cy.get('.authorization21').click()
    }

    registrationPage() {
        cy.contains('Zur Registrierung').click({force : true})
    }

    firstProductInSearch() {
        cy.get('.product-item-link').click()
        cy.title().should('include', variables.productFromSearchBox)
    }

    productFromCategory(){
        cy.contains('Giorgio Armani Acqua di Giò Pour Homme Gel Douche').click()
        cy.title().should('include', variables.productFromCategory)
    }

}
export const openPage = new MainLinks()




export class ClickButton {

    acceptCookies() {
        // if (document.querySelector('.fancybox-skin')) {
        //     cy.get('#accept-cookies-all').click()
        // }
        cy.get('#accept-cookies-all').click()
    }

    typeNameOfProductIntoSearchBox() {
        cy.get('#search').type(variables.productFromSearchBox)

    }

    searchButton() {
        cy.get('[class="action search"]').click()
        cy.title().should('include', variables.searchResultsTitle)
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
        cy.get('#custom-to-checkout').click({force: true})
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

    authorize() {
        cy.get('.authorization21').click()
        clickButton.acceptCookies()
        cy.get('#login-form').then( form => {
            cy.wrap(form).find('#email').type(variables.email).should('have.value', variables.email);
            cy.wrap(form).find('#pass').type(variables.password).should('have.value', variables.password);
        })
        cy.get('#register-button').click()
    }

    // toRegistrate() {

    //     cy.contains('Zur Registrierung').click({force: true})
    //     clickButton.acceptCookies()
    //     cy.get('#gender-female[value="Frau"]')  //choose gender
    //       .check()
    //       .should('be.checked')
  
    //     cy.get('#gender-female[value="Herr"]') //checked that other gender isn't checked
    //       .should('not.be.checked')
  
    //     cy.get('#firstname')
    //       .click()
    //       .type(variables.firstName)  //put name into name field
    //       .invoke('prop', 'value')
    //       .should('contain', variables.firstName)
  
    //     cy.get('#lastname')
    //       .click()
    //       .type(variables.surName) // put surname into surname fils
    //       .invoke('prop', 'value').should('contain', variables.surName)
  
    //     cy.get('input[id="dob"]').click()   //click to choose date of birth
  
    //     cy.get('[data-handler="selectMonth"]') //select january month
    //       .select('Jan')
    //     cy.get('[data-handler="selectMonth"]').should('have.value', '0')
  
    //     cy.get('[data-handler="selectYear"]') //select 1994 year
    //       .select('1994')
    //       cy.get('[data-handler="selectYear"]').should('have.value', '1994')
  
    //     cy.get('[id="email_address"]') 
    //       .click({force: true})
    //       .type(variables.email)
    //       .should('have.value', variables.email)
          
    //     cy.get('[id="password"]')
    //       .type(variables.password)
    //       .should('have.value', variables.password)
  
          
    //     cy.get('[id="password-confirmation"]')
    //       .type(variables.password)
    //       .should('have.value', variables.password)
  
    //     cy.get('[class="label checkbox"]')
    //       .should('contain', 'Ich bestätige, dass ich 16 Jahre oder älter bin und akzeptiere die Bestimmungen zum ')  //check if there is a text of accepting privacy policy
  
    //     cy.get('#terms-confirmation').check() // accept privacy policy
  
    //     cy.get('#register-button').click()
  
    //     cy.title().should('contain', 'Meine Bestellungen') //check if registration was successful and the customer page opened
  
    // }
}
export const clickButton = new ClickButton()



export class CheckingMethods {
    
    cartIsEmpty() {
        cy.title().should('contain', 'Warenkorb')
        cy.get('[class="content"]')
          .should('contain', 'Es befinden sich keine Artikel im Warenkorb.')
    }

    mainPageOpen() {
        cy.title().should('eq', variables.mainPageTitle)
    }

   
    addToCartInfoBlockOpen() {
        cy.get('.add-to-cart-info-block').should('exist')
    }

    productInCartByName() {
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