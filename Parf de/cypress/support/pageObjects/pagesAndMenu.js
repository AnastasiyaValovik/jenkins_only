import { variables } from "./variables.js"


export class MainLinks {

    mainPage() {
        cy.visit('/')
    }

    markenPage () {
        cy.get('[class=" nav-anchor"]').contains('Marken').click()
        cy.title().should('eq', variables.markenPageTitle)
    }

    duftePage () {
        cy.get('[class=" nav-anchor"]').contains('Düfte').click()
        cy.title().should('eq', variables.duftePageTitle)
    }

    pflegePage() {
        cy.get('[class=" nav-anchor"]').contains('Pflege').click()
        cy.title().should('eq', variables.pflegePageTitle)
    }

    makeupPage() {
        cy.get('[class=" nav-anchor"]').contains('Make-up').click()
        cy.title().should('eq', variables.makeupPageTitle)
    }

    haarePage() {
        cy.get('[class=" nav-anchor"]').contains('Haare').click()
        cy.title().should('eq', variables.haarePageTitle)
    }

    accessoiresPage() {
        cy.get('[class=" nav-anchor"]').contains('Accessoires').click()
        cy.title().should('eq', variables.accessoiresPageTitle)
    }

    salePage() {
        cy.get('[class=" nav-anchor"]').contains('Sale').click()
        cy.title().should('eq', variables.salePageTitle)
    }

    gratisPage() {
        cy.get('[class=" nav-anchor"]').contains('Gratis').click()
        cy.title().should('eq', variables.gratisPageTitle)
    }

    genussweltPage() {
        cy.get('[class=" nav-anchor"]').contains('Genusswelt').click()
        cy.title().should('eq', variables.genussweltPageTitle)
    }

    storefinderPage() {
        cy.get('[class=" nav-anchor"]').contains('Storefinder').click()
        cy.title().should('eq', variables.storefinderPageTitle)
    }

    cartPageFromMenu() {
        cy.get('[class="action cart-logo"]').click()
    }



    registrationPage() {
        cy.contains('Zur Registrierung').click({force: true})
    }

    firstProductInSearch() {
        cy.get('.product-item-link').first().click()
    }

    productFromCategory(){
        cy.contains(variables.productFromCategory).click()
    }

    nextPageInCategory() {
        cy.get('[class="items pages-items"]').find('[class="item pages-item-next"]').first().click()
    }


}
export const openPage = new MainLinks()



export class ClickButton {

    acceptCookies() {
        cy.get('.uc-banner-content').find('#uc-btn-accept-banner').click()
    }

    searchForProduct(product) {
        cy.get('#search').type(product)
    }

    searchButton() {
        cy.get('[class="action search"]').click()
    }

    addToCart() {
        cy.get('#product-addtocart-button').click()
        cy.wait(500)
    }

    sortProductsByNewest() {
        cy.get('select#sorter').first().select('entity_id', {force:true})
    }

    sortProductsByPriceDown() {
        cy.get('select#sorter').first().select('price_desc', {force:true})
        cy.get('[value="price_desc"]').should('have.attr', 'selected')
    }

    sortProductsByPriceUp() {
        cy.get('select#sorter').first().select('price_asc', {force:true})
    }

    sortProductsFromAtoZ() {
        cy.get('select#sorter').first().select('Name: A bis Z', {force:true})
    }

    sortProductsFromZtoA() {
        cy.get('select#sorter').first().select('Name: Z bis A', {force:true})
    }

    endOfProductListOnCatalog () {
        cy.get('[class="last-page-link"]')
            .first()
            .should('exist')
            .and('be.visible')
            .and('contain.text', 'Letzte')
            .click()
    }

    startOfProductListOnCatalog() {
        cy.get('[class="first-page-link"]')
            .first()
            .should('contain.text', 'Erste')
            .and('exist')
            .and('be.visible')
            .click()
    }

    page5InPagination() {
        cy.get('.catalog-pager-wrapper').contains('5').click()
    }

    sidebarDropDownMenu(sectionName) {
        cy.get('.sidebar.sidebar-main').contains(sectionName).click({force:true})
    }

    chooseFilter(category) {
        cy.get('.sidebar.sidebar-additional')
            .contains(category)
            .next()
            .click()
    }

    removeFilter() {
        cy.get('[class="action remove"]').click()
    }

    filterFirstBrand() {
        cy.get('[class="filter-options-content"]')
            .find('[class="item "]')
            .first()
            .click()
    }

    filterBrand(index) {
        cy.get('[class="filter-options-content"]')
            .find('[class="item "]')
            .eq(index)
            .click()
    }

    filterOneMoreBrand(index) {
        cy.get('.sidebar.sidebar-additional').contains('Auswahl').click()
        cy.get('[class="filter-options-content"]')
            .find('[class="item "]')
            .eq(index)
            .children('a')
            .click()
    }

    openCategoryFilter() {
        cy.get('[class="action chose"]')
            .eq(1)
            .click()
    }

    filterCategory(index) {
        cy.get('[class="filter-options-content"]')
            .find('[class="item "]')
            .eq(index)
            .children('a')
            .click()
    }



    priceFilterFrom(price){
        cy.get('[class="ui-slider-control-from"]').should('have.attr', 'value', '0').type(price)
    }

    priceFilterTo(price){
        cy.get('[class="ui-slider-control-to"]').clear().type(price)
    }

    cancelFilterInForm(index) {
        cy.get('.sidebar.sidebar-additional').find('[class="action reset"]').eq(index).click({force:true})
    }

    deleteBrandFromFilter() {
        cy.get('[class="state items clearfix"]').find('[class="action remove"]').click({force:true})
    }


}
export const clickButton = new ClickButton()



export class CheckingMethods {

    haarePageDropDownMenuExist() {
        cy.get('#vesitem-1407231647929922258288307')
            .find('.megamenu-content').should('exist')
    }

    accessoiresPageDropDownMenuExist() {
        cy.get('#vesitem-1407351647929922495859895')
            .find('.megamenu-content').should('exist')
    }

    salePageDropDownMenuExist() {
        cy.get('#vesitem-1407431647929922467486952')
            .find('.megamenu-content').should('exist')
    }

    servicePageDropDownMenuExist() {
        cy.get('[class="megamenu-content"]')
            .should('contain.text', 'Newsletter')
            .and('contain.text', 'Kontakt')
            .and('contain.text', 'Hilfe und FAQ')
            .and('contain.text', 'Gutscheinkarte')
    }


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

    searchResultsOpen() {
        cy.title().should('include', variables.searchResultsTitle)
    }

    productFromSearchOpen(product) {
        cy.title().should('include', product)
        cy.wait(2000)
    }

    productFromCategoryOpen(product) {
        cy.title().should('include', product)
        cy.wait(2000)
    }
   
    addToCartInfoBlockOpen() {
        cy.get('.add-to-cart-info-block', {timeout: 2000}).should('exist')
    }

    socialMediaBlockHeader() {
        cy.get('[class="hidden-xs footer-block"]')
            .find('h3')
            .should('contain.text', 'parfuemerie.de folgen')
    }

    facebookExistInFooter() {
        cy.get('[class="footer-social-btn invisible"]').find('a[href="https://www.facebook.com/Parfuemerie.de"]').should('exist')
        cy.get('a[href="https://www.facebook.com/Parfuemerie.de"]').find('img').should('have.attr', 'src')
    }

    instagramExistInFooter() {
        cy.get('[class="footer-social-btn invisible"]').find('a[href="https://www.instagram.com/parfuemerie_de"]').should('exist')
        cy.get('a[href="https://www.instagram.com/parfuemerie_de"]').find('img').should('have.attr', 'src')
    }

    youtubeExistInFooter() {
        cy.get('[class="footer-social-btn invisible"]').find('a[href="https://www.youtube.com/channel/UCcFoWBhMMzgAwMmfu2u0Ldg"]').should('exist')
        cy.get('a[href="https://www.youtube.com/channel/UCcFoWBhMMzgAwMmfu2u0Ldg"]').find('img').should('have.attr', 'src')
    }

    headerOfNewsletterSubsExist() {
        cy.get('[class="footer-block"]').find('h3').should('contain.text', 'Newsletter abonnieren')
    }

    formForNewslettersSubsExist() {
        cy.get('form[id="newsletter-validate-detail"]').should('exist')
        cy.get('form[id="newsletter-validate-detail"]').find('input[id="newsletter-pc"]').should('exist')
        cy.get('form[id="newsletter-validate-detail"]').find('input[id="subscribe-button-pc"]').should('exist')
    }

    shippingInfoBlockExist() {
        cy.get('[class="widget block block-static-block"]').find('h3').should('exist').and('contain.text', 'Versandpartner')
    }

    payMethodsHeaderExist() {
        cy.get('[class="widget block block-static-block"]').find('h3').should('contain.text', 'Zahlarten')
    }

    klarnaInfoLinkInFooter() {
        cy.get('[alt="Klarna"]')
            .should('exist')
            .and('have.attr', 'data-src', 'https://cdn.klarna.com/1.0/shared/image/generic/badge/de_de/checkout/short-blue.png?width=312')
            .and('have.attr', 'img', 'https://cdn.klarna.com/1.0/shared/image/generic/badge/de_de/checkout/short-blue.png?width=312')
    }

    saveShoppingBlockExist() {
        cy.get('[class="widget block block-static-block"]').find('h3').should('contain.text', 'Sicher Einkaufen')
    }

    priceChecker() {
        cy.get('[class="product-price"]').find('[class="price"]').should('not.contain', '99999') // need to modify!!!!!!!!!!!!!
    }

    sortingFromAtoZ() {
        // cy.get('[class="product-brand-link"]').then(product => {
        //     let productName = product.prop('innerText')
        //     productName = productName.slice(0, 1)
        //     expect(productName).eq('A')
        // })
        cy.get('[class="item product product-item"]').each(($li, index) => {
            if(index > 0 && index < 12) {

                let productName = $li.find('[class="product-brand-link"]').prop('innerText')
                console.log(productName)
                productName = productName.slice(0, 1)
                expect(productName).eq('A')

            }
        })
    }

    sortingFromZtoA() {
        cy.get('[class="item product product-item"]').each(($li, index) => {
            if(index > 0 && index < 12) {

                    let productName = $li.find('[class="product-brand-link"]').prop('innerText')
                console.log(productName)
                    productName = productName.slice(0, 1)
                    expect(productName).eq('Z')

            }
        })
    }

    markenPageLinkInMenu() {
         cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Marken')
            .should('have.attr', 'href', '/marken')
    }

    duftePageLinkInMenu() {
         cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Düfte')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/duefte')
    }


    pflegePageLinkInMenu() {
         cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Pflege')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/pflegeprodukte')
    }

    makeUpPageLinkInMenu() {
         cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Make-up')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/make-up')
    }

    haarePageLinkInMenu() {
        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Haare')
            .should('have.attr', 'href', '/haare')
    }

    accessoiresPageLinkInMenu() {
        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Accessoires')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/accessoires')
    }

    salePageLinkInMenu() {
        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Sale')
            .should('have.attr', 'href', '/sale')
    }

    gratisPageLinkInMenu() {
        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Gratis')
            .should('have.attr', 'href', '/gratis-geschenke')
    }

    genussweltPageLinkInMenu() {
        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Genusswelt')
            .should('have.attr', 'href', '/genusswelt')
    }

    storefinderPageLinkInMenu() {
        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Storefinder')
            .should('have.attr', 'href', '/ourstores')
    }



    dufteDropDownMenuExist() {
         cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Damendüfte')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/damenduefte')

         cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Herrendüfte')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/herrenduefte')

         cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Luxury Secrets')
            .should('have.attr', 'href', '/special/luxury-secrets')
    }

    pflegeDropDownMenuExist() {
         cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Gesichtspflege')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/gesichtspflege')

         cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Herrenpflege')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/herren-pflege')
    }

    makeUpDropDownMenuExist() {
         cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Teint')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/teint-makeup-produkte')

         cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Nägel')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/nagelkosmetik')
    }

    haareDropDownMenuExist() {
        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Haarstyling')
            .should('have.attr', 'href', '/haarstyling')

        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Haarparfum')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/haarparfum')
    }

    accessoiresDropDownMenuExist() {
        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Adventskalender')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/adventskalender')

        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Haarparfum')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/haarparfum')
    }

    saleDropDownMenuExist() {
        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('SALE Damendüfte')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/sale-damenduefte')

        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('SALE Duftsets für Ihn')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/sale-duftsets-herren')
    }

    serviceDropDownMenuExist() {
        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Newsletter')
            .should('have.attr', 'href', '/newsletter')

        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Kontakt')
            .should('have.attr', 'href', '/contactus')
        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Hilfe und FAQ')
            .should('have.attr', 'href', '/hilfeundfaq')

        cy.get('ul[class="ves-megamenu menu-hover ves-horizontal"]')
            .contains('Gutscheinkarte')
            .should('have.attr', 'href', '/customer/giftcardcheck')
    }



    //catalog page

    saleLabelExist() {
        cy.get('[class="item product product-item"]')
            .first()
            .find('[class="product-attribute-label sale-product-label"]')
            .should('exist')
    }

    limitedTo(number) {
        cy.get('.column.main').then(page => {
            let length = page.find('[class="item product product-item"]').length
            expect(length).eq(number)
        })
    }

    endOfProductListOpen() {
        cy.get('[class="first-page-link"]')
            .first()
            .should('exist')
            .and('be.visible')

        cy.get('[class="last-page-link"]')
            .should('not.exist')
    }

    startOfProductListOpen() {
        cy.get('[class="last-page-link"]')
            .first()
            .should('exist')
            .and('be.visible')

        cy.get('[class="first-page-link"]')
            .should('not.exist')
    }

    twoToolbarsInCatalog() {
        cy.get('[class="toolbar toolbar-products"]')
            .first()
            .should('exist')
            .and('be.visible')
        cy.get('[class="toolbar toolbar-products"]')
            .last()
            .should('exist')
            .and('be.visible')
    }

    catalogBreadcrumbsExist(catalogPageName) {
        cy.get('[class="items"]')
            .contains('HOME')
            .should('have.attr', 'href', 'https://test-parfuemerie.gd6.by/')

        cy.get('[class="items"]')
            .contains(catalogPageName)
            .should('exist')
    }

    categoryHeaderExist(header) {
        cy.get('#page-title-heading').should('exist').and('contain.text', header)
    }

    paginationLinksExist() {
       cy.get('[class="item"]').each(  ($li, index, $list) => {
            if (index < 4) {
                let toCheck = $li.find('a').prop('search');
                console.log(toCheck)
                console.log(index)
                expect(toCheck).contains(index + 2)
            }
       })
    }

    prevPaginationButtonExist() {
        cy.get('.catalog-pager-wrapper').find('[class="action  previous"]').should('exist')
    }

    nextPaginationButtonExist() {
        cy.get('.catalog-pager-wrapper').find('[class="action  next"]').should('exist')
    }

    sectionInDropDownSidebar(sectionName, sectionLink) {
        cy.get('.sidebar.sidebar-main')
            .contains(sectionName)
            .should('have.attr', 'href', sectionLink)
    }

    priceFilterFormExist() {
        cy.get('.active > .filter-options-content > .filter-options-content__head > h3').should('exist').and('contain', 'Preis')
        cy.get('#slider-range-price').should('exist').and('be.visible')
        cy.get('[data-slider="slider-range-price"]').should('contain.html', 'label', 'von').and('contain.html', 'label', 'bis')
    }

    filtersExist() {
        cy.get('.block.filter').should('exist')
    }

    filterStringExist(index) {
        cy.get('[class="state items clearfix"]')
            .find('li')
            .should('exist')
            .and('have.length', index)
    }

    filterStringNotExist() {
        cy.get('[class="state items clearfix"]').should('not.exist')
    }

    priceLessThan(priceTo) {
        cy.get('[class="item product product-item"]').each(($li, index) => {
            let price = $li.find('[class="price"]').first().text()
            price = price.replace(/[\s%€]/g, '')
            price = price.replace(',', '.')
            console.log(price)
            if (+price < 10) {
                expect(+price).not.greaterThan(priceTo)
            }

        })
    }

    priceGreaterThan(priceFrom) {
        cy.get('[class="item product product-item"]').each(($li, index) => {
            let price = $li.find('[class="price"]').first().text()
            price = price.replace(/[\s%€]/g, '')
            price = price.replace(',', '.')
            console.log(price)
            if (+price < 10) {
                expect(+price).not.lessThan(priceFrom)
            }
            else {
                expect(+price).not.lessThan(priceFrom)
            }
        })
    }

    facebookLinkExist() {
        cy.get('[class="social-icons"]').find('a#facebook-btn').should('exist')
        cy.get('#facebook-btn').find('[class="social-icon"]').should('have.css', 'background-image')
    }

    linkedInLinkExist() {
        cy.get('[class="social-icons"]').find('#linkedin-btn').should('exist')
        cy.get('#linkedin-btn').find('[class="social-icon"]').should('have.css', 'background-image')
    }

    googleLinkExist() {
        cy.get('[class="social-icons"]').find('#google-btn').should('exist')
        cy.get('#google-btn').find('[class="social-icon"]').should('have.css', 'background-image')
    }

    instagramLinkExist() {
        cy.get('[class="social-icons"]').find('#instagram-btn').should('exist')
        cy.get('#instagram-btn').find('[class="social-icon"]').should('have.css', 'background-image')
    }

    mailLinkExist() {
        cy.get('[class="social-icons"]').find('#mail-btn').should('exist')
        cy.get('#mail-btn').find('[class="social-icon"]').should('have.css', 'background-image')
    }


}
export const checkThat = new CheckingMethods()
