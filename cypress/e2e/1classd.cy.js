import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import Searchpage from "../pages/Searchpage";
import RequestPop from "../pages/RequestPop";
import Declaration from "../pages/Declaration";
import PendingDeclarations from "../pages/PendingDeclarations";
import Affectedobject from "../pages/Affectedobject";


describe('Homogenous Declaration flow', () => {
  var declarationid;
it('ipcaclassd', () => {
  LoginPage.visit();
  LoginPage.login();
  DashboardPage.verifypmtile();
  DashboardPage.clickpmtile();
  Searchpage.searchentity('manufacturepart','AUT-MPN01');
  RequestPop.requestcompliance('ipc','full','AUT-SPECIFICATIONHOMOG');
  Declaration.writedescription();
  Declaration.opentosupplier();
  PendingDeclarations.openfirstobject();
  Affectedobject.fillfmd(22);
  Affectedobject.declarecompliance('Compliant');
  Affectedobject.saveclose();
  PendingDeclarations.openfirstdeclaration();
  Declaration.opentomanager();
  cy.get("span[class='oj-ux-ico-home half oj-button-icon oj-start']").click();
  DashboardPage.clickpmtile();
  Searchpage.searchentity('declarations');
  Declaration.approve();
  
  });

});
