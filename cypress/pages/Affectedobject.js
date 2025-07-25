class Affectedobject{
     
    fillfmd(val){
        cy.get("input[id='mass|input']").click().type(val);
    }

    declarecompliance(stat){
        cy.get("a[class='oj-combobox-arrow oj-combobox-icon oj-component-icon oj-clickable-icon-nocontext oj-combobox-open-icon']").eq(0).click();
        cy.get("oj-option").find("span").contains(`${stat}`).click();

    }

    saveclose(){
        cy.get("oj-button[id='saveAndClose']").click();
}
}

export default new Affectedobject();