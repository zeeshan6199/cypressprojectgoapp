class Itemblock{
    amlreport(){
        cy.wait(2000);
        cy.contains(/^Reports$/).click();
        cy.get("oj-option[id='amlReport']").click();
        cy.wait(2000);
        cy.get(".oj-ux-ico-expand").eq(0).click({force:true});
        cy.contains('Non-compliant').should('exist');
        cy.contains('Compliant').should('exist');
    }
    bomreport(){
        cy.wait(2000);
        cy.contains(/^Reports$/).click();
        cy.get("oj-option[id='bomReport']").click();
        cy.wait(6000);
        cy.get("ul[class='oj-select-choices']").eq(1).click();
        cy.wait(6000);
        cy.contains('Filters').click();
        cy.get("ul[class='oj-select-choices']").eq(1).click();
        cy.get('li').contains('AUT-SPECIFICATIONHOMOG').click();
        cy.wait(3000);
        cy.get("ul[class='oj-select-choices']").eq(1).click();
        cy.get('li').contains('AUT-SPECIFICATIONPART').click();
        cy.wait(3000);
        cy.get('button').contains('Generate report').click();
         cy.wait(13000);
        cy.contains('Non-Compliant').should('exist');
        cy.contains('Compliant').should('exist');
    }
    generatecoc(){
        cy.wait(5000);
        cy.contains(/^Actions$/).click();
        
        cy.get("oj-option[id='generateCoC']").click();
        cy.wait(7000);
        cy.get('span').contains('Select a specification').click();
        cy.get('li').contains('AUT-SPECIFICATIONHOMOG').click();
        cy.get('button').contains('Ok').click();
        cy.wait(8000);
        cy.get("li[id='attachment']").click();
        cy.wait(3000);
        cy.contains('Certificates of Conformity').click();
        cy.wait(3000);
        cy.contains('AUT-SPECIFICATIONHOMOG_CoC').should('exist');

    }
}

export default new Itemblock();