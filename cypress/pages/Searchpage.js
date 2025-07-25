class Searchpage{
    searchentity(entity,value){
        cy.wait(10000);
        cy.get(`li[id='${entity}']`).click();
        cy.wait(10000);
        if(value===undefined){
        cy.get('button').contains('Search').click();
        cy.wait(15000);
        cy.get('td').eq(0).find('a').then($el => {
        $el[0].click()
        })

        

        }
        else{
        cy.get('div[class="oj-flex-item undefined"]').find('oj-input-text').eq(0).click().type(`${value}`);
        cy.get('button').contains('Search').click();
        cy.wait(15000);
        cy.get('td').eq(0).find('a').then($el => {
        $el[0].click()
        })
        cy.wait(5000);

     

        }
        




        



    }




}

export default new Searchpage();