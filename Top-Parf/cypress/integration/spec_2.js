import { openPage, checkThat, clickButton } from "../support/pageObjects/pageObjectsMenu.js"
import { variables } from "../support/pageObjects/variables.js"

describe ('smoke', () => {

    before(() => {
        cy.visit('https://test-wls-top.intexsoft.com/giorgio-armani-acqua-di-gi-pour-homme-gel-douche');
    })

    // beforeEach(() => {
        
    //   Cypress.Cookies.preserveOnce("PHPSESSID", "mage-cache-storage-section-invalidation",
    //    "mage-cache-sessid", "section_data_ids", "mage-messages", "user_allowed_save_cookie", "fb-enable", "private_content_version", 
    //    "mage-translation-storage", "mage-translation-file-version", "form_key")
    // })

    // it ('Open the cart from the main menu. The cart is empty', () => {  
    //   clickButton.acceptCookies()
    //   openPage.cartPageFromMenu()       
    //   //clickButton.acceptCookies() 
    //   checkThat.cartIsEmpty()
    // })

    it ('add to cart and go to checkout', () => {
        cy.setCookie(name, value)
        clickButton.acceptCookies()
        
        clickButton.addToCart()
        // openPage.cartFromInfoBlock()
        // clickButton.kasseButtonInCarte()
        // clickButton.kasseToCheckout()
    })

    // it ('Find a product in the search box and add it to the cart', () => {
    //   clickButton.acceptCookies()

    //   clickButton.typeNameOfProductIntoSearchBox()
      
    //   clickButton.searchButton()

    //   //checkThat.searchResultsOpen()  //check title of the page with search results

    //   //clickButton.acceptCookies()

    //   Cypress.Cookies.debug(true)
            
    //   openPage.firstProductInSearch() 

    //   //clickButton.acceptCookies()
          
    //   clickButton.addToCart() 

    //   Cypress.Cookies.debug(true)

    //   clickButton.backToShoppingButton()

    //   cy.get('[class="counter-number"]')
    //     .should('contain', '1')     
        // cy.clearLocalStorage()
        // cy.clearCookies()
        // Cypress.session.clearAllSavedSessions()
    // })

    // it ('There is a product in the cart', () => {
    //   openPage.cartPageFromMenu()
    //   clickButton.acceptCookies()
    //   checkThat.productInCartByName()  
    //   cy.get('[data-role="cart-item-qty"]')
    //   .invoke('prop', 'value'). should('contain', '1') //how to write it correctly in Page Objects???
    // })

})