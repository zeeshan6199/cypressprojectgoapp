

class DashboardPage{
    verifypmtile(){
        cy.get('label').contains('Product management').should('exist');
    }

    clickpmtile(){
        cy.get('label').contains('Product management').click();
    }

    productcompliancetable(){
        cy.get("oj-input-text").eq(1).type('AUT-ITEM');
        cy.wait(4000);
        cy.contains('100').should('exist');
        cy.contains('0').should('exist');

    }

}

export default new DashboardPage();