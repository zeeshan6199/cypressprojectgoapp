import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import Searchpage from "../pages/Searchpage";
import RequestPop from "../pages/RequestPop";
import Declaration from "../pages/Declaration";
import PendingDeclarations from "../pages/PendingDeclarations";
import Affectedobject from "../pages/Affectedobject";
import Mfrblock from "../pages/Mfrblock";


describe('MFRwhereused', () => {
 
it('MFRwhereused', () => {
  LoginPage.visit();
  LoginPage.login('','');
  DashboardPage.verifypmtile();
  DashboardPage.clickpmtile();
  Searchpage.searchentity('manufacturepart','AUT-MPN01');
  Mfrblock.verifywhereuseditem();
  Mfrblock.verifywhereuseddeclaration();
  
  });

});
