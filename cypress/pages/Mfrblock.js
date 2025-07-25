class Mfrblock{
    verifywhereuseditem(){
        cy.get("li[id='whereused']").click();
        cy.contains('AUT-ITEM01').should('exist');


    }
    verifywhereuseddeclaration(){
        cy.get("li[id='whereused']").click();
        cy.wait(3000);
        cy.get("oj-option").contains(/^Declaration$/).click();
        cy.wait(6000);
        cy.contains('AUT-SPECIFICATIONHOMOG').should('exist');
        cy.contains('AUT-SPECIFICATIONPART').should('exist');
        cy.contains('GS-AUTPARTIALSPEC').should('exist');


    }
}

export default new Mfrblock();