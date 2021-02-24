context('test page', () => {
    it('should newsfeed section be selected from the sidebar to the left', () => {
        cy.visit(Cypress.config().baseUrl)

        cy.get('#navigation-widget-small > .menu > .active').children('a').should('have.attr', 'data-title', 'Newsfeed')
    })

    it('banner tittle should be bolded', () => {
        cy.get('.section-banner-title').should('have.css', 'font-weight','700')
    })

    it("newsfeed banner's tittle should be bigger than it's text", () => {
        cy.get('.section-banner-title').then(($tittle) => {
            const titleWeight = Number($tittle.css('font-weight'));
            
            cy.get('.section-banner-text').should(($text) => {
                const textWeight = Number($text.css('font-weight'))
                expect(titleWeight).to.be.greaterThan(textWeight)
            }) 
        } )
    })

    it("should be possible to type inside post text field", () => {
        cy.get('[data-cy=quick-post-text]').type('can i type here ????')
    })

    it("scroll should work", () => {
        cy.scrollTo('bottom')
    })
})
