 import { openPage, clickButton, checkThat } from "../support/pageObjects/pagesAndMenu.js"
 import { variables } from "../support/pageObjects/variables.js"
 import { cartAndOrders } from "../support/pageObjects/cartAndOrders.js"
 import {authorization, registration} from "../support/pageObjects/authorizationRegistration";


 describe('Main menu', () => {

   before(() => {
     cy.visit('/');   //fix loading of main page
   })

   beforeEach(() => {
     //   cy.restoreLocalStorage();
     Cypress.Cookies.preserveOnce('form_key');
     Cypress.Cookies.preserveOnce('PHPSESSID');
     Cypress.Cookies.preserveOnce('section_data_ids');
   });

   it('1. There is a link to Marken page in the main menu', () => {
     checkThat.markenPageLinkInMenu()
   })

   it('2. There is a link to Dufte category page in the main menu', () => {
     checkThat.duftePageLinkInMenu()
     checkThat.dufteDropDownMenuExist()
   })

   it('3. There is no products with invalid price like 0,9999 on first 5 pages in Dufte category', () => {
     openPage.duftePage()
     checkThat.priceChecker()
     openPage.nextPageInCategory()
     checkThat.priceChecker()
     openPage.nextPageInCategory()
     checkThat.priceChecker()
     openPage.nextPageInCategory()
     checkThat.priceChecker()
     openPage.nextPageInCategory()
     checkThat.priceChecker()     //need to modify
   })

   it('4. There is a link to Pflege category page in the main menu', () => {
     checkThat.pflegePageLinkInMenu()
     checkThat.pflegeDropDownMenuExist()
   })

   it('5. MakeUp category page can be open', () => {
     checkThat.makeUpPageLinkInMenu()
     checkThat.makeUpDropDownMenuExist()
   })

   it ('6. Haare category page can be open', () => {
      checkThat.haarePageLinkInMenu()
      checkThat.haareDropDownMenuExist()
   })

   it ('7. Accessoires category page can be open', () => {
      checkThat.accessoiresPageLinkInMenu()
      checkThat.accessoiresDropDownMenuExist()
   })

   it('8. Sale category page can be open', () => {
      checkThat.salePageLinkInMenu()
      checkThat.saleDropDownMenuExist()
   })

   it ('9. Gratis categore page can be open', () => {
      checkThat.gratisPageLinkInMenu()
   })

   it ('10. Genusswelt category page can be open', () => {
      checkThat.genussweltPageLinkInMenu()
   })

   it ('11. Service category has drop-down menu', () => {
      checkThat.serviceDropDownMenuExist()
   })

   it('12. Storefinger page can be open', () => {
      checkThat.storefinderPageLinkInMenu()
   })

 })



describe ('SMOKE tests', () => {


  beforeEach(() => {
    cy.visit('/');
    //   cy.restoreLocalStorage();
    Cypress.Cookies.preserveOnce('form_key');
    Cypress.Cookies.preserveOnce('PHPSESSID');
    Cypress.Cookies.preserveOnce('section_data_ids');
  });
    
  it ('1. Open the cart from the main menu. The cart is empty', () => {
    openPage.cartPageFromMenu()
    checkThat.cartIsOpen()
    checkThat.cartIsEmpty()
  })
    
  it ('2. Find a product in the search box and add it to cart', () => {
    clickButton.searchForProduct(variables.productShiseidoWasoCleanser)
    clickButton.searchButton()
    checkThat.searchResultsOpen()  //check title of the page with search results
    openPage.firstProductInSearch()
    checkThat.productFromSearchOpen(variables.productShiseidoWasoCleanser)
    clickButton.addToCart()
    checkThat.addToCartInfoBlockOpen()
    cartAndOrders.backToShoppingButton()
    cartAndOrders.productQtyInCartIcon(1)

  })

  it('3. Delete product from the cart', () => {
    openPage.cartPageFromMenu()
    cy.wait(1000)
    cartAndOrders.deleteProductFromCart()
    cy.wait(1000)
    checkThat.cartIsEmpty()
  })
    
  it ('4. Find a product, add it to the cart', () => {
    clickButton.searchForProduct(variables.productShiseidoWasoCleanser)
    clickButton.searchButton()
    openPage.firstProductInSearch()
    checkThat.productFromCategoryOpen(variables.productShiseidoWasoCleanser)
    clickButton.addToCart()
    checkThat.addToCartInfoBlockOpen()
    cartAndOrders.cartFromInfoBlock()
    cartAndOrders.productIsInCart(variables.productShiseidoWasoCleanser)
    cartAndOrders.productQtyInCartIcon(1)
    cartAndOrders.sumPriceWasLoaded()
  })

  it('5. Unregistered user can make an order. Vorkasse payment', () => {
    openPage.cartPageFromMenu()
    cy.wait(2000)
    cartAndOrders.kasseButtonInCarte()
    cartAndOrders.kassePopUpAppears()
    cartAndOrders.chooseNewPostage()
    cartAndOrders.kasseToCheckout()
    cartAndOrders.kassePageOpen()
    cy.klarnaCheckoutForUnregisteredUser()
    cartAndOrders.orderCreated() // need to check order in DB or admin panel
  })

  it ('6. User can registrate in the system', () => {
    registration.registrationPage()
    registration.registarionFormExist()
    registration.genderFieldNameExist()
    registration.nameFieldNameExist()
    registration.surnameFieldNameExist()
    registration.birthdayFieldNameExist()
    registration.emailFieldNameExist()
    registration.passwordFieldNameExist()
    registration.repeatPasswordFieldNameExist()

    registration.chooseHerrGender()
    registration.frauGenderNotChosen()
    registration.chooseFrauGender()
    registration.herrGenderNotChosen()
    registration.typeName(variables.validName)
    registration.typeSurname(variables.validSurName)
    registration.chooseDayOfBirth()
    cy.dynamicEmail()
    registration.typePassword(variables.validPassword)
    registration.repeatPassword(variables.validPassword)

    registration.privacyPolicyFieldTextExist()
    registration.acceptPrivacyPolicy()
    registration.bulletinSubscriptionFielTextExist()
    registration.individualBulletinSubsTextExist()
    registration.birthdaySubscriptionTextFieldExist()

    registration.clickToRegistration()
    registration.successfulRegistration()
  })

  it('7. Sign out', () => {
    authorization.wishListExist()
    authorization.logOut()
    authorization.successLogOut()
  })

  it ('8. User can authorize with valid credentials', () => {
    authorization.authorizationPage()
    authorization.authFormExist()
    authorization.typeEmail(variables.emailValid)
    authorization.typePassword(variables.validPassword)
    authorization.confirmAuthorization()
    authorization.successfulAuthorization()
    authorization.wishListExist()
  })

  it('9. Sign out', () => {
    authorization.logOut()
    authorization.successLogOut()
  })

})

