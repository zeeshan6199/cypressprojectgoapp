class PendingDeclarations{
    openfirstobject(){
        cy.wait(19000);
        cy.get('a').contains('AUT-MPN01').then($el => {
        $el[0].click()
        })
        cy.wait(13000);

    }
    openfirstdeclaration(){
        cy.wait(19000);
        cy.get('td').find('a').eq(0).then($el => {
        $el[0].click()
        })
        cy.wait(13000);
        
    }
    
    }



export default new PendingDeclarations();