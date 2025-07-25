import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";


describe('Prodcomptable', () => {
  var declarationid;
it('Prodcomptable', () => {
  LoginPage.visit();
  LoginPage.login('*****','**********');
  DashboardPage.productcompliancetable();
  
  });

});
