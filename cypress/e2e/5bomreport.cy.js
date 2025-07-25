import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import Searchpage from "../pages/Searchpage";
import RequestPop from "../pages/RequestPop";
import Declaration from "../pages/Declaration";
import PendingDeclarations from "../pages/PendingDeclarations";
import Affectedobject from "../pages/Affectedobject";
import Itemblock from "../pages/Itemblock";


describe('BomReport', () => {
  var declarationid;
it('BOMReport', () => {
  LoginPage.visit();
  LoginPage.login();
  DashboardPage.verifypmtile();
  DashboardPage.clickpmtile();
  Searchpage.searchentity('item','AUT-ITEM01');
  Itemblock.bomreport();
  
  });

});
