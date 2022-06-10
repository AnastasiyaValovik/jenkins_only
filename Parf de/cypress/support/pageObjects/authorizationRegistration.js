import {variables} from "./variables";

export class AuthorizationMethods {
    authorizationPage () {
        cy.get('.authorization21').click({force: true})
    }

    authorizationPageOpen() {
        cy.title().should('contain', variables.authorizationPageTitle)
    }

    authFormExist() {
        cy.get('.authorization-container-wrap')
            .should('exist')
            .and('contain.text', 'Anmeldung')
        cy.get('.authorization-login-block-container')
            .should('exist')
            .and('contain.text', 'Ich bin Neukunde.')
            .and ('contain.text', 'Als registrierter Kunde profitieren Sie von vielen komfortablen Funktionen')//block with instruction list for new users
            .and('contain', 'Zur Registrierung')
    }

    typeEmail(email) {
        cy.get('#email')
            .type(email)
            .should('have.value', email);
    }

    typePassword(password) {
        cy.get('#pass')
            .type(password)
            .should('have.value', password);
    }

    confirmAuthorization() {
        cy.get('#register-button')
            .should('have.value', 'Anmelden')
            .click()
    }

    emailIsRed() {
        cy.get('[class="fieldset login"]')
            .find('label[for="email"]')
            .should('have.css', 'color', 'rgb(255, 0, 0)')
    }

    passwordIsRed() {
        cy.get('[class="fieldset login"]')
            .find('label[for="pass"]')
            .should('have.css', 'color', 'rgb(255, 0, 0)')
    }

    errorMessageAppears(errorMessage) {
        cy.get('.page.messages')
            .should('exist')
            .and('contain.text', errorMessage)
    }

    logOut() {
        cy.get('[class="authorization-link"]').find('[class="authorization21"]').click({force:true})
        cy.wait(1000)
    }

    successLogOut() {
        cy.get('[id="maincontent"]').should('exist')
    }

    wishListExist() {
        cy.get('[data-bind="scope: \'wishlist\'"]').should('exist')
    }

    successfulAuthorization () {
        cy.title().should('contain', 'Meine Bestellungen')
        cy.get('.dashboard-top')
            .should('exist')
            .and('contain.text', 'Hier finden Sie eine Übersicht über die gespeicherten Informationen in Ihrem Kundenkonto.')
        cy.url().should('eq', 'https://test-parfuemerie.gd6.by/customer/account/')
    }

    clickToResetPassword() {
        cy.get('[class="action remind"]').should('exist').click()
    }

    resetPasswordFormExist() {
        cy.get('.column.main')
            .should('exist')
            .and('contain.text', 'Passwort vergessen')
            .and('contain.text', 'Bitte geben Sie Ihre E-Mailadresse ein. Sie erhalten eine E-Mail, um das Passwort zurückzusetzen.')
    }
}

export const authorization = new AuthorizationMethods()







export class RegistrationMethods {
    registrationPage() {
        cy.contains('Zur Registrierung').click({force: true})
    }

    registarionFormExist() {
        cy.get('.authorization-login-form-container').should('exist')
    }

    genderFieldNameExist() {
        cy.get('.field.field-name-prefix.required')
            .should('exist')
            .and('contain.text', 'Anrede')
    }

    nameFieldNameExist() {
        cy.get('.field.field-name-firstname.required')
            .find('label')
            .first()
            .should('exist')
            .and('contain.text', 'Vorname')
    }

    surnameFieldNameExist() {
        cy.get('.field.field-name-lastname.required')
            .should('exist')
            .and('contain.text', 'Nachname')
    }

    birthdayFieldNameExist() {
        cy.get('.field.date.field-dob')
            .should('exist')
            .and('contain.text', 'Geburtsdatum')
    }

    emailFieldNameExist() {
        cy.get('[for="email_address"]')
            .should('exist')
            .and('contain.text', 'EMail')
    }

    passwordFieldNameExist() {
        cy.get('.field.required.forerror')
            .should('exist')
            .and('contain.text', 'Passwort')
    }

    repeatPasswordFieldNameExist() {
        cy.get('.field.confirmation.required')
            .should('exist')
            .and('contain.text', 'Passwort wiederholen')
    }

    chooseFrauGender() {

        cy.get('#gender-female[value="Frau"]')
            .check()
            .should('be.checked')
    }

    frauGenderNotChosen() {
        cy.get('#gender-female[value="Frau"]')
            .should('not.be.checked')
    }

    chooseHerrGender() {
        cy.get('[class="forcheckbox labelCheckboxFix easyClear"]')
            .first()
            .should('contain.text', 'Herr')
        cy.get('#gender-female[value="Herr"]')
            .check()
            .should('be.checked')
    }

    herrGenderNotChosen() {
        cy.get('#gender-female[value="Herr"]')
            .should('not.be.checked')
    }


    typeName(name) {
        cy.get('#firstname')
            .clear()
            .click()
            .type(name)
            .invoke('prop', 'value')
            .should('contain', name)
    }

    typeInvalidName() {
        cy.get('#firstname')
            .click()
            .type(variables.firstName)
            .invoke('prop', 'value')
            .should('have.text', variables.firstName)
    }

    typeSurname(surname) {
        cy.get('#lastname')
            .clear()
            .click()
            .type(surname) // put surname into surname fils
            .invoke('prop', 'value').should('contain', surname)
    }

    chooseDayOfBirth() {
        cy.get('input[id="dob"]').click()   //click to choose date of birth

        cy.get('[data-handler="selectYear"]') //select 1994 year
            .select('1994')

        cy.get('[data-handler="selectYear"]')
            .should('have.value', '1994') // check that 1994 was chosen

        cy.get('[data-handler="selectMonth"]') //select january month
            .select('Jan')
        cy.get('[data-handler="selectMonth"]')
            .should('have.value', '0') //check that january was chosen
        cy.get('[class="ui-datepicker-calendar"]').contains('1').click()
    }

    clickBirthDayField() {
        cy.get('#form-validate')
            .find('#dob').click()
    }

    clickCalendarIcon() {
        cy.get('.control.customer-dob')
            .find('button').click()
    }

    calendarAppears() {
        cy.get('#ui-datepicker-div').should('exist')
    }

    typeDayOfBirth(date) {
        cy.get('.control.customer-dob')
            .find('#dob')
            .type(date)
    }

    typeEmail(email) {
        cy.get('[id="email_address"]')
            .click({force: true})
            .type(email)
            .should('have.value', email)
    }

    typePassword(password) {
        cy.get('[id="password"]')
            .type(password)
            .should('have.value', password)
    }

    repeatPassword(password) {
        cy.get('[id="password-confirmation"]')
            .type(password)
            .should('have.value', password)
    }

    acceptPrivacyPolicy() {
        cy.get('#terms-confirmation').check()
    }

    privacyPolicyFieldTextExist() {
        cy.get('.field.accept-privacy-policy.required')
            .should('contain.text', 'Ich bestätige, dass ich 16 Jahre oder älter bin und akzeptiere die Bestimmungen zum ')
    }

    privacyPolicyPopUpExist() {
        cy.contains('Datenschutz.').click()
        cy.get('[class="fancybox-skin"]')
            .should('exist')
            .and('contain.text', 'Datenschutzerklärung')
    }

    bulletinSubscriptionFielTextExist() {
        cy.get('.field.newsletter')
            .first()
            .should('exist')
            .and('contain.text', 'Ich möchte den parfuemerie.de-Newsletter abonnieren.')
    }

    bulletinSubscriptionCheckbox() {
        cy.get('.field.newsletter')
            .find('[type="checkbox"]#is_subscribed')
            .check()
    }

    individualBulletinSubsTextExist() {
        cy.get('.field.newsletter')
            .find('[for="is_allow_third_party"]')
            .should('exist')
            .and('contain.text', 'Ich möchte den parfuemerie.de-Newsletter in personalisierter Form erhalten.')
    }

    individualBulletinSubsCheckbox() {
        cy.get('[id="is_allow_third_party"][type="checkbox"]')
            .check()
    }

    birthdaySubscriptionTextFieldExist() {
        cy.get('[for="is_allow_third_party_birthday"]')
            .should('exist')
            .and('contain.text', 'Ich möchte einen Geburtstags-Newsletter erhalten.')
    }

    birthdaySubscriptionCheckbox() {
        cy.get('[id="is_allow_third_party_birthday"][type="checkbox"]')
            .check()
    }

    clickToRegistration() {
        cy.get('#register-button')
            .should('have.value', 'Registrierung')
            .click()
    }

    successfulRegistration() {
        cy.title().should('contain', 'Meine Bestellungen')
        cy.get('.dashboard-top')
            .should('exist')
            .and('contain.text', 'Hier finden Sie eine Übersicht über die gespeicherten Informationen in Ihrem Kundenkonto.')
    }

    genderIsRed() {
        cy.get('#form-validate').find('label[for="prefix"]').should('have.css', 'color', 'rgb(255, 0, 0)')
    }

    nameIsRed() {
        cy.get('#form-validate').find('label[for="firstname"]').should('have.css', 'color', 'rgb(255, 0, 0)')
    }

    surNameIsRed() {
        cy.get('#form-validate').find('label[for="lastname"]').should('have.css', 'color', 'rgb(255, 0, 0)')
    }

    emailIsRed() {
        cy.get('#form-validate').find('label[for="email_address"]').should('have.css', 'color', 'rgb(255, 0, 0)')
    }

    passwordIsRed() {
        cy.get('#form-validate').find('label[for="password"]').should('have.css', 'color', 'rgb(255, 0, 0)')
    }

    passwordRepeatIsRead() {
        cy.get('#form-validate').find('label[for="password-confirmation"]').should('have.css', 'color', 'rgb(255, 0, 0)')
    }

    policyTextIsRed() {
        cy.get('#form-validate').find('label[for="terms-confirmation"]').should('have.css', 'color', 'rgb(255, 0, 0)')
    }


    nameErrorAppears() {
        cy.get('#firstname-intexsoft-validate-error')
            .should('exist')
            .and('contain.text', variables.errorForInvalidName)
    }

    surnameErrorAppears() {
        cy.get('#lastname-intexsoft-validate-error')
            .should('exist')
            .and('contain.text', variables.errorForInvalidSurname)
    }

    birthErrorAppears(errorMessage) {
        cy.get('#dob-error').should('exist').and('contain.text', errorMessage)
    }

    emailErrorAppears(errorMessage) {
        cy.get('#email_address-intexsoft-validate-error').should('exist').and('contain.text', errorMessage)

    }

    backendErrorAppears(errorText) {
        cy.get('[data-bind="html: message.text"]')
            .should('exist')
            .and('contain.text', errorText)
    }

    backendErrorForExistingEmailAppears(errorText) {
        cy.get('[data-bind="html: message.text"]')
            .should('exist')
            .and('contain.text', errorText)
        cy.get('[data-bind="html: message.text"]')
            .find('a')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/customer/account/forgotpassword/')
    }

    passwordErrorAppears(errorMessage) {
        cy.get('#form-validate')
            .find('[class="errorPassword"]')
            .should('exist')
            .and('contain.text', errorMessage)
    }

    messageFromBack(errorMessage) {
        cy.wait(3000)
        cy.get('[class="page messages"]')
            .should('exist')
        cy.get('[class="page messages"]')
            .invoke('prop', 'innerText')
            .should('contain', errorMessage)
    }

}

export const registration = new RegistrationMethods()