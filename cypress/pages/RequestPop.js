class RequestPop{
    requestcompliance(type,comptype,spec){
        cy.wait(13000);
        cy.contains(/^Compliance$/).click();
        cy.get("oj-option[id='requestCompliance']").click();
        cy.wait(16000);
        cy.get('a.oj-select-arrow.oj-component-icon.oj-clickable-icon-nocontext.oj-select-open-icon[role="presentation"]').eq(0).click();
        if(type='ipc'){
        cy.get("div[aria-label='IPC 1752A Declaration']").click();
        }
        cy.wait(17000);
        cy.get("a[class='oj-combobox-arrow oj-combobox-icon oj-component-icon oj-clickable-icon-nocontext oj-combobox-open-icon']").eq(2).click();
        if(comptype='full'){
        cy.get("span[title='Provide detailed substance-level information for all materials']").click();
        }else{
            cy.get("span[title='Requires responses to relevant questions']").click();
        }
        cy.get("a[class='oj-select-arrow oj-component-icon oj-clickable-icon-nocontext oj-select-open-icon']").eq(1).click();
        cy.get(`div[aria-label=${spec}]`).click();
        cy.get("span[class='oj-inputdatetime-input-trigger']").click();
        cy.contains(30).click();
        cy.wait(4000);
        cy.get("div[slot='footer']").find('button').contains('Request').click();










    }
}

export default new RequestPop();