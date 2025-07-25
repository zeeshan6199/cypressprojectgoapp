class Declaration{
    opentosupplier(){
        cy.wait(30000);
        cy.get("oj-button[title='Open to Supplier']").should('be.visible').should('not.be.disabled').click();
        cy.wait(5000);
        cy.get("div[slot='footer']").find('oj-button').find('button').find("div[class='oj-button-label']").find('span').contains('Yes').click();
        cy.wait(5000);
    }
    writedescription(){
        cy.wait(6000);
        cy.get("input[type='text']").eq(7).click().type('Declaration Created through Cypress Scripts');
        cy.wait(14000);
        cy.get("oj-button[title='Save']").click();
        cy.wait(4000);

    }

    opentomanager(){
        cy.wait(30000);
        cy.get("oj-button[title='Submit']").should('be.visible').should('not.be.disabled').click();
        cy.wait(5000);
        cy.get("div[slot='footer']").find('oj-button').find('button').find("div[class='oj-button-label']").find('span').contains('Yes').click();
        cy.wait(5000);
    }
    approve(){
        cy.wait(30000);
        cy.get("oj-button[title='Approve']").should('be.visible').should('not.be.disabled').click();
        cy.wait(5000);
        cy.get("div[slot='footer']").find('oj-button').find('button').find("div[class='oj-button-label']").find('span').contains('Approve').click();
        cy.wait(5000);

    }
}

export default new Declaration();