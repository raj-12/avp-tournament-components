import { HashRouter, Route, Switch } from "react-router-dom";
import Manager from "./Manager";
import Infos from "./ManagerInfo";
import EditManager from './EditManager'

const ManagerMain =()=>{



    return (
    <>
<HashRouter>
<Switch>
  <Route exact path="/" component={Manager} />
  <Route exact path="/managers" component={Infos} />
  <Route exact path="/editmanager" component={EditManager} />

</Switch>
</HashRouter>
    </>);
}

export default ManagerMain;



