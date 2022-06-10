 import { openPage, clickButton, checkThat } from "../support/pageObjects/pageObjectsMenu.js"
 import { variables } from "../support/pageObjects/variables.js"

describe ('SMOKE tests', () => {
    before(() => {
        cy.visit('/');
    })


  // beforeEach(() => {
  //   cy.restoreLocalStorage();
  // });
  
  // afterEach(() => {
  //   cy.saveLocalStorage();
  // });

  // beforeEach(() => {
  //   cy.restoreCookies();
  // });
  
  // afterEach(() => {
  //   cy.saveCookies();
  // });

    // beforeEach(() => {
        
    //    Cypress.Cookies.preserveOnce("PHPSESSID", "mage-cache-storage", "mage-cache-storage-section-invalidation",
    //    "mage-cache-sessid", "section_data_ids", "mage-messages", "user_allowed_save_cookie", "fb-enable", "private_content_version", 
    //    "mage-translation-storage", "mage-translation-file-version", "form_key");

    //    Cypress.Cookies.defaults({
    //     preserve: 'user_allowed_save_cookie',
    //   })
    //   })

    beforeEach(() => {
      //   cy.restoreLocalStorage();
      cy.Cookies.preserveOnce('form_key');
      cy.Cookies.preserveOnce('PHPSESSID');
      cy.Cookies.preserveOnce('section_data_ids');
      });
      
    it ('Website opens on main page', () => {
      clickButton.acceptCookies()
      checkThat.mainPageOpen()
    })

    it('All links in the main menu are working', () => {
      openPage.markenPage()
  
      clickButton.acceptCookies()
      
      openPage.duftePage()
      clickButton.acceptCookies()
     
      openPage.pflegePage()
      clickButton.acceptCookies()

      openPage.makeupPage()
      clickButton.acceptCookies()

      openPage.haarePage()
      clickButton.acceptCookies()

      openPage.beautyFoodPage()
      clickButton.acceptCookies()

      openPage.salePage()
      clickButton.acceptCookies()
      
      openPage.gutscheinPage()
      

    })

        // it('There is a link to authorization page in the header', () => {
    //     cy.get('[class="authorization-link"]')
    //         .find('a')
    //         .should('contain', 'Anmelden')
    //         .invoke('attr', 'href')
    //         .should('contain', 'https://test-parfuemerie.gd6.by/customer/account/login/');
    // })

    // it ('There is a link to registration page in the header', () => {
    //     cy.contains('Zur Registrierung')
    //         .invoke('attr', 'href')
    //         .should('contain', 'https://test-parfuemerie.gd6.by/customer/account/create/');
    // })

    it ('Open the cart from the main menu. The cart is empty', () => {  
      openPage.cartPageFromMenu()    
        
      clickButton.acceptCookies()
        
      checkThat.cartIsEmpty()
        
    })
    
    it ('Find a product in the search box and add it to the cart', () => {
 
      clickButton.typeNameOfProductIntoSearchBox()
      
      clickButton.searchButton()

      //checkThat.searchResultsOpen()  //check title of the page with search results

      clickButton.acceptCookies()

      Cypress.Cookies.debug(true)
            
      openPage.firstProductInSearch() 

      //clickButton.acceptCookies()
          
      clickButton.addToCart() 

      clickButton.backToShoppingButton()

      cy.get('[class="counter-number"]')
        .should('contain', '1')                 //Check that the number of products in the cart is visible near the cart link in the header. 

    })

    it('Delete product from the cart', () => {
      openPage.cartPageFromMenu()   
      clickButton.acceptCookies()   
      clickButton.deleteProductFromCart()
      checkThat.cartIsEmpty()
      // cy.get('[class="content"]')
      //   .should('contain', 'Es befinden sich keine Artikel im Warenkorb.')
    })
    
    it ('Find a product on Pflege category page, add it to the cart and open the cart', () => {
    
      openPage.pflegePage()
      clickButton.acceptCookies()
      openPage.productFromCategory()  //cy.contains('Tom Ford Noir E.d.P. Nat. Spray').click()
      clickButton.addToCart()
      checkThat.addToCartInfoBlockOpen()
      openPage.cartFromInfoBlock()
    })
    
    it ('There is a product in the cart', () => {
      checkThat.productInCartByName()  
      cy.get('[data-role="cart-item-qty"]')
      .invoke('prop', 'value'). should('contain', '1') //how to write it correctly in Page Objects???
    })
    
    it ('Unregistered user can make an order. Vorkasse payment', () => {

      clickButton.kasseButtonInCarte()

      checkThat.kassePopUpAppears()
      
      clickButton.chooseNewPostage()
      
      clickButton.kasseToCheckout()
    
      checkThat.kassePageOpen()

      cy.get('#customer-email').should('be.empty')

      cy.get('#VXAN56F').find('value="Herr"').click()
    })

    it ('User can registrate in the system', () => {
      
      openPage.registrationPage()
      clickButton.acceptCookies()
      cy.get('#gender-female[value="Frau"]')  //choose gender
        .check()
        .should('be.checked')

      cy.get('#gender-female[value="Herr"]') //checked that other gender isn't checked
        .should('not.be.checked')

      cy.get('#firstname')
        .click()
        .type(variables.firstName)  //put name into name field
        .invoke('prop', 'value')
        .should('contain', variables.firstName)

      cy.get('#lastname')
        .click()
        .type(variables.surName) // put surname into surname fils
        .invoke('prop', 'value').should('contain', variables.surName)

      cy.get('input[id="dob"]').click()   //click to choose date of birth

      cy.get('[data-handler="selectMonth"]') //select january month
        .select('Jan')
      cy.get('[data-handler="selectMonth"]').should('have.value', '0')

      cy.get('[data-handler="selectYear"]') //select 1994 year
        .select('1994')
        cy.get('[data-handler="selectYear"]').should('have.value', '1994')

      cy.get('[id="email_address"]') 
        .click({force: true})
        .type(variables.email)
        .should('have.value', variables.email)
        
      cy.get('[id="password"]')
        .type(variables.password)
        .should('have.value', variables.password)

        
      cy.get('[id="password-confirmation"]')
        .type(variables.password)
        .should('have.value', variables.password)

      cy.get('[class="label checkbox"]')
        .should('contain', 'Ich bestätige, dass ich 16 Jahre oder älter bin und akzeptiere die Bestimmungen zum ')  //check if there is a text of accepting privacy policy

      cy.get('#terms-confirmation').check() // accept privacy policy

      cy.get('#register-button').click()

      cy.title().should('contain', 'Meine Bestellungen') //check if registration was successful and the customer page opened

    })

    it('Sign out', () => {
      clickButton.signOut()
      clickButton.acceptCookies()
    })


    it ('User can authorize with valid credentials', () => {
      clickButton.acceptCookies()
      openPage.authorizationPage()
      

      clickButton.typeEmail()
      clickButton.typePassword()

    })

    it('Sign out', () => {
      clickButton.signOut()
    })



  })

