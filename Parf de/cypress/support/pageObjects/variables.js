
export class Variables1 {

    mainPageTitle = 'Parfum, Make-up, Pflegeprodukte online kaufen | parfuemerie.de'

    markenPageTitle = 'Kosmetikmarken online kaufen | parfuemerie.de'

    duftePageTitle = 'Düfte & Parfum online kaufen | parfuemerie.de'

    pflegePageTitle = 'Hautpflege Produkte online kaufen | Pflegeprodukte | parfuemerie.de'

    makeupPageTitle = 'Make-up online kaufen | Make up bei | parfuemerie.de'

    haarePageTitle = 'Haarpflege & Haarstyling Produkte online kaufen | Haarpflege | parfuemerie.de'

    accessoiresPageTitle = 'Accessoires | Raumdüfte & Duftkerzen | parfuemerie.de'

    salePageTitle = '% Beauty SALE % Parfum & Kosmetik online kaufen | parfuemerie.de'

    gratisPageTitle = 'Exklusive Gratis-Geschenke | Gratis Zugaben für Sie - parfuemerie.de'

    genussweltPageTitle = 'Feinkost online kaufen | parfuemerie.de'

    storefinderPageTitle = 'STOREFINDER - parfuemerie.de'

    //SERVICE page can't be open

    authorizationPageTitle = 'Login - parfuemerie.de'

    cartPageTitle = 'Warenkorb'

    searchResultsTitle = 'Suchergebnisse für:' //Title consist of 'Suchergebnisse für:' string + string your were searching for

   
    productCartierCarat = 'Cartier Cartier Carat EDP' //
    productShiseidoWasoCleanser = 'Shiseido Waso Shikulime Gel-to-Oil Cleanser'
    productA4Lipstick = 'A4 Cosmetics Kiss & Help Lipbalm'
    productCartierBodyLotion = 'Cartier Baiser Volé Body Lotion'
        productGArmaniMyWay = 'Giorgio Armani My Way E.d.P. Nat. Spray'
    productHairRituelBySisley = 'Hair Rituel by Sisley Soin Lavant Revitalisant Lissant'
    productInvisibobbleHaargummi = 'Invisibobble Haargummi Power Crystal Clear 3 Stück'
    productNoStocks = 'Yves Saint Laurent Y Le Parfum E.d.P. Vapo'
    productArtdecoCream = 'Artdeco Camouflage Cream'
    poductWithoutmlg = 'https://test-parfuemerie.gd6.by/sensai-set-total-lip-gloss-4-5-ml-total-lip-treatment-5-ml'
   

    emailForNegativeTests = 'ntgative@gmail.com'
    invalidEmail = 'invalidmail.com'
    invalidCharacterEmail = '!@$*&@gmail.com'
    alreadyRegisteredEmail = 'ekaterina.sandulenko111@mail.ru'

    validPassword = 'passw2'
    characters5Password = 'qqqq1'
    noNumberPassword = "qqqqqq"
    unregisteredPassword = 'unregisteredPassword'

    validName = 'Anna'        //registered user without address in the system
    validSurName = 'Fry'
    dateOfBirth = '23121994'
    emailValid = 'sivuto.kifipoyo@intexsoft.by'

    cyrillicName = 'Яна'
    cyrillicSurname = 'Жук'
    hieroglyphsName = '象形文字'
    hieroglyphsSurname = '象形文字'

    unregisteredName = 'Maks'
    unregisteresSurName = 'First'
    unregisteredEmail = 'unregistered@gmail.com'

    umlautsName = 'Freudentränen'
    umlautsSurname = 'Müller'
    umlautsEmail = 'zusi.fibu@intexsoft.by'  // this user is valid. but in test for registration with umlauts I use cy.dynamicEmail()

    validNameWithSubs = 'Alex'  //checkboxes for bulletin newsletters subscription
    validSurnameWithSubs = 'Müller'
    emailWithSubs = 'kexega.riruzi@intexsoft.by'  // this user is valid. but in test for registration with all checkboxes I use cy.dynamicEmail()
    //Theodor Tucher, Pariser Platz 6, 10117, Berlin

    postalCode = '10115'
    city = 'Berlin'
    billingAdress = 'Zinnowitzer Str., 1'

    errorMessageForEmptyFields = 'Ein Login und ein Passwort sind erforderlich.'
    errorMessageForInvslidData = 'Die Anmeldung ist fehlgeschlagen. Bitte korrigieren Sie die Fehler und versuchen es erneut.'

    errorForInvalidName = 'Please register with a valid firstname.'  //for registration page
    errorForNamesFromBack = 'Please register with a valid name - '
    errorForInvalidSurname = 'Please register with a valid lastname'
    errorFor16Years = 'Du musst mindestens 16 Jahre alt sein.'
    errorForInvalidDate = 'Bitte geben Sie ein gültiges vollständiges Datum ein.'
    errorForInvalidYear = 'Please enter a valid year (1901-2022).'
    errorForInvalidMonth = 'Bitte geben Sie einen gültigen Monat (1-12) ein.'
    errorForInvalidDay = 'Bitte einen gültigen Tag eingeben (1-31).'
    errorForExistingEmail = 'Es gibt bereits ein Konto mit dieser E-Mail-Adresse. Wenn Sie sicher sind, dass es sich um Ihre E-Mail-Adresse handelt, '+'klicken Sie hier'+', um Ihr Passwort für den Zugriff auf Ihr Konto zu erhalten.'
    errorForInvalidEmail = 'Please register with a valid domain'
    errorNot16FromBack = 'Du musst mindestens 16 Jahre alt sein.'
    errorForShortPassword = 'Das Passwort muss 6 Zeichen lang sein und eine Zahl enthalten.'

    //cart
    //messageCouponAdded = 'Sie haben den Gutscheincode '+text+' verwendet.'
    messageCouponDoesntExist = 'Der Gutscheincode "ForAutoTesting15€" ist ungültig.'

    couponCode20 = '20%ForAutoTesting'
    couponCode15andShipping = 'ForAutoTesting15€andShipping'
    couponCode15 = 'ForAutoTesting15€'

    voucherCode = '0000000000000009900'
    voucherPin = '0000'


    //Please register with a valid domain - email@qq.com




    // account tests

    errorTextDOBChangeDataForm = 'Bitte geben Sie ein gültiges vollständiges Datum ein.'
    messageAddressSaved = 'Sie haben die Adresse gespeichert.'

    shortPassword = 'pass1'


}

export const variables = new Variables1()