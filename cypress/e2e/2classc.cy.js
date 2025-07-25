import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import Searchpage from "../pages/Searchpage";
import RequestPop from "../pages/RequestPop";
import Declaration from "../pages/Declaration";
import PendingDeclarations from "../pages/PendingDeclarations";
import Affectedobject from "../pages/Affectedobject";


describe('Partlevel declaration flow', () => {
  var declarationid;
it('ipcaclassc', () => {
  LoginPage.visit();
  LoginPage.login();
  DashboardPage.verifypmtile();
  DashboardPage.clickpmtile();
  Searchpage.searchentity('manufacturepart','AUT-MPN01');
  RequestPop.requestcompliance('ipc','full','AUT-SPECIFICATIONPART');
  Declaration.writedescription();
  Declaration.opentosupplier();
  PendingDeclarations.openfirstobject();
  Affectedobject.fillfmd(42);
  Affectedobject.declarecompliance('Non-compliant');
  Affectedobject.saveclose();
  PendingDeclarations.openfirstdeclaration();
  Declaration.opentomanager();
  cy.get("span[class='oj-ux-ico-home half oj-button-icon oj-start']").click();
  DashboardPage.clickpmtile();
  Searchpage.searchentity('declarations');
  Declaration.approve();
  
  });

});
