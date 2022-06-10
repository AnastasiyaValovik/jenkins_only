import {variables} from "./variables";

export class accountMethods {

    accountPageOpen() {
        cy.title().should('eq', 'Meine Bestellungen')
    }

    mainDataFormExist() {
        cy.get('.customer-account-dashboard-bottom-wrap').should('exist')
    }

    sidebarExists() {
        cy.get('#account-nav').should('exist')
    }

    sidebarLinksExist() {
        cy.get('#account-nav')
            .contains('Übersicht')
        cy.get('[class="nav item"]')
            .contains('Benutzerdaten')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/customer/account/edit/')
        cy.get('[class="nav item"]')
            .contains('Adressbuch')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/customer/address/')
        cy.get('[class="nav item"]')
            .contains('Wunschliste')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/wishlist/')
        cy.get('[class="nav item"]')
            .contains('Newsletter')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/newsletter/manage/')
        cy.get('[class="nav item"]')
            .contains('Bestellungen')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/sales/order/history/')
        cy.get('[class="nav item"]')
            .contains('Gutscheinkarte')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/customer/giftcard/')
    }

    clickChangeDataPage() {
        cy.get('ul[class="nav items"]')
            .contains('Benutzerdaten')
            .click({force:true})
    }

    changeDataFormExist() {
        cy.get('.column.main').should('exist')
    }

    clickAddressPage() {
        cy.get('#account-nav')
            .contains('Adressbuch')
            .click({force:true})
    }

    addressFormExist() {
        cy.get('[class="fieldset"]').should('exist')
        cy.get('[class="required-fields"]').should('contain.text', 'Die mit einem * gekennzeichneten Felder sind Pflichtangaben.')
    }

    newAdressRadiobattonExist() {
        cy.get('.address-type')
            .find('input')
            .first()
            .should('have.attr', 'type', 'radio')
        cy.get('.address-type')
            .should('contain.text', 'Neue Adresse')
    }

    newShopAddressRadiobattonExist() {
        cy.get('.address-type')
            .find('input')
            .last()
            .should('have.attr', 'type', 'radio')
        cy.get('.address-type')
            .should('contain.text', 'Partner-Parfümerie')
    }

    changeEmailCheckbox() {
        cy.get('#change-email').check()
    }

    changeEmailFormExist() {
        cy.get('[data-container="change-email-password"]').should('exist')
        cy.get('[class="field new password required forerror"]').should('have.attr', 'style', 'display: none;')
        cy.get('[class="field confirm password required"]').should('have.attr', 'style', 'display: none;')
    }

    typeEmail(invalidEmail) {
        cy.get('input#email')
            .clear()
            .type(invalidEmail)
    }

    changePasswordCheckbox() {
        cy.get('#change-password').check()
    }

    changePasswordFormExist() {
        cy.get('[class="field new password required forerror"]').should('have.attr', 'style', 'display: flex;')
        cy.get('[class="field confirm password required"]').should('have.attr', 'style', 'display: flex;')
    }

    amazonePayAccountLinkExist() {
        cy.contains('Wenn Sie dieses Konto mit Amazon Pay erstellt haben, kennen Sie möglicherweise Ihr Site-Passwort nicht.')

        cy.get('[class="field password-info"]')
            .find('a')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/customer/account/forgotpassword/')
    }

    currentPassword() {
        cy.get('#current-password')
            .clear()
            .type(variables.validPassword)
    }

    newPassword(newPassword) {
        cy.get('input#password').type(newPassword)
    }

    confirmNewPassword(newPassword) {
        cy.get('#password-confirmation').type(newPassword)
    }

    submitChangeDataForm() {
        cy.get('.column.main')
            .find('button[type="submit"]')
            .should('have.prop', 'textContent', 'Speichern')
            .click({force:true})
    }


    //address page

    fillInStreet(street) {
        cy.get('.field.street.required')
            .should('contain.text', 'Straße, Hausnr.*')
        cy.get('input#street_1').type(street)
    }

    fillInHouseNumber(number) {
        cy.get('input#street_2').type(number)
    }

    fillInPostalCode(postalCode) {
        cy.get('.field.zip.required')
            .should('contain.text', 'Postleitzahl*, Ort*')
        cy.get('input#zip').type(postalCode)
    }

    fillInCity(city) {
        cy.get('input#city').type(city)
    }

    submitAddressForm() {
        cy.get('[class="form-address-edit new"]')
            .find('button[type="submit"]')
            .should('contain','Hinzufügen')
            .click({force:true})
    }

    deleteAddress() {
        cy.get('[class="action delete"]').find('span').click()
        cy.get('[class="action-primary action-accept"]').click()
    }

    billingAddressCheckbox() {
        cy.get('[class="field choice set billing"]')
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Als Standard-Rechnungsadresse verwenden')
        cy.get('#primary_billing').click()
    }

    shippingAddressCheckbox() {
        cy.get('[class="field choice set shipping"]')
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Als Standard-Lieferadresse verwenden')
        cy.get('#primary_shipping').click()
    }



    openWishlistFromMenu() {
        cy.get('[class="wishlist-link"]').click({force:true})
    }


    numberOfProductInWLMenu(numberOfProducts) {
        cy.get('#wishlist-qty')
            .should('contain.text', numberOfProducts)
    }

    addToWishlistFromProductPage() {
        cy.get('[data-action="add-to-wishlist"]')
            .should('exist')
            .and('have.text', 'Zur Wunschliste hinzufügen')
            .click({force:true})
    }

    deleteProductFromWishlist() {
        cy.contains('Artikel entfernen').click()
    }

    wishlistIsEmoty() {
        cy.get('#wishlist-view-form').contains('Die Wunschliste ist leer!')
    }

    productAddedToWLPopup() {
        cy.get('[class="fancybox-skin"]')
            .should('exist')
            .and('contain.text', 'Das Produkt wurde zu Ihrer Wunschliste hinzugefügt')
        cy.get('[data-ui-id="messages-message-success"]')
            .find('a')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/wishlist/')
            .and('have.text', 'Wunschliste')
    }

    closeProductAddedToWLPopup() {
        cy.get('[class="fancybox-item fancybox-close"]')
            .click()
    }

    wishlistFormExist() {
        cy.get('#wishlist-view-form').should('exist')
    }

    addToCartFromWL() {
        cy.get('button[data-role="tocart"]').should('exist').click()
    }

    moveToWLFromCart() {
        cy.get('[class="use-ajax action action-towishlist"]').click()
    }

    openVoucherPage() {
        cy.get('#account-nav')
            .contains('Gutscheinkarte')
            .click()
    }

    voucherPageHeader() {
        cy.get('[class="giftcard-page-desc"]')
            .should('contain', 'Hier können Sie einfach und bequem das verfügbare Guthaben Ihrer Gutscheinkarte abrufen.')
    }

    voucherFundingForm() {
        cy.get('.main-conto-page-content')
            .should('exist')
            .and('contain.text', 'Geben Sie hier die 19-stellige Kartennummer von der Rückseite Ihrer Gutscheinkarte ein:')
            .and('contain.text', 'Geben Sie hier die 4-stellige PIN ein:')
        cy.get('#cardNumber')
            .should('exist')
            .and('be.visible')
        cy.get('#cardPin')
            .should('exist')
            .and('be.visible')
        cy.get('#checkAmount')
            .should('contain.text', 'Guthaben abfragen')
    }

    voucherImageExists() {
        cy.get('.giftcard-image')
            .should('have.css', 'background-image')
    }

    backFromAddressForm() {
        cy.get('[class="form-address-edit new"]')
            .find('[class="action back"]')
            .should('contain','Zurück')
            .click()
    }

    clickToAddAddress() {
        cy.get('.primary').click()
    }

    searchForShopButtonSuchen() {
        cy.get('[class="button-small button-search-filialen-new"]')
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'value', 'Suchen')
            .click()
    }

    choosePartnerAddressRadioButton() {
        cy.get('#modal-address-shipping')
            .find('[for="partner-shipping-addresses"]')
            .click()
    }

    partnerAddressPopupValid() {
        cy.get('#partner-finder')
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Finden Sie eine unserer Partner-Parfümerien in Ihrer Nähe. Einfach Ort oder Postleitzahl eingeben und Ihre nächstgelegene Parfümerie mit Persönlichkeit finden!')
            .and('contain.html', 'id', 'stockist-search-address')
    }

    typePostalCode(string) {
        cy.get('#stockist-search-address').type(string)
    }

    searchForPartnerAddressInPopUp() {
        cy.get('#stockist-search-submit')
            .should('have.text', 'Parfümerie finden')
            .click({force:true})
    }

    companyFieldNotVisible() {
        cy.get('.field.company')
            .find('label')
            .should('contain', 'Zusatz / Firma')
        cy.get('#company')
            .should('have.attr', 'readonly')
        cy.get('#company').should('not.contain.text')
    }

    addressFieldNotVisible() {
        cy.get('.field.street.required')
            .find('label')
            .should('contain', 'Straße, Hausnr.*')
        cy.get('.field.street.required')
            .find('.control')
            .children('input')
            .last()
            .should('have.attr', 'readonly')
        cy.get('.field.street.required')
            .find('.control')
            .children('input')
            .last()
            .should('not.contain.text')
    }

    postalcodeFieldNotVisible() {
        cy.get('.field.zip.required')
            .find('label')
            .should('contain', 'Postleitzahl*, Ort*')
        cy.get('.field.zip.required')
            .find('input')
            .last()
            .should('have.attr', 'readonly')
        cy.get('.field.zip.required')
            .find('input')
            .last()
            .should('not.contain.text')
    }

    cityFieldNotVisible() {
        cy.get('.field.country.required')
            .first('label')
            .should('contain', 'Land*')

        cy.get('.field.country.required')
            .find('input')
            .last()
            .should('have.attr', 'readonly')
        cy.get('.field.country.required')
            .find('input')
            .last()
            .should('not.contain.text')

    }

    choosePartnerAddressMainShop() {
        cy.get('#containerListFilialFlagship').find('input').click()
        cy.get('#custom-fill-address').should('contain.text', 'An diese Parfümerie schicken').click()
    }

    checkPartnerAddress(selector, value) {
        cy.get(selector).invoke('prop', 'value').should('contain', value)
        // cy.get(selector).then(text => {
        //     let string = text.find('input').prop('value')
        //     console.log(string)
        //     expect(string).contains(value)
        //})
    }

    fillInFormWithName() {
        cy.get('#gender-female').click()
        cy.get('#firstname').clear().type('Freudentränen')
        cy.get('#lastname').clear().type('Müller')
        cy.get('#telephone').clear().type('+497871234567')
    }

    checkboxMakeAddressAtandart() {
        cy.get('#primary_shipping').click()
        cy.get('.field.choice.set.shipping').find('span').should('contain', 'Als Standard-Lieferadresse verwenden')
    }

    checkIfAddressValid(){
        cy.get('.box.box-address-shipping')
            .find('address')
            .should('contain', 'parfuemerie.de')
            .and('contain', 'Herr Freudentränen Müller')
            .and('contain', 'Kaiserstraße')
            .and('contain', 'St. Ingbert,  66386')
    }

    addAddressButton() {
        cy.get('[class="action primary add"]').click()
    }

    checkNumberOfShopOnMap(numberKM) {
        cy.get('#stockists-results-count')
            .invoke("text")
            .then(text => {
                return +text
            })
            .as('number')
        cy.get('#stockist-search-radius').select(numberKM)
        cy.wait(1000)
        account.searchForPartnerAddressInPopUp()
        cy.wait(2000)

        cy.get('#stockists-results-count')
            .then(function (text) {
                let greatNumber = text.text()
                expect(+greatNumber).greaterThan(this.number)
            })
    }

    mapExistOnPartnerAddressPopUp() {
        cy.get('iframe').should('exist').and('be.visible')
    }

    radiusFieldExist() {
        cy.get('[class="radius"]')
            .should('exist')
            .and('be.visible')
            .and('contain', 'Suche im Umkreis von: ')
    }

    textWithShopsNumberExist() {
        cy.get('[class="stockists-criteria"]')
            .find('p')
            .should('have.text', 'Wir haben '+'25'+' Parfümerien in Ihrer Nähe gefunden.')
    }

    paginationBlockIsValid() {
        cy.get('[class="stockists-paginator"]')
            .should('exist')
            .and('be.visible')
        cy.get('[class="stockists-paginator"]')
            .find('[class="jp-previous jp-disabled"]')
            .should('exist')
            .and('be.visible')
        cy.get('[class="stockists-paginator"]')
            .should('contain', '1')
            .and('contain', '2')
            .and('contain', '3')
            .and('contain', '4')
            .and('contain', '5')
        cy.get('[class="stockists-paginator"]')
            .find('[class="jp-next"]')
            .should('exist')
            .and('be.visible')
    }


    errorShortPasswordExist(shortPassword) {
        cy.get('.errorPassword').should('have.text', shortPassword)
    }


    passwordErrorFromBack(errorMessage) {
        cy.get('#form-validate')
            .find('[class="errorPassword"]')
            .should('exist')
            .and('contain.text', errorMessage)
    }

    messageFromBack(errorMessage) {
        cy.wait(3000)
        cy.get('.page.messages')
            .should('exist')
            .and('contain.text', errorMessage)
    }

    messageFromBackToCheck(string) {
        cy.get('.page.messages').invoke('val').then(() => {
            expect(string).exist
        })
    }

    redEmail() {
        cy.get('label[for="email"]').should('have.css', 'color', 'rgb(255, 0, 0)')
    }

    redPasswordComfirm() {
        cy.get('label[for="password-confirmation"]').should('have.css', 'color', 'rgb(255, 0, 0)')
    }

    redCurrentPassword() {
        cy.get('label[for="current-password"]').should('have.css', 'color', 'rgb(255, 0, 0)')
    }

    redNewPassword() {
        cy.get('label[for="password"]').should('have.css', 'color', 'rgb(255, 0, 0)')
    }

    addressIsRed() {
        cy.get('#form-validate').find('label[for="street_1"]').should('have.css', 'color', 'rgb(255, 0, 0)')
    }

    postalCodeIsRed() {
        cy.get('#form-validate').find('label[for="zip"]').should('have.css', 'color', 'rgb(255, 0, 0)')
    }



}

export const account = new accountMethods()

