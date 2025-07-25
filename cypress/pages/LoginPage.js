class LoginPage{
    visit(){
        cy.visit('https://gocompliance-test.gosaas.io/');
    }
    fillusername(username){
        cy.get('input[id="LoginUser|input"]').type(username);
    }
    fillpassword(password){
        cy.get('input[id="LoginPassword|input"]').type(password);
    }

    loginbutton(){
        cy.get('button').contains('Sign in').click();
    }

    login(username,password){
        cy.get('input[id="LoginUser|input"]').click()
        this.fillusername(username);
       
        cy.get('input[id="LoginPassword|input"]').click()
        this.fillpassword(password);
        cy.contains('or').click();
        cy.wait(3000);
        this.loginbutton();
        cy.wait(9000);
    }
}

export default new LoginPage();